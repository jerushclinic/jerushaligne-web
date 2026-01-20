import React, { useState, useRef, useEffect } from "react";
import "../styles/component.css";

/* ================= GALLERY DATA ================= */
const galleryImages = [
  { src: "/images/gallery/1.jpg", caption: "Jerushaligne early team gathering and celebration" },
  { src: "/images/gallery/2.png", caption: "Doctor-guided orthodontic treatment session" },
  { src: "/images/gallery/3.png", caption: "Precision aligner planning and digital workflow" },
  { src: "/images/gallery/4.png", caption: "Confident smiles after successful treatment" },
  { src: "/images/gallery/5.png", caption: "Advanced monitoring and clinical expertise in action" },
  { src: "/images/gallery/6.png", caption: "Team collaboration behind every perfect smile" },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scale, setScale] = useState(1);
  const [paused, setPaused] = useState(false);

  const carouselRef = useRef(null);
  const startX = useRef(0);

  /* ================= AUTO CAROUSEL ================= */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;

      const scrollAmount = container.clientWidth * 0.6;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Loop back
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 600);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  /* ================= POPUP ================= */
  const open = (i) => {
    setActiveIndex(i);
    setScale(1);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setActiveIndex(null);
    document.body.style.overflow = "auto";
  };

  const next = () =>
    setActiveIndex((i) => (i + 1) % galleryImages.length);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));

  /* ================= SWIPE ================= */
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <>
      {/* ================= SECTION ================= */}
      <section className="gallery-section">
        <div className="gallery-box">
          <h2 className="gallery-title">Moments That Define Us</h2>
          <p className="gallery-subtitle">Click any photo to view</p>

          <div
            ref={carouselRef}
            className="gallery-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-card"
                onClick={() => open(i)}
              >
                <img src={img.src} alt={img.caption} />
                <span className="gallery-hint">Click to view</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPUP ================= */}
      {activeIndex !== null && (
        <div className="gallery-popup" onClick={close}>
          <div
            className="gallery-popup-inner"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button className="close-btn" onClick={close}>✕</button>
            <button className="nav prev" onClick={prev}>‹</button>
            <button className="nav next" onClick={next}>›</button>

            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].caption}
              style={{ transform: `scale(${scale})` }}
              onWheel={(e) =>
                setScale((s) =>
                  Math.min(3, Math.max(1, s + e.deltaY * -0.001))
                )
              }
            />

            <p className="gallery-caption">
              {galleryImages[activeIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
