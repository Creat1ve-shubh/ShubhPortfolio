import CopyEmail from "./CopyEmail";
import SiteFooter from "./SiteFooter";
import { person } from "../../content/site";

export default function Contact() {
  return (
    <section id="contact" data-title="Say hello" className="section contact" aria-labelledby="contact-title">
      <p className="eyebrow">05 / Say hello</p>
      <h2 id="contact-title">Good ideas deserve<br />good execution<span className="accent">.</span></h2>
      <div className="contact-bottom">
        <p>Hiring a full-stack engineer?<br />Let’s talk about what you’re building.</p>
        <a className="button primary" href={`mailto:${person.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-details">
        <div className="email-row">
          <a className="email-link" href={`mailto:${person.email}`}>{person.email}</a>
          <CopyEmail email={person.email} />
        </div>
        <p className="contact-meta">{person.location} · {person.timezone} · Graduating {person.graduation}</p>
      </div>
      <SiteFooter home />
    </section>
  );
}
