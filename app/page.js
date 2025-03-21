
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollLinked from "./components/scroll";
import Timeline from "./components/Experience";


export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <div className="w-full mt-10 flex items-center justify-center">
        <Timeline />
      </div>
      <Projects />
      <ScrollLinked />
      <Footer />
    </div>
  );
}
