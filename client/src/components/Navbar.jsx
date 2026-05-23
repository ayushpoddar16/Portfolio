import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { PERSONAL } from "../utils/constants";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }}
        style={{
          position: "fixed",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          background: scrolled
            ? "rgba(14,17,24,0.92)"
            : "rgba(14,17,24,0.7)",
          backdropFilter: "blur(24px)",
          border: "1px solid var(--border)",
          borderRadius: 50,
          padding: "0.65rem 1.75rem",
          transition: "background 0.3s",
          whiteSpace: "nowrap",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "var(--accent)",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          AP.
        </a>

        {/* Desktop links */}
        <ul
          className="nav-desktop-links"
          style={{
            display: "flex",
            gap: "1.25rem",
            listStyle: "none",
          }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "0.3rem 0.5rem",
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "var(--muted)",
            transition: "all 0.2s",
          }}
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* Resume CTA */}
        <a
          href={PERSONAL.resume}
          download
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontWeight: 700,
            fontSize: "0.78rem",
            padding: "0.4rem 1rem",
            borderRadius: 50,
            letterSpacing: "0.03em",
            transition: "opacity 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Resume ↓
        </a>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: "2px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 7 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "var(--text)",
                borderRadius: 2,
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 70,
              left: "1rem",
              right: "1rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "1.5rem",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                style={{
                  fontSize: "1rem",
                  color: "var(--text)",
                  fontWeight: 500,
                  padding: "0.4rem 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive style override */}
      <style>{`
        .nav-desktop-links { display: flex !important; }
        .hamburger-btn { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
