import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/whyjerush.css";

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L6 10V20C6 28.284 12.268 35.98 20 38C27.732 35.98 34 28.284 34 20V10L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Material Safety",
    title: "BPA-Free Medical-Grade Material",
    desc: "Sourced from certified biocompatible polymers used in clinical-grade dental applications worldwide.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 10V20L26 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
    label: "Structural Integrity",
    title: "Crack & Stain-Resistant Polymer",
    desc: "Engineered for long-term durability and clarity — maintaining shape and force delivery throughout treatment.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20C8 14 13 9 20 8C27 7 33 12 33 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 20C8 26 12 32 20 33C28 34 33 28 33 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="20" cy="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 15V10M20 25V30M15 20H10M25 20H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Biocompatibility",
    title: "Gum-Safe & Tissue Friendly",
    desc: "Zero irritants. Zero allergens. Clinically tested to coexist safely with gingival tissue and oral mucosa.",
  },
];

const stats = [
  { value: "100%", label: "BPA-Free Certified" },
  { value: "0.1mm", label: "Precision Tolerance" },
  { value: "ISO", label: "Medical Standard" },
  { value: "24/7", label: "Expert Oversight" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

export default function ClinicalSafety() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="cs-section" ref={sectionRef}>
      {/* Background decorative blobs */}
      <div className="cs-bg-blob cs-bg-blob--1" />
      <div className="cs-bg-blob cs-bg-blob--2" />

      <div className="cs-container">

        {/* ── Top: Badge + Headline ── */}
        <div className="cs-hero">
          <motion.div
            className="cs-badge"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="cs-badge__dot" />
            Clinical Safety & Scientific Precision
          </motion.div>

          <motion.h2
            className="cs-headline"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Aligners Built on
            <br />
            <span className="cs-headline__accent">Science You Can Trust</span>
          </motion.h2>

          <motion.p
            className="cs-subtext"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Every aligner exerts a measured pressure for controlled movement without
            damaging surrounding tissues. Our systematic procedures and expert
            orthodontic care ensure every patient a safe, scientifically directed experience.
          </motion.p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="cs-cards">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              className="cs-card"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="cs-card__icon-wrap">
                <div className="cs-card__icon">{f.icon}</div>
              </div>
              <div className="cs-card__body">
                <span className="cs-card__label">{f.label}</span>
                <h3 className="cs-card__title">{f.title}</h3>
                <p className="cs-card__desc">{f.desc}</p>
              </div>
              {/* Animated bottom border on hover */}
              <div className="cs-card__line" />
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          className="cs-divider"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── Stats Row ── */}
        <div className="cs-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="cs-stat"
              variants={scaleIn}
              custom={i + 4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="cs-stat__value">{s.value}</span>
              <span className="cs-stat__label">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          className="cs-cta-strip"
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="cs-cta-strip__text">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V12C3 16.97 7.02 21.67 12 23C16.98 21.67 21 16.97 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Orthodontist-supervised treatment from scan to smile
          </div>
          <button className="cs-cta-strip__btn">
            Start Your Smile Journey →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
