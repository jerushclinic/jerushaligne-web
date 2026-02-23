import React from "react";
import { motion } from "framer-motion";
import "../../styles/vision-mission.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const VisionMission = () => {
  return (
    <section className="vm-section-wrapper">

      {/* TITLE */}
      <motion.div
        className="vm-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Vision & Mission
        <motion.div
          className="vm-underline"
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* CARD */}
      <motion.div
        className="vm-card-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* LEFT CONTENT */}
        <motion.div className="vm-card-left" variants={containerVariants}>

          <motion.div className="vm-block" variants={fadeUp}>
            <div className="vm-subtitle">OUR VISION</div>
            <p>
              To establish <strong>Jerushaligne</strong> as a pioneering
              innovator and manufacturer of advanced clear aligner systems,
              redefining orthodontic precision through research-driven
              innovation and uncompising quality standards.
            </p>
            <p>
              We envision building a globally trusted aligner brand that
              integrates digital excellence, scientific accuracy,
              and patient-focused care.
            </p>
          </motion.div>

          <motion.div
            className="vm-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ originX: 0 }}
            viewport={{ once: true }}
          />

          <motion.div className="vm-block" variants={fadeUp}>
            <div className="vm-subtitle">OUR MISSION</div>
            <p>
              At <strong>Jerushaligne</strong>, our mission is to design,
              manufacture, and deliver high-precision clear aligner systems
              using advanced 3D planning and precision fabrication.
            </p>
            <p>
              Through ethical practices, innovation, and strict quality
              control, we ensure predictable outcomes and confident smiles.
            </p>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="vm-card-right"
          variants={slideRight}
        >
          <motion.img
            src="/images/aligner-manufacturing.jpg"
            alt="Jerushaligne Manufacturing"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

      </motion.div>

    </section>
  );
};

export default VisionMission;