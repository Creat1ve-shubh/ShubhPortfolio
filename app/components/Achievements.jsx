"use client";

import React, { useState } from "react";
import { Trophy, Code2, Award, Users, BookOpen, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  {
    id: "leetcode",
    icon: Code2,
    title: "LeetCode Problem Solver",
    stat: "300+ Problems",
    description: "Consistent practice in data structures and algorithms",
    color: "bg-yellow-400",
    details: [
      "Solved problems across Easy, Medium, and Hard difficulties",
      "Strong focus on dynamic programming and graph algorithms",
      "Maintained a consistent solving streak for skill improvement",
      "Participated in weekly contests to sharpen problem-solving speed"
    ]
  },
  {
    id: "hackathon",
    icon: Trophy,
    title: "Hackathon Participant",
    stat: "5+ Events",
    description: "Built solutions under pressure, collaborated with diverse teams",
    color: "bg-orange-400",
    details: [
      "Developed full-stack applications within 24-48 hour timeframes",
      "Collaborated with cross-functional teams of designers and developers",
      "Pitched innovative solutions to judges and stakeholders",
      "Won recognition for creativity and technical implementation"
    ]
  },
  {
    id: "contributions",
    icon: Award,
    title: "Open Source Contributor",
    stat: "50+ Contributions",
    description: "Active contributions to community projects and documentation",
    color: "bg-blue-400",
    details: [
      "Fixed bugs and added features to popular open-source repositories",
      "Improved documentation for better developer experience",
      "Reviewed pull requests and provided constructive feedback",
      "Helped maintain community standards and code quality"
    ]
  },
  {
    id: "mentoring",
    icon: Users,
    title: "Peer Mentor",
    stat: "20+ Students",
    description: "Helping juniors with technical concepts and project guidance",
    color: "bg-green-400",
    details: [
      "Conducted weekly one-on-one sessions for personalized guidance",
      "Reviewed code and provided actionable feedback for improvement",
      "Helped students debug complex technical issues",
      "Guided career decisions and project portfolio development"
    ]
  },
  {
    id: "certifications",
    icon: BookOpen,
    title: "Certifications",
    stat: "Multiple",
    description: "Continuous learning through courses and specialized training",
    color: "bg-purple-400",
    details: [
      "Completed advanced courses in modern web development frameworks",
      "Earned certifications in cloud computing and DevOps practices",
      "Specialized training in system design and architecture",
      "Ongoing learning in emerging technologies and best practices"
    ]
  },
  {
    id: "projects",
    icon: Zap,
    title: "Side Projects",
    stat: "15+ Built",
    description: "Personal experiments and tools that solve real problems",
    color: "bg-pink-400",
    details: [
      "Built developer tools to automate repetitive workflows",
      "Created web applications to solve everyday problems",
      "Experimented with new technologies and frameworks",
      "Shared learnings and code with the developer community"
    ]
  },
];

export default function Achievements() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-20">
      <div className="mb-8 md:mb-10 text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black border-l-4 border-orange-500 pl-3 inline-block">
          Achievements
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mt-2">
          Beyond the Code
        </h2>
        <div className="mt-3 h-1 w-32 bg-black mx-auto md:mx-0"></div>
        <p className="mt-3 text-sm md:text-base text-black font-medium">
          Extracurricular activities, competitive coding, and continuous learning milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          const isExpanded = expandedId === achievement.id;
          
          return (
            <div
              key={achievement.id}
              className="border-3 border-black bg-white neo-shadow p-5 hover:translate-x-[-2px] hover:translate-y-[-2px] motion-hover group cursor-pointer transition-all"
              onClick={() => toggleExpand(achievement.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`${achievement.color} w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-black" />
                </div>
                
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>
              
              <h3 className="text-lg font-black text-black mb-1">
                {achievement.title}
              </h3>
              
              <div className="inline-block bg-black text-white px-2 py-0.5 text-xs font-bold mb-2">
                {achievement.stat}
              </div>
              
              <p className="text-sm text-black leading-relaxed mb-2">
                {achievement.description}
              </p>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t-2 border-dashed border-black">
                      <div className="bg-gray-50 border-2 border-black p-4 mb-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-orange-500 border-2 border-black flex items-center justify-center">
                            <span className="text-black text-xs font-black">!</span>
                          </div>
                          <p className="text-xs font-black uppercase tracking-wider text-black">
                            What I Did
                          </p>
                        </div>
                        
                        <ul className="space-y-3">
                          {achievement.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-sm text-black flex items-start gap-2 group/item"
                            >
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="inline-block w-5 h-5 bg-white border-2 border-black flex items-center justify-center text-xs font-black">
                                  {idx + 1}
                                </span>
                              </div>
                              <span className="leading-relaxed font-medium">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-orange-100 border-2 border-black p-3 text-center">
                        <p className="text-xs font-bold text-black">
                          Click again to collapse
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
