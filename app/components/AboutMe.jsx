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
  "React.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Go (Golang)",
  "Docker",
];

const exploring = ["AWS", "Microservices", "Redis", "Figma", "Python", "Prometheus"];

// Comprehensive skills with categories and proficiency
const allSkills = [
  // Languages
  { name: "JavaScript", category: "Languages", level: 5 },
  { name: "TypeScript", category: "Languages", level: 5 },
  { name: "Go (Golang)", category: "Languages", level: 4 },
  { name: "Python", category: "Languages", level: 3 },
  { name: "SQL", category: "Languages", level: 4 },
  { name: "HTML/CSS", category: "Languages", level: 5 },
  
  // Frontend
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Framer Motion", category: "Frontend", level: 4 },
  { name: "React Native", category: "Frontend", level: 4 },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 5 },
  { name: "Express.js", category: "Backend", level: 5 },
  { name: "Go/Gin", category: "Backend", level: 4 },
  { name: "REST APIs", category: "Backend", level: 5 },
  { name: "PostgreSQL", category: "Backend", level: 5 },
  { name: "MongoDB", category: "Backend", level: 4 },
  
  // Tools
  { name: "Git", category: "Tools", level: 5 },
  { name: "Docker", category: "Tools", level: 4 },
  { name: "AWS (EC2/S3)", category: "Tools", level: 3 },
  { name: "CI/CD", category: "Tools", level: 4 },
  { name: "Redis", category: "Tools", level: 4 },
  { name: "Supabase", category: "Tools", level: 4 },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Go (Golang)", "Python", "SQL", "HTML/CSS"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "React Native", "shadcn/ui"]
  },
  {
    title: "Backend & DBs",
    skills: ["Node.js", "Go/Gin", "Express", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Git", "Prometheus"]
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
          <div className="mt-3 h-1 w-32 bg-black mx-auto md:mx-0"></div>
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
              I&apos;m Shubh, an <span className="bg-purple-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">AI engineer</span> and <span className="bg-purple-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">systems-focused product builder</span> obsessed with turning messy, complex problems into products people genuinely love to use. I don&apos;t just build features—I design intelligent systems that solve real problems at scale.
            </p>

            <p>
              What drives me is the intersection of <span className="bg-blue-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">first-principles thinking</span>, <span className="bg-blue-600 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">architectural decision making</span>, and relentless execution. I care deeply about <span className="bg-orange-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">shipping fast</span>, but never at the cost of maintainability, scalability, or user experience. Elegant systems and working software are not tradeoffs—they&apos;re the baseline.
            </p>

            <p>
              My foundation spans <span className="bg-pink-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">AI engineering</span>, <span className="bg-green-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">full stack development</span>, <span className="bg-cyan-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">frontend engineering</span>, <span className="bg-yellow-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">backend systems</span>, <span className="bg-indigo-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">databases</span>, <span className="bg-sky-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">cloud infrastructure</span>, and <span className="bg-rose-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">DevOps</span>. I build products end-to-end—from intelligent user experiences and scalable APIs to deployment pipelines and production infrastructure.
            </p>

            <p>
              I&apos;ve architected <span className="bg-green-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">impact-driven systems</span> from scratch, designed <span className="bg-cyan-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">intuitive interfaces</span> where complexity disappears behind clarity, and engineered <span className="bg-yellow-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">robust distributed backends</span> that scale without collapsing under growth. Whether it&apos;s AI-powered applications, web platforms, automation systems, or cross-platform products, I think deeply about how every layer connects.
            </p>

            <p>
              What sets me apart is <span className="bg-purple-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">systems thinking</span>—the ability to zoom out, identify bottlenecks, question assumptions, and engineer solutions from the ground up. I don&apos;t blindly follow trends or frameworks. I think from fundamentals, optimize for leverage, and focus on building products that create disproportionate impact.
            </p>

            <p>
              I thrive in the space between <span className="bg-red-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">engineering</span>, <span className="bg-orange-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">product thinking</span>, and <span className="bg-pink-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">user psychology</span>. I&apos;ll challenge weak ideas, propose stronger architectures, and obsess over the details until the product feels right. I learn in public, collaborate openly, and believe the best products emerge when designers, engineers, and builders communicate honestly.
            </p>

            <p>
              If you&apos;re building something ambitious and need someone who can bridge <span className="bg-red-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">design thinking</span> with <span className="bg-blue-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">technical execution</span>, architect scalable systems, and move quickly without sacrificing quality—<span className="bg-red-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover inline-block">let&apos;s talk</span>.
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
                "Backend & DBs": { bg: "bg-blue-50", border: "border-blue-400", header: "bg-blue-200" },
                "DevOps & Cloud": { bg: "bg-yellow-50", border: "border-yellow-400", header: "bg-yellow-200" }
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
