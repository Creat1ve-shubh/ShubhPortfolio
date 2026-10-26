"use client";

import { useEffect, useRef, useState } from "react";

const COVER_MS = 520;
const HOLD_MS = 160;
const REVEAL_MS = 560;
const WHEEL_COOLDOWN_MS = 450;
const GESTURE_GAP_MS = 250;
const SWIPE_PX = 50;
const EASE = "cubic-bezier(.77,0,.18,1)";
const REVEAL_TARGETS = ".hero-copy > *, .portrait, .section-heading, .writing-heading > p, .project-card, .experience-row, .about-content, .contact > *, .bento-tile";

/**
 * Full-page mode for the homepage: one section fills the screen at a time and a curtain sweeps
 * across the whole page between sections. Wheel, swipe, keyboard, nav links and the side dots all
 * move between sections. A section taller than the screen scrolls inside its own panel first.
 * Without JavaScript the page stays a normal scrolling page; with reduced motion sections swap instantly.
 */
export default function FullPage({ sections }) {
  const curtain = useRef(null);
  const [active, setActive] = useState(0);
  const [label, setLabel] = useState({ number: "", title: "" });

  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    const header = document.querySelector(".site-header");
    const panels = Array.from(main.querySelectorAll(":scope > section[id]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    const navLinks = Array.from(document.querySelectorAll('.site-header nav a[href^="#"]'));
    let index = Math.max(0, panels.findIndex((panel) => `#${panel.id}` === window.location.hash));
    let busy = false;
    let lastMove = 0;
    let touchStart = null;
    let lastWheelAt = 0;
    let gestureUsed = false;

    const setHeaderHeight = () => root.style.setProperty("--header-h", `${header.offsetHeight}px`);
    const headerObserver = new ResizeObserver(setHeaderHeight);
    headerObserver.observe(header);
    setHeaderHeight();

    const reveal = (panel) => {
      if (reducedMotion.matches) return;
      panel.querySelectorAll(REVEAL_TARGETS).forEach((el, i) => {
        el.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }],
          { duration: 560, delay: 80 + Math.min(i, 8) * 55, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
      });
    };

    const show = (next, { focus = true } = {}) => {
      panels.forEach((panel, i) => {
        const on = i === next;
        panel.classList.toggle("is-active", on);
        panel.toggleAttribute("inert", !on);
        panel.setAttribute("aria-hidden", String(!on));
        if (on) panel.scrollTop = 0;
      });
      navLinks.forEach((link) => {
        if (link.hash === `#${panels[next].id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      header.classList.toggle("is-scrolled", next > 0);
      index = next;
      setActive(next);
      history.replaceState(null, "", next === 0 ? window.location.pathname : `#${panels[next].id}`);
      if (focus) panels[next].focus({ preventScroll: true });
      reveal(panels[next]);
    };

    const goTo = async (next) => {
      if (busy || next === index || next < 0 || next >= panels.length) return;
      lastMove = Date.now();
      if (reducedMotion.matches || !curtain.current) { show(next); return; }
      busy = true;
      const down = next > index;
      setLabel({ number: String(next).padStart(2, "0"), title: panels[next].dataset.title });
      const el = curtain.current;
      el.dataset.direction = down ? "up" : "down";
      await el.animate([{ transform: `translateY(${down ? 100 : -100}%)` }, { transform: "translateY(0)" }],
        { duration: COVER_MS, easing: EASE, fill: "forwards" }).finished;
      show(next);
      await new Promise((resolve) => setTimeout(resolve, HOLD_MS));
      await el.animate([{ transform: "translateY(0)" }, { transform: `translateY(${down ? -100 : 100}%)` }],
        { duration: REVEAL_MS, easing: EASE, fill: "forwards" }).finished;
      busy = false;
      lastMove = Date.now();
    };

    const atEdge = (direction) => {
      const panel = panels[index];
      if (direction > 0) return panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 2;
      return panel.scrollTop <= 1;
    };

    const onWheel = (event) => {
      if (event.ctrlKey || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      const direction = Math.sign(event.deltaY);
      const now = Date.now();
      // One wheel/trackpad gesture (events without a pause) either scrolls the panel or changes
      // section, never both, so momentum that reaches the end of a panel doesn't flip the page.
      if (now - lastWheelAt > GESTURE_GAP_MS) gestureUsed = false;
      lastWheelAt = now;
      if (!direction) return;
      if (!atEdge(direction)) { gestureUsed = true; return; }
      event.preventDefault();
      if (gestureUsed || busy || now - lastMove < WHEEL_COOLDOWN_MS || Math.abs(event.deltaY) < 4) return;
      gestureUsed = true;
      goTo(index + direction);
    };

    const onTouchStart = (event) => {
      const touch = event.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY, top: atEdge(-1), bottom: atEdge(1) };
    };
    const onTouchEnd = (event) => {
      if (!touchStart) return;
      const touch = event.changedTouches[0];
      const dy = touchStart.y - touch.clientY;
      const dx = touchStart.x - touch.clientX;
      const start = touchStart;
      touchStart = null;
      if (Math.abs(dy) < SWIPE_PX || Math.abs(dy) < Math.abs(dx)) return;
      if (dy > 0 && start.bottom && atEdge(1)) goTo(index + 1);
      if (dy < 0 && start.top && atEdge(-1)) goTo(index - 1);
    };

    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const tag = event.target.tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag) || event.target.isContentEditable) return;
      const forward = ["ArrowDown", "PageDown"].includes(event.key) || (event.key === " " && !event.shiftKey && tag !== "BUTTON" && tag !== "SUMMARY");
      const back = ["ArrowUp", "PageUp"].includes(event.key) || (event.key === " " && event.shiftKey);
      if (event.key === "Home") { event.preventDefault(); goTo(0); }
      else if (event.key === "End") { event.preventDefault(); goTo(panels.length - 1); }
      else if (forward && atEdge(1)) { event.preventDefault(); goTo(index + 1); }
      else if (back && atEdge(-1)) { event.preventDefault(); goTo(index - 1); }
    };

    const onLinkClick = (event) => {
      const hash = event.currentTarget.hash;
      if (hash === "#main") { event.preventDefault(); panels[index].focus(); return; }
      const next = panels.findIndex((panel) => `#${panel.id}` === hash);
      if (next < 0) return;
      event.preventDefault();
      goTo(next);
    };

    const onHashChange = () => {
      const next = panels.findIndex((panel) => `#${panel.id}` === window.location.hash);
      if (next >= 0) goTo(next);
    };

    const onGoTo = (event) => goTo(event.detail);

    panels.forEach((panel) => panel.setAttribute("tabindex", "-1"));
    root.classList.add("fullpage");
    show(index, { focus: false });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("fullpage:goto", onGoTo);
    links.forEach((link) => link.addEventListener("click", onLinkClick));

    return () => {
      headerObserver.disconnect();
      root.classList.remove("fullpage");
      root.style.removeProperty("--header-h");
      panels.forEach((panel) => {
        panel.classList.remove("is-active");
        panel.removeAttribute("inert");
        panel.removeAttribute("aria-hidden");
        panel.removeAttribute("tabindex");
      });
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("fullpage:goto", onGoTo);
      links.forEach((link) => link.removeEventListener("click", onLinkClick));
    };
  }, []);

  return (
    <>
      <div className="page-curtain" ref={curtain} aria-hidden="true">
        <span className="page-curtain-label"><b>{label.number}</b>{label.title}</span>
      </div>
      <nav className="page-dots" aria-label="Sections">
        {sections.map((section, i) => (
          <button
            key={section.id}
            type="button"
            aria-label={section.title}
            aria-current={i === active ? "true" : undefined}
            onClick={() => window.dispatchEvent(new CustomEvent("fullpage:goto", { detail: i }))}
          >
            <span className="page-dot-label">{String(i).padStart(2, "0")} {section.title}</span>
          </button>
        ))}
        <span className="page-count" aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</span>
      </nav>
    </>
  );
}
