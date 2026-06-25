import ScrollProgress from "./components/ui/ScrollProgress";
import Aurora from "./components/ui/Aurora";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import MouseGlow from "./components/ui/MouseGlow";
import CustomCursor from "./components/ui/CustomCursor";

import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import About from "./components/ui/About";
import Skills from "./components/ui/Skills";
import Experience from "./components/ui/Experience";
import Projects from "./components/ui/Projects";
import Certifications from "./components/ui/Certifications";
import Contact from "./components/ui/Contact";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-white">
      <ScrollProgress />
      <Aurora />
      <AnimatedBackground />
      <MouseGlow />
      <CustomCursor />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;