import { useState } from "react";
import "../styles/component.css";

const doctors = [
  {
    name: "Dr. A. Bladbin",
    role: "MBBS(Ukraine), LLB, MDS(OMFS), PHD(Srilanka), PHD(Hons), FAM(Ger), MCHT(Ger), MCDC(Ger), Maxillofacial Surgeon",
    experience: "Chaiman, Jerush Groups",
    image: "/images/doctors/dr-bladbin-2.png",
    bio: "Dr. A. Bladbin stands as a paragon of excellence in the fields of dentistry and oral surgery, serving as the founding Chairman and Chief Dental Surgeon of Jerush Hospitals. Under his visionary leadership, the hospital has grown to serve and treat over one lakh active patients, becoming a beacon of advanced dental and facial healthcare.",
  },
  {
    name: "Dr. C. Binila Asir",
    role: "Oral & Maxillofacial Surgeon and Cosmetologist",
    experience: "Director, Jerush Groups",
    image: "/images/doctors/dr-binila.png",
    bio: "Dr. Binila serves as the esteemed Director of Jerush Dental Hospitals, bringing over 15 years of clinical experience as a leading dental surgeon. She completed her B.D.S. degree in 2004 and subsequently pursued a Postgraduate Master’s degree in Oral and Maxillofacial Surgery in 2012. Alongside her clinical excellence, she has carved a niche for herself as a Cosmetologist, seamlessly integrating aesthetic treatments into her dental practice.",
  },
];

export default function DoctorsSection() {
  const [activeDoctor, setActiveDoctor] = useState(null);

  return (
    <>
      <section className="doctors-section">
        <h2 className="doctors-title">Our Dental Experts</h2>
        <p className="doctors-subtitle">
          The Minds Behind Confident Smiles
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
