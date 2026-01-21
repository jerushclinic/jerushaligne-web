import React, { useEffect, useState } from "react";
import "../styles/component.css";

const timelineData = [
  {
    year: "2024",
    title: "Doctor-Guided Excellence",
    desc: "Expert-led treatments and advanced monitoring became our core strength.",
    image: "/images/timeline/2026.webp",
  },
  {
    year: "2025",
    title: "Precision at Scale",
    desc: "Large-scale smile transformations delivered with consistent accuracy.",
    image: "/images/timeline/2026.webp",
  },
  {
    year: "2026",
    title: "A Trusted Brand",
    desc: "Jerushaligne stands for precision, care, and confident smiles worldwide.",
    image: "/images/timeline/2026.webp",
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  /* AUTO ADVANCE */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % timelineData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <>
      <section className="timeline-section">
        <div className="timeline-container">
          <h2 className="timeline-title">Journey of Jerushaligne</h2>
          <p className="timeline-subtitle">
            From a Vision to a Trusted Smile Transformation Brand
          </p>

          {/* YEARS */}
          <div className="timeline-year-wrap">
            <div className="timeline-rail">
              {timelineData.map((item, i) => (
                <div
                  key={i}
                  className={`timeline-year ${
                    i === activeIndex ? "active pulse" : ""
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="year-text">{item.year}</span>
                  <span className="year-dot" />
                </div>
              ))}
            </div>

            {/* PROGRESS */}
            <div className="timeline-progress">
              <span
                className="timeline-progress-fill"
                style={{
                  width: `${((activeIndex + 1) / timelineData.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* CARD STACK */}
          <div
            className="timeline-card-stage"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {timelineData.map((item, i) => (
              <article
                key={i}
                className={`timeline-card ${
                  i === activeIndex ? "active" : ""
                }`}
              >
                <div className="timeline-card-inner">
                  <div className="timeline-paper">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>

                  <div className="timeline-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      onClick={() => setPopupImage(item.image)}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE POPUP */}
      {popupImage && (
        <div className="image-popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="image-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close">✕</button>
            <img src={popupImage} alt="Preview" />
          </div>
        </div>
      )}
    </>
  );
}
