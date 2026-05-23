import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { PERSONAL, TYPED_PHRASES, HERO_STACK } from "../utils/constants";

// Simple typed text hook
function useTyped(phrases) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), 38);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }

    setText(phrase.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return text;
}

export default function Hero() {
  const typedText = useTyped(TYPED_PHRASES);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const onParticlesLoaded = useCallback(() => setParticlesLoaded(true), []);

  const particleOptions = {
    fullScreen: false,
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 45, density: { enable: true, area: 900 } },
      color: { value: ["#00E5A0", "#0099FF"] },
      opacity: { value: 0.14 },
      size: { value: { min: 1, max: 2.5 } },
      move: { enable: true, speed: 0.4, direction: "none", random: true },
      links: {
        enable: true,
        distance: 140,
        color: "#00E5A0",
        opacity: 0.07,
        width: 1,
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 180, links: { opacity: 0.18 } } },
    },
    detectRetina: true,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 2.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 0 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={onParticlesLoaded}
          options={particleOptions}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle radial bg glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "60%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,153,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ maxWidth: 780 }}
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(0,229,160,0.08)",
                border: "1px solid rgba(0,229,160,0.2)",
                borderRadius: 50,
                padding: "0.3rem 0.9rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  background: "var(--accent)",
                  borderRadius: "50%",
                  display: "block",
                  animation: "pulse-dot 2s infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                }}
              >
                Available for Opportunities
              </span>
            </div>
            <style>{`
              @keyframes pulse-dot {
                0%,100%{opacity:1;transform:scale(1)}
                50%{opacity:0.4;transform:scale(0.85)}
              }
            `}</style>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: "0.5rem",
              color: "var(--text)",
            }}
          >
            {PERSONAL.name.split(" ")[0]}
            <br />
            <span style={{ color: "var(--accent)" }}>
              {PERSONAL.name.split(" ")[1]}
            </span>
          </motion.h1>

          {/* Typed role */}
          <motion.p
            variants={item}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: "1.5rem",
              minHeight: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {typedText}
            <span
              style={{
                color: "var(--accent)",
                animation: "blinkCursor 1s infinite",
              }}
            >
              |
            </span>
            <style>{`@keyframes blinkCursor{0%,100%{opacity:1}50%{opacity:0}}`}</style>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              maxWidth: 520,
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}
          >
            Full Stack <strong style={{ color: "var(--text)", fontWeight: 500 }}>MERN Developer</strong> building{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              scalable, AI-powered web applications
            </strong>{" "}
            that solve real-world problems. Backend-focused with strong DSA foundations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.8rem 1.8rem",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 0 24px rgba(0,229,160,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 36px rgba(0,229,160,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(0,229,160,0.3)";
              }}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "transparent",
                color: "var(--text)",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.8rem 1.8rem",
                borderRadius: 50,
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              Get in Touch
            </a>
            <a
              href={PERSONAL.resume}
              download
              style={{
                background: "transparent",
                color: "var(--muted)",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.8rem 1.8rem",
                borderRadius: 50,
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,153,255,0.4)";
                e.currentTarget.style.color = "var(--accent2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              ↓ Resume
            </a>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            variants={item}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Stack
            </span>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {HERO_STACK.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--muted)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "0.2rem 0.6rem",
                    transition: "color 0.2s, border-color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "rgba(0,229,160,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          color: "var(--muted)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "scrollDown 1.5s ease infinite",
          }}
        />
        <style>{`
          @keyframes scrollDown {
            0%{opacity:1;transform:scaleY(0);transform-origin:top}
            50%{opacity:1;transform:scaleY(1)}
            100%{opacity:0;transform:scaleY(1);transform-origin:bottom}
          }
        `}</style>
      </div>
    </section>
  );
}
