// components/retainers/RetainersHero.jsx
import { motion } from "framer-motion";
import "../../styles/retainers.css";

export default function RetainersHero() {
  return (
    <section className="ret-hero">
      <div className="ret-hero-overlay" />

      <div className="ret-hero-inner">
        <motion.div
          className="ret-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="ret-eyebrow">Smile Protection</span>

          <h1 className="ret-title">
            Retainers
            <span>Smile Locked</span>
          </h1>

          <div className="ret-hero-actions">
            <a href="/contact-us" className="ret-btn primary">
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
