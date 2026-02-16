import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/component.css";

const shorts = [
  {
    title: "Can I Wear Aligners?",
    subtitle: "Which is better?",
    thumbnail: "/images/shorts/short1.webp",
    video: "https://www.youtube.com/embed/DHFulaSlBPU"
  },
  {
    title: "Stop Hiding Your Smile!",
    subtitle: "We have a Solution",
    thumbnail: "/images/shorts/short2.webp",
    video: "https://www.youtube.com/embed/I6swy0zwgYU"
  },
  {
    title: "My Tooth Falls Out?",
    subtitle: "What I do first?",
    thumbnail: "/images/shorts/short3.webp",
    video: "https://www.youtube.com/embed/ml1ysgN_w5E"
  },
  {
    title: "We Design It For You!",
    subtitle: "For your stylish smile",
    thumbnail: "/images/shorts/short4.webp",
    video: "https://www.youtube.com/embed/ELKDP3aG22c"
  }
];

const loopShorts = [...shorts, ...shorts];

export default function TeethShortsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  const speed = 0.4; // smoother

  useEffect(() => {
    const animate = () => {
      if (!isPaused.current && trackRef.current) {
        positionRef.current -= speed;

        const halfWidth = trackRef.current.scrollWidth / 2;

        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current = 0;
        }

        trackRef.current.style.transform =
          `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <>
      <section className="shorts-section">
        <div className="shorts-header">
          <h2>Watch Quick Tip Shorts</h2>
          <p>For your confident smile</p>
        </div>

        <div
          className="shorts-viewport"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          <div className="shorts-track" ref={trackRef}>
            {loopShorts.map((item, i) => (
              <div
                key={i}
                className="short-card"
                onClick={() => setActiveVideo(item.video)}
              >
                <div className="thumb">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="play-btn">
                    <span>▶</span>
                  </div>
                </div>

                <div className="short-info">
                  <h4>{item.title}</h4>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="shorts-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="shorts-modal"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close"
                onClick={() => setActiveVideo(null)}
              >
                ×
              </button>

              <iframe
                src={`${activeVideo}?autoplay=1`}
                title="Dental Short"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
