"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis;

    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (preference.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
      });
    };

    configure();
    preference.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      lenis?.destroy();
    };
  }, []);
  return null;
}

