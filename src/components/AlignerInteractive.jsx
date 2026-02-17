import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../styles/clear-aligners.css";

const features = [
  { icon: "🎯", title: "Precision Fit", desc: "Custom-mapped to your teeth" },
  { icon: "👻", title: "Invisible", desc: "Virtually undetectable" },
  { icon: "🦷", title: "Medical Grade", desc: "BPA-free certified materials" },
  { icon: "👨‍⚕️", title: "Doctor Guided", desc: "Expert-planned every step" },
  { icon: "📈", title: "Smart Tracking", desc: "Progress at every stage" },
  { icon: "⚡", title: "Faster Results", desc: "Predictable & efficient" },
];

export default function AlignerInteractive() {
  const lastPos = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const rotateX = useMotionValue(8);
  const rotateY = useMotionValue(-12);

  const smoothX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  /* ── MOUSE ── */
  function onMouseDown(e) {
    setIsDragging(true);
    setHasInteracted(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    rotateY.set(rotateY.get() + dx * 0.55);
    rotateX.set(rotateX.get() - dy * 0.4);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseUp() {
    setIsDragging(false);
  }

  /* ── TOUCH (mobile fix) ── */
  function onTouchStart(e) {
    setIsDragging(true);
    setHasInteracted(true);
    const t = e.touches[0];
    lastPos.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    e.preventDefault(); // prevent page scroll while rotating
    const t = e.touches[0];
    const dx = t.clientX - lastPos.current.x;
    const dy = t.clientY - lastPos.current.y;
    rotateY.set(rotateY.get() + dx * 0.55);
    rotateX.set(rotateX.get() - dy * 0.4);
    lastPos.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd() {
    setIsDragging(false);
  }

  return (
    <section className="ai-section">
      {/* Background decorations */}
      <div className="ai-bg-grid" />
      <div className="ai-bg-glow ai-bg-glow--1" />
      <div className="ai-bg-glow ai-bg-glow--2" />

      <div className="ai-container">

        {/* ── LEFT CONTENT ── */}
        <motion.div
          className="ai-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <motion.div
            className="ai-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="ai-eyebrow-dot" />
            360° Interactive Preview
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="ai-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Designed for<br />
            <em>Modern Smiles </em>
          </motion.h2>

          {/* Sub text */}
          <motion.p
            className="ai-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            German-precision technology meets Indian dental expertise.
            Every aligner is custom-crafted to fit only you.
          </motion.p>

          {/* Feature grid */}
          <div className="ai-features">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="ai-feature-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <span className="ai-feature-icon">{f.icon}</span>
                <span className="ai-feature-title">{f.title}</span>
                <span className="ai-feature-desc">{f.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT – 360 STAGE ── */}
        <motion.div
          className="ai-stage-wrap"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Floating stat badges */}
          <motion.div
            className="ai-badge ai-badge--top"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            ✦ 50K+ Patients Treated
          </motion.div>

          <motion.div
            className="ai-badge ai-badge--bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            🏆 German Certified Tech
          </motion.div>

          {/* The 360 drag stage */}
          <div
            className={`ai-stage ${isDragging ? "is-dragging" : ""}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ touchAction: "none" }} // critical for touch drag
          >
            {/* Orbit ring */}
            <div className="ai-orbit" />

            {/* Glow */}
            <div className="ai-stage-glow" />

            <motion.img
              src="/images/aligner.png"
              alt="Clear Aligner 360 View"
              className="ai-image"
              style={{ rotateX: smoothX, rotateY: smoothY }}
              draggable={false}
              animate={!hasInteracted ? {
                rotateY: [0, 20, 0, -20, 0],
              } : {}}
              transition={!hasInteracted ? {
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              } : {}}
            />
          </div>

          {/* Drag hint */}
          <motion.div
            className="ai-drag-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v0m0 0V7a2 2 0 00-2-2v0a2 2 0 00-2 2v9m8-9v2m0 0a2 2 0 012 2v3.5"/>
              <path d="M6 16l-.5 2a6 6 0 0011.9 1.3L18 16"/>
            </svg>
            Drag to Rotate 360 View
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}