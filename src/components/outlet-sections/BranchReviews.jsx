import { useEffect, useRef } from "react";
import "../../styles/outlet-showcase.css";

export default function BranchReviews({
  rating = "4.9",
  totalReviews = "3 Lakh+",
  reviews = []
}) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const animation = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-50%)" }
      ],
      {
        duration: 25000,
        iterations: Infinity
      }
    );

    return () => animation.cancel();
  }, []);

  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="review-section-light">
      <div className="review-container">

        {/* LEFT SUMMARY */}
        <div className="review-summary">
          <img
            src="/images/outlets/g-logo.webp"
            alt="Google"
            className="google-logo"
          />

          <h3>{totalReviews} verified ratings</h3>

          <div className="stars">★★★★★</div>

          <p>
            Average rating of <strong>{rating}</strong>
          </p>

         
        </div>

        {/* RIGHT SLIDER */}
        <div className="review-slider">
          <div className="review-track" ref={trackRef}>
            {extendedReviews.map((item, i) => (
              <div className="review-card" key={i}>
                <div className="card-top">
                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>

                  <img
                    src="/images/outlets/g-logo.webp"
                    alt="Google"
                    className="g-badge"
                  />
                </div>

                <h4>{item.name}</h4>

                <div className="stars small">
                  {"★".repeat(item.rating)}
                </div>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
