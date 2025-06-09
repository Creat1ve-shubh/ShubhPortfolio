
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollLinked from "./components/scroll";
import Timeline from "./components/Experience";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BentoDemo from "./components/Projects";


export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <div className="w-full mt-10 flex items-center justify-center">
        <Timeline />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Projects />
      </div>
      <ScrollLinked />
      <Footer />
    </div>
  );
}
