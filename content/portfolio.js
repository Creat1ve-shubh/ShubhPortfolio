export const projects = [
  {
    name: "Graduate Outcome Record Portal",
    type: "Full-stack platform",
    description: "Placement insights for 4,000+ students across 10+ academic departments.",
    stack: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    detail:
      "Led development of a multi-tenant university portal with bulk CSV ingestion, real-time placement analytics, and role-segregated dashboards for Admin, TPO, and Student tiers. JWT-based access control supports 5+ user tiers on privately hosted infrastructure.",
    href: "https://go.mujdcrp.cloud/login",
    link: "Live portal · sign-in",
    caseStudy: "/work/graduate-outcome-portal",
  },
  {
    name: "Feedbot",
    type: "Machine learning",
    description: "Understanding brand perception through 1.6 million tweets.",
    stack: ["FastAPI", "Next.js", "Redis", "Docker"],
    detail:
      "Built a brand perception analysis system with a custom-trained LSTM + Transformer architecture, FastAPI backend, and Next.js frontend. Achieved a 0.83 F1 score; staged deployment on AWS using Docker.",
    href: "https://github.com/Creat1ve-shubh/feedbot",
    link: "View source",
  },
  {
    name: "MUJKite",
    type: "Placement & recruitment",
    description: "Bringing recruitment workflows into one role-based platform.",
    stack: ["React", "TypeScript", "TanStack Query", "Docker"],
    detail:
      "Led frontend architecture and co-led delivery of role-based dashboards with REST API integration, protected routing, and route-level code splitting. Staged the platform for beta launch with Docker and Nginx.",
    href: "https://dev-kite.mujdcrp.cloud/login",
    link: "Beta portal · sign-in",
  },
];

export const experience = [
  {
    period: "Jan 2026 — Present",
    role: "Software Developer",
    company: "DcRP · Manipal University Jaipur",
    description:
      "Architected and led a university-wide graduate outcome portal managing 4,000+ students, with real-time placement analytics and JWT-based access control across 5+ user tiers.",
    stack: "Next.js / Go / PostgreSQL",
    href: "https://go.mujdcrp.cloud/login",
    link: "Live portal",
  },
  {
    period: "Nov 2025 — May 2026",
    role: "Founding Engineer",
    company: "NodeMonks",
    description:
      "Co-architected the MVP across three system design iterations. Established SDLC and code review workflows, integrated AI-assisted development, and built APIs, relational data models, role-based access, and Razorpay payments.",
    stack: "Express.js / System design / Razorpay",
    href: "https://node-monks.vercel.app/",
    link: "Website",
  },
  {
    period: "May — Jul 2025",
    role: "Software Developer Intern",
    company: "DoTech Technologies",
    description:
      "Contributed to a lead generation platform processing 500+ daily queries. Improved lead conversion by 10% through form validation and automated email workflows.",
    stack: "React / Node.js / MongoDB",
    href: "https://drive.google.com/file/d/1XF6ksgXB29CFNLmy3m2u8Wl7AecLgUFN/view",
    link: "Certificate",
  },
  {
    period: "Mar — May 2025",
    role: "Full Stack Developer Intern",
    company: "InfoTact Solutions",
    description:
      "Designed JWT authentication and role-based access control, reducing unauthorized access by 95%. Optimized MongoDB queries to cut average API response time from 800ms to 180ms.",
    stack: "JWT / RBAC / MongoDB",
    href: "https://drive.google.com/file/d/1HAkNS-kxjHSkfoW0LGpg9sIFVARPomTO/view",
    link: "Certificate",
  },
];

export const skills = [
  ["Languages", "JavaScript · TypeScript · Go · SQL · Python · HTML · CSS"],
  ["Frontend", "React · Next.js · Tailwind · shadcn/ui · Zustand · Zod · TanStack Query"],
  ["Backend & testing", "Node.js · Express · Go/Gin · FastAPI · REST APIs · WebSockets · JWT · Vitest"],
  ["Data & caching", "PostgreSQL · MySQL · MongoDB · Redis · Supabase"],
  ["DevOps & cloud", "Docker · AWS (EC2, S3, Lightsail) · Git · GitHub Actions · Vercel · Render"],
];

export const education = {
  period: "2023 — 2027",
  school: "Manipal University Jaipur",
  degree: "B.Tech in Computer Science Engineering",
  focus: "IoT & Intelligent Systems",
  detail: "Aug 2023 — Aug 2027 · Jaipur, Rajasthan",
};
