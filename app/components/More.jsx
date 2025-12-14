"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-black text-black mb-6 text-center">What I Bring to Teams</h2>
      <InfiniteMovingCards items={ROLE_QUESTIONS} direction="right" speed="slow" />
      <InfiniteMovingCards items={ROLE_RECOMMENDATIONS} direction="left" speed="slow" />
    </div>
  );
}
export const ROLE_QUESTIONS = [
  {
    id: "q_ui",
    title: "Need clean, modern & user-friendly UIs?",
    desc: "If your product needs polish, clarity, intuitive flows, or visual consistency – I can help elevate the experience.",
  },
  {
    id: "q_conversion",
    title: "Need a UI that drives conversion, not just looks good?",
    desc: "Micro-interactions, responsive layouts, and UX decisions grounded in user psychology.",
  },
  {
    id: "q_e2e",
    title: "Need someone who can own features end-to-end?",
    desc: "One person who can handle UX, architecture, API design, data modeling and deploy reliably.",
  },
  {
    id: "q_backend",
    title: "Need production-ready APIs & stable backend systems?",
    desc: "Fast, secure, scalable systems with clean architecture, caching, and real-world guardrails.",
  },
  {
    id: "q_data",
    title: "Struggling with data modeling or database performance?",
    desc: "Schema design, indexing, query optimization and long-term maintainability.",
  },
  {
    id: "q_cloud",
    title: "Need cloud setup, infra automation or DevOps?",
    desc: "CI/CD pipelines, monitoring, containerization, and reliable deployments.",
  },
  {
    id: "q_scaling",
    title: "Is your team scaling and needs someone versatile?",
    desc: "I adapt quickly and can fill gaps across frontend, backend, data, and infra.",
  },
  {
    id: "q_product",
    title: "Need a product-minded engineer who thinks beyond code?",
    desc: "Someone who cares about user outcomes, not just technical implementation.",
  }
];

export const ROLE_RECOMMENDATIONS = [
  {
    id: "r_frontend",
    title: "Frontend Engineer",
    desc: "I craft clean, fast, accessible UIs with thoughtful UX, smooth animations, and attention to micro-details that users actually feel.",
    matches: ["q_ui", "q_conversion", "q_product"],
  },
  {
    id: "r_design",
    title: "Design Engineer",
    desc: "Not just coding screens – I think in terms of user flows, motion, visual hierarchy, and creating interfaces that ‘feel’ right.",
    matches: ["q_ui", "q_conversion"],
  },
  {
    id: "r_fullstack",
    title: "Full-Stack Product Builder",
    desc: "I own features from concept to deployment. UX → API → database → infra. Ideal for teams that need speed, autonomy, and clarity.",
    matches: ["q_e2e", "q_product", "q_ui", "q_backend"],
  },
  {
    id: "r_backend",
    title: "Backend Engineer",
    desc: "I design predictable, scalable backend systems with clean architecture, strong reliability, and real-world production constraints.",
    matches: ["q_backend", "q_e2e", "q_cloud"],
  },
  {
    id: "r_database",
    title: "Database Engineer",
    desc: "Schemas that scale, queries that perform, migrations that don’t break things. I make data models that remain understandable 2+ years later.",
    matches: ["q_data", "q_backend"],
  },
  {
    id: "r_devops",
    title: "Cloud / DevOps Engineer",
    desc: "From Dockerization to CI/CD to observability, I help ensure your product ships fast, stays reliable, and scales without drama.",
    matches: ["q_cloud", "q_backend", "q_scaling"],
  },
  {
    id: "r_architect",
    title: "System Architect (Lightweight)",
    desc: "When a project needs clarity, direction, and scalable decision-making early on – I can design the system foundations your team builds on.",
    matches: ["q_product", "q_e2e", "q_scaling"],
  },
  {
    id: "r_generalist",
    title: "Technical Generalist",
    desc: "Perfect for early-stage teams: I jump wherever needed — UI, backend, data models, infra — without losing sight of product value.",
    matches: ["q_product", "q_scaling", "q_e2e"],
  }
];

