import { useEffect, useRef, useState } from "react";
import "../styles/GallerySection.css";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain landscape",
    category: "Nature",
    title: "Summit Silence",
    size: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    alt: "Forest path",
    category: "Nature",
    title: "Through the Pines",
    size: "wide",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    alt: "City at night",
    category: "Urban",
    title: "Neon Labyrinth",
    size: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    alt: "Sunrise over water",
    category: "Nature",
    title: "First Light",
    size: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    alt: "Aerial city view",
    category: "Urban",
    title: "Grid & Steel",
    size: "wide",
  },
 {
    id: 6,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    alt: "Flower field",
    category: "Nature",
    title: "Bloom Season",
    size: "normal",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    alt: "Snowy peaks",
    category: "Nature",
    title: "Glacial Calm",
    size: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    alt: "Aerial city view",
    category: "Urban",
    title: "Grid & Steel",
    size: "wide",
  },
];

const categories = ["All", "Nature", "Urban", "Travel"];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openLightbox = (img) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <h2 className="gallery-header__title">
          Visual <em>Stories</em>
        </h2>
        <p className="gallery-header__sub">
          A curated collection of moments from around the world.
        </p>
      </div>

      {/* Filters */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            className={`gallery-card gallery-card--${img.size}`}
            style={{ animationDelay: `${i * 60}ms` }}
            onClick={() => openLightbox(img)}
          >
            <div className="gallery-card__inner">
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-card__img"
                loading="lazy"
              />
              <div className="gallery-card__overlay">
                <span className="gallery-card__category">{img.category}</span>
                <h3 className="gallery-card__title">{img.title}</h3>
                <span className="gallery-card__cta">View ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox__close" onClick={closeLightbox}>
            ✕
          </button>
          <div
            className="gallery-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="gallery-lightbox__img"
            />
            <div className="gallery-lightbox__info">
              <span className="gallery-lightbox__category">
                {lightbox.category}
              </span>
              <h3 className="gallery-lightbox__title">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}