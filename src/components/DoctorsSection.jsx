import { useState } from "react";
import "../styles/component.css";

const doctors = [
  {
    name: "Dr. Jerush Kumar",
    role: "Chief Orthodontist",
    experience: "25+ Years Experience",
    image: "/images/doctors/dr-bladbin-2.png",
    bio: "Pioneer in advanced orthodontics with decades of experience in complex smile transformations.",
  },
  {
    name: "Dr. Ananya Jerush",
    role: "Senior Smile Design Specialist",
    experience: "12+ Years Experience",
    image: "/images/doctors/dr-binila.png",
    bio: "Expert in aesthetic smile design, digital planning, and patient-focused care.",
  },
];

export default function DoctorsSection() {
  const [activeDoctor, setActiveDoctor] = useState(null);

  return (
    <>
      <section className="doctors-section">
        <h2 className="doctors-title">Our Experts</h2>
        <p className="doctors-subtitle">
          The minds behind confident smiles
        </p>

        <div className="doctors-list">
          {doctors.map((doc, i) => (
            <div key={i} className="doctor-card">
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <span className="doctor-role">{doc.role}</span>
                <p className="doctor-exp">{doc.experience}</p>

                <button
                  className="doctor-btn"
                  onClick={() => setActiveDoctor(doc)}
                >
                  View Profile
                </button>
              </div>

              {/* CUT-OUT IMAGE */}
              <img
                src={doc.image}
                alt={doc.name}
                className="doctor-image"
                onClick={() => setActiveDoctor(doc)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {activeDoctor && (
        <div
          className="doctor-popup-overlay"
          onClick={() => setActiveDoctor(null)}
        >
          <div
            className="doctor-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setActiveDoctor(null)}
            >
              ✕
            </button>

            <img src={activeDoctor.image} alt={activeDoctor.name} />

            <h3>{activeDoctor.name}</h3>
            <span>{activeDoctor.role}</span>
            <p>{activeDoctor.bio}</p>
          </div>
        </div>
      )}
    </>
  );
}
