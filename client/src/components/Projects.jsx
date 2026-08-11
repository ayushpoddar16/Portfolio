import { PROJECTS } from "../utils/constants";

function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            display: "flex",
            gap: "0.4rem",
          }}
        >
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                background: "rgba(0,0,0,0.45)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                padding: "0.15rem 0.45rem",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
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

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <div>
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
              marginTop: "0.35rem",
            }}
          >
            {project.tagline}
          </p>
        </div>

        <p style={{ fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.75 }}>
          {project.desc}
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {project.features.map((feature) => (
            <li
              key={feature}
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                padding: "0.3rem 0",
                paddingLeft: "1.2rem",
                position: "relative",
                lineHeight: 1.7,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent)",
                  fontSize: "0.75rem",
                }}
              >
                ▸
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                background: "rgba(255,255,255,0.04)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "0.28rem 0.55rem",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.75rem",
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              textDecoration: "none",
            }}
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
              padding: "0.75rem",
              borderRadius: 10,
              background: "rgba(0,229,160,0.12)",
              color: "var(--accent)",
              border: "1px solid rgba(0,229,160,0.2)",
              textDecoration: "none",
            }}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
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
          </div>

          <a
            href="https://github.com/ayushpoddar16"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "var(--text)",
              fontWeight: 600,
              fontSize: "0.82rem",
              padding: "0.65rem 1rem",
              borderRadius: 9999,
              border: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            All on GitHub ↗
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
