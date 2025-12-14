"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const milestones = [
  {
    id: 1,
    label: "Where it started",
    period: "Jan 2025 – Feb 2025",
    role: "Web Developer",
    company: "MUJ Oneiros (Official College Fest)",
    category: "Fests",
    headline: "Shipped the official fest website on a tight deadline.",
    body: "Owned the front-end experience for the Oneiros fest website using Next.js and TailwindCSS, ensuring the site stayed fast and responsive even during heavy traffic.",
    tags: ["Next.js", "TailwindCSS", "Ownership"],
  },
  {
    id: 2,
    label: "Leveling up",
    period: "May 2024 – Present",
    role: "Head of Web Development",
    company: "MUJ ACM SCHAP",
    category: "Clubs",
    headline: "Transitioned from contributor to leading the web team.",
    body: "Maintaining and evolving the ACM portal, reviewing PRs, setting up standards, and mentoring new developers joining the tech team.",
    tags: ["Leadership", "Architecture", "Mentorship"],
  },
  {
    id: 3,
    label: "Beyond code",
    period: "May 2025 – Present",
    role: "Head of Events",
    company: "Autonomoous",
    category: "Tech",
    headline: "Expanded from building products to designing experiences.",
    body: "Contributing event ideas, planning logistics, and coordinating with teams to bring technical and cultural events to life.",
    tags: ["Event Strategy", "Coordination", "Communication"],
  },
];

export default function ExperienceText() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(milestones.map((m) => m.category))];

  const filteredMilestones = useMemo(() => {
    if (activeCategory === "All") return milestones;
    return milestones.filter((m) => m.category === activeCategory);
  }, [activeCategory]);
  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-16 md:py-20">
      <div className="space-y-12">
        {/* HEADER */}
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black border-l-4 border-orange-500 pl-3 inline-block">
            Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mt-2">
            My Journey
          </h2>
          <div className="mt-3 h-1 w-32 bg-black"></div>
        </div>

        {/* INTRO PARAGRAPHS */}
        <div className="max-w-2xl space-y-4 text-sm md:text-[15px] text-black leading-relaxed font-medium">
          <p>
            It started with building the interfaces students actually see, then moved
            into owning the platforms that clubs rely on, and eventually into designing
            experiences that extend beyond screens — events, communities and culture.
          </p>
          <p>
            For me, experience isn't just a list of roles. It's a pattern:
            <span className="font-black text-black bg-yellow-300 px-1 border-2 border-black">
              {" "}build → improve → lead
            </span>
            — whether that's a website, a team, or a full event.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border-2 border-black font-bold text-sm transition-all motion-hover ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              } hover:translate-x-[-1px] hover:translate-y-[-1px]`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* TIMELINE LIST */}
        <div className="max-w-2xl mt-8 space-y-6">
          {filteredMilestones.map((m) => (
            <div
              key={m.id}
              className="border-3 border-black bg-white neo-shadow p-5"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black bg-orange-500 inline-block px-2 py-1">
                {m.label}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-bold text-black">
                <span>{m.role}</span>
                <span className="text-black">·</span>
                <span className="text-black">{m.company}</span>
              </div>

              <p className="text-xs text-black font-bold mt-0.5 border-l-2 border-black pl-2">{m.period}</p>

              <p className="mt-3 text-sm md:text-[15px] font-bold text-black">
                {m.headline}
              </p>

              <p className="mt-2 text-sm md:text-[15px] text-black leading-relaxed">
                {m.body}
              </p>

              {/* TAGS */}
              <div className="mt-3 flex flex-wrap gap-2">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-black bg-white px-2.5 py-0.5 text-[11px] font-bold text-black hover:bg-blue-500 hover:text-white motion-hover"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
