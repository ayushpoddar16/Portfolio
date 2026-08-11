import { EXPERIENCE } from "../utils/constants";

function ExpItem({ exp }) {
  return (
    <div
      style={{
        paddingLeft: "2.5rem",
        position: "relative",
        marginBottom: "3rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -5,
          top: 6,
          width: 11,
          height: 11,
          borderRadius: "50%",
          background: "var(--accent)",
          boxShadow: "0 0 14px rgba(0,229,160,0.4)",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          {exp.company}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            borderRadius: 50,
            padding: "0.18rem 0.7rem",
          }}
        >
          {exp.period}
        </span>
      </div>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--accent)",
          fontWeight: 500,
          marginBottom: "0.75rem",
        }}
      >
        {exp.role}
      </p>
      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.9rem",
          marginBottom: "0.75rem",
          lineHeight: 1.75,
        }}
      >
        {exp.desc}
      </p>
      {exp.achievements.length > 0 && (
        <ul style={{ listStyle: "none", marginBottom: "0.75rem", padding: 0 }}>
          {exp.achievements.map((achievement, idx) => (
            <li
              key={idx}
              style={{
                fontSize: "0.88rem",
                color: "var(--muted)",
                padding: "0.3rem 0",
                paddingLeft: "1.2rem",
                position: "relative",
                lineHeight: 1.65,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent)",
                  fontWeight: 700,
                }}
              >
                →
              </span>
              {achievement}
            </li>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {exp.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.67rem",
              background: "rgba(0,153,255,0.08)",
              color: "#5BB3FF",
              border: "1px solid rgba(0,153,255,0.15)",
              borderRadius: 4,
              padding: "0.2rem 0.5rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
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
            Work History
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            Experience
          </h2>
        </div>

        <div style={{ position: "relative", paddingLeft: "0.5rem" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
          {EXPERIENCE.map((exp) => (
            <ExpItem key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
