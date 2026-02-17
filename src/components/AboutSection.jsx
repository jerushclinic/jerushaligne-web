import React from "react";
import { motion } from "framer-motion";
import "../styles/component.css";

export default function AboutSection({
  title = "About Jerushaligne",
  text = "Jerushaligne combines advanced dental technology with personalized patient care to deliver exceptional smile results.",
  image = "/images/jerushaligne-all-kit.webp",
  headerImage = null,
  headerImageAlt = "Jerushaligne clinic",
}) {
  return (
    <section id="about" className="about-section" aria-label="About Jerushaligne">
      <div className="about-bg-decor" aria-hidden />

      <div className="about-container">
        <div className="about-grid">
          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="about-eyebrow">
              Premium Dental Care
            </motion.span>

            {headerImage ? (
              <motion.img
                variants={fadeUp}
                src={headerImage}
                alt={headerImageAlt}
                className="about-header-image"
              />
            ) : (
              <motion.h2 variants={fadeUp} className="about-title">
                {title}
              </motion.h2>
            )}

            <motion.p variants={fadeUp} className="about-text">
              {text}
            </motion.p>

            {/* FEATURES */}
            <motion.div variants={stagger} className="about-features">
              {features.map((item, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="about-feature-card"
                >
                  <div className="about-feature-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* CTA + STATS */}
            <motion.div variants={fadeUp} className="about-footer">
              <a href="#book" className="about-cta">
                View More
              </a>

              <div className="about-stats">
                {stats.map((s, i) => (
                  <div key={i}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={image} alt="Jerushaligne clinic" />
            <div className="about-image-overlay" />

          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* DATA */
const features = [
  {
    title: "Comfort-first treatments",
    desc: "Gentle protocols for all age groups",
    icon: "🦷",
  },
  {
    title: "Sterile & modern clinic",
    desc: "ISO-grade sterilization standards",

    icon: "🛡️",
  },
  {
    title: "Personalized smile makeover plans",
    desc: "Treatment plans crafted for long-term oral health.",
    icon: "❤️",
  },
  {
    title: "Proven results",
    desc: "1 lakh+ happy smiles and 24+ years of clinical expertise",
    icon: "😊",
  },
];

const stats = [
  { value: "1 Lakh+", label: "Happy Smiles" },
  { value: "24+", label: "Years of Care" },
  { value: "99.9%", label: "Best Results" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
