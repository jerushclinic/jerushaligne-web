// Contact.jsx
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      
      {/* ===== HERO ===== */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help you smile with confidence</p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="contact-container">

        {/* LEFT – INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about aligners or appointments?  
            Reach out to us — our team is happy to assist you.
          </p>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Address</h4>
              <p>Near & Behind Bustand, Brammapuram South, Thuckalay, Tamil Nadu - 629175, India</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <a href="tel:+919999999999">+91 99999 99999</a>
            </div>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <div>
              <h4>Email</h4>
              <a href="mailto:hello@jerushaligne.com">
                hello@jerushaligne.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="contact-form">
          <h2>Get in Touch</h2>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <input type="email" placeholder="Email Address" />

            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

  {/* ===== LOCATIONS ===== */}
<section className="locations-section">
  <h2 className="locations-title">Our Outlets</h2>

  <div className="locations-grid">

    {/* LOCATION 1 */}
    <div className="location-card">
      <h3>Thuckalay</h3>
      <h4>Jerush Dentofacial and Cosmetic Laser Centre,</h4>
      <p>Near & Behind Bustand, Brammapuram South, Thuckalay, Tamil Nadu - 629175, India</p>
      <iframe
        src="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Thuckalay&output=embed"
        loading="lazy"
        title="Thuckalay Branch"
      ></iframe>
    </div>

    {/* LOCATION 2 */}
    <div className="location-card">
      <h3>Trichy</h3>
      <h4>Jerush Dentofacial and Cosmetic Laser Centre,</h4>
      <p>Second Floor, No.72, Pattabiraman Salai, Anna Nagar, Thenur, Tiruchirappalli, Tamil Nadu-620017, India</p>
      <iframe
        src="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Trichy&output=embed"
        loading="lazy"
        title="Nagercoil Clinic"
      ></iframe>
    </div>

    {/* LOCATION 3 */}
    <div className="location-card">
      <h3>Chennai</h3>
      <h4>Jerush Dentofacial and Cosmetic Laser Centre,</h4>
      <p>G2, Chandhini Apartment, G2, Chandhini Apartment, 29, Mahatma Gandhi Rd, near SBI, Shastri Nagar, Adyar, Chennai, Tamil Nadu-600020, India</p>
      <iframe
        src="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Chennai&output=embed"
        loading="lazy"
        title="Thuckalay Clinic"
      ></iframe>
    </div>

  </div>
</section>


    </section>
  );
}
