import { useState, useEffect, useRef, useCallback } from "react";
import "../../styles/PatronReviews.css";

const reviewsData = [
  {
    id: 1,
    name: "Ashwini",
    treatment: "Aligners",
    photo: "/images/reviews/patron1.webp",
    text: "Jerushaligne does it fine! I was nervous at first, but the team made the whole aligner journey so smooth. My smile looks more beautiful than I ever imagined. Totally worth it!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ishika",
    treatment: "Tooth Cleaning",
    photo: "/images/reviews/patron2.webp",
    text: "Visited Jerushaligne for teeth cleaning and I'm so impressed. The clinic is spotless, the staff is warm, and my teeth feel brand new. I keep smiling at myself in the mirror now!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sandeep",
    treatment: "Aligners",
    photo: "/images/reviews/patron3.webp",
    text: "Hands down the best aligners treatment I could have asked for. Jerushaligne's precision and care at every step made the difference. My confidence has gone through the roof!",
    rating: 5,
  },
  {
    id: 4,
    name: "Bishan",
    treatment: "Tooth Cleaning",
    photo: "/images/reviews/patron4.webp",
    text: "The team at Jerushaligne is exceptional. My teeth scaling was painless and thorough. The doctor explained everything clearly and the results are outstanding. Highly recommend!",
    rating: 5,
  },
  {
    id: 5,
    name: "Archana",
    treatment: "Tooth Extraction",
    photo: "/images/reviews/patron5.webp",
    text: "I was dreading the extraction, but Jerushaligne made it completely stress-free. The care and comfort they provided was beyond my expectations. My smile looks great again!",
    rating: 5,
  },
  {
    id: 6,
    name: "Gurusheen",
    treatment: "Aligners",
    photo: "/images/reviews/patron6.webp",
    text: "Jerushaligne truly delivers on their promise. The aligners fit perfectly and the results speak for themselves — my smile looks more beautiful every single day. Thank you so much!",
    rating: 5,
  },
  {
    id: 7,
    name: "Akash",
    treatment: "Tooth Extraction",
    photo: "/images/reviews/patron7.webp",
    text: "Professional, caring, and incredibly skilled. Jerushaligne handled my treatment with so much attention to detail. The clinic is world-class and my recovery was faster than expected.",
    rating: 5,
  },
  {
    id: 8,
    name: "Priya",
    treatment: "Aligners",
    photo: "/images/reviews/patron8.webp",
    text: "The best decision I made was choosing Jerushaligne for my aligners. The German-UK technology they use is incredible. My teeth are perfectly aligned and my smile has never looked this good!",
    rating: 5,
  },
];

const AUTO_DELAY = 3000;

// Responsive hook — returns correct visible card count per screen size
function useVisibleCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return count;
}

export default function PatronReviews() {
  const [pr_index, setPrIndex] = useState(0);
  const [pr_paused, setPrPaused] = useState(false);
  const [pr_dragging, setPrDragging] = useState(false);
  const pr_dragStart = useRef(null);
  const pr_timer = useRef(null);
  const pr_trackRef = useRef(null);

  // VISIBLE is now reactive — updates on window resize
  const pr_visible = useVisibleCount();
  const pr_total = reviewsData.length;
  const pr_maxIndex = pr_total - pr_visible;

  // Reset index if out of range after resize
  useEffect(() => {
    setPrIndex((p) => (p > pr_maxIndex ? 0 : p));
  }, [pr_maxIndex]);

  const pr_goTo = useCallback((idx) => {
    let next = idx;
    if (next < 0) next = pr_maxIndex;
    if (next > pr_maxIndex) next = 0;
    setPrIndex(next);
  }, [pr_maxIndex]);

  const pr_prev = () => pr_goTo(pr_index - 1);
  const pr_next = () => pr_goTo(pr_index + 1);

  // Auto scroll
  useEffect(() => {
    if (pr_paused) return;
    pr_timer.current = setInterval(() => {
      setPrIndex((p) => (p >= pr_maxIndex ? 0 : p + 1));
    }, AUTO_DELAY);
    return () => clearInterval(pr_timer.current);
  }, [pr_paused, pr_maxIndex]);

  // Touch / drag support
  const pr_onDragStart = (e) => {
    pr_dragStart.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setPrDragging(true);
    setPrPaused(true);
  };

  const pr_onDragEnd = (e) => {
    if (!pr_dragging || pr_dragStart.current === null) return;
    const end = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = pr_dragStart.current - end;
    if (Math.abs(diff) > 40) diff > 0 ? pr_next() : pr_prev();
    setPrDragging(false);
    pr_dragStart.current = null;
    setTimeout(() => setPrPaused(false), 1500);
  };

  // Card width & offset always computed from the SAME pr_visible — stays in sync
  const pr_cardWidth = 100 / pr_visible;
  const pr_offset = pr_index * pr_cardWidth;

  return (
    <section
      className="pr-section"
      onMouseEnter={() => setPrPaused(true)}
      onMouseLeave={() => setPrPaused(false)}
    >
      {/* Header */}
      <div className="pr-header">
        <span className="pr-eyebrow">Testimonials</span>
        <h2 className="pr-heading">
          Hear it from our <span className="pr-heading-accent">happy patrons</span>
        </h2>
      </div>

      {/* Slider wrapper */}
      <div className="pr-viewport">
        <div
          ref={pr_trackRef}
          className="pr-track"
          style={{ transform: `translateX(-${pr_offset}%)` }}
          onMouseDown={pr_onDragStart}
          onMouseUp={pr_onDragEnd}
          onMouseLeave={pr_onDragEnd}
          onTouchStart={pr_onDragStart}
          onTouchEnd={pr_onDragEnd}
        >
          {reviewsData.map((rv) => (
            // inline style drives card width — perfectly in sync with JS offset
            <div key={rv.id} className="pr-card" style={{ flex: `0 0 ${pr_cardWidth}%` }}>
              <div className="pr-card-inner">
                <div className="pr-photo-wrap">
                  <img
                    src={rv.photo}
                    alt={rv.name}
                    className="pr-photo"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/160x180/ffd700/1a3a2a?text=${rv.name[0]}`;
                    }}
                  />
                </div>
                <div className="pr-info">
                  <p className="pr-patron-name">{rv.name}</p>
                  <span className="pr-treatment-tag">{rv.treatment}</span>
                </div>
                <div className="pr-stars">
                  {"★".repeat(rv.rating)}{"☆".repeat(5 - rv.rating)}
                </div>
                <p className="pr-text">{rv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="pr-controls">
        <button className="pr-arrow-btn pr-arrow-btn--left" onClick={pr_prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div className="pr-dots">
          {Array.from({ length: pr_maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`pr-dot ${i === pr_index ? "pr-dot--active" : ""}`}
              onClick={() => pr_goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="pr-arrow-btn pr-arrow-btn--right" onClick={pr_next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
}