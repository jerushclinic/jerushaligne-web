// components/retainers/RetainersWhy.jsx
import { motion } from "framer-motion";
import "../../styles/retainers.css";

/* ===== ANIMATION VARIANTS ===== */

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.6,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const tickVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.6 + 0.35, // tick AFTER text
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }),
};

export default function RetainersWhy() {
  const points = [
    {
      text: <>Retainers <strong>hold alignment steady</strong></>,
    },
    {
      text: <>They <strong>protect years of treatment</strong></>,
    },
    {
      text: <>They <strong>guard your smile silently</strong></>,
    },
  ];

  return (
    <section className="ret-why-alt" id="ret-why">
      <div className="ret-why-alt-inner">

        {/* LEFT STORY */}
        <motion.div
          className="ret-why-story"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="ret-why-tag">WHY RETAINERS?</span>

          <h2>
            Teeth <br />
            <span>Never Stop Moving</span>
          </h2>

          <motion.div
            className="ret-why-line"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <p className="ret-why-copy">
            Even after braces, your teeth are constantly under
            pressure to shift back.
          </p>

          {/* ✅ SEQUENTIAL STATEMENTS */}
          <div className="ret-why-statements">
            {points.map((item, i) => (
              <div className="ret-why-row" key={i}>
                <motion.p
                  custom={i}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {item.text}
                </motion.p>

                <motion.span
                  className="ret-green-tick"
                  custom={i}
                  variants={tickVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  ✓
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="ret-why-image"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/retainers/removable-retainer.webp"
            alt="Dental Retainer in Use"
          />
        </motion.div>

      </div>
    </section>
  );
}
