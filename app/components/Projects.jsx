"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import shubh from "../assets/shubh.jpg";
const projects = [
  {
    id: "carbon",
    title: "Carbon Footprint Exchange",
    description:
      "Carbon credit trading platform with auth, database, and simple analytics dashboards.",
    href: "https://carbon-footprint-exchange.vercel.app/",
    imageSrc: shubh, // transparent/white-bg screenshot
  },
  {
    id: "oneiros",
    title: "MUJ Oneiros Fest Website",
    description:
      "Official fest website with responsive layouts for events, schedules, and sponsors.",
    href: "/",
    imageSrc: "/projects/oneiros.png",
  },
  {
    id: "acm",
    title: "MUJ ACM SCHAP Portal",
    description:
      "Public site and internal tools powering the ACM student chapter at MUJ.",
    href: "/",
    imageSrc: "/projects/acm.png",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-16 md:py-20">
      <div className="mb-8 md:mb-10 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Projects
          </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Proof of Work
        </h2>
         {/* animated underline */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "65%", opacity: 1 }}
                    style={{ maxWidth: 240 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  />
        <p className="mt-2 text-sm md:text-base text-slate-600">
          A few selected projects that show how I think about UX, reliability,
          and shipping things that people actually use.
        </p>
      </div>

      <div className="space-y-6 md:space-y-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}) {
  return (
    <motion.a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative block overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Screenshot */}
      <div className="pointer-events-none absolute blur-sm inset-y-0 right-0 w-1/2 md:w-2/3 flex items-center justify-end pr-3 md:pr-6">
        <div className="relative w-full h-[140px] md:h-[180px]">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 p-5 md:p-6 min-h-[140px] md:min-h-[180px] flex flex-col justify-end">
        <div className="max-w-[60%] md:max-w-[55%]">
          <div className="flex items-center gap-1.5">
            <h3 className="text-2xl md:text-3xl font-semibold font-mono text-slate-900">
              {project.title} 
              <ArrowTopRightIcon className="h-8 w-8" />
            </h3>
            <ArrowIcon />
          </div>
          <p className="mt-2 text-sm md:text-[15px] text-slate-800 leading-relaxed">
            {project.description} 
          </p>
        </div>
      </div>
    </motion.a>
  );
}

function ArrowIcon() {
  return (
    <span
      className="
        inline-flex items-center justify-center
        rounded-full
        text-slate-500
        transition-transform duration-200
        group-hover:-translate-y-0.5 group-hover:translate-x-0.5
      "
    >
      
    </span>
  );
}
