// ServiceCard.jsx
import React from "react";
import "../styles/component.css";

export default function ServiceCard({ title, desc, icon }) {
  return (
    <article className="service-card">
      {/* Decorative SVG (optional) */}
      <div className="service-card-decor" aria-hidden>
        <img
          src="/vectors/tooth-soft.svg"
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>

      <div className="service-card-header">
        <div className="service-icon">
          <span aria-hidden>{icon ?? "🦷"}</span>
        </div>

        <div>
          <h4 className="service-title">{title}</h4>
          <p className="service-desc">{desc}</p>
        </div>
      </div>

      <div className="service-card-footer">
        <a href="#" className="service-btn">
          Learn more
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
