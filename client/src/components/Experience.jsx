import { motion } from "framer-motion";
import { EXPERIENCE } from "../utils/constants";

function ExpItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{
        paddingLeft: "2.5rem",
        position: "relative",
        marginBottom: "3rem",
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: -5,
          top: 6,
          width: 11,
          height: 11,
          borderRadius: "50%",
          background: "var(--accent)",
          boxShadow: "0 0 14px rgba(0,229,160,0.5)",
        }}
      />

      {/* Meta row */}
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

      {/* Role */}
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

      {/* Description */}
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

      {/* Achievements */}
      {exp.achievements.length > 0 && (
        <ul style={{ listStyle: "none", marginBottom: "0.75rem" }}>
          {exp.achievements.map((ach, i) => (
            <li
              key={i}
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
              <span dangerouslySetInnerHTML={{
                __html: ach
                  .replace(/10\+ RESTful APIs/g, "<strong style='color:var(--text);font-weight:500'>10+ RESTful APIs</strong>")
                  .replace(/Razorpay payment gateway/g, "<strong style='color:var(--text);font-weight:500'>Razorpay payment gateway</strong>")
                  .replace(/WhatsApp notification system/g, "<strong style='color:var(--text);font-weight:500'>WhatsApp notification system</strong>")
                  .replace(/JWT-based authentication/g, "<strong style='color:var(--text);font-weight:500'>JWT-based authentication</strong>")
                  .replace(/full-stack MERN features/g, "<strong style='color:var(--text);font-weight:500'>full-stack MERN features</strong>")
              }} />
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
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
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
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
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: "0.5rem",
          }}
        >
          {/* Vertical line */}
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

          {EXPERIENCE.map((exp, i) => (
            <ExpItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
