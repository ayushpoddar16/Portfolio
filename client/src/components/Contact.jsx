import { useState } from "react";
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
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const defaultApiBase =
        window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
          ? "http://localhost:5000"
          : "";
      const API = import.meta.env.VITE_API_URL || defaultApiBase;
      const base = API.replace(/\/$/, "");
      const endpoint = API
        ? /\/api(\/)?$/.test(base)
          ? `${base}/contact`
          : `${base}/api/contact`
        : "/api/contact";
      await axios.post(endpoint, form);
      setStatus("success");
      setStatusMessage("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const errorMessage = !err?.response
        ? "Unable to reach the contact server. Make sure the backend is running and the API endpoint is accessible."
        : err?.response?.data?.message ||
          err.message ||
          `Failed to send. Please email me directly at ${PERSONAL.email}`;
      console.error("Contact form error:", err?.response?.data || err.message);
      setStatus("error");
      setStatusMessage(errorMessage);
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

  const focusStyle = (e) => {
    e.target.style.borderColor = "rgba(0,229,160,0.4)";
    e.target.style.boxShadow = "0 0 0 3px rgba(0,229,160,0.06)";
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
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
              Get In
              <br />
              Touch
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2rem" }}>
              Open to internships, full-time roles, and interesting collaboration opportunities. I respond within 24 hours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTACT_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "EMAIL" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "0.9rem 1.2rem",
                    textDecoration: "none",
                    color: "var(--text)",
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
                    {item.icon}
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
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 500, marginTop: "0.1rem" }}>
                      {item.value}
                    </div>
                  </div>
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
                    onFocus={focusStyle}
                    onBlur={blurStyle}
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
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
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
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Hire"
                  style={inputStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
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
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
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
                  boxShadow: "0 0 20px rgba(0,229,160,0.18)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {status === "success" && (
                <div
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
                  {statusMessage}
                </div>
              )}

              {status === "error" && (
                <div
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
                  {statusMessage || `Failed to send. Please email me directly at ${PERSONAL.email}`}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
