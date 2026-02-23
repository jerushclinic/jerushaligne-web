import { useState, useEffect } from "react";
import "../../styles/visionary.css";

export default function VisionaryEntrepreneur() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-wrapper">
        <h2 className="section-title">The Vision That Founded Jerushaligne</h2>


        <div className={`card${visible ? " visible" : ""}`}>
          {/* Text Column */}
          <div className="text-col">
            
            <div className="accent-line" />

            <p>
             To enhance his surgical proficiency, Dr. Bladbin pursued <strong> advanced postgraduate training in Implantology in Switzerland </strong>. 
             With <strong> nearly two decades of experience </strong>, he has established himself as a respected authority in the surgical and restorative 
             aspects of <strong> Dental Implantology </strong>. He also holds a <strong> PhD from the University of Sri Lanka </strong> and has obtained <strong>
             multiple international certifications</strong> through continuous postgraduate education across various countries. His global exposure enables 
             him to stay at the forefront of <strong> innovation, technology and best practices </strong> in modern dental care.
            </p>

            <p>
            Building upon this strong academic and clinical foundation, <strong> Jerushaligne was established in 2025 </strong> with a clear vision — to bring 
            <strong> world-class aligner technology </strong> and <strong> advanced dental solutions </strong> to patients with <strong> precision, innovation 
             uncompromising quality </strong>.
            </p>

            
 <div className="stat-row">
  <div className="stat-item">
    <span className="stat-value">20+</span>
    <span className="stat-label">Years of Leadership</span>
  </div>

  <div className="stat-item">
    <span className="stat-value">Global</span>
    <span className="stat-label">Clinical Exposure</span>
  </div>

  <div className="stat-item">
    <span className="stat-value">Next-Gen</span>
    <span className="stat-label">Aligner Innovation</span>
  </div>
</div>
          </div>

          {/* Image Column */}
          <div className="image-col">
            <img
              src="/images/doctors/dr-bladbin.png"
              alt="Dr. Bladbin – Founder, Jerushaligne"
              onError={(e) => {
                e.target.src = "https://placehold.co/400x533/d0e8e4/0d7a6e?text=Dr.+Bladbin";
              }}
            />
            <div className="image-overlay" />
          </div>
        </div>
      </section>
  );
}