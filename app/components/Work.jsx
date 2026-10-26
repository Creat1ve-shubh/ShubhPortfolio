import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "../../content/portfolio";
import { showDrafts } from "../../content/site";

const captions = ["DATA / OUTCOMES", "SIGNAL / SENTIMENT", "CONNECT / RECRUIT"];

function ProjectArt({ index }) {
  if (index === 0) {
    return (
      <div className="outcome-art">
        <strong>4,000<span>+</span></strong>
        <span className="art-subtitle">STUDENT RECORDS</span>
        <div className="art-bars">{[35, 60, 45, 80, 65, 100, 85].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="signal-art">
        <div className="signal-wave">{[20, 40, 65, 30, 85, 100, 55, 75, 35, 60, 25].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
        <span className="signal-score">0.83 <small>F1 SCORE</small></span>
      </div>
    );
  }
  return (
    <div className="kite-art">
      <span className="kite-diamond" />
      <span className="kite-orbit" />
      <span className="kite-label">MUJ<span>↗</span></span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" data-title="Selected work" className="section" aria-labelledby="work-title">
      <SectionHeading number="01" label="Selected work" id="work-title">Ideas, made real.</SectionHeading>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.name}>
            <div className="project-meta"><span>0{index + 1}</span><span>{project.type}</span></div>
            <div className={`project-art project-art-${index}`} aria-hidden="true">
              <span className="art-caption">{captions[index]}</span>
              <ProjectArt index={index} />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="text-link project-link" href={project.href} target="_blank" rel="noreferrer">
              {project.link} <span aria-hidden="true">↗</span>
            </a>
            {showDrafts && project.caseStudy && (
              <Link className="case-study-link" href={project.caseStudy}>Read case study <span className="draft-label">Draft ↗</span></Link>
            )}
            <details><summary>Project notes <span aria-hidden="true">+</span></summary><p>{project.detail}</p></details>
          </article>
        ))}
      </div>
      <a className="text-link work-link" href="https://github.com/Creat1ve-shubh" target="_blank" rel="noreferrer">More on GitHub ↗</a>
    </section>
  );
}
