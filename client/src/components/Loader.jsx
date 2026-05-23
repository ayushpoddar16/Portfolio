import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "var(--accent)",
              letterSpacing: "-0.04em",
            }}
          >
            AP.
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: 180,
              height: 2,
              background: "var(--border)",
              borderRadius: 2,
              marginTop: "1.5rem",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="loader-fill-anim"
              style={{
                height: "100%",
                background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                borderRadius: 2,
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.15em",
              marginTop: "1rem",
              textTransform: "uppercase",
            }}
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
