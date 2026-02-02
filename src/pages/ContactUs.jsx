// pages/Contact.jsx
import "../styles/contact.css";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

export default function Contact() {
  return (
    <section className="contact-page">
      {/* ================= HERO ================= */}
      <div className="contact-hero">
        <div className="contact-hero-inner">
          {/* TEXT */}
          <motion.div
            className="hero-text"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1>Contact Us</h1>
            <p>We’re here to help you smile with confidence</p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="hero-image"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src="/images/comparison/girl.webp"
              alt="Contact Illustration"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="contact-container">
        {/* IMAGE */}
        <motion.div
          className="contact-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/jerushaligne-kit.webp"
            alt="Jerush Clinic"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          className="contact-right"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions about aligners or appointments?
              Reach out — our team is happy to help.
            </p>
          </div>

          <motion.div
            className="contact-form"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="tel" placeholder="Phone Number" required />
              </div>

              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Message" rows="5" />
              <button type="submit">Send Message</button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= LOCATIONS ================= */}
      <section className="locations-section">
        <motion.h2
          className="locations-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Outlets
        </motion.h2>

        <motion.div
          className="locations-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              city: "Thuckalay",
              address:
                "Brammapuram South, Thuckalay – 629175",
              map:
                "Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Thuckalay",
            },
            {
              city: "Trichy",
              address: "Anna Nagar, Trichy – 620017",
              map:
                "Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Trichy",
            },
            {
              city: "Chennai",
              address: "Adyar, Chennai – 600020",
              map:
                "Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Chennai",
            },
          ].map((item, i) => (
            <motion.div key={i} className="location-card" variants={fadeUp}>
              <h3>{item.city}</h3>
              <p>Jerush Dentofacial and Cosmetic Laser Centre<br />{item.address}</p>
              <iframe
                src={`https://www.google.com/maps?q=${item.map}&output=embed`}
                loading="lazy"
                title={item.city}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
