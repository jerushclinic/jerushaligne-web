// pages/ClearAlignersHero.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/clear-aligners.css";

import DesignedForSmile from "../components/DesignedForSmile";
import AlignerInteractive from "../components/AlignerInteractive";
import ClearAlignerIssues from "../components/ClearAlignerIssues";
import ClearAlignersFAQ from "../components/ClearAlignersFAQ.jsx";

/* ================= REUSABLE VARIANTS ================= */

const sectionFadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function ClearAlignersHero() {
  const ref = useRef(null);

  /* HERO PARALLAX */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="clear-hero" ref={ref}>
        <motion.div
          className="clear-hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="clear-hero-container">
          <motion.div
            className="clear-hero-content"
            style={{ y }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {/* LINE 1 */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              WHERE BEAUTY
            </motion.h1>

            {/* LINE 2 */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span>SHOWS IN THE</span>
            </motion.h1>

            {/* LINE 3 */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span>SMILE</span>
            </motion.h1>

            {/* ACTIONS */}
            <motion.div
              className="clear-hero-actions"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <a href="/contact" className="clear-btn primary">
                Transform Your Smile
              </a>
              <a href="tel:01169271048" className="clear-btn secondary">
                011-69271048
              </a>
            </motion.div>

            {/* PRICE */}
            <motion.div
              className="clear-price"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{ delay: 0.6 }}
            >
              Aligners starting at <strong>Affordable Prices*</strong>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= DESIGNED FOR SMILE ================= */}
      <section>
        <DesignedForSmile />
      </section>

      {/* ================= ALIGNER INTERACTIVE ================= */}
      <motion.section
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <AlignerInteractive />
      </motion.section>

      {/* ================= ALIGNER ISSUES ================= */}
      <motion.section
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <ClearAlignerIssues />
      </motion.section>

      {/* ================= FAQ ================= */}
      <motion.section
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <ClearAlignersFAQ />
      </motion.section>
    </>
  );
}
