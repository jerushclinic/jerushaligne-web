import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../styles/clear-aligners.css";

export default function AlignerInteractive() {
  const lastPos = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Rotation values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Apple-like smoothness
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 22 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 22 });

  function onMouseDown(e) {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e) {
    if (!isDragging) return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    rotateY.set(rotateY.get() + dx * 0.6);
    rotateX.set(rotateX.get() - dy * 0.45);

    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseUp() {
    setIsDragging(false);
  }

  return (
    <section className="aligner-360-section">
      <div className="aligner-360-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="aligner-360-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>
            Designed for <span>Modern Smiles</span>
          </h2>

          <div className="aligner-features">
            {[
              "🎯 Precision-fit aligners",
              "👻 Virtually invisible",
              "🦷 Medical-grade materials",
              "👨‍⚕️ Doctor-guided planning",
              "📈 Smart progress tracking",
              "⏱ Faster & predictable results"
            ].map((text, i) => (
              <motion.div
                key={i}
                className="aligner-feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – TRUE DRAG 360 */}
        <div
          className="aligner-360-stage"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <motion.img
            src="/images/aligner.png"
            alt="Clear Aligner"
            className="aligner-360-image"
            style={{ rotateX: smoothX, rotateY: smoothY }}
            draggable={false}
          />

          <motion.span
            className="drag-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Click & Drag to Rotate
          </motion.span>
        </div>

      </div>
    </section>
  );
}
