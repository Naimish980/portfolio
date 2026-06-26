import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

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
import BackToTop from "./components/ui/BackToTop";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-white">
      <ScrollProgress />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #ef4444",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
        }}
      />

      <Aurora />
      <AnimatedBackground />

      {!isMobile && <MouseGlow />}
      {!isMobile && <CustomCursor />}

      <div className="relative z-10">
        <div className="relative z-[99999]">
          <Navbar />
        </div>

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <BackToTop />

        <Footer />
      </div>
    </div>
  );
}

export default App;