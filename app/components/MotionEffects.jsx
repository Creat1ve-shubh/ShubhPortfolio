"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement: content and anchor navigation work without JavaScript.
 * - Reveals blocks as they enter the viewport.
 * - Lifts each section's curtain as the section scrolls in (see .curtain in globals.css).
 * - Tracks the active nav link and the header shadow.
 */
export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set();
    const targets = document.querySelectorAll(".hero-copy > *, .portrait, .section-heading, .project-card, .experience-row, .about-content, .contact > *, .writing-heading > p, .bento-tile, .notebook-header");
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        reveal.unobserve(target);
        if (reducedMotion.matches) return;
        const parent = target.parentElement;
        const stagger = parent.classList.contains("project-grid") || parent.classList.contains("bento")
          ? Array.from(parent.children).indexOf(target) : 0;
        const animation = target.animate([
          { opacity: 0, translate: "0 14px" },
          { opacity: 1, translate: "0 0" },
        ], { duration: 520, delay: stagger * 65, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    targets.forEach((target) => reveal.observe(target));

    const curtains = Array.from(document.querySelectorAll(".curtain")).map((curtain) => ({ curtain, section: curtain.parentElement }));
    const links = Array.from(document.querySelectorAll('.site-header nav a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll("main > section[id]"));
    const header = document.querySelector(".site-header");
    let frame = 0;

    const updateCurtains = () => {
      if (!root.classList.contains("has-curtains")) return;
      const vh = window.innerHeight;
      // The curtain starts lifting once the section top enters the viewport and is fully gone
      // when the top reaches 35% of the viewport (a shorter run on small screens).
      const run = vh * (window.innerWidth < 700 ? 0.5 : 0.65);
      curtains.forEach(({ curtain, section }) => {
        const top = section.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, (vh - top) / run));
        curtain.style.setProperty("--lift", progress.toFixed(4));
      });
    };

    const update = () => {
      frame = 0;
      header?.classList.toggle("is-scrolled", window.scrollY > 20);
      updateCurtains();
      if (!links.length) return;
      let current = "home";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = section.id;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = "contact";
      links.forEach((link) => {
        if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onMotionChange = () => {
      root.classList.toggle("has-curtains", !reducedMotion.matches && curtains.length > 0);
      if (reducedMotion.matches) animations.forEach((animation) => animation.cancel());
      update();
    };
    onMotionChange();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      reveal.disconnect();
      animations.forEach((animation) => animation.cancel());
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reducedMotion.removeEventListener("change", onMotionChange);
      root.classList.remove("has-curtains");
      header?.classList.remove("is-scrolled");
      links.forEach((link) => link.removeAttribute("aria-current"));
    };
  }, []);
  return null;
}
