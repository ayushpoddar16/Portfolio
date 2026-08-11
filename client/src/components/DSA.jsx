import { DSA_COUNTERS, ACHIEVEMENTS } from "../utils/constants";

function CounterCard({ counter }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />

      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.4rem",
          fontWeight: 800,
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        {counter.target}
        {counter.suffix && <span style={{ color: "var(--accent2)", fontSize: "2rem" }}>{counter.suffix}</span>}
      </div>

      <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.4rem", fontWeight: 500 }}>
        {counter.label}
      </div>

      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", marginTop: "0.3rem", opacity: 0.7 }}>
        {counter.sub}
      </div>
    </div>
  );
}

export default function DSA() {
  return (
    <section id="dsa" style={{ padding: "6rem 0" }}>
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
              Problem Solving
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
              DSA &
              <br />Achievements
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1.75rem" }}>
              Consistent problem-solving habit built on daily LeetCode practice. 300+ problems solved across arrays, trees, graphs,
              DP and more — directly translating to cleaner, more efficient production code.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ACHIEVEMENTS.map((achievement, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--border)",
                    fontSize: "0.9rem",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ fontSize: "1rem", marginTop: "1px", flexShrink: 0 }}>{achievement.icon}</span>
                  <span>{achievement.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {DSA_COUNTERS.map((counter) => (
              <CounterCard key={counter.label} counter={counter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
