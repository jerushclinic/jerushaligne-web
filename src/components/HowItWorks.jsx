import React from "react";
import "../styles/component.css";

export default function HowItWorks() {
  const stepsLeft = [
    {
      step: "01",
      title: "Register With Us",
      desc: "Begin your smile journey with expert consultation.",
    },
    {
      step: "02",
      title: "Scan at Your Doorstep",
      desc: "Advanced dental scan at your convenience.",
    },
    {
      step: "03",
      title: "Get Your Results",
      desc: "AI-powered planning for perfect accuracy.",
    },
  ];

  const stepsRight = [
    {
      step: "04",
      title: "Expert Guidance",
      desc: "Continuous monitoring by dental specialists.",
    },
    {
      step: "05",
      title: "Receive Aligners",
      desc: "Precision-made aligners delivered to you.",
    },
    {
      step: "06",
      title: "Smart Monitoring",
      desc: "Digital tracking for confident results.",
    },
  ];

  return (
    <section className="flow-section">
      <h3 className="flow-title">How It Works?</h3>
      <p className="flow-subtitle">
        Your smile journey, guided step by step
      </p>

      <div className="flow-layout">
        {/* LEFT STEPS */}
        <div className="flow-column">
          {stepsLeft.map((s) => (
            <div key={s.step} className="flow-step">
              <span className="flow-number">{s.step}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="flow-center">
          <img
            src="/images/girl-with-aligner.png"
            alt="Dental aligner illustration"
            className="flow-center-image"
            loading="lazy"
          />
        </div>

        {/* RIGHT STEPS */}
        <div className="flow-column">
          {stepsRight.map((s) => (
            <div key={s.step} className="flow-step">
              <span className="flow-number">{s.step}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
