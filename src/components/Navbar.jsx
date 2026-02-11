import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAligners, setMobileAligners] = useState(false);

  const path = window.location.pathname;
  const isActive = (p) => path === p;

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* LOGO */}
          <a href="/" className="logo">
            <img src="/images/logo-black.png" alt="Jerushaligne" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="nav-links">
            <a className={`pill ${isActive("/") ? "active" : ""}`} href="/">
              Home
            </a>

            {/* DROPDOWN (NO ACTIVE ON PARENT) */}
            <div className="dropdown">
              <button className="pill">Aligners ▾</button>
              <div className="dropdown-menu">
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
              className={`pill ${
                isActive("/why-jerushaligne-is-different") ? "active" : ""
              }`}
              href="/why-jerushaligne-is-different"
            >
              Why Jerushaligne
            </a>

            <a
              className={`pill ${isActive("/our-outlets") ? "active" : ""}`}
              href="/our-outlets"
            >
              Our Outlets
            </a>

            <a
              className={`pill ${isActive("/blog") ? "active" : ""}`}
              href="/blog"
            >
              Blog
            </a>

            <a
              className={`pill ${isActive("/contact-us") ? "active" : ""}`}
              href="/contact-us"
            >
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a href="/book" className="cta desktop-only">
            Book Appointment
          </a>

          {/* HAMBURGER */}
          <button className="hamburger" onClick={() => setMobileOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <aside className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="/images/logo-black.png" alt="Logo" />
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <nav className="mobile-nav">
          <a className={isActive("/") ? "active" : ""} href="/">
            Home
          </a>

          {/* MOBILE DROPDOWN (NO ACTIVE ON PARENT) */}
          <button
            className="mobile-drop"
            onClick={() => setMobileAligners(!mobileAligners)}
          >
            Aligners <span>{mobileAligners ? "−" : "+"}</span>
          </button>

          {mobileAligners && (
            <div className="mobile-sub">
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

          <a href="/why-jerushaligne-is-different">Why Jerushaligne</a>
          <a href="/our-outlets">Our Outlets</a>
          <a href="/blog">Blog</a>
          <a href="/contact-us">Contact</a>
        </nav>

        <div className="mobile-cta">
          <a href="/book" className="cta">
            Book Appointment
          </a>
          <a href="tel:+919999999999" className="cta secondary">
            Call Now
          </a>
        </div>
      </aside>
    </>
  );
}
