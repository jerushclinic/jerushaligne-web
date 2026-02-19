import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../../styles/clear-aligners.css";
import "../../styles/designedsmile.css"


const bgText = "invisible";

const leftFeatures = [
  {
    id: "faster",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="2" y="3" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M15 15l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Faster, Predictable Results",
    desc: "You get to see your treatment result on 3D virtual models with a complete timeline, before you even start your aligner journey.",
  },
  {
    id: "ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: "AI Powered",
    desc: "Smooth plastic trays designed by AI technology reduce irritation and give a perfect, customised fit for your teeth.",
  },
];

const rightFeatures = [
  {
    id: "comfort",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 10c1-1.5 5-1.5 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Super Comfortable",
    desc: "Fits snugly on your teeth with no wires or brackets. Smooth edges make it comfortable to wear all day and night.",
  },
  {
    id: "invisible",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Virtually Invisible",
    desc: "Clear design ensures your treatment stays completely discreet. Nobody will even know you're wearing them.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.18 },
  }),
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 + i * 0.2 },
  }),
};

export default function ClearAlignersSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const alignerY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="ca-section" ref={ref}>
      {/* Ambient blobs */}
      <div className="ca-blob ca-blob-1" />
      <div className="ca-blob ca-blob-2" />
      <div className="ca-blob ca-blob-3" />

      {/* ── Header ── */}
      <motion.h2
        className="ca-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        SUBTLE. CLEAN. CONFIDENT.
      </motion.h2>

      <motion.p
        className="ca-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true }}
      >
        Enhance the appearance of your smile using clear aligners, a comfortable and discreet
        way to have a modern smile. Our aligners are created with the most accurate digital
        technology to help you obtain perfect teeth alignment without wires and brackets.
      </motion.p>

      {/* ── Main Grid ── */}
      <div className="ca-grid">

        {/* LEFT FEATURES */}
        <div className="ca-col ca-col--left">
          {leftFeatures.map((f, i) => (
            <div key={f.id} className="ca-item ca-item--left">
              <motion.div
                className="ca-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="ca-card-icon">{f.icon}</div>
                <h3 className="ca-card-title">{f.title}</h3>
                <p className="ca-card-desc">{f.desc}</p>
              </motion.div>

              {/* SVG arrow line pointing right toward aligner */}
              <motion.svg
                className="ca-arrow ca-arrow--left"
                viewBox="0 0 120 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.path
                  d="M0 16 Q60 4 110 16"
                  stroke="rgba(120,60,0,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  fill="none"
                  variants={lineVariants}
                  custom={i}
                />
                <motion.path
                  d="M104 10 L112 16 L104 22"
                  stroke="rgba(120,60,0,0.55)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={lineVariants}
                  custom={i}
                />
              </motion.svg>
            </div>
          ))}
        </div>

        {/* CENTER — aligner + bg word */}
        <div className="ca-center">
          {/* Animated "invisible" bg text */}
          <div className="ca-bg-word" aria-hidden="true">
            {bgText.split("").map((char, i) => (
              <span
                key={i}
                className="ca-bg-letter"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Floating aligner */}
          <motion.div
            className="ca-aligner-wrap"
            style={{ y: alignerY }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <img
              src="/images/aligner.png"
              alt="Clear Aligner"
              className="ca-aligner"
              draggable={false}
            />
            <div className="ca-aligner-shadow" />
          </motion.div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="ca-col ca-col--right">
          {rightFeatures.map((f, i) => (
            <div key={f.id} className="ca-item ca-item--right">
              {/* SVG arrow line pointing left toward aligner */}
              <motion.svg
                className="ca-arrow ca-arrow--right"
                viewBox="0 0 120 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.path
                  d="M120 16 Q60 4 10 16"
                  stroke="rgba(120,60,0,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  fill="none"
                  variants={lineVariants}
                  custom={i}
                />
                <motion.path
                  d="M16 10 L8 16 L16 22"
                  stroke="rgba(120,60,0,0.55)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={lineVariants}
                  custom={i}
                />
              </motion.svg>

              <motion.div
                className="ca-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="ca-card-icon">{f.icon}</div>
                <h3 className="ca-card-title">{f.title}</h3>
                <p className="ca-card-desc">{f.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}