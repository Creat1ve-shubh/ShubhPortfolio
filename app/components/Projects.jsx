"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Code2, Users, Trophy, Lightbulb } from "lucide-react";
import shubh from "../assets/shubh.jpg";

const projectsData = {
  fullstack: [
    {
      id: "placement-portal",
      title: "Graduate Outcome Record Portal",
      description: "Developed a full-stack university placement data management portal with automated bulk CSV ingestion and role-segregated dashboards.",
      href: "/",
      imageSrc: shubh,
      tech: ["React", "Express.js", "PostgreSQL", "Tailwind CSS"],
      year: "2024",
    },
    {
      id: "pantrypal",
      title: "PantryPal",
      description: "Built AI-assisted pantry management system with ingredient-based recipe recommendation engine and real-time inventory tracking.",
      href: "/",
      imageSrc: shubh,
      tech: ["React", "Neon DB", "TypeScript", "Tailwind CSS"],
      year: "2024",
    },
  ],
  ai: [
    {
      id: "feedbot",
      title: "Feedbot – AI Analysis",
      description: "Engineered AI-powered sentiment analysis pipeline using LSTM+Transformer hybrid architecture achieving 0.83 F1 score on a 1.6M-tweet dataset.",
      href: "/",
      imageSrc: shubh,
      tech: ["FastAPI", "Docker", "Redis", "AWS"],
      year: "2024",
    },
  ],
};

const categories = [
  { id: "fullstack", label: "Full Stack", icon: Code2, color: "bg-blue-500" },
  { id: "ai", label: "AI & ML", icon: Lightbulb, color: "bg-green-500" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const currentProjects = projectsData[activeCategory];

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-16 md:py-20">
      <div className="mb-8 md:mb-10 text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black border-l-4 border-orange-500 pl-3 inline-block">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mt-2">
          Proof of Work
        </h2>
        <div className="mt-3 h-1 w-32 bg-black mx-auto md:mx-0"></div>
        <p className="mt-3 text-sm md:text-base text-black font-medium">
          Projects across personal work, club contributions, hackathons, and freelance gigs.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 border-3 border-black font-bold text-sm
                motion-hover transition-all
                ${isActive 
                  ? `${category.color} text-black neo-shadow` 
                  : 'bg-white text-black hover:translate-x-[-1px] hover:translate-y-[-1px]'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Project Count */}
      <div className="mb-4 text-sm font-bold text-black border-l-3 border-black pl-3">
        {currentProjects.length} {currentProjects.length === 1 ? 'project' : 'projects'}
      </div>

      {/* Projects Grid */}
      <div className="space-y-5">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
      className="group relative block border-4 border-black bg-white neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] motion-hover"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left: Content */}
        <div className="flex-1 p-5 md:p-6">
          {/* Year Badge */}
          <div className="inline-block bg-orange-500 border-2 border-black px-2 py-0.5 text-xs font-bold mb-3">
            {project.year}
          </div>

          <div className="flex items-start gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
              {project.title}
            </h3>
            <ArrowTopRightIcon className="h-5 w-5 mt-1 flex-shrink-0 group-hover:translate-x-1 group-hover:translate-y-[-2px] motion-hover" />
          </div>

          <p className="text-sm md:text-[15px] text-black leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border-2 border-black bg-white px-2 py-0.5 text-xs font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Image (hidden on mobile, visible on md+) */}
        <div className="hidden md:block w-48 border-l-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-4 blur-sm opacity-70">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </a>
  );
}


