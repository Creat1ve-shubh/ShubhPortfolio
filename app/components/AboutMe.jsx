"use client";

import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";

const GradientPill = ({ children }) => (
  <span className="inline-flex items-center bg-blue-500 text-white px-2 py-0.5 text-[11px] md:text-[12px] font-bold border-2 border-black neo-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover transition-transform cursor-default">
    {children}
  </span>
);

const MonoPill = ({ children }) => (
  <span className="inline-flex items-center bg-orange-500 text-black px-1.5 py-0.5 text-[10.5px] md:text-[11px] font-bold border-2 border-black neo-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover transition-transform cursor-default">
    {children}
  </span>
);

// Stats Counter Component
const StatCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 20;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center border-2 border-black bg-white px-4 py-3 neo-shadow-sm flex-1">
      <p className="text-2xl md:text-3xl font-black text-blue-500">{count}+</p>
      <p className="text-xs font-bold uppercase tracking-wide mt-1">{label}</p>
    </div>
  );
};

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

// Comprehensive skills with categories and proficiency
const allSkills = [
  // Languages
  { name: "JavaScript", category: "Languages", level: 5 },
  { name: "TypeScript", category: "Languages", level: 4 },
  { name: "Python", category: "Languages", level: 3 },
  { name: "Java", category: "Languages", level: 3 },
  { name: "C", category: "Languages", level: 2 },
  { name: "SQL", category: "Languages", level: 4 },
  
  // Frontend
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "TailwindCSS", category: "Frontend", level: 5 },
  { name: "Framer Motion", category: "Frontend", level: 4 },
  { name: "Figma", category: "Frontend", level: 3 },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 5 },
  { name: "Express.js", category: "Backend", level: 5 },
  { name: "MongoDB", category: "Backend", level: 4 },
  { name: "REST APIs", category: "Backend", level: 5 },
  { name: "Authentication", category: "Backend", level: 4 },
  
  // Tools
  { name: "Git", category: "Tools", level: 5 },
  { name: "GitHub", category: "Tools", level: 5 },
  { name: "Docker", category: "Tools", level: 3 },
  { name: "Vercel", category: "Tools", level: 5 },
  { name: "Firebase", category: "Tools", level: 4 },
  { name: "VS Code", category: "Tools", level: 5 },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Figma"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Firebase", "VS Code"]
  }
];

