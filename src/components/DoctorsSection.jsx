import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/component.css";

const doctors = [
  {
    name: "Dr. Naveen Raj",
    degree: "MDS – Dentofacial Orthopedics",
    img: "/images/doctors/dr-bladbin.png",
    desc: "Orthodontic specialist focused on aligners and precision smile planning."
  },
  {
    name: "Dr. Meera Joseph",
    degree: "BDS – Cosmetic Dentistry",
    img: "/images/doctors/meera.webp",
    desc: "Expert in aesthetic smile design and invisible aligner transformation."
  },
   {
    name: "Dr. Meera Joseph",
    degree: "BDS – Cosmetic Dentistry",
    img: "/images/doctors/meera.webp",
    desc: "Expert in aesthetic smile design and invisible aligner transformation."
  },
   {
    name: "Dr. Meera Joseph",
    degree: "BDS – Cosmetic Dentistry",
    img: "/images/doctors/meera.webp",
    desc: "Expert in aesthetic smile design and invisible aligner transformation."
  },
  {
    name: "Dr. Arun Kumar",
    degree: "MDS – Orthodontist",
    img: "/images/doctors/arun.webp",
    desc: "Advanced orthodontic specialist delivering faster predictable results."
  }
  
];

export default function DoctorsLuxury() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null);
  const trackRef = useRef(null);

  const CARD_WIDTH = 360;

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="lux-doctor-section">
        <div className="lux-header">
          <h2>Meet Our Smile Experts</h2>
          <p>Certified specialists delivering confident smiles</p>
        </div>

        <div className="lux-carousel">
          <motion.div
            ref={trackRef}
            className="lux-track"
            animate={{ x: -index * CARD_WIDTH }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                className="lux-card"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(doc)}
              >
                <div className="lux-img">
                  <img src={doc.img} alt={doc.name} />
                  <div className="spotlight"></div>
                </div>

                <div className="lux-info">
                  <h4>{doc.name}</h4>
                  <span>{doc.degree}</span>
                </div>

                <div className="gold-line"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}

      <AnimatePresence>
        {active && (
          <motion.div
            className="lux-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="lux-modal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lux-close" onClick={() => setActive(null)}>×</button>

              <img src={active.img} alt={active.name} />

              <h3>{active.name}</h3>
              <p className="degree">{active.degree}</p>
              <p className="desc">{active.desc}</p>

              <a href="/contact" className="lux-btn">
                Book Consultation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
