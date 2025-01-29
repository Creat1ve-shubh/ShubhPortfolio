import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


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
