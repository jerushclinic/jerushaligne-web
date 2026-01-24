// Contact.jsx
import "../styles/contact.css";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.90
    }
  }
};

export default function Contact() {
  return (
    <section className="contact-page">

      {/* ================= HERO / BREADCRUMB ================= */}
      <div className="contact-hero">
        <div className="contact-hero-inner">

          {/* LEFT TEXT */}
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

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-image"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/images/comparison/girl.webp"
              alt="Contact Illustration"
            />
          </motion.div>

        </div>
      </div>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="contact-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="contact-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        >
          <img
            src="/images/jerushaligne-kit.webp"
            alt="Jerush Clinic"
          />
        </motion.div>

        {/* RIGHT INFO + FORM */}
        <motion.div
          className="contact-right"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        >

          {/* INFO */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions about aligners or appointments?
              Reach out to us — our team is happy to assist you.
            </p>
          </div>

          {/* FORM */}
          <motion.div
            className="contact-form"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          transition={{ duration: 0.5 }}
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

          {/* Thuckalay */}
          <motion.div className="location-card" variants={fadeUp}>
            <h3>Thuckalay</h3>
            <p>
              Jerush Dentofacial and Cosmetic Laser Centre<br />
              Brammapuram South, Thuckalay – 629175
            </p>
            <iframe
              src="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Thuckalay&output=embed"
              loading="lazy"
              title="Thuckalay Branch"
            ></iframe>
          </motion.div>

          {/* Trichy */}
          <motion.div className="location-card" variants={fadeUp}>
            <h3>Trichy</h3>
            <p>
              Jerush Dentofacial and Cosmetic Laser Centre<br />
              Anna Nagar, Trichy – 620017
            </p>
            <iframe
              src="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Trichy&output=embed"
              loading="lazy"
              title="Trichy Branch"
            ></iframe>
          </motion.div>

          {/* Chennai */}
          <motion.div className="location-card" variants={fadeUp}>
            <h3>Chennai</h3>
            <p>
              Jerush Dentofacial and Cosmetic Laser Centre<br />
              Adyar, Chennai – 600020
            </p>
            <iframe
              src="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Chennai&output=embed"
              loading="lazy"
              title="Chennai Branch"
            ></iframe>
          </motion.div>

        </motion.div>
      </section>

    </section>
  );
}
