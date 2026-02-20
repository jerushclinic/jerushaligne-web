// OurOutlets.jsx
import { motion } from "framer-motion";
import "../styles/outlets.css";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
const outlets = [
  {
    city: "Jerush Dentofacial and Cosmetic Laser Centre, Thuckalay",
    image: "/images/outlets/jerush-thuckalay.webp",
    address:
      "Near & Behind Bustand, Brammapuram South, Thuckalay, Tamil Nadu - 629175",
    phone: "+91 94891 60055",
    rating: 4.8,
    reviews: "2.5K",
    slug: "thuckalay-outlet",
  },
  {
    city: "Jerush Dentofacial and Cosmetic Laser Centre, Trichy",
    image: "/images/outlets/jerush-trichy.webp",
    address:
      "Second Floor, No.72, Pattabiraman Salai, Anna Nagar, Trichy - 620017",
    phone: "+91 94891 60011",
    rating: 4.9,
    reviews: "1.5k",
    slug: "trichy-outlet",
  },
  {
    city: "Jerush Dentofacial and Cosmetic Laser Centre, Chennai",
    image: "/images/outlets/jerush-chennai.webp",
    address:
      "G2, Chandhini Apartment, Mahatma Gandhi Road, Adyar, Chennai - 600020",
    phone: "+91 97510 10107",
    rating: 4.5,
    reviews: "500+",
    slug: "chennai-outlet",
  },
];

/* ===== Motion Variants ===== */

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function OurOutlets() {
  return (
    <>
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroBreadcrumb
          title="Our Outlets"
          subtitle="Find your nearest Jerush Dentofacial & Cosmetic Laser Centre"
          image="/images/comparison/girl.webp"
        />
      </motion.div>

      {/* OUTLETS */}
      <section className="outlets-section">
        <motion.div
          className="outlets-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           Pick Your Nearby Jerushaligne Centre 
        </motion.div>

        <motion.div
          className="outlets-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {outlets.map((outlet, i) => (
            <motion.div
              className="outlet-card"
              key={i}
              variants={cardVariant}
              whileHover={{ y: -8 }}
            >
              {/* IMAGE */}
              <img src={outlet.image} alt={outlet.city} />

              {/* CONTENT */}
              <div className="outlet-content">
                <h3 className="outlet-city">{outlet.city}</h3>
                <p className="outlet-address">{outlet.address}</p>

                <p className="outlet-phone">📞 {outlet.phone}</p>

                {/* GOOGLE RATING */}
                <div className="outlet-rating">
                  <span className="google">
                    <img src="/images/outlets/g-logo.webp" alt="Google" />
                  </span>
                  <span className="stars">
                    {"★".repeat(Math.floor(outlet.rating))}
                    {"☆".repeat(5 - Math.floor(outlet.rating))}
                  </span>
                  <span className="rating-text">
                    {outlet.rating} ({outlet.reviews})
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="outlet-actions">
                  <a
                    href={`/outlets/${outlet.slug}`}
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    View More
                  </a>
                  <a href="/book" className="btn-primary">
                    Make Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
    
  );
}
