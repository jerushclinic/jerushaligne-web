import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/whyjerush.css";

const techPills = [
  { icon: "🤖", label: "AI-Powered Planning" },
  { icon: "📡", label: "Digital Precision Scan" },
  { icon: "🏥", label: "Clinical Supervision" },
  { icon: "🦷", label: "Next-Gen Aligners" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillAnim = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.34, 1.4, 0.64, 1] },
  }),
};

export default function FutureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="fut-section" ref={ref}>

      {/* ── Left dark panel ── */}
      <div className="fut-left">

        {/* Noise texture overlay */}
        <div className="fut-noise" />

        {/* Scan line animation */}
        <div className="fut-scanline" />

        <div className="fut-left-inner">

          {/* Eyebrow */}
          <motion.div
            className="fut-eyebrow"
            variants={fadeUp} custom={0}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <span className="fut-eyebrow__pulse" />
            Next Generation Orthodontics
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="fut-headline"
            variants={fadeUp} custom={1}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            Get the Future of
            <span className="fut-headline__block">
              <span className="fut-headline__future">Orthodontic </span> Treatment
            </span>
            </motion.h2>

          {/* Body text */}
          <motion.p
            className="fut-body"
            variants={fadeUp} custom={2}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            Modern orthodontics has advanced far beyond traditional systems.
            With <strong>digital precision</strong>, <strong>AI-powered planning</strong>
            and <strong> clinical supervision</strong>, Jerushaligne represents
            the next generation of smile correction, precision, comfort and
            confidence, delivered.
          </motion.p>

          {/* Tech pill badges */}
          <div className="fut-pills">
            {techPills.map((p, i) => (
              <motion.div
                key={p.label}
                className="fut-pill"
                variants={pillAnim} custom={i}
                initial="hidden" animate={inView ? "visible" : "hidden"}
              >
                <span className="fut-pill__icon">{p.icon}</span>
                <span className="fut-pill__label">{p.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
            className="fut-cta-row"
            variants={fadeUp} custom={5}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <button className="fut-btn-primary">
              Find a Nearby Center
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="fut-btn-ghost">Learn More</button>
          </motion.div>

        </div>

        {/* Bottom trusted strip */}
        <motion.div
          className="fut-trust-strip"
          variants={fadeUp} custom={6}
          initial="hidden" animate={inView ? "visible" : "hidden"}
        >
          <div className="fut-trust-strip__item">
            <span className="fut-trust-strip__val">India's</span>
            <span className="fut-trust-strip__lbl">Top Aligner Brand</span>
          </div>
          <div className="fut-trust-strip__divider" />
          <div className="fut-trust-strip__item">
            <span className="fut-trust-strip__val">German</span>
            <span className="fut-trust-strip__lbl">UK Technology</span>
          </div>
          <div className="fut-trust-strip__divider" />
          <div className="fut-trust-strip__item">
            <span className="fut-trust-strip__val">ISO</span>
            <span className="fut-trust-strip__lbl">Certified Materials</span>
          </div>
        </motion.div>

      </div>

      {/* ── Right image panel ── */}
      <div className="fut-right">
        <motion.div
          className="fut-image-wrap"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=85"
            alt="Future of orthodontic treatment"
            className="fut-img"
          />
          <div className="fut-img-overlay" />
        </motion.div>

        {/* Floating card — top left of image */}
        <motion.div
          className="fut-float-card"
          variants={fadeLeft} custom={3}
          initial="hidden" animate={inView ? "visible" : "hidden"}
        >
          <div className="fut-float-card__icon">🎯</div>
          <div className="fut-float-card__text">
            <span className="fut-float-card__title">Precision Fit</span>
            <span className="fut-float-card__sub">0.1mm tolerance</span>
          </div>
        </motion.div>

        {/* Floating card — bottom right of image */}
        <motion.div
          className="fut-float-card fut-float-card--br"
          variants={fadeLeft} custom={4}
          initial="hidden" animate={inView ? "visible" : "hidden"}
        >
          <div className="fut-float-card__icon">✨</div>
          <div className="fut-float-card__text">
            <span className="fut-float-card__title">Start Today</span>
            <span className="fut-float-card__sub">Free consultation</span>
          </div>
        </motion.div>

        {/* Diagonal slash overlay for visual split */}
        <div className="fut-slash" />

      </div>

    </section>
  );
}
