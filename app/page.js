import Image from "next/image";
import MotionEffects from "./components/MotionEffects";
import SmoothScroll from "./components/SmoothScroll";
import portrait from "./assets/shubh-illustration.png";

const resume = "/Shubh-Shrivastava-Resume.pdf";
const projects = [
  { name: "Graduate Outcome Record Portal", type: "Full-stack platform", description: "Placement insights for 4,000+ students across 10+ academic departments.", stack: "Next.js / TypeScript / Go / PostgreSQL", detail: "Led development of a multi-tenant university portal with bulk CSV ingestion, real-time placement analytics, and role-segregated dashboards for Admin, TPO, and Student tiers. JWT-based access control supports 5+ user tiers on privately hosted infrastructure.", href: "https://go.mujdcrp.cloud/login", link: "Live portal" },
  { name: "Feedbot", type: "Machine learning", description: "Understanding brand perception through 1.6 million tweets.", stack: "FastAPI / Next.js / Redis / Docker", detail: "Built a brand perception analysis system with a custom-trained LSTM + Transformer architecture, FastAPI backend, and Next.js frontend. Achieved a 0.83 F1 score; staged deployment on AWS using Docker.", href: "https://github.com/Creat1ve-shubh/feedbot", link: "View source" },
  { name: "MUJKite", type: "Placement & recruitment", description: "Bringing recruitment workflows into one role-based platform.", stack: "React / TypeScript / TanStack Query / Docker", detail: "Led frontend architecture and co-led delivery of role-based dashboards with REST API integration, protected routing, and route-level code splitting. Staged the platform for beta launch with Docker and Nginx.", href: "https://dev-kite.mujdcrp.cloud/login", link: "Beta portal" },
];
const experience = [
  ["Jan 2026 — Present", "Software Developer", "DcRP · Manipal University Jaipur", "Architected and led a university-wide graduate outcome portal managing 4,000+ students, with real-time placement analytics and JWT-based access control across 5+ user tiers.", "Next.js / Go / PostgreSQL", "https://go.mujdcrp.cloud/login", "Live portal"],
  ["Nov 2025 — May 2026", "Founding Engineer", "NodeMonks", "Co-architected the MVP across three system design iterations. Established SDLC and code review workflows, integrated AI-assisted development, and built APIs, relational data models, role-based access, and Razorpay payments.", "Express.js / System design / Razorpay", "https://node-monks.vercel.app/", "Website"],
  ["May — Jul 2025", "Software Developer Intern", "DoTech Technologies", "Contributed to a lead generation platform processing 500+ daily queries. Improved lead conversion by 10% through form validation and automated email workflows.", "React / Node.js / MongoDB", "https://drive.google.com/file/d/1XF6ksgXB29CFNLmy3m2u8Wl7AecLgUFN/view", "Certificate"],
  ["Mar — May 2025", "Full Stack Developer Intern", "InfoTact Solutions", "Designed JWT authentication and role-based access control, reducing unauthorized access by 95%. Optimized MongoDB queries to cut average API response time from 800ms to 180ms.", "JWT / RBAC / MongoDB", "https://drive.google.com/file/d/1HAkNS-kxjHSkfoW0LGpg9sIFVARPomTO/view", "Certificate"],
];
const skills = [
  ["Languages", "JavaScript · TypeScript · Go · SQL · Python · HTML · CSS"],
  ["Frontend", "React · Next.js · Tailwind · shadcn/ui · Zustand · Zod · TanStack Query"],
  ["Backend & testing", "Node.js · Express · Go/Gin · FastAPI · REST APIs · WebSockets · JWT · Vitest"],
  ["Data & caching", "PostgreSQL · MySQL · MongoDB · Redis · Supabase"],
  ["DevOps & cloud", "Docker · AWS (EC2, S3, Lightsail) · Git · GitHub Actions · Vercel · Render"],
  ["AI tooling", "Ollama · OpenCode · GitHub Copilot · Cursor · Emergent"],
];

function SectionHeading({ number, label, children }) {
  return <div className="section-heading"><p className="eyebrow">{number} / {label}</p><h2>{children}</h2></div>;
}

