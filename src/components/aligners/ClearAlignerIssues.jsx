import { motion } from "framer-motion";
import "../../styles/clear-aligners.css";

const issues = [
  {
    title: "Cross Bite Teeth",
    desc:
      "One or more upper teeth bite inside the lower teeth due to uneven jaw alignment, which can cause tooth wear, gum issues and jaw discomfort.",
    img: "/images/clear-aligners/teeth-issues/cross-bite-teeth.png",
  },
  {
    title: "Crowded Teeth",
    desc:
      "Teeth overlap, twist, or become misaligned due to insufficient space in the jaw, making cleaning difficult and affecting smile appearance.",
    img: "/images/clear-aligners/teeth-issues/crowded-teeth.png",
  },
  {
    title: "Gap Teeth",
    desc:
      "Visible spaces appear between teeth due to missing teeth, extra space in the jaw or differences in tooth size, affecting smile confidence.",
    img: "/images/clear-aligners/teeth-issues/gap-teeth.png",
  },
  {
    title: "Over Bite Teeth",
    desc:
      "The upper front teeth excessively overlap the lower teeth due to jaw misalignment, which can impact chewing, comfort and facial balance.",
    img: "/images/clear-aligners/teeth-issues/overbite-teeth.png",
  },
  {
    title: "Open Bite Teeth",
    desc:
      "The upper and lower teeth do not meet properly when the mouth is closed due to habits or jaw imbalance, affecting biting and speech.",
    img: "/images/clear-aligners/teeth-issues/openbite-teeth.png",
  },
  {
    title: "Under Bite Teeth",
    desc:
      "The lower front teeth extend in front of the upper teeth due to improper jaw growth, leading to jaw strain and bite problems over time.",
    img: "/images/clear-aligners/teeth-issues/openbite-teeth.png",
  },
];

export default function ClearAlignerIssues() {
  return (
    <section className="aligner-issues-section">
      {/* SECTION HEADING (NOT h2) */}
      <motion.h3
        className="aligner-issues-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Fix Teeth Alignment with Clear Aligners
      </motion.h3>

      <div className="aligner-issues-grid">
        {issues.map((item, i) => (
          <motion.div
            key={i}
            className="aligner-issue"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <motion.img
              src={item.img}
              alt={item.title}
              className="issue-image"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* TEXT */}
            <div className="issue-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
