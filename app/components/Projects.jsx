"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Code2, Users, Trophy, Lightbulb } from "lucide-react";
import shubh from "../assets/shubh.jpg";

const projectsData = {
  personal: [
    {
      id: "carbon",
      title: "Carbon Footprint Exchange",
      description: "Carbon credit trading platform with auth, database, and simple analytics dashboards.",
      href: "https://carbon-footprint-exchange.vercel.app/",
      imageSrc: shubh,
      tech: ["Next.js", "MongoDB", "TailwindCSS"],
      year: "2024",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      description: "Neo-brutalist design portfolio with smooth animations and interactive components.",
      href: "/",
      imageSrc: shubh,
      tech: ["Next.js", "Framer Motion", "TailwindCSS"],
      year: "2024",
    },
  ],
  club: [
    {
      id: "oneiros",
      title: "MUJ Oneiros Fest Website",
      description: "Official fest website with responsive layouts for events, schedules, and sponsors.",
      href: "/",
      imageSrc: "/projects/oneiros.png",
      tech: ["Next.js", "TailwindCSS"],
      year: "2025",
    },
    {
      id: "acm",
      title: "MUJ ACM SCHAP Portal",
      description: "Public site and internal tools powering the ACM student chapter at MUJ.",
      href: "/",
      imageSrc: "/projects/acm.png",
      tech: ["React", "Node.js", "Express"],
      year: "2024",
    },
  ],
  hackathon: [
    {
      id: "hack1",
      title: "Smart Parking System",
      description: "IoT-based parking solution with real-time availability tracking and mobile app.",
      href: "/",
      imageSrc: shubh,
      tech: ["React Native", "Firebase", "Arduino"],
      year: "2024",
    },
    {
      id: "hack2",
      title: "EduConnect Platform",
      description: "Connecting students with mentors for peer-to-peer learning and guidance.",
      href: "/",
      imageSrc: shubh,
      tech: ["Next.js", "Socket.io", "PostgreSQL"],
      year: "2024",
    },
  ],
  freelance: [
    {
      id: "free1",
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and analytics for local business.",
      href: "/",
      imageSrc: shubh,
      tech: ["React", "Node.js", "MongoDB"],
      year: "2024",
    },
    {
      id: "free2",
      title: "Restaurant Booking App",
      description: "Table reservation system with real-time availability and SMS notifications.",
      href: "/",
      imageSrc: shubh,
      tech: ["Next.js", "Prisma", "Twilio"],
      year: "2023",
    },
  ],
};

const categories = [
  { id: "personal", label: "Personal", icon: Code2, color: "bg-blue-500" },
  { id: "club", label: "Club Projects", icon: Users, color: "bg-green-500" },
  { id: "hackathon", label: "Hackathons", icon: Trophy, color: "bg-yellow-500" },
  { id: "freelance", label: "Freelance", icon: Lightbulb, color: "bg-pink-500" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("personal");
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
        <div className="mt-3 h-1 w-32 bg-black"></div>
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


