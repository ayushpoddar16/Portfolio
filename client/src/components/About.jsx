import { PERSONAL, STATS, ABOUT_TAGS } from "../utils/constants";

function StatCard({ count, label, suffix = "" }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.6rem",
          fontWeight: 800,
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.72rem",
          color: "var(--muted)",
          marginTop: "0.25rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                position: "relative",
                maxWidth: 340,
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, var(--card) 0%, #1a2035 100%)",
                  border: "1px solid var(--border)",
                  position: "relative",
                }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Ayush Poddar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    width: 28,
                    height: 28,
                    borderTop: "2px solid var(--accent)",
                    borderLeft: "2px solid var(--accent)",
                    borderRadius: "4px 0 0 0",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    width: 28,
                    height: 28,
                    borderBottom: "2px solid var(--accent)",
                    borderRight: "2px solid var(--accent)",
                    borderRadius: "0 0 4px 0",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: 22,
                  background: "linear-gradient(135deg, rgba(0,229,160,0.12), rgba(0,153,255,0.08))",
                  zIndex: -1,
                  filter: "blur(4px)",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} count={stat.count} label={stat.label} suffix={stat.suffix} />
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              About Me
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                color: "var(--text)",
              }}
            >
              Builder. Problem
              <br />
              Solver. Engineer.
            </h2>

            {PERSONAL.aboutSummary.map((para, index) => (
              <p
                key={index}
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  marginBottom: "1.1rem",
                  lineHeight: 1.85,
                }}
              >
                {para}
              </p>
            ))}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
              {ABOUT_TAGS.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    background: "rgba(0,229,160,0.08)",
                    color: "var(--accent)",
                    border: "1px solid rgba(0,229,160,0.2)",
                    borderRadius: 4,
                    padding: "0.25rem 0.7rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
