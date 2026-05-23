import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: 320,
        height: 320,
        background: "radial-gradient(circle, rgba(0,229,160,0.055) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.12s ease",
      }}
    />
  );
}