const AboutMe = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-14 md:py-18 text-black">
      <div className="flex flex-col gap-8 md:gap-10">
        {/* Heading Block */}
        <div className="text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black border-l-4 border-orange-500 pl-3 inline-block">
            Bio
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mt-2">
            About Me
          </h2>
          <div className="mt-3 h-1 w-32 bg-black"></div>
        </div>

        {/* STATS SECTION */}
        <div className="flex gap-3 md:gap-4">
          <StatCounter end={20} label="Projects" />
          <StatCounter end={50} label="Hours Coding" />
          <StatCounter end={10} label="Languages" />
        </div>

        {/* Main Content Section */}
        <div className="space-y-6 max-w-4xl">
          {/* Bio */}
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-black">
            <p>
              I&apos;m Shubh, a <span className="bg-purple-500 text-white px-2 py-0.5 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">full stack developer</span> who gets obsessed with turning messy, complex problems into products that people genuinely love to use. I don&apos;t just build features—I build things that matter.
            </p>

            <p>
              Here&apos;s what drives me: <span className="bg-blue-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">writing clean code</span> that other developers thank me for, <span className="bg-orange-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">shipping fast</span> because ideas mean nothing without execution, and <span className="bg-pink-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">iterating relentlessly</span> based on real user feedback. The sweet spot is always between elegant code and working software, and I refuse to compromise on either.
            </p>

            <p>
              I&apos;ve built <span className="bg-green-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">impact-driven web products</span> from scratch, designed <span className="bg-cyan-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">intuitive user interfaces</span> where the right choice feels obvious, and architected <span className="bg-yellow-400 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">scalable backend systems</span> that can handle real growth without falling apart. I specialize in <span className="bg-indigo-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">cross-platform systems</span> built for scalability and robustness—whether it&apos;s web, mobile, or desktop, the architecture stays solid. Each project gets the same treatment—I care about the details.
            </p>

            <p>
              What sets me apart? I thrive in the messy middle ground between engineering and product thinking. I&apos;ll push back on bad ideas, propose better solutions, and ship something we&apos;re all proud of. I learn in public, pair program with anyone willing, and believe the best work happens when designers, engineers, and product people actually talk to each other.
            </p>

            <p>
              If you&apos;re building something ambitious and need someone who can bridge{" "}
              <span className="bg-red-500 text-white px-2 py-0.5 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">design thinking with technical execution</span>
              —someone who writes clean code and understands why the user experience matters—
              <span className="bg-red-500 text-white px-2 py-0.5 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">let&apos;s talk</span>.
            </p>
          </div>

          {/* CONTACT BOX */}
          <div className="mt-8 border-4 border-black bg-yellow-300 px-6 py-6 neo-shadow">
            <p className="text-sm md:text-base font-bold text-black mb-2">
              💌 Got an exciting opportunity?
            </p>
            <a
              href="mailto:shubhshrivastavawork@gmail.com"
              className="inline-block text-base md:text-lg font-black text-black underline hover:translate-x-1 motion-hover"
            >
              shubhshrivastavawork@gmail.com
            </a>
            <p className="text-xs font-semibold text-gray-700 mt-3">Open to full-time roles, contracts, or collaborations</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3">
            <a
              href="https://drive.google.com/file/d/1TsuXUukHk0kGIH4oWFW9Gcf-JOoCcLbx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full border-3 border-black bg-blue-500 text-white px-6 py-3 text-sm font-bold neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] motion-hover">
                View Resume
              </button>
            </a>
            <a
              href="https://github.com/Creat1ve-shubh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full border-3 border-black bg-white text-black px-6 py-3 text-sm font-bold neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] motion-hover">
                GitHub
              </button>
            </a>
          </div>
        </div>

        {/* SKILLS GRID SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-black mb-8">Skill Matrix</h2>
          
          {/* Category Sections with Grid */}
          <div className="space-y-8">
            {skillCategories.map((category) => {
              const categoryColors = {
                "Languages": { bg: "bg-purple-50", border: "border-purple-400", header: "bg-purple-200" },
                "Frontend": { bg: "bg-pink-50", border: "border-pink-400", header: "bg-pink-200" },
                "Backend": { bg: "bg-blue-50", border: "border-blue-400", header: "bg-blue-200" },
                "Tools & Platforms": { bg: "bg-yellow-50", border: "border-yellow-400", header: "bg-yellow-200" }
              }[category.title] || { bg: "bg-gray-50", border: "border-gray-400", header: "bg-gray-200" };

              return (
                <div key={category.title} className={`border-3 border-black ${categoryColors.bg} neo-shadow overflow-hidden`}>
                  {/* Category Header */}
                  <div className={`${categoryColors.header} border-b-3 border-black px-4 md:px-6 py-3`}>
                    <h3 className="text-base md:text-lg font-black text-black">{category.title}</h3>
                  </div>
                  
                  {/* Skills Grid with Gridlines */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
                    {category.skills.map((skillName, idx) => (
                      <motion.div
                        key={skillName}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.05 }}
                        className={`border-r-2 border-b-2 border-black p-4 md:p-5 text-center hover:bg-black hover:text-white motion-hover cursor-default transition-all ${
                          idx === category.skills.length - 1 ? "border-r-0" : ""
                        } ${idx >= category.skills.length - (category.skills.length % 6 === 0 ? 6 : category.skills.length % 6) ? "border-b-0" : ""}`}
                      >
                        <p className="text-xs md:text-sm font-black text-black hover:text-white transition-colors">{skillName}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
