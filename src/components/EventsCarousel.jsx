import { useEffect, useRef, useState } from "react";
import "../styles/events-carousel.css";

/* ================= EVENTS DATA ================= */
const events = [
  {
    title:
      "A Significant Step Towards International Expansion with Hon. Minister of Foreign Affairs, Mauritius 🇲🇺 regarding the Jerush expansion. Building bridges beyond borders.",
    tag: "19-01-2026",
    image: "/images/events/event2.webp",
  },
  {
    title:
      "I.A.E & Euro Star Awards 2025 - Global Clear Aligner Innovation Award. Certificate of Excellence in London, UK, for JERUSHALIGNE (Clear Aligners).",
    tag: "10-12-2026",
    image: "/images/events/event1.jpeg",
  },
  {
    title:
      "Honoured as Cosmetic Dentist of the Year 2024 at the prestigious IAE & British Healthcare Awards held in London, UK",
    tag: "04-12-2024",
    image: "/images/events/event3.webp",
  },
  
];

export default function EventsCarousel() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    const next = (index + 1) % events.length;
    setIndex(next);
    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * next,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const prev = index === 0 ? events.length - 1 : index - 1;
    setIndex(prev);
    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * prev,
      behavior: "smooth",
    });
  };

  return (
    <section className="events-section">
      <div className="events-container">
        {/* HEADER */}
        <div className="events-header">
          <h3>What’s New At Jerushaligne</h3>
          <button className="events-cta">Explore More →</button>
        </div>

        {/* SLIDER */}
        <div className="events-slider-wrapper">
          <div ref={sliderRef} className="events-slider">
            {events.map((event, i) => (
              <div className="event-slide" key={i}>
                <div className="event-card">
                  <img src={event.image} alt={event.title} />

                  <div className="event-overlay">
                    <span className="event-date">{event.tag}</span>
                    <h3>{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="events-controls">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
