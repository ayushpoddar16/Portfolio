import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { PERSONAL } from "../utils/constants";

const CONTACT_LINKS = [
  {
    label: "EMAIL",
    value: PERSONAL.email,
    icon: "✉️",
    href: `mailto:${PERSONAL.email}`,
  },
  {
    label: "LINKEDIN",
    value: "ayush-poddar-780b37251",
    icon: "💼",
    href: PERSONAL.linkedin,
  },
  {
    label: "GITHUB",
    value: "@ayushpoddar16",
    icon: "🐙",
    href: PERSONAL.github,
  },
  {
    label: "LEETCODE",
    value: "@ayushpoddarr",
    icon: "⚡",
    href: PERSONAL.leetcode,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/contact`,
        form
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "0.8rem 1rem",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "7rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: Info */}
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
              Let's Talk
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
                color: "var(--text)",
              }}
            >
              Get In<br />Touch
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              Open to internships, full-time roles, and interesting collaboration
              opportunities. I respond within 24 hours.
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTACT_LINKS.map((cl) => (
                <motion.a
                  key={cl.label}
                  href={cl.href}
                  target={cl.label !== "EMAIL" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, borderColor: "rgba(0,229,160,0.3)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "0.9rem 1.2rem",
                    transition: "border-color 0.2s",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "rgba(0,229,160,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    {cl.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {cl.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        marginTop: "0.1rem",
                      }}
                    >
                      {cl.value}
                    </div>
                  </div>
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Name + Email row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,229,160,0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(0,229,160,0.06)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,229,160,0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(0,229,160,0.06)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Hire"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0,229,160,0.4)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,229,160,0.06)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0,229,160,0.4)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,229,160,0.06)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "var(--accent)",
                  color: "var(--bg)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "0.9rem",
                  borderRadius: 10,
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  opacity: status === "sending" ? 0.7 : 1,
                  boxShadow: "0 0 20px rgba(0,229,160,0.25)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: "rgba(0,229,160,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(0,229,160,0.2)",
                    borderRadius: 8,
                    padding: "0.75rem",
                    fontSize: "0.85rem",
                    textAlign: "center",
                  }}
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: "rgba(255,80,80,0.1)",
                    color: "#FF8080",
                    border: "1px solid rgba(255,80,80,0.2)",
                    borderRadius: 8,
                    padding: "0.75rem",
                    fontSize: "0.85rem",
                    textAlign: "center",
                  }}
                >
                  Failed to send. Please email me directly at {PERSONAL.email}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
