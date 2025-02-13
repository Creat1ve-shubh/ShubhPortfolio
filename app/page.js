import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />

      <Footer />
    </div>
  );
}
