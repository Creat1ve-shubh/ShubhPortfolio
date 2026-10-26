import Link from "next/link";
import { person } from "../../content/site";

const links = [
  { label: "Work", hash: "work" },
  { label: "Experience", hash: "experience" },
  { label: "Notebook", hash: "notebook" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

/** On the homepage links are in-page anchors; on other pages they point back to the homepage. */
export default function SiteHeader({ home = false }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell nav-inner">
          {home ? (
            <a className="wordmark" href="#home" aria-label="Shubh, home">shubh<span>.</span></a>
          ) : (
            <Link className="wordmark" href="/" aria-label="Shubh, home">shubh<span>.</span></Link>
          )}
          <nav aria-label="Main navigation">
            {links.map(({ label, hash }) =>
              home ? (
                <a key={hash} href={`#${hash}`}>{label}</a>
              ) : (
                <Link key={hash} href={hash === "notebook" ? "/notes" : `/#${hash}`}>{label}</Link>
              ),
            )}
          </nav>
          <a className="nav-resume" href={person.resume} target="_blank" rel="noreferrer">
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
    </>
  );
}
