"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    id: 1,
    label: "Where it started",
    period: "Jan 2025 – Feb 2025",
    role: "Web Developer",
    company: "MUJ Oneiros (Official College Fest)",
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
    headline: "Expanded from building products to designing experiences.",
    body: "Contributing event ideas, planning logistics, and coordinating with teams to bring technical and cultural events to life.",
    tags: ["Event Strategy", "Coordination", "Communication"],
  },
];

export default function ExperienceText() {
  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-16 md:py-20">

      {/* SOFT BACKGROUND TINT */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-80 
        bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.15),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-12"
      >
        {/* HEADER */}
        <div className="mb-8 md:mb-10 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Experiences
          </p>
        <h2 className="text-3xl md:text-4xl mb-2 font-bold tracking-tight text-slate-900">
            My Journey
        </h2>
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
        
      

          
        </div>

        {/* INTRO PARAGRAPHS */}
        <div className="max-w-2xl space-y-4 text-sm md:text-[15px] text-slate-600 leading-relaxed">
          <p>
            It started with building the interfaces students actually see, then moved
            into owning the platforms that clubs rely on, and eventually into designing
            experiences that extend beyond screens — events, communities and culture.
          </p>
          <p>
            For me, experience isn't just a list of roles. It's a pattern:
            <span className="font-semibold text-slate-900">
              {" "}build → improve → lead
            </span>
            — whether that's a website, a team, or a full event.
          </p>
        </div>

        {/* TIMELINE LIST */}
        <div className="max-w-2xl mt-8 space-y-10">
          {milestones.map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="relative pl-6 border-l border-slate-200"
            >
              {/* TIMELINE DOT */}
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full 
                bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {m.label}
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
                <span>{m.role}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-700">{m.company}</span>
              </div>

              <p className="text-xs text-slate-500 mt-0.5">{m.period}</p>

              <p className="mt-3 text-sm md:text-[15px] font-medium text-slate-900">
                {m.headline}
              </p>

              <p className="mt-1 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                {m.body}
              </p>

              {/* TAGS */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 
                      px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
