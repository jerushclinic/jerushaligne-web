import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const currentPath = window.location.pathname;

  const isActive = (path) => currentPath === path;

  const isAlignerActive =
    currentPath === "/clear-aligners" || currentPath === "/retainers";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* LOGO */}
          <a href="/" className="navbar-logo">
            <img
              src={scrolled ? "/images/logo-black.png" : "/images/logo-white.png"}
              alt="Jerushaligne"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="navbar-links">
            <a href="/" className={isActive("/") ? "active" : ""}>
              Home
            </a>

            <div className="nav-dropdown">
              <span className={isAlignerActive ? "active" : ""}>
                Aligners <i>▾</i>
              </span>
              <div className="dropdown">
                <a
                  href="/clear-aligners"
                  className={isActive("/clear-aligners") ? "active" : ""}
                >
                  Clear Aligners
                </a>
                <a
                  href="/retainers"
                  className={isActive("/retainers") ? "active" : ""}
                >
                  Retainers
                </a>
              </div>
            </div>

            <a
              href="/why-jerushaligne-is-different"
              className={isActive("/why-jerushaligne-is-different") ? "active" : ""}
            >
              Why Jerushaligne
            </a>

            <a
              href="/our-outlets"
              className={isActive("/our-outlets") ? "active" : ""}
            >
              Outlets
            </a>

            <a href="/blog" className={isActive("/blog") ? "active" : ""}>
              Blog
            </a>

            <a
              href="/contact-us"
              className={isActive("/contact-us") ? "active" : ""}
            >
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="navbar-cta">
            <a href="/book" className="btn-primary">
              Book Appointment
            </a>
          </div>

          {/* HAMBURGER */}
          <button className="hamburger" onClick={() => setMobileOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="/images/logo-black.png" alt="Logo" />
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <nav className="mobile-links">
          <a href="/" className={isActive("/") ? "active" : ""}>
            Home
          </a>

          <button
            className={`mobile-dropdown-btn ${
              isAlignerActive ? "active" : ""
            }`}
            onClick={() => setMobileDropdown(!mobileDropdown)}
          >
            Aligners <span>{mobileDropdown ? "−" : "+"}</span>
          </button>

          {mobileDropdown && (
            <div className="mobile-submenu">
              <a
                href="/clear-aligners"
                className={isActive("/clear-aligners") ? "active" : ""}
              >
                Clear Aligners
              </a>
              <a
                href="/retainers"
                className={isActive("/retainers") ? "active" : ""}
              >
                Retainers
              </a>
            </div>
          )}

          <a
            href="/why-jerushaligne-is-different"
            className={isActive("/why-jerushaligne-is-different") ? "active" : ""}
          >
            Why Jerushaligne
          </a>

          <a
            href="/our-outlets"
            className={isActive("/our-outlets") ? "active" : ""}
          >
            Outlets
          </a>

          <a href="/blog" className={isActive("/blog") ? "active" : ""}>
            Blog
          </a>

          <a
            href="/contact-us"
            className={isActive("/contact-us") ? "active" : ""}
          >
            Contact
          </a>
        </nav>

        <div className="mobile-cta">
          <a href="/book" className="btn-primary">
            Book Appointment
          </a>
          <a href="tel:+919999999999" className="btn-secondary">
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}
