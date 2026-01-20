import { useEffect, useRef, useState } from "react";
import "../styles/component.css";

/* ================= EVENTS DATA ================= */
const EVENTS_DATA = [
  {
    title: "A Significant Step Towards International Expansion ",
    tag: "19-01-2026",
    image: "/images/events/event2.webp",
  },
  {
    title: "Jerush Dental Conclave 2024",
    tag: "Latest Update",
    image: "/images/events/event1.jpeg",
  },
  {
    title: "Jerush Hospital completes 500 robotic cardiac procedures",
    tag: "Latest Update",
    image: "/images/events/event1.jpeg",
  },
  {
    title: "Jerush achieves 4.5-hour dental treatment window",
    tag: "Latest Update",
    image: "/images/events/event1.jpeg",
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
