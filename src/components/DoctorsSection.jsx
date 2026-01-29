import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/component.css";

/* ================= DATA ================= */

const doctors = [
  {
    name: "Dr. Priya Sharma",
    degree: "BDS, Invisalign Certified",
    img: "/images/doctors/priya.webp",
    desc: "Expert in invisible aligner treatments with a patient-first approach.",
    socials: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Dr. Naveen Raj",
    degree: "MDS – Dentofacial Orthopedics",
    img: "/images/doctors/naveen.webp",
    desc: "Specialist in orthodontics with advanced aligner planning expertise.",
    socials: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Dr. Meera Joseph",
    degree: "BDS – Cosmetic Dentistry",
    img: "/images/doctors/meera.webp",
    desc: "Focused on aesthetic smile corrections and cosmetic dentistry.",
    socials: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Dr. Arun Kumar",
    degree: "MDS – Orthodontist",
    img: "/images/doctors/arun.webp",
    desc: "Aligner expert with years of orthodontic clinical experience.",
    socials: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
];

/* duplicate for infinite loop */
const loopDoctors = [...doctors, ...doctors];

/* ================= COMPONENT ================= */

export default function DoctorsCarousel() {
  const [index, setIndex] = useState(0);
  const [activeDoctor, setActiveDoctor] = useState(null);
  const intervalRef = useRef(null);

  const CARD_WIDTH = 340;
  const TOTAL = doctors.length;

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ================= LOOP FIX ================= */

  useEffect(() => {
    if (index === TOTAL) {
      setTimeout(() => {
        setIndex(0);
      }, 500);
    }
  }, [index, TOTAL]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => (i === 0 ? TOTAL - 1 : i - 1));

  /* ================= RENDER ================= */

  return (
    <>
      <section className="doctor-section">
        <div className="doctor-header">
          <h2>Meet Our Smile Experts</h2>
          <p>Certified doctors driving confident smiles with Jerushaligne</p>
        </div>

        <div className="doctor-carousel-wrapper">
          <button className="doc-arrow left" onClick={prev}>‹</button>

          <div className="doctor-viewport">
            <motion.div
              className="doctor-track"
              animate={{ x: -index * CARD_WIDTH }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {loopDoctors.map((doc, i) => (
                <div
                  className="doctor-card"
                  key={i}
                  onClick={() => setActiveDoctor(doc)}
                >
                  <img src={doc.img} alt={doc.name} />
                  <h4>{doc.name}</h4>
                  <span>{doc.degree}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="doc-arrow right" onClick={next}>›</button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeDoctor && (
          <motion.div
            className="doctor-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDoctor(null)}
          >
            <motion.div
              className="doctor-modal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActiveDoctor(null)}>
                ×
              </button>

              <img src={activeDoctor.img} alt={activeDoctor.name} />

              <h3>{activeDoctor.name}</h3>
              <p className="degree">{activeDoctor.degree}</p>
              <p className="desc">{activeDoctor.desc}</p>

              <div className="doctor-socials">
                <a href={activeDoctor.socials.instagram}>📸</a>
                <a href={activeDoctor.socials.linkedin}>💼</a>
                <a href={activeDoctor.socials.whatsapp}>💬</a>
              </div>

              <a href="/contact" className="consult-btn big">
                Consult Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
