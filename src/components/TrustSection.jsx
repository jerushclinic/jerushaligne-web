import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/whyjerush.css";

const trustPoints = [
  {
    id: 1,
    icon: "🔬",
    title: "Advanced Clear Aligner Technology",
    desc: "German-engineered precision for every stage of your smile journey.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Customized Aligner Treatment",
    desc: "Every tray is crafted uniquely for your teeth — no generic fits.",
  },
  {
    id: 3,
    icon: "🦷",
    title: "Expert Orthodontic Care",
    desc: "Supervised by certified orthodontists from scan to final smile.",
  },
  {
    id: 4,
    icon: "✅",
    title: "Safe & Effective Straightening",
    desc: "BPA-free, biocompatible materials with zero compromise on safety.",
  },
  {
    id: 5,
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden fees. Clear costs from day one — you decide with confidence.",
  },
  {
    id: 6,
    icon: "⏳",
    title: "Long-Lasting Results",
    desc: "Retention systems built to preserve your perfect smile for life.",
  },
];

const stats = [
  { value: "1L+", label: "Happy Smiles" },
  { value: "99.9%", label: "Satisfaction Rate" },
  { value: "03+", label: "Branches Across Tamilnadu" },
  { value: "4.8★", label: "Average Rating" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.34, 1.2, 0.64, 1] },
  }),
};

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="trust-section" ref={ref}>

      {/* ── Decorative grid lines ── */}
      <div className="trust-gridlines" aria-hidden="true">
        {[...Array(5)].map((_, i) => <span key={i} className="trust-gridline" />)}
      </div>

      <div className="trust-container">

        {/* ── Header ── */}
        <div className="trust-header">
          <motion.span
            className="trust-eyebrow"
            variants={fadeUp} custom={0}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            Patient Trust
          </motion.span>
          <motion.h2
            className="trust-headline"
            variants={fadeUp} custom={1}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            Why Patients Choose
            <span className="trust-headline__yellow"> Jerushaligne</span>
          </motion.h2>
          <motion.p
            className="trust-subtext"
            variants={fadeUp} custom={2}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            When searching for the best teeth aligners in India, patients look
            for a complete system — and Jerushaligne delivers every element.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="trust-bento">

          {/* Hero image card — spans 2 rows */}
          <motion.div
            className="trust-bento__hero"
            variants={scaleUp} custom={2}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80"
              alt="Patient smiling with confident results"
              className="trust-hero-img"
            />
            <div className="trust-hero-overlay">
              <div className="trust-hero-badge">
                <span className="trust-hero-badge__dot" />
                Trusted Across India
              </div>
              <p className="trust-hero-caption">
                "Jerushaligne brought all the elements together in one
                reliable, structured system."
              </p>
            </div>
            {/* Floating stat pill */}
            <div className="trust-hero-pill">
              <span className="trust-hero-pill__num">99.9%</span>
              <span className="trust-hero-pill__txt">Patient Satisfaction</span>
            </div>
          </motion.div>

          {/* Trust point cards */}
          {trustPoints.map((tp, i) => (
            <motion.div
              key={tp.id}
              className="trust-card"
              variants={fadeRight}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
            >
              <div className="trust-card__top">
                <span className="trust-card__icon">{tp.icon}</span>
                <span className="trust-card__check">✓</span>
              </div>
              <h3 className="trust-card__title">{tp.title}</h3>
              <p className="trust-card__desc">{tp.desc}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            className="trust-bento__cta"
            variants={scaleUp} custom={9}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
              alt="Dental consultation"
              className="trust-cta-img"
            />
            <div className="trust-cta-overlay">
              <p className="trust-cta-text">One system. Every element.</p>
              <button className="trust-cta-btn">Book Free Consultation →</button>
            </div>
          </motion.div>

          {/* Second image card */}
          <motion.div
            className="trust-bento__secondary"
            variants={scaleUp} custom={10}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
              alt="Doctor patient consultation"
              className="trust-cta-img"
            />
            <div className="trust-secondary-overlay">
              <div className="trust-secondary-tag">
                <span>⭐</span> Trusted by Orthodontists
              </div>
              <p className="trust-secondary-text">
                Expert care at every step — from your first scan to your final smile.
              </p>
              <div className="trust-secondary-stats">
                <div className="trust-secondary-stat">
                  <span className="trust-secondary-stat__num">03+</span>
                  <span className="trust-secondary-stat__lbl">Branches</span>
                </div>
                <div className="trust-secondary-divider" />
                <div className="trust-secondary-stat">
                  <span className="trust-secondary-stat__num">4.8★</span>
                  <span className="trust-secondary-stat__lbl">Rated</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Stats strip ── */}
        <div className="trust-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="trust-stat"
              variants={fadeUp}
              custom={i + 8}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <span className="trust-stat__val">{s.value}</span>
              <span className="trust-stat__lbl">{s.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}