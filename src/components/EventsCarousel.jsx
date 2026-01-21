import { useEffect, useRef, useState } from "react";
import "../styles/component.css";

/* ================= EVENTS DATA ================= */
const EVENTS_DATA = [
  {
    title: "A Significant Step Towards International Expansion with Hon. Minister of Foreign Affairs, Mauritius 🇲🇺 regarding the Jerush expansion. Building bridges beyond borders.",
    tag: "19-01-2026",
    image: "/images/events/event2.webp",
  },
  {
    title: "I.A.E & Euro Star Awards 2025 - Global Clear Aligner Innovation Award. Certificate of Excellence in London, UK, for 𝗝𝗘𝗥𝗨𝗦𝗛𝗔𝗟𝗜𝗚𝗡𝗘 (Clear Aligners).",
    tag: "10-12-2026",
    image: "/images/events/event1.jpeg",
  },
  {
    title: "Honoured as *Cosmetic Dentist of the Year 2024* at the prestigious IAE & British Healthcare Awards held in London, UK",
    tag: "04-12-2024",
    image: "/images/events/event3.webp",
  },
];

export default function EventsCarousel() {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i) => {
    if (!sliderRef.current || !slideRef.current) return;
    const next = (i + EVENTS_DATA.length) % EVENTS_DATA.length;

    setIndex(next);
    sliderRef.current.scrollTo({
      left: slideRef.current.offsetWidth * next,
      behavior: "smooth",
    });
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [index, paused]);

  return (
    <section className="events-section">
      <div className="events-container">

        {/* Header */}
        <div className="events-header">
          <h2 className="events-title">What’s New At Jerushaligne</h2>
          <button className="events-btn">Explore More →</button>
        </div>

        {/* Carousel */}
        <div className="events-carousel">
          <div
            ref={sliderRef}
            className="events-track"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {EVENTS_DATA.map((event, i) => (
              <div
                key={i}
                ref={i === 0 ? slideRef : null}
                className="events-slide"
              >
                <div className="event-card">
                  <img src={event.image} alt={event.title} />
                  <div className="event-overlay">
                    <span>{event.tag}</span>
                    <h3>{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="events-arrows">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
