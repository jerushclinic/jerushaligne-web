import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/outlet-showcase.css";

export default function OutletShowcase({
  city,
  rating,
  timings,
  address,
  phone,
  clinicImages,
  banners,
  mapSrc,
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveImage((p) => (p + 1) % clinicImages.length),
      6000
    );
    return () => clearInterval(t);
  }, [clinicImages.length]);

  useEffect(() => {
    const t = setInterval(
      () => setActiveBanner((p) => (p + 1) % banners.length),
      6500
    );
    return () => clearInterval(t);
  }, [banners.length]);

  return (
    <section className="outlet-showcase">
      <div className="outlet-showcase-inner">

        {/* LEFT */}
        <div className="outlet-info">

          {/* ✅ LINKABLE BREADCRUMB */}
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> › </span>
            <Link to="/our-outlets">Our Outlets</Link>
            <span> › </span>
            <span className="current">{city}</span>
          </div>

          <h1>
            Best Dental Hospital in <span>{city}</span>
          </h1>

          <div className="rating">
            <img src="/images/outlets/g-logo.webp" alt="Google" />
            <strong>{rating}/4.5</strong>
            <span>Average Rating</span>
            <span className="stars">★★★★★</span>
          </div>

          <ul className="outlet-meta">
            <li>🕒 {timings}</li>
            <li>📍 {address}</li>
          </ul>

          <div className="cta-row">
            <a href={`tel:${phone}`} className="btn-outline">
              Call Now
            </a>
            <a href="#appointment" className="btn-primary">
              Book Appointment
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="image-slider">
          {clinicImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className={i === activeImage ? "active" : ""}
              alt="Clinic"
            />
          ))}
        </div>

        {/* RIGHT */}
        <div className="right-stack">
          <div className="banner-slider">
            {banners.map((img, i) => (
              <img
                key={i}
                src={img}
                className={i === activeBanner ? "active" : ""}
                alt="Banner"
              />
            ))}
          </div>

          <div className="map-box">
            <iframe
              title={`${city} Location`}
              src={mapSrc}
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
