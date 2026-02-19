// components/BenefitsShowcase.jsx
import { motion } from "framer-motion";
import "../../styles/whyjerush.css";

const benefits = [
  {
    title: "Stylish & Invisible",
    desc: "Designed like virtually invisible makes you smile with confidence no wires, no brackets.",
    icon: "✨",
  },
  {
    title: "Detachable & Portable",
    desc: "Remove your aligners anytime. Eat freely, clean easily, live comfortably.",
    icon: "🦷",
  },
  {
    title: "Comfort First",
    desc: "Smooth edges and pain-free movement for a comfortable everyday experience.",
    icon: "😌",
  },
  {
    title: "Long-Lasting Results",
    desc: "Built for durability and consistent results while maintaining oral hygiene.",
    icon: "⏳",
  },
];

export default function BenefitsShowcase() {
  return (
    <section className="benefits-showcase">

      {/* CENTER HEADING */}
      <div className="benefits-header">
        <h3>Benefits of Jerushaligne</h3>
        <p>Designed for comfort, confidence and long-lasting smiles</p>
      </div>

      <div className="benefits-wrapper">

        {/* LEFT – AUTO PLAY VIDEO */}
        <motion.div
          className="benefits-visual"
          initial={{ opacity: 0, rotateY: -20 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="video-card">
            <video
              src="/videos/aligner.mp4"  
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <span className="pulse-ring"></span>
          </div>
        </motion.div>

        {/* RIGHT – BENEFITS */}
        <div className="benefits-content">
          <div className="benefits-grid">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, rotateX: 6 }}
              >
                <div className="benefit-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
