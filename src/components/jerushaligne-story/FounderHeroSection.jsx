import { motion } from "framer-motion";
import "../../styles/AboutPage.css";

export default function FounderSection() {
  return (
    <section className="founder-section">

      <div className="founder-container">

        {/* LEFT IMAGE SIDE */}
        <motion.div
          className="founder-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
         
          <img
            src="/images/doctors/bladbin-dr.png"
            alt="Founder"
            className="founder-image"
          />
        </motion.div>

        {/* RIGHT CONTENT SIDE */}
        <motion.div
          className="founder-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="top-title">
            HUMANITARIAN PAR EXCELLENCE – 'HEALER'
          </span>

          <h2 className="founder-name">
            Dr. Bladbin
          </h2>

          <h4 className="founder-role">
            Founder, Chairman
          </h4>

          <p>
           Dr. A. Bladbin stands as a paragon of excellence in the fields of dentistry and oral surgery, 
           serving as the founding Chairman and Chief Dental Surgeon of Jerush Hospitals. 
           
          </p>

          <p>
           Under his visionary leadership, the hospital has grown to serve and treat over one lakh active 
           patients, becoming a beacon of advanced dental and facial healthcare.
          </p>

          <p>
            To this day, he continues to innovate and transform smile care
            through cutting-edge aligner systems and patient-first philosophy.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
