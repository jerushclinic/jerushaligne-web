// OurOutlets.jsx
import "../styles/outlets.css";

const outlets = [
  {
    city: "Jerush Dentofacial and Cosmetic Laser Centre, Thuckalay",
    image: "/images/outlets/jerush-thuckalay.webp",
    address:
      "Near & Behind Bustand, Brammapuram South, Thuckalay, Tamil Nadu - 629175",
    phone: "+91 99999 99999",
    rating: 4.6,
    reviews: 320,
    map: "https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Thuckalay"
  },
  {
    city: "Jerush Dentofacial and Cosmetic Laser Centre, Trichy",
    image: "/images/outlets/jerush-trichy.webp",
    address:
      "Second Floor, No.72, Pattabiraman Salai, Anna Nagar, Trichy - 620017",
    phone: "+91 88888 88888",
    rating: 4.4,
    reviews: 210,
    map: "https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Trichy"
  },
  {
    city: "Jerush Dentofacial and Cosmetic Laser Centre, Chennai",
    image: "/images/outlets/jerush-chennai.webp",
    address:
      "G2, Chandhini Apartment, Mahatma Gandhi Rd, Adyar, Chennai - 600020",
    phone: "+91 77777 77777",
    rating: 4.5,
    reviews: 185,
    map: "https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Chennai"
  }
];

export default function OurOutlets() {
  return (
    <section className="outlets-section">
      <h2 className="outlets-title">Our Outlets</h2>

      <div className="outlets-grid">
        {outlets.map((outlet, i) => (
          <div className="outlet-card" key={i}>
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
                  href={outlet.map}
                  target="_blank"
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
          </div>
        ))}
      </div>
    </section>
  );
}
