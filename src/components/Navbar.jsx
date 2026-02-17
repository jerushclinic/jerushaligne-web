import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAlignersOpen, setMobileAlignersOpen] = useState(false);
  const [mobileOutletsOpen, setMobileOutletsOpen] = useState(false);

  const { pathname } = useLocation();
  const isActive = (p) => pathname === p;

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* LOCK BODY SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  /* CLOSE MOBILE MENU ON NAVIGATION */
  const handleMobileNavClick = () => {
    setMobileOpen(false);
    setMobileAlignersOpen(false);
    setMobileOutletsOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* LOGO */}
          <Link to="/" className="logo">
            <img src="/images/logo-black.png" alt="Jerushaligne" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="nav-menu">
            <Link 
              className={`nav-link ${isActive("/") ? "active" : ""}`} 
              to="/"
            >
              Home
            </Link>

            {/* ALIGNERS DROPDOWN */}
            <div className="dropdown">
              <button className="nav-link dropdown-trigger">
                Aligners
                <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="dropdown-content">
                <Link
                  to="/clear-aligners"
                  className={isActive("/clear-aligners") ? "active" : ""}
                >
                  <span className="dropdown-label">Clear Aligners</span>
                  <span className="dropdown-desc">Invisible teeth straightening</span>
                </Link>
                <Link
                  to="/retainers"
                  className={isActive("/retainers") ? "active" : ""}
                >
                  <span className="dropdown-label">Retainers</span>
                  <span className="dropdown-desc">Maintain your perfect smile</span>
                </Link>
              </div>
            </div>

            <Link
              className={`nav-link ${isActive("/why-jerushaligne-is-different") ? "active" : ""}`}
              to="/why-jerushaligne-is-different"
            >
              Why Jerushaligne
            </Link>

            {/* OUTLETS DROPDOWN */}
            <div className="dropdown">
              <button className="nav-link dropdown-trigger">
                Our Outlets
                <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="dropdown-content">
                <Link
                  to="/outlets/thuckalay-outlet"
                  className={isActive("/outlets/thuckalay-outlet") ? "active" : ""}
                >
                  <span className="dropdown-label">Thuckalay</span>
                  <span className="dropdown-desc">Main location</span>
                </Link>
                <Link
                  to="/outlets/trichy-outlet"
                  className={isActive("/outlets/trichy-outlet") ? "active" : ""}
                >
                  <span className="dropdown-label">Trichy</span>
                  <span className="dropdown-desc">Central Tamil Nadu</span>
                </Link>
                <Link
                  to="/outlets/chennai-outlet"
                  className={isActive("/outlets/chennai-outlet") ? "active" : ""}
                >
                  <span className="dropdown-label">Chennai</span>
                  <span className="dropdown-desc">Metropolitan clinic</span>
                </Link>
              </div>
            </div>

            <Link
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
              to="/blog"
            >
              Blog
            </Link>

            <Link
              className={`nav-link ${isActive("/contact-us") ? "active" : ""}`}
              to="/contact-us"
            >
              Contact
            </Link>
          </nav>

          {/* CTA BUTTON */}
          <Link to="/book" className="btn-primary desktop-only">
            Book Appointment
          </Link>

          {/* HAMBURGER MENU */}
          <button 
            className="hamburger" 
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileOpen && <div className="overlay" onClick={() => setMobileOpen(false)} />}
      
      <aside className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="/images/logo-black.png" alt="Jerushaligne" />
          <button 
            className="close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="mobile-nav">
          <Link 
            className={isActive("/") ? "active" : ""} 
            to="/"
            onClick={handleMobileNavClick}
          >
            Home
          </Link>

          {/* ALIGNERS ACCORDION */}
          <div className="mobile-accordion">
            <button
              className={`accordion-trigger ${mobileAlignersOpen ? "open" : ""}`}
              onClick={() => setMobileAlignersOpen(!mobileAlignersOpen)}
            >
              <span>Aligners</span>
              <svg 
                className="chevron" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16"
                style={{ transform: mobileAlignersOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={`accordion-content ${mobileAlignersOpen ? "open" : ""}`}>
              <Link
                to="/clear-aligners"
                className={isActive("/clear-aligners") ? "active" : ""}
                onClick={handleMobileNavClick}
              >
                Clear Aligners
              </Link>
              <Link
                to="/retainers"
                className={isActive("/retainers") ? "active" : ""}
                onClick={handleMobileNavClick}
              >
                Retainers
              </Link>
            </div>
          </div>

          <Link 
            to="/why-jerushaligne-is-different"
            className={isActive("/why-jerushaligne-is-different") ? "active" : ""}
            onClick={handleMobileNavClick}
          >
            Why Jerushaligne
          </Link>

          {/* OUTLETS ACCORDION */}
          <div className="mobile-accordion">
            <button
              className={`accordion-trigger ${mobileOutletsOpen ? "open" : ""}`}
              onClick={() => setMobileOutletsOpen(!mobileOutletsOpen)}
            >
              <span>Our Outlets</span>
              <svg 
                className="chevron" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16"
                style={{ transform: mobileOutletsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={`accordion-content ${mobileOutletsOpen ? "open" : ""}`}>
              <Link
                to="/outlets/thuckalay-outlet"
                className={isActive("/outlets/thuckalay-outlet") ? "active" : ""}
                onClick={handleMobileNavClick}
              >
                Thuckalay
              </Link>
              <Link
                to="/outlets/trichy-outlet"
                className={isActive("/outlets/trichy-outlet") ? "active" : ""}
                onClick={handleMobileNavClick}
              >
                Trichy
              </Link>
              <Link
                to="/outlets/chennai-outlet"
                className={isActive("/outlets/chennai-outlet") ? "active" : ""}
                onClick={handleMobileNavClick}
              >
                Chennai
              </Link>
            </div>
          </div>

          <Link 
            to="/blog"
            className={isActive("/blog") ? "active" : ""}
            onClick={handleMobileNavClick}
          >
            Blog
          </Link>

          <Link 
            to="/contact-us"
            className={isActive("/contact-us") ? "active" : ""}
            onClick={handleMobileNavClick}
          >
            Contact
          </Link>
        </nav>

        <div className="mobile-cta">
          <Link to="/book" className="btn-primary" onClick={handleMobileNavClick}>
            Book Appointment
          </Link>
          <a href="tel:+919999999999" className="btn-secondary">
            Call Now
          </a>
        </div>
      </aside>
    </>
  );
}