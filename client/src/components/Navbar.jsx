import { useState, useEffect } from "react";
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
      <nav
        style={{
          position: "fixed",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          background: scrolled ? "rgba(14,17,24,0.95)" : "rgba(14,17,24,0.8)",
          border: "1px solid var(--border)",
          borderRadius: 9999,
          padding: "0.75rem 1.5rem",
          transition: "background 0.25s ease",
          color: "var(--text)",
          whiteSpace: "nowrap",
        }}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1rem",
            color: "var(--accent)",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          AP.
        </a>

        <ul
          className="nav-desktop-links"
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid var(--border)",
            borderRadius: 9999,
            padding: "0.35rem 0.7rem",
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "var(--muted)",
          }}
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <a
          href={PERSONAL.resume}
          download
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontWeight: 700,
            fontSize: "0.78rem",
            padding: "0.45rem 1rem",
            borderRadius: 9999,
            textDecoration: "none",
          }}
        >
          Resume ↓
        </a>

        <button
          className="hamburger-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 0,
          }}
        >
          <span style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 99 }} />
          <span style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 99 }} />
          <span style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 99 }} />
        </button>
      </nav>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 76,
            left: "1rem",
            right: "1rem",
            zIndex: 999,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              style={{
                color: "var(--text)",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

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
