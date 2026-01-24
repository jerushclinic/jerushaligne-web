// BenefitsSection.jsx
import "../styles/whyjerush.css";

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">

        {/* LEFT – VIDEO */}
        <div className="benefits-video">
          <div className="video-card">
            <video
              src="/videos/aligner.mp4"
              poster="/images/aligner.webp"
              controls
            />
          </div>
        </div>

        {/* RIGHT – BENEFITS */}
        <div className="benefits-content">
          <h2>Experience the Jerush Difference</h2>
          <p className="benefits-subtitle">
            Designed with comfort, flexibility, and confidence in mind.
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">✨</span>
              <div>
                <h4>Stylish & Invisible</h4>
                <p>Achieve a confident smile without visible wires or brackets.</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🎒</span>
              <div>
                <h4>Detachable & Portable</h4>
                <p>Remove, clean, and wear aligners effortlessly anywhere.</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">😌</span>
              <div>
                <h4>Comfortable Fit</h4>
                <p>Smooth, irritation-free aligners tailored for daily comfort.</p>
              </div>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🛡️</span>
              <div>
                <h4>Long-Lasting Results</h4>
                <p>Durable aligners that support lasting oral health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
