import { PERSONAL } from "../utils/constants";

const FOOTER_LINKS = [
  { label: "GitHub", href: PERSONAL.github },
  { label: "LinkedIn", href: PERSONAL.linkedin },
  { label: "LeetCode", href: PERSONAL.leetcode },
  { label: "Email", href: `mailto:${PERSONAL.email}` },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 0",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "var(--accent)",
              letterSpacing: "-0.02em",
            }}
          >
            AP.
          </span>

          <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            Designed & built by Ayush Poddar · Jabalpur, Madhya Pradesh
          </p>

          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--muted)",
              opacity: 0.5,
            }}
          >
            © {new Date().getFullYear()} Ayush Poddar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
