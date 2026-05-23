import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL, STATS, ABOUT_TAGS } from "../utils/constants";
import { useCountUp } from "../hooks/useCountUp";

// Individual stat card with animated count
function StatCard({ count, label, suffix = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const animated = useCountUp(count, 1400, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
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
        {animated}
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
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Avatar placeholder */}
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
                  background:
                    "linear-gradient(135deg, var(--card) 0%, #1a2035 100%)",
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

                {/* Keep the corner accent lines */}
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

              {/* Glow halo */}
              <div
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: 22,
                  background:
                    "linear-gradient(135deg, rgba(0,229,160,0.12), rgba(0,153,255,0.08))",
                  zIndex: -1,
                  filter: "blur(4px)",
                }}
              />
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {STATS.map((s, i) => (
                <StatCard
                  key={s.label}
                  count={s.count}
                  label={s.label}
                  suffix={s.suffix}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.div variants={item}>
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
            </motion.div>

            {PERSONAL.aboutSummary.map((para, i) => (
              <motion.p
                key={i}
                variants={item}
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  lineHeight: 1.85,
                }}
                dangerouslySetInnerHTML={{
                  __html: para
                    .replace(
                      /Zoro Innovation/g,
                      "<strong style='color:var(--text);font-weight:500'>Zoro Innovation</strong>",
                    )
                    .replace(
                      /Syandrix Infotech/g,
                      "<strong style='color:var(--text);font-weight:500'>Syandrix Infotech</strong>",
                    )
                    .replace(
                      /MERN stack/g,
                      "<strong style='color:var(--text);font-weight:500'>MERN stack</strong>",
                    )
                    .replace(
                      /DSA problems on LeetCode/g,
                      "<strong style='color:var(--text);font-weight:500'>DSA problems on LeetCode</strong>",
                    )
                    .replace(
                      /final-year CS student/g,
                      "<strong style='color:var(--text);font-weight:500'>final-year CS student</strong>",
                    ),
                }}
              />
            ))}

            {/* Tags */}
            <motion.div
              variants={item}
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
