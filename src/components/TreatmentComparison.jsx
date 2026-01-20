import "../styles/component.css";

export default function TreatmentComparison() {
  return (
    <section className="compare-section">
      <div className="compare-box">
        <h2 className="compare-title">
          Jerushaligne Treatment Comparison
        </h2>
        <p className="compare-subtitle">
          See why doctor-guided aligners make the difference
        </p>

        <div className="compare-grid">
          {/* CARD 1 */}
          <div className="compare-card">
            <h3>Jerushaligne</h3>
            <ul>
              <li>Simple to complex tooth movements</li>
              <li>Doctor-designed & supervised</li>
              <li>Weekly aligner change</li>
              <li>Clinic + digital monitoring</li>
              <li>Doctor-decided pricing</li>
            </ul>

            <img
              src="/images/comparison/girl.webp"
              alt="Jerushaligne Aligners"
              className="compare-image"
            />
          </div>

          {/* CARD 2 */}
          <div className="compare-card">
            <h3>Essentials of Jerushaligne</h3>
            <ul>
              <li>Simple to moderate corrections</li>
              <li>Doctor supervised</li>
              <li>Aligner change every 2 weeks</li>
              <li>Clinic-based monitoring</li>
            </ul>

            <img
              src="/images/comparison/girl-2.webp"
              alt="Essentials Aligners"
              className="compare-image"
            />
          </div>

          {/* CARD 3 */}
          <div className="compare-card">
            <h3>Other Online Aligners</h3>
            <ul>
              <li>Only cosmetic corrections</li>
              <li>Limited or no doctor supervision</li>
              <li>Aligner change varies</li>
              <li>Mostly online monitoring</li>
              <li>Lower cost, limited control</li>
            </ul>

            <img
              src="/images/comparison/girl-3.webp"
              alt="Online Aligners"
              className="compare-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
