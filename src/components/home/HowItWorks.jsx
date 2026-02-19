import React from "react";
import "../../styles/component.css";

export default function HowItWorks() {
  const stepsLeft = [
    {
      step: "01",
      title: "Register With Us",
      desc: "Start with an expert consultation to evaluate your teeth alignment treatment needs.",
    },
    {
      step: "02",
      title: "Scan Your Whole Teeth",
      desc: "Advanced 3D dental scan for precise treatment planning.",
    },
    {
      step: "03",
      title: "Get Your Results",
      desc: "AI-powered smile simulation shows your future smile before treatment begins.",
    },
  ];

  const stepsRight = [
    {
      step: "04",
      title: "Expert Guidance",
      desc: "Continuous doctor monitoring ensures safe and predictable tooth movement.  ",
    },
    {
      step: "05",
      title: "Receive Your Teeth Aligners",
      desc: "Custom-made teeth aligners delivered directly to you.",
    },
    {
      step: "06",
      title: "Smart Monitoring",
      desc: " Digital tracking ensures perfect progress until your ideal smile is achieved.",
    },
  ];

  return (
    <section className="flow-section">
      <h3 className="flow-title">How Invisible Aligners Work?</h3>
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
