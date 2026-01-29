// components/HowJerushProcess.jsx
import { motion } from "framer-motion";
import "../styles/whyjerush.css";

const processSteps = [
  {
    step: "01",
    title: "Digital Scan",
    desc: "High-precision 3D scan captures your exact smile structure.",
    img: "/images/how-jerush-works/01-dental-scan.webp",
  },
  {
    step: "02",
    title: "AI Planning",
    desc: "AI + orthodontists design a personalized treatment plan.",
    img: "/images/how-jerush-works/02-ai-plan.webp",
  },
  {
    step: "03",
    title: "Custom Aligners",
    desc: "Precision-crafted aligners made exclusively for you.",
    img: "/images/how-jerush-works/03-custom-align.webp",
  },
  {
    step: "04",
    title: "Progress Tracking",
    desc: "Regular monitoring ensures perfect alignment.",
    img: "/images/how-jerush-works/04-progress.webp",
  },
  {
    step: "05",
    title: "Confident Smile",
    desc: "A naturally aligned smile that lasts.",
    img: "/images/how-jerush-works/05-smile.webp",
  },
];

export default function HowJerushProcess() {
  return (
    <section className="jerush-process">
      <div className="jerush-process-header">
        <h3>How Jerushaligne Works</h3>
        <p>A clear, structured journey from scan to confident smile</p>
      </div>

      <div className="jerush-process-flow">
        {processSteps.map((item, i) => (
          <div className="jerush-process-wrap" key={i}>
            
            {/* CARD */}
            <motion.div
              className="jerush-process-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: i * 0.4 }}
              viewport={{ once: true }}
            >
              <span className="jerush-step">{item.step}</span>

              <div className="jerush-process-img">
                <img src={item.img} alt={item.title} />
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>

            {/* ARROW */}
            {i !== processSteps.length - 1 && (
              <motion.div
                className="jerush-arrow"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.4 + 0.25 }}
                viewport={{ once: true }}
              >
                <span></span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
