import React from "react";
import "../styles/component.css";

export default function WhatsAppButton({
  phone = "+919876543210",
  message = "Hi! I want to know more about your treatments.",
}) {
  const cleaned = phone.replace(/[^\d]/g, "");
  const href = `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-glass"
      >
        <span className="wa-text">Need Help? Chat with Us</span>

        <span className="wa-icon">
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 32 32" aria-hidden>
            <path
              fill="#fff"
              d="M19.11 17.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.44-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.35-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.62-1.48-.85-2.03-.22-.53-.44-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27s.98 2.64 1.12 2.82c.14.18 1.94 2.94 4.73 4.12.79.34 1.41.55 1.89.71.79.25 1.5.21 2.06.13.63-.09 1.93-.79 2.21-1.55.27-.76.27-1.41.19-1.55-.07-.14-.25-.23-.52-.36z"
            />
            <path
              fill="#fff"
              d="M16 3C8.82 3 3 8.64 3 15.6c0 2.22.6 4.38 1.73 6.27L3 29l7.34-1.9c1.82.99 3.87 1.51 5.98 1.51 7.18 0 13-5.64 13-12.6C29 8.64 23.18 3 16 3z"
              opacity=".15"
            />
          </svg>
        </span>
      </a>


    </>
  );
}
