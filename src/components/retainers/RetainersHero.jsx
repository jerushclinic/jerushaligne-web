// components/retainers/RetainersHero.jsx
import { motion } from "framer-motion";
import "../../styles/retainers.css";

export default function RetainersHero() {
  return (
    <section className="ret-hero">
      {/* Overlay */}
      <div className="ret-hero-overlay" />

      <div className="ret-hero-inner">
        <motion.div
          className="ret-hero-card"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="ret-eyebrow">Smile Stability</span>

          <h1 className="ret-title">
            RETAINERS
            <span>THAT KEEPS YOUR SMILE PERFECT</span>
          </h1>

          <p className="ret-desc">
            Retainers protect the results of your orthodontic treatment by
            preventing teeth from shifting back. A small step that preserves a
            lifetime of confidence.
          </p>

          <div className="ret-actions">
            <a href="/contact-us" className="ret-btn primary">
              Book Consultation
            </a>
            <a href="#ret-why" className="ret-btn ghost">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
