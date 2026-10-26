"use client";
import { useEffect, useRef } from "react";
export default function ReadingProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      const article = document.querySelector("article.reader-body");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight * .6);
      bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, (100 - rect.top) / distance))})`;
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, {passive:true}); window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return <div className="reading-progress" aria-hidden="true" ref={bar} />;
}
