import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [alignerOpen, setAlignerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="nav-header">
        <div className="nav-container">
          {/* LOGO */}
          <a href="/">
            <img
              src="/images/jerushaligne-logo.png"
              alt="Jerushaligne"
              className="nav-logo"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="nav-desktop">
            <a href="/">Home</a>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setAlignerOpen(true)}
              onMouseLeave={() => setAlignerOpen(false)}
            >
              <button className="nav-btn">
                Aligners <span>▾</span>
              </button>

              {alignerOpen && (
                <div className="dropdown-menu">
                  <a href="/clear-aligners">Clear Aligners</a>
                  <a href="/retainers">Retainers</a>
                </div>
              )}
            </div>

            <a href="/why-jerushaligne-is-different">Why Jerushaligne is Diiferent</a>
            <a href="/our-outlets">Our Outlets</a>
            <a href="/blog">Blog</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/contact-us">Contact Us</a>
          </nav>

          {/* DESKTOP CTA */}
          <div className="nav-cta">
            <a href="/book" className="cta-primary">Book Appointment</a>
            <a href="tel:+919999999999" className="cta-call">📞</a>
          </div>

          {/* HAMBURGER */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="/images/jerushaligne-logo.png" className="mobile-logo" />
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <nav className="mobile-nav">
          <a href="/">Home</a>

          {/* MOBILE ALIGNERS */}
          <button
            className="mobile-dropdown-btn"
            onClick={() => setAlignerOpen(!alignerOpen)}
          >
            Aligners <span>{alignerOpen ? "▴" : "▾"}</span>
          </button>

          {alignerOpen && (
            <div className="mobile-submenu">
              <a href="/clear-aligners">Clear Aligners</a>
              <a href="/retainers">Retainers</a>
            </div>
          )}

          <a href="/why-jerushaligne-is-different">Why Jerushaligne is Different</a>
          <a href="/outlets">Our Outlets</a>
          <a href="/blog">Blog</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="mobile-cta">
          <a href="/book" className="cta-primary">Book Appointment</a>
          <a href="tel:+919999999999" className="cta-secondary">Call Now</a>
        </div>
      </div>
    </>
  );
}
