import Image from "next/image";
import portrait from "../assets/shubh-illustration.png";
import { person } from "../../content/site";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="accent-square" /> Full-stack engineer · Graduating {person.graduation}</p>
        <h1 id="hero-title">Shubh<br />Shrivastava<span className="accent">.</span></h1>
        <p className="hero-role">{person.role}</p>
        <p className="hero-description">
          I build real-world platforms with Next.js, Go, and PostgreSQL—from role-based dashboards to
          production infrastructure. I also explore AI through projects like Feedbot.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Selected work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href={person.resume} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
        </div>
        <div className="social-block">
          <p className="social-label">Find me online</p>
          <nav className="hero-socials" aria-label="Social links">
            {person.socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
            ))}
          </nav>
        </div>
      </div>
      <figure className="portrait hero-art">
        <div className="portrait-frame">
          <Image
            src={portrait}
            alt="Pixel-art illustration of a developer coding at night beneath a glowing @Shubh sign"
            priority
            placeholder="blur"
            sizes="(max-width: 700px) 85vw, (max-width: 950px) 300px, 400px"
          />
        </div>
        <figcaption><span>Somewhere between an idea and a commit.</span><span aria-hidden="true">[ S / S ]</span></figcaption>
      </figure>
      <div className="hero-bottom"><span>Engineering with intent.</span><a href="#work">Explore the work ↓</a></div>
    </section>
  );
}
