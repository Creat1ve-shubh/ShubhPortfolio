
"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollLinked from "./components/scroll";
import Timeline from "./components/Experience";
import { InfiniteMovingCardsDemo } from "./components/More";

const slideVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function Home() {
  const slides = useMemo(
    () => [
      { id: "hero", comp: <Hero /> },
      { id: "about", comp: <AboutMe /> },
      { id: "experience", comp: <Timeline /> },
      { id: "projects", comp: <Projects /> },
      { id: "cards", comp: <InfiniteMovingCardsDemo /> },
      { id: "scroll", comp: <ScrollLinked /> },
      { id: "footer", comp: <Footer /> },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const lastScroll = useRef(0);

  const go = useCallback(
    (delta) => {
      setIndex((i) => {
        const next = Math.min(slides.length - 1, Math.max(0, i + delta));
        return next;
      });
    },
    [slides.length]
  );

  const onWheel = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastScroll.current < 500) return;
      lastScroll.current = now;
      if (e.deltaY > 20) go(1);
      if (e.deltaY < -20) go(-1);
    },
    [go]
  );

  return (
    <div className="bg-white h-screen overflow-hidden">
      <Navbar />
      <main
        className="relative h-screen overflow-hidden"
        onWheel={onWheel}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[index].id}
            className="absolute inset-0 overflow-auto"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="min-h-full px-4 md:px-6 lg:px-8 py-6 md:py-10 flex items-center justify-center">
              <div className="w-full max-w-6xl">{slides[index].comp}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className=" absolute bottom-6 left-1/2 transform -translate-x-1/2 justify-center flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/70 backdrop-blur-md rounded-full shadow px-3 py-2">
          <button
            onClick={() => go(-1)}
            className="px-3 py-1 rounded-full bg-slate-900 text-white disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={index === 0}
          >
            Prev
          </button>
          <span className="text-slate-700">{index + 1} / {slides.length}</span>
          <button
            onClick={() => go(1)}
            className="px-3 py-1 rounded-full bg-slate-900 text-white disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={index === slides.length - 1}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
