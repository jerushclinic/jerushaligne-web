// components/retainers/RetainersTypes.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Layers } from "lucide-react";
import "../../styles/retainers.css";

const retainers = [
  {
    id: "appliance",
    title: "Retainer Appliance",
    subtitle: "Invisible Everyday Protection",
    description:
      "Crystal-clear retainers that fit seamlessly into your lifestyle. Comfortable, removable and almost invisible perfect for daily wear after aligners.",
    points: [
      "Virtually Invisible",
      "Comfortable and Removable",
      "Ideal for Post-aligner Patients",
    ],
    image: "/images/retainers/types/retainer-appliance.webp",
    icon: ShieldCheck,
  },
  {
    id: "aligner",
    title: "Retainer Aligner",
    subtitle: "Discreet Long-Term Stability",
    description:
      "Custom-designed aligner style retainers that maintain your perfectly aligned smile. Easy to wear, precise in fit and designed for lasting results.",
    points: [
      "Precision-fitted for Accuracy",
      "Easy to Wear and Maintain",
      "Helps Prevent Teeth from Shifting",
    ],
    image: "/images/retainers/types/retainer-aligner.webp",
    icon: Layers,
  },
];

export default function RetainersTypes() {
  const [active, setActive] = useState(retainers[0]);

  return (
    <section className="ret-types">
      <div className="ret-types-inner">

        {/* LEFT */}
        <div className="ret-types-list">
          <span className="ret-types-eyebrow">RETAINER OPTIONS</span>

          <h2 className="ret-types-title">
            Choose Your <span>Smile Guardian</span>
          </h2>

          <motion.div
            className="ret-why-line"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <p className="ret-types-desc">
            Different smiles need different protection. Explore our advanced retainer options designed to maintain your orthodontic results, 
            prevent teeth from shifting and protect your smile comfortably and reliably for the long term. Our retainers are crafted for daily wear, 
            long-lasting stability and confident smile preservation.
          </p>

          {/* GLASS PILLS */}
          <div className="ret-types-pills">
            {retainers.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`ret-pill ${
                    active.id === item.id ? "active" : ""
                  }`}
                  onClick={() => setActive(item)}
                >
                  <Icon size={18} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="ret-types-display">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="ret-types-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="ret-types-image-wrap">
                <img
                  src={active.image}
                  alt={active.title}
                  className="ret-types-image"
                />
              </div>

              <div className="ret-types-content">
                <span className="ret-types-subtitle">{active.subtitle}</span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>

                {/* ✅ ANIMATED POINTS */}
                <motion.ul
                  className="ret-types-points"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.25 },
                    },
                  }}
                >
                  {active.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="ret-point-row"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      {/* GREEN TICK */}
                      <motion.span
                        className="ret-green-tick"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 18,
                          delay: i * 0.9,
                        }}
                      >
                        ✓
                      </motion.span>

                      {/* TEXT */}
                      <motion.p
                        initial={{ x: -8, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.9,
                        }}
                      >
                        {point}
                      </motion.p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
