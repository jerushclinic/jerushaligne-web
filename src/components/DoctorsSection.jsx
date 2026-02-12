import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/component.css";

const doctors = [
  {
    name: "Dr. Naveen Raj",
    degree: "MDS – Dentofacial Orthopedics",
    img: "/images/doctors/naveen.webp",
    desc: "Orthodontic specialist focused on aligners and advanced smile planning."
  },
  {
    name: "Dr. Meera Joseph",
    degree: "BDS – Cosmetic Dentistry",
    img: "/images/doctors/meera.webp",
    desc: "Smile design expert delivering confident invisible aligner transformations."
  },
  {
    name: "Dr. Arun Kumar",
    degree: "MDS – Orthodontist",
    img: "/images/doctors/arun.webp",
    desc: "Advanced orthodontic specialist with years of clinical experience."
  }
];

export default function DoctorsSection() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % doctors.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? doctors.length - 1 : prev - 1
    );
  };

  const currentDoctor = doctors[index];

  return (
    <>
      <section className="doc-section">
        <div className="doc-header">
          <h2>Meet Our Smile Experts</h2>
          <p>Certified doctors driving confident smiles</p>
        </div>

        <div className="doc-carousel">

          <button className="doc-arrow left" onClick={prev}>‹</button>

          <motion.div
            key={index}
            className="doc-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelected(currentDoctor)}
          >
            <div className="doc-image">
              <img src={currentDoctor.img} alt={currentDoctor.name} />
            </div>

            <div className="doc-info">
              <h4>{currentDoctor.name}</h4>
              <span>{currentDoctor.degree}</span>
            </div>
          </motion.div>

          <button className="doc-arrow right" onClick={next}>›</button>

        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="doc-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="doc-modal"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
              >
                ×
              </button>

              <img src={selected.img} alt={selected.name} />

              <h3>{selected.name}</h3>
              <p className="degree">{selected.degree}</p>
              <p className="desc">{selected.desc}</p>

              <a href="/contact" className="consult-btn">
                Book Consultation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
