import "../styles/component.css";

export default function TechEnabledSection() {
  return (
    <section className="tech-section">
      <div className="tech-card">
        {/* LEFT CONTENT */}
        <div className="tech-content">
          <h2>JERUSHALIGNE is Tech Enabled</h2>

          <p>
            Proprietary Artificial Intelligence Technology that develops & builds
            highly precise 3D models of the smile up to the last detail.
            These are the exact 3D replica of the patient’s mouth.
          </p>

          <p>
            OrthoPlanZ system built in-house helps in predicting tooth movements
            using the power of proprietary tech. This combination equips
            Jerushaligne doctors to treat even the most complex cases with
            greater precision and efficiency.
          </p>

          <button className="tech-btn">Learn More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="tech-image">
          <img
            src="/images/aligner.png"
            alt="Clear dental aligner"
          />
        </div>
      </div>
    </section>
  );
}
