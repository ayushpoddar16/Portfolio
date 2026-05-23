import { motion } from "framer-motion";
import { SKILLS } from "../utils/constants";

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ borderColor: "rgba(0,229,160,0.25)" }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "1.5rem",
        transition: "border-color 0.3s",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "rgba(0,229,160,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          {category.icon}
        </div>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
            color: "var(--text)",
          }}
        >
          {category.name}
        </span>
      </div>

      {/* Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {category.pills.map((pill) => (
          <motion.span
            key={pill}
            whileHover={{
              background: "rgba(0,229,160,0.1)",
              color: "var(--accent)",
              borderColor: "rgba(0,229,160,0.3)",
            }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              background: "rgba(255,255,255,0.04)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "0.3rem 0.7rem",
              cursor: "default",
              transition: "all 0.2s",
            }}
          >
            {pill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
            Technical Expertise
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
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SKILLS.map((cat, i) => (
            <SkillCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
