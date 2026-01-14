import React from "react";
import ServiceCard from "./ServiceCard";
import "../styles/component.css";

export default function ServicesSection({ services = defaultServices }) {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <header className="services-header">
          <h2>Why to Choose Jerushaligne?</h2>
          <p>Advanced treatments delivered with care and precision.</p>
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.id || i}
              className="services-anim"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <ServiceCard
                title={s.title}
                desc={s.excerpt || s.desc}
                icon={s.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* default data */
const defaultServices = [
  {
    id: "accuracy",
    title: "Best in Class Accuracy",
    excerpt: "99.99% accuracy guaranteed across cases for all types of teeth.",
    icon: "🪥",
  },
  {
    id: "all-in-one",
    title: "All in One Dental Aligners",
    excerpt: "End-to-end solution from patient monitoring to aligner delivery.",
    icon: "🦷",
  },
  {
    id: "technology",
    title: "Technology First",
    excerpt: "Proprietary technology built with years of experience.",
    icon: "⚙️",
  },
  {
    id: "affordable",
    title: "Affordable Price",
    excerpt: "Premium quality aligners at a pocket-friendly price.",
    icon: "✨",
  },
  {
    id: "platform",
    title: "Easy to Use Platform",
    excerpt: "Patient data, monitoring & support – all in one place.",
    icon: "📱",
  },
  {
    id: "material",
    title: "Revolutionary Material",
    excerpt: "High-grade material ensuring comfort and durability.",
    icon: "🔬",
  },
];
