
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollLinked from "./components/scroll";
import Timeline from "./components/Experience";

import RoleCompass, { InfiniteMovingCardsDemo } from "./components/More";


export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      
        <Timeline />
   
        <Projects />
        <InfiniteMovingCardsDemo />
      <ScrollLinked />
      <Footer />
    </div>
  );
}
