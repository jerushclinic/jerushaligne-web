import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/before-after-carousel.css";

const patients = [
  {
    name: "S. Kumar",
    procedure: "Clear Aligner Treatment",
    date: "Aug 2025",
    before: "/images/dental-aligns/before.jpg",
    after: "/images/dental-aligns/after.jpg",
  },
  {
    name: "R. Meena",
    procedure: "Smile Correction",
    date: "Jul 2025",
    before: "/images/dental-aligns/before.jpg",
    after: "/images/dental-aligns/after.jpg",
  },
  {
    name: "A. Joseph",
    procedure: "Teeth Alignment",
    date: "Jun 2025",
    before: "/images/dental-aligns/before.jpg",
    after: "/images/dental-aligns/after.jpg",
  },
];

export default function BeforeAfterCarousel() {
  const [active, setActive] = useState(0);
  const [slider, setSlider] = useState(50);
  const intervalRef = useRef(null);

  const patient = patients[active];

  useEffect(() => {
    intervalRef.current = setInterval(next, 10000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const next = () => {
    setSlider(50);
    setActive((p) => (p + 1) % patients.length);
  };

  const prev = () => {
    setSlider(50);
    setActive((p) => (p === 0 ? patients.length - 1 : p - 1));
  };

  return (
    <section className="before-after">
      <div className="before-after-container">
        {/* HEADER */}
        <motion.div
          className="before-after-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Before & After – Patient Smiles</h2>
          <p>Real patient transformations. Slide or tap to compare results.</p>
        </motion.div>

        <div className="before-after-grid">
          {/* PATIENT CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="patient-card"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
            >
              <span className="patient-tag">Patient Details</span>

              <h3>{patient.name}</h3>

              <ul>
                <li>
                  <strong>Procedure:</strong> {patient.procedure}
                </li>
                <li>
                  <strong>Completed:</strong> {patient.date}
                </li>
              </ul>

              <div className="patient-note">
                Images shared with patient consent. Individual results may vary.
              </div>

              <button className="patient-cta">Book Consultation</button>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE COMPARISON */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="compare-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <img src={patient.before} alt="Before" />

              <motion.div
                className="after-layer"
                animate={{ width: `${slider}%` }}
              >
                <img src={patient.after} alt="After" />
              </motion.div>

              <div className="compare-labels">
                <button onClick={() => setSlider(0)}>Before</button>
                <button onClick={() => setSlider(100)}>After</button>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={slider}
                onChange={(e) => setSlider(e.target.value)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="carousel-controls">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </div>
    </section>
  );
}
