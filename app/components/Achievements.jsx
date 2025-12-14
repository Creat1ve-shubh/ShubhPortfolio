"use client";

import React from "react";
import { Trophy, Code2, Award, Users, BookOpen, Zap } from "lucide-react";

const achievements = [
  {
    id: "leetcode",
    icon: Code2,
    title: "LeetCode Problem Solver",
    stat: "300+ Problems",
    description: "Consistent practice in data structures and algorithms",
    color: "bg-yellow-400",
  },
  {
    id: "hackathon",
    icon: Trophy,
    title: "Hackathon Participant",
    stat: "5+ Events",
    description: "Built solutions under pressure, collaborated with diverse teams",
    color: "bg-orange-400",
  },
  {
    id: "contributions",
    icon: Award,
    title: "Open Source Contributor",
    stat: "50+ Contributions",
    description: "Active contributions to community projects and documentation",
    color: "bg-blue-400",
  },
  {
    id: "mentoring",
    icon: Users,
    title: "Peer Mentor",
    stat: "20+ Students",
    description: "Helping juniors with technical concepts and project guidance",
    color: "bg-green-400",
  },
  {
    id: "certifications",
    icon: BookOpen,
    title: "Certifications",
    stat: "Multiple",
    description: "Continuous learning through courses and specialized training",
    color: "bg-purple-400",
  },
  {
    id: "projects",
    icon: Zap,
    title: "Side Projects",
    stat: "15+ Built",
    description: "Personal experiments and tools that solve real problems",
    color: "bg-pink-400",
  },
];

export default function Achievements() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-20">
      <div className="mb-8 md:mb-10 text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black border-l-4 border-orange-500 pl-3 inline-block">
          Achievements
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mt-2">
          Beyond the Code
        </h2>
        <div className="mt-3 h-1 w-32 bg-black"></div>
        <p className="mt-3 text-sm md:text-base text-black font-medium">
          Extracurricular activities, competitive coding, and continuous learning milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div
              key={achievement.id}
              className="border-3 border-black bg-white neo-shadow p-5 hover:translate-x-[-2px] hover:translate-y-[-2px] motion-hover group"
            >
              <div className={`${achievement.color} w-12 h-12 border-2 border-black flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-black" />
              </div>
              
              <h3 className="text-lg font-black text-black mb-1">
                {achievement.title}
              </h3>
              
              <div className="inline-block bg-black text-white px-2 py-0.5 text-xs font-bold mb-2">
                {achievement.stat}
              </div>
              
              <p className="text-sm text-black leading-relaxed">
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