export default function Home() {
  return <><SmoothScroll /><MotionEffects />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="shell nav-inner">
      <a className="wordmark" href="#home" aria-label="Shubh, home">shubh<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
    </div></header>
    <main id="main" className="shell">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="accent-square" /> Let's get this rolling</p>
          <h1 id="hero-title">Shubh<br />Shrivastava<span className="accent">.</span></h1>
          <p className="hero-role">Software engineer &amp; product builder</p>
          <p className="hero-description">I build full-stack platforms and AI-powered tools, from university-wide systems to products that turn data into insight.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Selected work <span aria-hidden="true">↘</span></a><a className="text-link" href={resume} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a></div>
          <div className="social-block"><p className="social-label">Find me online</p><nav className="hero-socials" aria-label="Social links"><a href="https://github.com/Creat1ve-shubh" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/shubh-shrivastava/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/Creat1ve-shubh/" target="_blank" rel="noreferrer">LeetCode ↗</a></nav></div>
        </div>
        <figure className="portrait hero-art"><div className="portrait-frame"><Image src={portrait} alt="Pixel-art illustration of a developer coding at night beneath a glowing @Shubh sign" priority sizes="(max-width: 700px) 85vw, (max-width: 950px) 300px, 400px" /></div><figcaption><span>Somewhere between an idea and a commit.</span><span aria-hidden="true">[ S / S ]</span></figcaption></figure>
        <div className="hero-bottom"><span>Engineering with intent.</span><a href="#work">Explore the work ↓</a></div>
      </section>
      <section id="work" className="section" aria-labelledby="work-title">
        <SectionHeading number="01" label="Selected work"><span id="work-title">Ideas, made real.</span></SectionHeading>
        <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.name}>
          <div className="project-meta"><span>0{index + 1}</span><span>{project.type}</span></div>
          <div className={`project-art project-art-${index}`} aria-hidden="true">
            <span className="art-caption">{["DATA / OUTCOMES", "SIGNAL / SENTIMENT", "CONNECT / RECRUIT"][index]}</span>
            {index === 0 ? <div className="outcome-art"><strong>4,000<span>+</span></strong><span className="art-subtitle">STUDENT RECORDS</span><div className="art-bars">{[35, 60, 45, 80, 65, 100, 85].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}</div></div> : index === 1 ? <div className="signal-art"><div className="signal-wave">{[20, 40, 65, 30, 85, 100, 55, 75, 35, 60, 25].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}</div><span className="signal-score">0.83 <small>F1 SCORE</small></span></div> : <div className="kite-art"><span className="kite-diamond" /><span className="kite-orbit" /><span className="kite-label">MUJ<span>↗</span></span></div>}
          </div>
          <h3>{project.name}</h3><p>{project.description}</p><div className="project-tech">{project.stack.split(" / ").map(tech => <span key={tech}>{tech}</span>)}</div>
          <a className="text-link project-link" href={project.href} target="_blank" rel="noreferrer">{project.link} <span aria-hidden="true">↗</span></a>
          <details><summary>Project notes <span aria-hidden="true">+</span></summary><p>{project.detail}</p></details>
        </article>)}</div>
        <a className="text-link work-link" href="https://github.com/Creat1ve-shubh" target="_blank" rel="noreferrer">More on GitHub ↗</a>
      </section>
      <section id="experience" className="section experience" aria-labelledby="experience-title">
        <SectionHeading number="02" label="Experience"><span id="experience-title">Built along the way.</span></SectionHeading>
        <div>{experience.map(([period, role, company, description, stack, href, link]) => <article className="experience-row" key={company}>
          <p className="period">{period}</p><div><h3>{role}</h3><p className="company">{company}</p><p className="experience-description">{description}</p><p className="stack">{stack}</p><a className="text-link experience-link" href={href} target="_blank" rel="noreferrer">{link} ↗</a></div>
        </article>)}</div>
      </section>
      <section id="about" className="section about" aria-labelledby="about-title">
        <SectionHeading number="03" label="About"><span id="about-title">Curious by default.<br />Builder by choice.</span></SectionHeading>
        <div className="about-content"><p className="about-lead">I like making complex things feel simple.</p><p>I build across the stack: interfaces in React and Next.js, APIs in Go and Node.js, and the databases and infrastructure behind them. My work includes university placement platforms, recruitment workflows, and machine-learning systems.</p><p>I care about system design, reliable delivery, and clear development workflows. Alongside my degree, I practice data structures and algorithms with 140+ LeetCode problems solved.</p>
          <div className="education"><p className="eyebrow">Education / 2023 — 2027</p><h3>Manipal University Jaipur</h3><p>B.Tech in Computer Science Engineering<br />IoT &amp; Intelligent Systems</p><p className="stack">Aug 2023 — Aug 2027 · Jaipur, Rajasthan</p></div>
          <div className="skills">{skills.map(([label, items]) => <div key={label}><h3>{label}</h3><p>{items}</p></div>)}</div>
        </div>
      </section>
      <section id="contact" className="section contact" aria-labelledby="contact-title"><p className="eyebrow">04 / Say hello</p><h2 id="contact-title">Good ideas deserve<br />good execution<span className="accent">.</span></h2><div className="contact-bottom"><p>Open to full-time roles, contracts,<br />and thoughtful collaborations.</p><a className="button primary" href="mailto:shubhshrivastavawork@gmail.com">Let's talk <span aria-hidden="true">↗</span></a></div><a className="email-link" href="mailto:shubhshrivastavawork@gmail.com">shubhshrivastavawork@gmail.com</a></section>
    </main>
    <footer className="shell footer"><p>© {new Date().getFullYear()} Shubh Shrivastava</p><a href="#home">Back to top ↑</a></footer>
  </>;
}


