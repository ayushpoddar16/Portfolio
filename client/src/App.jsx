import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";

// Layout
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";

// Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import DSA from "./components/DSA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.1s — matches loader animation duration
    const t = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      {/* Loader overlay */}
      <Loader show={loading} />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Cursor glow (desktop only) */}
      <CursorGlow />

      {/* Floating navbar */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DSA />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
