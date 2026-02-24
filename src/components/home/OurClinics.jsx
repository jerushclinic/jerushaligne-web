import { useState, useEffect, useRef } from "react";
import "../../styles/OurClinics.css";

const clinicImages = [
  "/images/how-to-get-jerushaligne/jerush-hospital.webp",
  "/images/how-to-get-jerushaligne/dental-measurements.webp",
  "/images/how-to-get-jerushaligne/get-aligner.webp",
  "/images/how-to-get-jerushaligne/smiling-girl.webp",
];

const features = [
  { icon: "🦷", text: "Advanced German-UK aligner technology" },
  { icon: "⭐", text: "Standardized precision care across all outlets" },
  { icon: "🏥", text: "Multiple specialist clinics across Tamil Nadu" },
];

const outlets = ["Thuckalay", "Trichy", "Chennai"];

const outletLinks = {
  Thuckalay: "/outlets/thuckalay-outlet",
  Trichy:    "/outlets/trichy-outlet",
  Chennai:   "/outlets/chennai-outlet",
};

// Responsive hook — 1 card on mobile, 2 on tablet, rest on desktop
function useSlideVisible() {
  const getCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth <= 600) return 1;
    return 1;
  };
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return count;
}

export default function OurClinics() {
  const [current, setCurrent] = useState(0);
  const [selectedOutlet, setSelectedOutlet] = useState(outlets[0]);
  const [dropOpen, setDropOpen] = useState(false);
  const intervalRef = useRef(null);

  const visible = useSlideVisible();
  const total = clinicImages.length;
  const maxIndex = total - visible;

  // Reset if out of range on resize
  useEffect(() => {
    setCurrent((p) => (p > maxIndex ? 0 : p));
  }, [maxIndex]);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
    }, 6000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    let next = i;
    if (next < 0) next = maxIndex;
    if (next > maxIndex) next = 0;
    setCurrent(next);
    startAuto();
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Card width and offset both derived from same `visible` value
  const cardWidth = 100 / visible;
  const offset = current * cardWidth;

  return (
    <section className="oc-section">
      {/* ── LEFT CARD ── */}
      <div className="oc-card oc-card--left">
        <p className="oc-eyebrow">Jerushaligne</p>
        <h2 className="oc-title">Look forward to your perfect smile</h2>

        {/* Image slider */}
        <div className="oc-slider">
          <div
            className="oc-track"
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {clinicImages.map((src, i) => (
              <div key={i} className="oc-slide" style={{ flex: `0 0 ${cardWidth}%` }}>
                <img
                  src={src}
                  alt={`Clinic ${i + 1}`}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/300x220/ffd700/1a3a2a?text=Clinic+${i + 1}`;
                  }}
                />
              </div>
            ))}
          </div>

          <button className="oc-arrow oc-arrow--left" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="oc-arrow oc-arrow--right" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="oc-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`oc-dot ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="oc-features">
          {features.map((f, i) => (
            <div key={i} className="oc-feature">
              <span className="oc-feature-icon">{f.icon}</span>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="oc-cta-row">
          <div className="oc-dropdown">
            <button
              className="oc-drop-btn"
              onClick={() => setDropOpen((p) => !p)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {selectedOutlet}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {dropOpen && (
              <ul className="oc-drop-menu">
                {outlets.map((o) => (
                  <li key={o}>
                    <button
                      className={selectedOutlet === o ? "active" : ""}
                      onClick={() => { setSelectedOutlet(o); setDropOpen(false); }}
                    >
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href={outletLinks[selectedOutlet]} className="oc-btn-primary">
            Find Jerushaligne Near You
          </a>
        </div>
      </div>

      {/* ── RIGHT CARD ── */}
      <div className="oc-card oc-card--right">
        <p className="oc-eyebrow oc-eyebrow--light">Digital Consultation</p>
        <h2 className="oc-title oc-title--light">
          Can't visit in person?<br />
          Schedule a Call Now
        </h2>

        <a href="/contact-us" className="oc-btn-outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>
          Consult Now
        </a>

        <div className="oc-consult-img">
          <img
            src="/images/phone-talk.webp"
            alt="Digital Consultation"
            onError={(e) => {
              e.target.src = "https://placehold.co/420x280/1a3a2a/ffd700?text=Virtual+Consult";
            }}
          />
       
        </div>
      </div>
    </section>
  );
}