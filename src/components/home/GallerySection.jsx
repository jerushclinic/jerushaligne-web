import { useState } from "react";
import "../../styles/GallerySection.css";

const images = [
  {
    id: 1,
    src: "/images/gallery/11.png",
    alt: "Clear Aligner",
    category: "Aligner",
    title: "Teeth Making",
    size: "tall",
  },
  {
    id: 2,
    src: "/images/gallery/12.png",
    alt: "Treatment",
    category: "Treatment",
    title: "Teeth Design",
    size: "wide",
  },
  {
    id: 3,
    src: "/images/gallery/5.png",
    alt: "Machinery",
    category: "Machinery",
    title: "Aligner Teeth Design",
    size: "normal",
  },
  {
    id: 4,
    src: "/images/gallery/6.png",
    alt: "Machinery",
    category: "Machinery",
    title: "Design Model",
    size: "normal",
  },
  {
    id: 5,
    src: "/images/gallery/2.png",
    alt: "Caring",
    category: "Treatment",
    title: "Treating with Care",
    size: "wide",
  },
  {
    id: 6,
    src: "/images/gallery/7.png",
    alt: "Flower field",
    category: "Machinery",
    title: "3D Scanning",
    size: "normal",
  },
  {
    id: 7,
    src: "/images/gallery/10.png",
    alt: "Snowy peaks",
    category: "Machinery",
    title: "Glacial Calm",
    size: "normal",
  },
  {
    id: 8,
    src: "/images/gallery/9.png",
    alt: "Aerial city view",
    category: "Machinery",
    title: "Teeth Design",
    size: "wide",
  },
];

const categories = ["All", "Aligner", "Treatment", "Machinery"];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const filtered =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (img) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  // Close lightbox on Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header-row">
          <div className="gallery-header">
            <h2 className="gallery-header__title">
              Visual <em>Stories</em>
            </h2>
            <p className="gallery-header__sub">
              A curated collection of moments from around the world.
            </p>
          </div>
          <button className="gallery-view-more">View More →</button>
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
              // key includes activeFilter so animation re-fires on every filter change
              key={`${img.id}-${activeFilter}`}
              className={`gallery-card gallery-card--${img.size}`}
              style={{ animationDelay: `${i * 55}ms` }}
              onClick={() => openLightbox(img)}
            >
              <div className="gallery-card__inner">
                {/* Skeleton placeholder shown until image loads */}
                {!loadedImages[img.id] && (
                  <div className="gallery-card__skeleton" />
                )}
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`gallery-card__img ${loadedImages[img.id] ? "loaded" : ""}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(img.id)}
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
          <div
            className="gallery-lightbox"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
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