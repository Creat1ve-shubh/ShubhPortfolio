import Curtain from "./Curtain";
import SectionHeading from "./SectionHeading";
import { education, skills } from "../../content/portfolio";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <Curtain number="04" label="About" />
      <SectionHeading number="04" label="About" id="about-title">Curious by default.<br />Builder by choice.</SectionHeading>
      <div className="about-content">
        <p className="about-lead">I like making complex things feel simple.</p>
        <p>
          I build across the stack: interfaces in React and Next.js, APIs in Go and Node.js, and the databases and
          infrastructure behind them. My work includes university placement platforms, recruitment workflows, and
          machine-learning systems.
        </p>
        <p>
          I care about system design, reliable delivery, and clear development workflows. Alongside my degree, I
          practice data structures and algorithms with 140+ LeetCode problems solved.
        </p>
        <div className="education">
          <p className="eyebrow">Education / {education.period}</p>
          <h3>{education.school}</h3>
          <p>{education.degree}<br />{education.focus}</p>
          <p className="stack">{education.detail}</p>
        </div>
        <div className="skills">
          {skills.map(([label, items]) => <div key={label}><h3>{label}</h3><p>{items}</p></div>)}
        </div>
      </div>
    </section>
  );
}
