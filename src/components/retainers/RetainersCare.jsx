import { motion } from "framer-motion";
import "../../styles/retainers.css";

const careSteps = [
  {
    step: "01",
    title: "Clean Every Day",
    text: "Daily gentle cleaning prevents plaque, odor, and bacteria, keeping your retainers hygienic and crystal clear.",
  },
  {
    step: "02",
    title: "Store Safely",
    text: "Always place retainers in a protective case when not in use to avoid loss, breakage, or contamination.",
  },
  {
    step: "03",
    title: "Avoid Heat",
    text: "Never expose retainers to hot water or direct heat, as high temperatures can warp their shape.",
  },
  {
    step: "04",
    title: "Handle Gently",
    text: "Use both hands while removing retainers to maintain their fit and ensure long-term durability.",
  },
];

export default function RetainersCare() {
  return (
    <section className="ret-care-alt">
      <div className="ret-care-alt-inner">

        {/* LEFT IMAGE */}
        <motion.div
          className="ret-care-alt-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/retainers/clean.webp"
            alt="Retainer Care"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="ret-care-alt-content">
          <span className="ret-care-eyebrow">RETAINER CARE</span>

          <h2>
            Care That <span>Protects Your Smile</span>
          </h2>

          <p className="ret-care-desc">
            Following proper retainer care habits helps preserve hygiene,
            comfort, and long-term smile stability after orthodontic treatment.
          </p>

          <div className="ret-care-steps">
            {careSteps.map((item, i) => (
              <motion.div
                key={i}
                className="ret-care-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="ret-care-step-num">{item.step}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
