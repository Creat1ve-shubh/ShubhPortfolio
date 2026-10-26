import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import MotionEffects from "./components/MotionEffects";
import NotebookSection from "./components/NotebookSection";
import SiteFooter from "./components/SiteFooter";
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

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <MotionEffects />
      <SiteHeader home />
      <main id="main" className="shell">
        <Hero />
        <Work />
        <ExperienceSection />
        <NotebookSection />
        <About />
        <Contact />
      </main>
      <SiteFooter home />
    </>
  );
}
