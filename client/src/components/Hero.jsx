import { PERSONAL, HERO_STACK } from "../utils/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "5rem 0 4rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(0,229,160,0.1)",
              border: "1px solid rgba(0,229,160,0.2)",
              borderRadius: 9999,
              padding: "0.5rem 1rem",
              marginBottom: "1.8rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "var(--accent)",
                borderRadius: "50%",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              Available for opportunities
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: "1rem",
              color: "var(--text)",
            }}
          >
            {PERSONAL.name}
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: "1.8rem",
              maxWidth: 640,
              lineHeight: 1.85,
            }}
          >
            {PERSONAL.heroDesc}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--accent)",
                color: "var(--bg)",
                padding: "0.9rem 1.8rem",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,229,160,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
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
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border)",
                padding: "0.9rem 1.8rem",
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </a>
            <a
              href={PERSONAL.resume}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                color: "var(--muted)",
                border: "1px solid var(--border)",
                padding: "0.9rem 1.8rem",
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              ↓ Resume
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {HERO_STACK.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border)",
                  borderRadius: 9999,
                  padding: "0.45rem 0.9rem",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
