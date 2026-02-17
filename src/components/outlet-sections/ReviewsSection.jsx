import { useEffect, useRef } from "react";
import "../../styles/outlet-showcase.css";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Chennai",
    rating: 5,
    text: "My smile transformation was absolutely unbelievable. I never thought invisible aligners could work this well — I'm genuinely obsessed with my teeth now.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya&backgroundColor=fde68a",
    color: "#f59e0b",
  },
  {
    name: "Krishan Yadav",
    location: "Trichy",
    rating: 5,
    text: "Very professional dentist and staff. The whole process was smooth and the results speak for themselves. Worth every single rupee.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Krishan&backgroundColor=d1fae5",
    color: "#10b981",
  },
  {
    name: "Mildred James",
    location: "Thuckalay",
    rating: 5,
    text: "Excellent experience from start to finish. The clinic is world-class and the aligners are so comfortable I forget I'm wearing them.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mildred&backgroundColor=ede9fe",
    color: "#8b5cf6",
  },
  {
    name: "Anitha Rajan",
    location: "Chennai",
    rating: 5,
    text: "I was so self-conscious about my teeth for years. After Jerushaligne, I can't stop smiling. The team genuinely cares about results.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Anitha&backgroundColor=fce7f3",
    color: "#ec4899",
  },
  {
    name: "Suresh Kumar",
    location: "Trichy",
    rating: 5,
    text: "The technology here is on another level. German precision with Indian warmth — that's exactly what this place feels like. Highly recommend!",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Suresh&backgroundColor=dbeafe",
    color: "#3b82f6",
  },
  {
    name: "Divya Nair",
    location: "Chennai",
    rating: 5,
    text: "Completed my treatment in 8 months. The before-and-after photos are shocking. My confidence has gone through the roof. Thank you Jerushaligne!",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Divya&backgroundColor=ffe4e6",
    color: "#f43f5e",
  },
  {
    name: "Ravi Chandran",
    location: "Thuckalay",
    rating: 5,
    text: "Switched from braces to clear aligners midway and it was the best decision. No pain, no embarrassment — just beautiful results.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ravi&backgroundColor=f3e8ff",
    color: "#a855f7",
  },
  {
    name: "Lakshmi Priya",
    location: "Trichy",
    rating: 5,
    text: "The consultation was so thorough. They showed me exactly what my smile would look like before I even started. Absolutely blown away.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Lakshmi&backgroundColor=cffafe",
    color: "#06b6d4",
  },
];

const row1 = [...reviews.slice(0, 4), ...reviews.slice(0, 4)];
const row2 = [...reviews.slice(4, 8), ...reviews.slice(4, 8)];

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#f59e0b">
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15.71-4.13L2 5.5l4.15-.75L8 1z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-card-inner">
        {/* Per-card coloured glow */}
        <div
          className="card-glow"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${review.color}20, transparent 65%)`,
          }}
        />

        {/* Top row: avatar + name + Google icon */}
        <div className="card-top">
          <div
            className="avatar-wrap"
            style={{ borderColor: `${review.color}66` }}
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="avatar-img"
              style={{ background: `${review.color}18` }}
            />
          </div>

          <div className="card-author">
            <div className="reviewer-name">{review.name}</div>
            <div className="reviewer-location">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {review.location}
            </div>
          </div>

          <div className="google-icon">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
        </div>

        {/* Stars + verified badge */}
        <div className="card-stars">
          <StarRating />
          <span className="verified-badge">✓ Verified</span>
        </div>

        {/* Review text */}
        <p className="review-text">"{review.text}"</p>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Section header */}
      <div className="reviews-header">
        <div className="reviews-eyebrow">
          <StarRating />
          <span>2.5 Lakh+ Verified Google Reviews</span>
        </div>

        <h2 className="reviews-title">
          Smiles don't lie.
          <br />
          <span className="reviews-title-accent">Neither do our patients.</span>
        </h2>

        <p className="reviews-subtitle">
          Real stories from real people whose lives changed after that first appointment.
        </p>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">2.5L+</span>
            <span className="stat-label">Happy Patients</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Would Recommend</span>
          </div>
        </div>
      </div>

      {/* Dual marquee rows */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <div className="marquee-row row-left">
            {row1.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
        <div className="marquee-track">
          <div className="marquee-row row-right">
            {row2.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </div>

      {/* Left / right edge fade overlays */}
      <div className="fade-left" />
      <div className="fade-right" />
    </section>
  );
}