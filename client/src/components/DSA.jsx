import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DSA_COUNTERS, ACHIEVEMENTS } from "../utils/constants";
import { useCountUp } from "../hooks/useCountUp";

function CounterCard({ counter, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(counter.target, 1600, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
      {/* Top accent line */}
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
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        {count}
        {counter.suffix && (
          <span style={{ color: "var(--accent2)", fontSize: "2rem" }}>
            {counter.suffix}
          </span>
        )}
      </div>

      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--muted)",
          marginTop: "0.4rem",
          fontWeight: 500,
        }}
      >
        {counter.label}
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: "var(--muted)",
          marginTop: "0.3rem",
          opacity: 0.6,
        }}
      >
        {counter.sub}
      </div>
    </motion.div>
  );
}

export default function DSA() {
  return (
    <section id="dsa" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text + Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
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
              DSA &<br />Achievements
            </h2>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                marginBottom: "1.75rem",
              }}
            >
              Consistent problem-solving habit built on daily LeetCode practice.
              300+ problems solved across arrays, trees, graphs, DP and more —
              directly translating to cleaner, more efficient production code.
            </p>

            {/* Achievement list */}
            <ul style={{ listStyle: "none" }}>
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
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
                  <span style={{ fontSize: "1rem", marginTop: "1px", flexShrink: 0 }}>
                    {ach.icon}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ach.text
                        .replace(/(JEE 2022|Class 12th|CGPA 7\.6)/g, "<strong style='color:var(--text);font-weight:600'>$1</strong>")
                        .replace(/(95 Percentile|93\.66%|7\.6)/g, "<strong style='color:var(--accent)'>$1</strong>")
                        .replace(/(JWT Auth|Razorpay|Multer|OTP verification)/g, "<strong style='color:var(--text);font-weight:500'>$1</strong>")
                        .replace(/(Google Gemini Vision AI & OCR)/g, "<strong style='color:var(--text);font-weight:500'>$1</strong>"),
                    }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Counter cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {DSA_COUNTERS.map((c, i) => (
              <CounterCard key={c.label} counter={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
