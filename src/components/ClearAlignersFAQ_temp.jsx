import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/clear-aligners.css";

const faqs = [
  { q: "What are clear aligners and how do they work?", a: "Clear aligners are transparent, removable orthodontic trays that gradually straighten teeth using controlled pressure." },
  { q: "Are clear aligners better than metal braces?", a: "Clear aligners are more comfortable, nearly invisible, removable and easier to maintain compared to traditional metal braces." },
  { q: "Who needs this clear aligner treatment?", a: "Clear aligners are ideal for teens and adults with mild to moderate teeth alignment or bite problems." },
  { q: "How long does clear aligner treatment take?", a: "The treatment duration typically ranges from 8 to 18 months, depending on the complexity of the case." },
  { q: "Are clear aligners painful or uncomfortable?", a: "Clear aligners may cause mild pressure initially, but they are generally painless and comfortable to wear." },
  { q: "How do I clean and maintain clear aligners?", a: "Clear aligners can be cleaned using a soft brush and mild cleanser to maintain hygiene and clarity."},

  { q: "How many hours should I wear clear aligners daily?", a: "For best results, clear aligners should be worn 20–22 hours per day." },
  { q: "Can I eat and drink with clear aligners on?", a: "Aligners should be removed while eating or drinking anything other than water to avoid damage or staining." },
  { q: "Are clear aligners visible when worn?", a: "Clear aligners are virtually invisible, making them a popular choice for adults and professionals." },
  { q: "How are clear aligners customized for patients?", a: "They are custom-made using advanced digital scans to ensure precise teeth movement and comfort." },
  { q: "Can clear aligners fix bite problems like overbite or underbite?", a: "Yes, clear aligners can effectively treat many bite issues such as overbite, underbite, crossbite and spacing problems." },
  { q: "Is clear aligner treatment safe and effective?", a: "Yes, clear aligners are a safe, proven and clinically effective orthodontic solution when guided by a dental professional." },
];

export default function ClearAlignersFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">
      {/* HEADING (NOT h2) */}
      <motion.h3
        className="faq-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h3>

      <div className="faq-grid">
        {[0, 1].map(col => (
          <div className="faq-column" key={col}>
            {faqs.slice(col * 5, col * 5 + 5).map((item, i) => {
              const index = col * 5 + i;
              const open = active === index;

              return (
                <motion.div
                  className={`faq-item ${open ? "open" : ""}`}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="faq-question"
                    onClick={() => setActive(open ? null : index)}
                  >
                    <span>{item.q}</span>
                    <motion.span
                      className="faq-icon"
                      animate={{ rotate: open ? 45 : 0 }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
