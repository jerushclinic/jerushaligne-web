// components/JerushTechnology.jsx
import { motion } from "framer-motion";
import "../../styles/whyjerush.css";

const technologyData = [
  {
    icon: "/images/icons/aligner.gif",
    title: "Jerushaligne Material",
    desc: "We use proprietary crack and stain-resistant material for a smooth, comfortable fit and long-lasting durability. Our clear aligners provide aesthetic, controlled tooth movement and are BPA-free, bio-compatible and completely gum-safe.",
  },
  {
    icon: "/images/icons/3d.gif",
    title: "3D Design Portal",
    desc: "Track your complete smile transformation using our in-house 3D design portal. Patients can preview their treatment outcome and monitor every stage of alignment progress with full transparency.",
  },
  {
    icon: "/images/icons/ai.gif",
    title: "Artificial Intelligence Implementation",
    desc: "Orthodontists can use AI-based planning to provide quality and predictable results. This integration enhances treatment efficiency and accuracy, reinforcing our position among providers of the best teeth aligners in India.",
  },
];

export default function JerushTechnology() {
  return (
    <section className="jt-section">
      <div className="jt-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="jt-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Jerushaligne Technology</h2>
          <p className="jt-subtitle">
            Jerushaligne integrates advanced clear aligner technology with 
            orthodontic science to provide controlled and gradual tooth movement.
          </p>

          <div className="jt-cards">
            {technologyData.map((item, i) => (
              <motion.div
                key={i}
                className="jt-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="jt-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="jt-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="jt-visual-card">
            <img
              src="/images/tech/girl-alone.png"
              alt="Jerushaligne Technology Visual"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
