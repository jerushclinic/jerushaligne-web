import React from "react";

/**
 * WhatsApp Floating Glass Button
 *
 * Usage:
 * <WhatsAppButton />
 */

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

      {/* Glass Styles */}
      <style>{`
        .wa-glass {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 10px 6px 10px;
          border-radius: 999px;
          text-decoration: none;
          color: #111827;
          font-weight: 600;
          font-size: 14px;

          /* Glassmorphism */
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(14px) saturate(160%);
          -webkit-backdrop-filter: blur(14px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.35);

          box-shadow:
            0 20px 40px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.6);

          transition: transform .25s ease, box-shadow .25s ease;
          animation: wa-glass-in .7s cubic-bezier(.2,.9,.2,1) both;
        }

        .wa-glass:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow:
            0 28px 60px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .wa-text {
          white-space: nowrap;
        }

        .wa-icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          background: linear-gradient(135deg,#25D366,#128C7E);
          display: grid;
          place-items: center;
          box-shadow:
            0 8px 20px rgba(0,0,0,0.25),
            inset 0 0 0 2px rgba(255,255,255,.2);
        }

        .wa-icon svg {
          width: 22px;
          height: 22px;
        }

        @keyframes wa-glass-in {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Mobile: icon only */
        @media (max-width: 640px) {
          .wa-text {
            display: none;
          }
          .wa-glass {
            padding: 12px;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
}
