"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";

const GradientPill = ({ children }) => (
  <motion.span
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.97 }}
    className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500/15 via-purple-500/20 to-pink-500/20 px-2 py-0.5 text-[11px] md:text-[12px] font-semibold text-slate-800 border border-sky-500/40 shadow-sm"
  >
    {children}
  </motion.span>
);

const MonoPill = ({ children }) => (
  <motion.span
    whileHover={{ scale: 1.04, y: -1 }}
    whileTap={{ scale: 0.97 }}
    className="inline-flex items-center rounded-md bg-slate-900 text-slate-50 px-1.5 py-0.5 text-[10.5px] md:text-[11px] font-semibold shadow-sm"
  >
    {children}
  </motion.span>
);

const primaryStack = [
  "Next.js",
  "Node.js",
  "Express.js",
  "React.js",
  "MongoDB",
  "TailwindCSS",
  "GitHub",
];

const exploring = ["Python", "MySQL", "PostgreSQL", "Figma", "Java", "C"];

const AboutMe = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-14 md:py-18 text-black relative">
      {/* subtle radial background */}
      <div className="pointer-events-none absolute inset-x-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.10),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-8 md:gap-10"
      >
        {/* Heading Block */}
          <div className="text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Bio
          </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          About Me 
             {/* animated underline */}
             <div className="mt-2 flex justify-center md:justify-start">
               <motion.div
                 initial={{ width: 0, opacity: 0 }}
                 whileInView={{ width: "100%", opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                 className="h-1 w-full max-w-[220px] min-w-[90px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
               />
             </div>
        </h2>
       
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          {/* LEFT SIDE — text */}
          <div className="space-y-3.5 text-[15px] md:text-lg leading-relaxed max-w-2xl">

            {/* Paragraph 1 — FIXED alignment */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="rounded-xl py-1 -mx-0.5 px-1 transition-colors duration-200 hover:bg-white/70"
            >
              Hello there! I&apos;m Shubh, a{" "}
              <Badge text="full stack developer" /> who enjoys turning tricky
              problems into <GradientPill>clean &amp; usable experiences</GradientPill>.
            </motion.p>

            {/* Paragraph 2 — FIXED */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              whileHover={{ y: -2 }}
              className="rounded-xl py-1 -mx-0.5 px-1 transition-colors duration-200 hover:bg-white/70"
            >
              I love building <GradientPill>impact-driven products</GradientPill>{" "}
              for <GradientPill>web</GradientPill> and interfaces that feel fast,
              simple and intentional. Shipping real things and iterating on
              feedback is way more fun to me than leaving ideas in a notebook.
            </motion.p>

            {/* Paragraph 3 — FIXED */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              whileHover={{ y: -2 }}
              className="rounded-xl py-1 -mx-0.5 px-1 transition-colors duration-200 hover:bg-white/70"
            >
              I&apos;m always looking for{" "}
              <GradientPill>new challenges</GradientPill> and teams where I can
              contribute both as an engineer and as a{" "}
              <GradientPill>collaborator</GradientPill> — learning in public,
              pairing, and sharing what I pick up along the way.
            </motion.p>

            {/* CONTACT BOX */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 px-3.5 py-3.5"
            >
              <p className="text-sm md:text-base font-medium">
                Any exciting opportunities?
              </p>

              <motion.a
                href="mailto:shubhshrivastavawork@gmail.com"
                whileHover={{ y: -1 }}
                className="relative mt-2 inline-block text-sm md:text-base font-semibold"
              >
                <span className="absolute inset-x-0 bottom-0 h-[45%] rounded-md bg-yellow-200/70 -z-10" />
                shubhshrivastavawork@gmail.com
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — stacks */}
          <div className="space-y-6">

            {/* PRIMARY STACK */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-neutral-200 bg-white shadow-sm px-4 py-4 md:px-5 md:py-5"
            >
              <h2 className="text-lg md:text-xl font-semibold">
                Primary Tech Stack I use ✍🏻
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {primaryStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* EXPLORING */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/70 px-4 py-4 md:px-5"
            >
              <p className="text-sm font-semibold mb-2">
                Other stuff I like to explore:
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exploring.map((item) => (
                  <MonoPill key={item}>{item}</MonoPill>
                ))}
              </div>
            </motion.div>

            {/* RESUME BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="flex justify-start"
            >
              <a
                href="https://drive.google.com/file/d/1TsuXUukHk0kGIH4oWFW9Gcf-JOoCcLbx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-lg border-2 border-black bg-white px-8 py-3 text-sm md:text-base font-semibold shadow-sm hover:shadow-lg transition-all"
                >
                  My Resume
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
