import { motion } from "framer-motion";
import VisionaryEntrepreneur from "./VisionaryEntrepreneur";
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
           Dr. Bladbin’s distinguished professional journey began with his <strong> Bachelor of Dental Surgery (B.D.S.) in 2000 </strong>, 
           where he earned numerous awards and academic distinctions for his dedication and excellence. Driven by a passion for surgical 
           precision and advanced dental care, he went on to complete his <strong> Master’s Degree in Oral and Maxillofacial Surgery </strong>, 
           emerging as the <strong> University Topper in 2011 </strong>.
           
          </p>

          <p>
          Committed to expanding his medical expertise beyond dentistry, he further completed his <strong> MBBS from Ukraine in 2021 </strong>, 
          strengthening his foundation as a comprehensive healthcare professional.
          </p>

          <p>
            To this day, he continues to innovate and transform smile care
            through <strong> cutting-edge aligner systems and patient-first philosophy.</strong>
          </p>
        </motion.div>

      </div>

      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.8 }}
  viewport={{ once: true }}
>
  <VisionaryEntrepreneur />
</motion.div>
      

      </section>
      
  );
}
