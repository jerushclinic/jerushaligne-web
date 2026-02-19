import { motion } from "framer-motion";
import "../../styles/whyjerush.css";

const steps = [
  {
    step: "01",
    title: "Find a Jerushaligne Centre Near to You",
    desc: "Locate our center for consultation and orthodontic evaluation.",
    img: "/images/how-to-get-jerushaligne/jerush-hospital.webp",
  },
  {
    step: "02",
    title: "Take Your Teeth Measurements",
    desc: "Advanced digital scanning captures your exact smile with precision.",
    img: "/images/how-to-get-jerushaligne/dental-measurements.webp",
  },
  {
    step: "03",
    title: "Receive Your Aligners",
    desc: "Custom-made aligners are designed and delivered for your case.",
    img: "/images/how-to-get-jerushaligne/get-aligner.webp",
  },
  {
    step: "04",
    title: "Affordable & Flexible Pricing",
    desc: "Transparent pricing makes premium orthodontic treatment accessible.",
    img: "/images/how-to-get-jerushaligne/smiling-girl.webp",
  },
];

export default function HowToGetJerushaligne() {
  return (
    <section className="get-jerush-section">
      <div className="get-jerush-header">
        <h3>How to Get Jerushaligne</h3>
        <p>A simple, guided path to your perfect smile</p>
      </div>

      <div className="get-jerush-flow">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            className="get-jerush-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="get-jerush-image">
              <img src={item.img} alt={item.title} />
              <span className="get-jerush-number">{item.step}</span>
            </div>

            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}

        {/* FLOW LINE */}
        <span className="get-jerush-line" />
      </div>
    </section>
  );
}
