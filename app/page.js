import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import FullPage from "./components/FullPage";
import Hero from "./components/Hero";
import NotebookSection from "./components/NotebookSection";
import SiteHeader from "./components/SiteHeader";
import Work from "./components/Work";
import { person, siteUrl } from "../content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Full-stack engineer",
  url: siteUrl,
  email: `mailto:${person.email}`,
  sameAs: person.socials.map(({ href }) => href),
  alumniOf: { "@type": "CollegeOrUniversity", name: "Manipal University Jaipur" },
  knowsAbout: ["Next.js", "React", "Go", "PostgreSQL", "Node.js", "System design"],
};

// Order matches the sections in <main>; FullPage uses it for the side dots.
const sections = [
  { id: "home", title: "Home" },
  { id: "work", title: "Selected work" },
  { id: "experience", title: "Experience" },
  { id: "notebook", title: "Notebook" },
  { id: "about", title: "About" },
  { id: "contact", title: "Say hello" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <SiteHeader home />
      <main id="main" className="shell">
        <Hero />
        <Work />
        <ExperienceSection />
        <NotebookSection />
        <About />
        <Contact />
      </main>
      <FullPage sections={sections} />
    </>
  );
}
