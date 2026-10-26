import Curtain from "./Curtain";
import SectionHeading from "./SectionHeading";
import { experience } from "../../content/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <Curtain number="02" label="Experience" />
      <SectionHeading number="02" label="Experience" id="experience-title">Built along the way.</SectionHeading>
      <div>
        {experience.map((job) => (
          <article className="experience-row" key={job.company}>
            <p className="period">{job.period}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <p className="experience-description">{job.description}</p>
              <p className="stack">{job.stack}</p>
              <a className="text-link experience-link" href={job.href} target="_blank" rel="noreferrer">{job.link} ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
