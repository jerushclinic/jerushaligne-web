import React from "react";
import "../styles/component.css";

export default function TreatmentComparison() {
  return (
    <section className="compare-section">
      <h2 className="compare-title">Jerushaligne Treatment Comparison</h2>
      <p className="compare-subtitle">
        See why doctor-guided aligners make the difference
      </p>

      <div className="compare-grid">
        {/* JERUSHALIGNER */}
        <div className="compare-card highlight">
          <span className="badge">Recommended</span>
          <h3>Jerushaligne</h3>
          <ul>
            <li>Suitable for simple to complex tooth movements</li>
            <li>Doctor-designed & supervised treatment</li>
            <li>Weekly aligner change</li>
            <li>Clinic + digital monitoring</li>
            <li>Pricing decided by treating doctor</li>
          </ul>

          <img
            src="/images/girl.webp"
            alt="Jerushaligne aligner"
            className="card-image"
          />
        </div>

        {/* ESSENTIALS */}
        <div className="compare-card">
          <h3>Essentials of Jerushaligne</h3>
          <ul>
            <li>Best for simple to moderate corrections</li>
            <li>Doctor supervised</li>
            <li>Aligner change every 2 weeks</li>
            <li>Clinic-based monitoring</li>
            <li>Pricing starts from ₹75,000</li>
          </ul>

          <img
            src="/images/girl.webp"
            alt="Essentials aligner"
            className="card-image"
          />
        </div>

        {/* ONLINE ALIGNERS */}
        <div className="compare-card">
          <h3>Other Online Aligners</h3>
          <ul>
            <li>Only simple cosmetic corrections</li>
            <li>Limited or no doctor supervision</li>
            <li>Aligner change varies</li>
            <li>Mostly online monitoring</li>
            <li>Lower cost but limited control</li>
          </ul>

          <img
            src="/images/girl.webp"
            alt="Online aligners"
            className="card-image"
          />
        </div>
      </div>
    </section>
  );
}
