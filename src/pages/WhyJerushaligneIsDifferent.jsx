// WhyJerushaligneIsDifferent.jsx
import { motion } from "framer-motion";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
import BenefitsShowcase from "../components/BenefitsShowcase";
import JerushTechnology from "../components/JerushTechnology";
import HowJerushWorks from "../components/HowJerushWorks";
import HowToGetJerushaligne from "../components/HowToGetJerushaligne";
import "../styles/whyjerush.css";

/* ================= FRAMER VARIANTS ================= */

const pageVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function WhyJerushaligneIsDifferent() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      {/* ================= HERO BREADCRUMB ================= */}
      <motion.div variants={sectionVariants}>
        <HeroBreadcrumb
          title="Why Jerushaligne is Different"
          subtitle="Let's See What Makes Us Unique"
          image="/images/comparison/girl.webp"
        />
      </motion.div>

      {/* ================= WHY HERO SECTION ================= */}
      <motion.section
        className="why-hero"
        variants={sectionVariants}
      >
        <div className="why-hero-container">

          {/* LEFT CONTENT */}
          <motion.div
            className="why-hero-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="why-badge">ALIGNERS</span>

            <h1 className="why-title">
              Why Jerushaligne is Different
            </h1>

            <p className="why-text">
              At Jerushaligne, we specialize in creating high-quality clear aligners
              designed specifically for adults. Our mission is to provide effective
              and discreet orthodontic solutions that fit seamlessly into your lifestyle.
            </p>

            <p className="why-text">
              With state-of-the-art technology and personalized treatment plans,
              each aligner is custom-made to deliver optimal, long-lasting results —
              without compromising comfort or confidence.
            </p>

            <motion.a
              href="/our-outlets"
              className="why-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find a Nearby Centre
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="why-hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="image-circle">
              <img
                src="/images/aligner.png"
                alt="Clear Aligner"
              />
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ================= BENEFITS SHOWCASE ================= */}
      <motion.div variants={sectionVariants}>
        <BenefitsShowcase />
      </motion.div>

      {/* ================= JERUSH TECHNOLOGY ================= */}
      <motion.div variants={sectionVariants}>
        <JerushTechnology />
      </motion.div>

      {/* ================= HOW JERUSH WORKS ================= */}
      <motion.div variants={sectionVariants}>
        <HowJerushWorks />
      </motion.div>

      {/* ================= HOW TO GET JERUSHALIGNE ================= */}
      <motion.div variants={sectionVariants}>
        <HowToGetJerushaligne />
      </motion.div>

    </motion.div>
  );
}
