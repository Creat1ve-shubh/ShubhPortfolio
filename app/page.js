"use client";

import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollLinked from "./components/scroll";
import Timeline from "./components/Experience";
import { InfiniteMovingCardsDemo } from "./components/More";
import Achievements from "./components/Achievements";

/* -------------------- CURTAIN MOTION (STABLE) -------------------- */

const curtainVariants = {
  initial: { y: "100vh" },
  enter: {
    y: "0vh",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};


/* -------------------- MAIN COMPONENT -------------------- */

export default function Home() {
  const slides = useMemo(
    () => [
      { id: "hero", comp: <Hero /> },
      { id: "about", comp: <AboutMe /> },
      { id: "experience", comp: <Timeline /> },
      { id: "projects", comp: <Projects /> },
      { id: "achievements", comp: <Achievements /> },
      { id: "cards", comp: <InfiniteMovingCardsDemo /> },
      { id: "scroll", comp: <ScrollLinked /> },
      { id: "footer", comp: <Footer /> },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(null);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState("idle"); 
// "idle" | "enter" | "exit"


  const lastScroll = useRef(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  /* -------------------- SCROLL RESET (SAFE) -------------------- */

useEffect(() => {
  if (!isTransitioning) {
    window.scrollTo(0, 0);
  }
}, [index, isTransitioning]);


  /* -------------------- NAVIGATION LOGIC -------------------- */

const go = useCallback(
  (delta) => {
    if (isTransitioning) return;

    const next = Math.min(slides.length - 1, Math.max(0, index + delta));
    if (next === index) return;

    setDirection(delta);
    setPendingIndex(next);
    setIsTransitioning(true);
    setPhase("enter"); // start curtain
  },
  [index, slides.length, isTransitioning]
);


  /* -------------------- WHEEL HANDLER -------------------- */

  const onWheel = useCallback(
    (e) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const now = Date.now();
      if (now - lastScroll.current < 700) return;
      lastScroll.current = now;

      if (e.deltaY > 20) go(1);
      if (e.deltaY < -20) go(-1);
    },
    [go, isTransitioning]
  );

  /* -------------------- TOUCH HANDLERS -------------------- */

  const onTouchStart = useCallback((e) => {
    touchStart.current = e.targetTouches[0].clientY;
    touchEnd.current = null;
  }, []);

  const onTouchMove = useCallback((e) => {
    touchEnd.current = e.targetTouches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (
      touchStart.current === null ||
      touchEnd.current === null ||
      isTransitioning
    )
      return;

    const distance = touchStart.current - touchEnd.current;
    const minSwipe = 50;

    const now = Date.now();
    if (now - lastScroll.current < 700) return;
    lastScroll.current = now;

    if (distance > minSwipe) go(1);
    if (distance < -minSwipe) go(-1);
  }, [go, isTransitioning]);

  /* -------------------- RENDER -------------------- */

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />

      <main
        className="carousel-slide relative w-screen"
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ pointerEvents: isTransitioning ? "none" : "auto" }}
      >
        {/* PAGE CONTENT */}
        <div className="w-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-6 md:py-10 min-h-screen">
          <div className="w-full max-w-6xl">{slides[index].comp}</div>
        </div>

        {/* CURTAIN TRANSITION */}
<AnimatePresence>
  {isTransitioning && (
    <motion.div
      key="curtain"
      className="fixed inset-0 z-50 bg-black border-t-8 border-orange-500"
      variants={curtainVariants}
      initial="initial"
      animate={phase === "enter" ? "enter" : "exit"}
      onAnimationComplete={() => {
        // MIDPOINT reached → curtain fully covering
        if (phase === "enter") {
          setIndex(pendingIndex);
          setPendingIndex(null);
          setPhase("exit"); // reveal new content
          return;
        }

        // EXIT finished → transition done
        if (phase === "exit") {
          setIsTransitioning(false);
          setPhase("idle");
        }
      }}
    >
      {/* optional visual */}
    </motion.div>
  )}
</AnimatePresence>


        {/* PAGE INDICATOR */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center text-xs font-bold bg-white border-2 border-black px-3 py-1 z-40">
          <span className="text-black">{index + 1} / {slides.length}</span>
        </div>
      </main>
    </div>
  );
}
