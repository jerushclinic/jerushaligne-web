import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/clear-aligners.css";

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
      >
        SUBTLE. CLEAN. CONFIDENT.
      </motion.h2>
      <br />
      {/* TOP TEXT */}
      <motion.p
        className="designed-eyebrow"
        style={{ opacity }}
      >
        Clear aligners, also known as invisible braces, are transparent teeth aligners made from a special material designed to perfectly straighten your teeth. Unlike metal braces, aligners are painless, comfortable and removable. They are custom-made for each patient using digital scans, helping to achieve a bright and confident smile.
      </motion.p>

      {/* BIG BACK WORD */}
      <div className="designed-bg-text">Invisible</div>

      {/* FLOATING ALIGNER */}
      <motion.img
        src="/images/aligner.png"
        alt="Clear Aligner"
        className="designed-aligner"
        style={{ y }}
      />
    </section>
  );
}
