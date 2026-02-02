import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/clear-aligners.css";

const bgText = "Invisible";

/* Letter animation variants */
const letterContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function DesignedForSmile() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section className="designed-section" ref={ref}>
      {/* MAIN TITLE */}
      <motion.h2
        className="designed-title"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        SUBTLE. CLEAN. CONFIDENT.
      </motion.h2>

      {/* TOP TEXT */}
      <motion.p
        className="designed-eyebrow"
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true }}
      >
        Clear aligners, also known as invisible braces, are transparent teeth
        aligners made from a special material designed to perfectly straighten
        your teeth. Unlike metal braces, aligners are painless, comfortable and
        removable. They are custom-made for each patient using digital scans,
        helping to achieve a bright and confident smile.
      </motion.p>

      {/* BIG BACK WORD – LETTER BY LETTER */}
      <motion.div
        className="designed-bg-text"
        variants={letterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        {bgText.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* FLOATING ALIGNER */}
      <motion.img
        src="/images/aligner.png"
        alt="Clear Aligner"
        className="designed-aligner"
        style={{ y }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
}
