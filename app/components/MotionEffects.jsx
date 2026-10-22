"use client";

import { useEffect } from "react";

/** Progressive enhancement: content and anchor navigation work without JavaScript. */
export default function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set();
    const targets = document.querySelectorAll(".hero-copy > *, .portrait, .section-heading, .project-card, .experience-row, .about-content, .contact > *");
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        reveal.unobserve(target);
        if (reducedMotion.matches) return;
        const siblings = target.parentElement.classList.contains("project-grid")
          ? Array.from(target.parentElement.children).indexOf(target) : 0;
        const animation = target.animate([
          { opacity: 0, translate: "0 14px" },
          { opacity: 1, translate: "0 0" },
        ], { duration: 520, delay: siblings * 65, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    targets.forEach((target) => reveal.observe(target));

    const links = Array.from(document.querySelectorAll('.site-header nav a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll("main > section[id]"));
    const header = document.querySelector(".site-header");
    let frame = 0;
    const update = () => {
      frame = 0;
      header.classList.toggle("is-scrolled", window.scrollY > 20);
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
      if (reducedMotion.matches) animations.forEach((animation) => animation.cancel());
    };
    update();
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
      header.classList.remove("is-scrolled");
      links.forEach((link) => link.removeAttribute("aria-current"));
    };
  }, []);
  return null;
}
