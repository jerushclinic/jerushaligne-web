// PageHero.jsx
import "../styles/herobreadcrumb.css";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="contact-hero">
      <div className="contact-hero-inner">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="hero-image">
            <img src={image} alt={title} />
          </div>
        )}

      </div>
    </section>
  );
}
