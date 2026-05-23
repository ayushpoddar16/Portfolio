import { motion } from "framer-motion";
import { PROJECTS } from "../utils/constants";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, borderColor: "rgba(0,229,160,0.25)" }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 180,
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background label */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "4rem",
            fontWeight: 800,
            opacity: 0.07,
            letterSpacing: "-0.05em",
            userSelect: "none",
            color: "var(--text)",
          }}
        >
          {project.label}
        </span>

        {/* Floating tech badges on thumbnail */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            display: "flex",
            gap: "0.4rem",
          }}
        >
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                padding: "0.15rem 0.45rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Accent bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: project.accentLine,
          }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          padding: "1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 800,
            marginBottom: "0.25rem",
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--accent)",
            fontWeight: 500,
            marginBottom: "1rem",
          }}
        >
          {project.tagline}
        </p>

        <p
          style={{
            fontSize: "0.87rem",
            color: "var(--muted)",
            lineHeight: 1.75,
            flex: 1,
            marginBottom: "1rem",
          }}
        >
          {project.desc}
        </p>

        {/* Features */}
        <ul style={{ listStyle: "none", marginBottom: "1.25rem" }}>
          {project.features.map((f) => (
            <li
              key={f}
              style={{
                fontSize: "0.81rem",
                color: "var(--muted)",
                padding: "0.2rem 0",
                paddingLeft: "1rem",
                position: "relative",
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent)",
                  fontSize: "0.7rem",
                }}
              >
                ▸
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          {project.stack.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.66rem",
                background: "rgba(255,255,255,0.04)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "0.2rem 0.5rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.6rem",
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.6rem",
              borderRadius: 8,
              background: "rgba(0,229,160,0.12)",
              color: "var(--accent)",
              border: "1px solid rgba(0,229,160,0.2)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,229,160,0.12)";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Featured Work
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
              Projects
            </h2>
          </motion.div>

          <motion.a
            href="https://github.com/ayushpoddar16"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              background: "transparent",
              color: "var(--text)",
              fontWeight: 600,
              fontSize: "0.82rem",
              padding: "0.6rem 1.2rem",
              borderRadius: 50,
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            All on GitHub ↗
          </motion.a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
