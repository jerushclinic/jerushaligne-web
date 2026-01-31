import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [alignerOpen, setAlignerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Disable body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // SCROLL DETECTION
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
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

            <a href="/why-jerushaligne-is-different">
              Why Jerushaligne is Different
            </a>
            <a href="/our-outlets">Our Outlets</a>
            <a href="/blog">Blog</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/contact-us">Contact Us</a>
          </nav>

          {/* DESKTOP CTA */}
          <div className="nav-cta">
            <a href="/book" className="cta-primary">
              Book Appointment
            </a>
            <a href="tel:+919999999999" className="cta-call">📞</a>
          </div>

          {/* HAMBURGER */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img
            src="/images/jerushaligne-logo.png"
            alt="Jerushaligne"
            className="mobile-logo"
          />
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <nav className="mobile-nav">
          <a href="/">Home</a>

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

          <a href="/why-jerushaligne-is-different">
            Why Jerushaligne is Different
          </a>
          <a href="/our-outlets">Our Outlets</a>
          <a href="/blog">Blog</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/contact-us">Contact Us</a>
        </nav>

        <div className="mobile-cta">
          <a href="/book" className="cta-primary">Book Appointment</a>
          <a href="tel:+919999999999" className="cta-secondary">
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}
