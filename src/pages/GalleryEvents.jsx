import { useState, useMemo, useEffect, useCallback } from "react";
import "../styles/gallery-events.css";

/* ══════════════════════════════════
   DATA
══════════════════════════════════ */
const GAL_CATEGORIES = [
  { id: "all",       label: "All",              count: 18 },
  { id: "events",    label: "Events",            count: 5  },
  { id: "team",      label: "Our Team",          count: 4  },
  { id: "facility",  label: "Facility",          count: 4  },
  { id: "awareness", label: "Awareness",         count: 3  },
  { id: "awards",    label: "Awards",            count: 2  },
];

const GAL_CAT_INFO = {
  all:       { title: "All Photos",              sub: "Complete Gallery" },
  events:    { title: "Events",                  sub: "Clinic Events & Celebrations" },
  team:      { title: "Our Team",                sub: "The People Behind Your Smile" },
  facility:  { title: "Facility",                sub: "Our Clinic Spaces & Technology" },
  awareness: { title: "Awareness",               sub: "Community Health Drives" },
  awards:    { title: "Awards & Milestones",     sub: "Recognition & Achievements" },
};

const GAL_SORT_OPTIONS = [
  { id: "newest", label: "Latest First" },
  { id: "oldest", label: "Oldest First" },
  { id: "az",     label: "A – Z"        },
];

const GAL_PHOTOS = [
  { id: 1,  cat: "events",    span: "wide", tag: "Events",    title: "Annual Dental Health Day",        date: "Mar 15, 2025", desc: "Our annual Dental Health Day brought together over 200 community members for free check-ups, demonstrations and oral health talks.",      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80" },
  { id: 2,  cat: "team",      span: "sq",   tag: "Team",      title: "Doctor of the Year Award",        date: "Jan 8, 2025",  desc: "Dr. Priya Rajan was honoured with the regional Doctor of the Year award — a proud moment for our entire team.",                         img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&q=80" },
  { id: 3,  cat: "facility",  span: "tall", tag: "Facility",  title: "New Sterilisation Suite",         date: "Dec 2, 2024",  desc: "Our brand-new ISO-certified sterilisation suite was inaugurated, reinforcing our commitment to patient safety.",                        img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80" },
  { id: 4,  cat: "awareness", span: "wide", tag: "Awareness", title: "World Oral Health Day Camp",      date: "Mar 20, 2025", desc: "Free oral cancer screening camp held in partnership with local NGOs. Over 180 screenings conducted across two days.",                  img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=80" },
  { id: 5,  cat: "team",      span: "sq",   tag: "Team",      title: "New Team Members Welcome",        date: "Feb 3, 2025",  desc: "Welcoming three brilliant new dental surgeons to the clinic family. We continue to grow with purpose and passion.",                    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80" },
  { id: 6,  cat: "awards",    span: "sq",   tag: "Awards",    title: "Best Dental Clinic Award 2024",   date: "Nov 22, 2024", desc: "Recognised as the Best Dental Clinic in the city for 2024 by the State Dental Council — two years running!",                          img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&q=80" },
  { id: 7,  cat: "events",    span: "sq",   tag: "Events",    title: "Children's Dental Week",          date: "Nov 10, 2024", desc: "A fun-filled week for young patients with interactive sessions, dental hygiene games and free fluoride treatments for children under 12.", img: "https://images.unsplash.com/photo-1537089421669-ee2f86d4b3e5?w=700&q=80" },
  { id: 8,  cat: "facility",  span: "wide", tag: "Facility",  title: "3D Imaging Suite Launch",         date: "Oct 5, 2024",  desc: "Launched our state-of-the-art 3D CBCT imaging suite — enabling faster, more accurate diagnosis for every patient.",                    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80" },
  { id: 9,  cat: "team",      span: "wide", tag: "Team",      title: "Annual Team Day Out",              date: "Sep 14, 2024", desc: "Our full team came together for a day of team building, reflection and celebration. Our people are our greatest strength.",             img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80" },
  { id: 10, cat: "awareness", span: "sq",   tag: "Awareness", title: "School Oral Health Programme",    date: "Aug 22, 2024", desc: "Visiting 5 local schools to educate over 600 children on brushing technique, diet and the importance of regular dental check-ups.",   img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=700&q=80" },
  { id: 11, cat: "facility",  span: "sq",   tag: "Facility",  title: "Waiting Area Renovation",         date: "Aug 1, 2024",  desc: "Our patient waiting area was fully redesigned — warm, welcoming and designed to put every visitor at ease from the moment they arrive.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80" },
  { id: 12, cat: "events",    span: "tall", tag: "Events",    title: "Charity Smile Makeover Event",    date: "Jul 18, 2024", desc: "Partnering with a local charity to provide free smile makeovers to deserving individuals — giving the gift of confidence.",               img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80" },
  { id: 13, cat: "team",      span: "sq",   tag: "Team",      title: "Continuing Education Day",        date: "Jun 7, 2024",  desc: "Our team completed an advanced CPD training day, keeping every clinician at the cutting edge of modern dental practice.",              img: "https://images.unsplash.com/photo-1598256989536-775f33bd5cef?w=700&q=80" },
  { id: 14, cat: "awards",    span: "wide", tag: "Awards",    title: "ISO 9001 Certification",          date: "May 20, 2024", desc: "Proud to receive our ISO 9001:2015 Quality Management System certification — a formal recognition of our high clinical standards.",       img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
  { id: 15, cat: "awareness", span: "sq",   tag: "Awareness", title: "Sugar Awareness Campaign",        date: "Apr 11, 2024", desc: "An in-clinic campaign helping families understand the impact of sugar on oral health — with practical, easy-to-follow tips.",            img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=700&q=80" },
  { id: 16, cat: "facility",  span: "sq",   tag: "Facility",  title: "Digital X-Ray Upgrade",           date: "Mar 28, 2024", desc: "Upgraded all operatories to digital X-ray systems — reducing radiation exposure by over 80% while delivering superior image clarity.",  img: "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=700&q=80" },
  { id: 17, cat: "events",    span: "sq",   tag: "Events",    title: "Inauguration Ceremony 2019",      date: "Jan 10, 2019", desc: "A proud day — the official inauguration of our clinic, marking the beginning of a journey dedicated to exceptional dental care.",       img: "https://images.unsplash.com/photo-1588776814546-1ffbb3f5e39c?w=700&q=80" },
  { id: 18, cat: "events",    span: "wide", tag: "Events",    title: "Diwali Celebration 2024",         date: "Nov 1, 2024",  desc: "Celebrating the festival of lights with our patients, team and neighbours — spreading joy, sweets and smiles all around.",             img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80" },
];

/* ══════════════════════════════════
   LIGHTBOX COMPONENT
══════════════════════════════════ */
function Lightbox({ item, total, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   onPrev();
      if (e.key === "ArrowRight")  onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb-overlay">
      {/* Backdrop */}
      <div className="lb-bg" onClick={onClose} />

      <div className="lb-box">
        {/* Image pane */}
        <div className="lb-img-pane">
          <img src={item.img} alt={item.title} />
          <button
            className="lb-nav lb-prev"
            onClick={onPrev}
            disabled={index === 0}
          >&#8592;</button>
          <button
            className="lb-nav lb-next"
            onClick={onNext}
            disabled={index === total - 1}
          >&#8594;</button>
        </div>

        {/* Info pane */}
        <div className="lb-info">
          <div className="lb-cat">{item.tag}</div>
          <div className="lb-title">{item.title}</div>
          <div className="lb-date">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="2" width="11" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M4 1v2M9 1v2M1 5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            {item.date}
          </div>
          <div className="lb-divider" />
          <div className="lb-desc">{item.desc}</div>
          <div className="lb-counter">Photo {index + 1} of {total}</div>
        </div>

        {/* Close */}
        <button className="lb-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   PHOTO CARD COMPONENT
══════════════════════════════════ */
function PhotoCard({ photo, index, onClick }) {
  return (
    <div
      className={`gi ${photo.span}`}
      style={{ animationDelay: `${index * 0.045}s` }}
      onClick={() => onClick(photo)}
    >
      <div className="gi-inner">
        <img src={photo.img} alt={photo.title} loading="lazy" />
        <div className="gi-overlay" />
        <span className="gi-tag">{photo.tag}</span>
        <span className="gi-date">{photo.date}</span>
        <div className="gi-caption">
          <div className="gi-caption-title">{photo.title}</div>
          <div className="gi-caption-sub">{photo.date}</div>
        </div>
        <div className="gi-expand">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 1h4v4M5 13H1V9M13 1l-5 5M1 13l5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   MAIN GALLERY PAGE
══════════════════════════════════ */
export default function GalleryPage() {
  const [activeCat,   setActiveCat]   = useState("all");
  const [activeSort,  setActiveSort]  = useState("newest");
  const [activeView,  setActiveView]  = useState("masonry");
  const [sortOpen,    setSortOpen]    = useState(false);
  const [lightbox,    setLightbox]    = useState(null); // { photo, index }

  /* ── Filtered + sorted list ── */
  const filtered = useMemo(() => {
    let list = activeCat === "all"
      ? [...GAL_PHOTOS]
      : GAL_PHOTOS.filter((p) => p.cat === activeCat);
    if (activeSort === "newest") list.sort((a, b) => b.id - a.id);
    else if (activeSort === "oldest") list.sort((a, b) => a.id - b.id);
    else list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [activeCat, activeSort]);

  const info = GAL_CAT_INFO[activeCat];

  /* ── Lightbox helpers ── */
  const openLb  = useCallback((photo) => {
    const idx = filtered.findIndex((p) => p.id === photo.id);
    setLightbox({ photo, index: idx });
    document.body.style.overflow = "hidden";
  }, [filtered]);

  const closeLb = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const prevLb = useCallback(() => {
    if (!lightbox || lightbox.index === 0) return;
    const idx = lightbox.index - 1;
    setLightbox({ photo: filtered[idx], index: idx });
  }, [lightbox, filtered]);

  const nextLb = useCallback(() => {
    if (!lightbox || lightbox.index === filtered.length - 1) return;
    const idx = lightbox.index + 1;
    setLightbox({ photo: filtered[idx], index: idx });
  }, [lightbox, filtered]);

  /* ── Close sort on outside click ── */
  useEffect(() => {
    if (!sortOpen) return;
    const handler = (e) => {
      if (!e.target.closest(".gal-sort")) setSortOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [sortOpen]);

  const activeSortLabel = GAL_SORT_OPTIONS.find((s) => s.id === activeSort)?.label.split(" ")[0];

  return (
    <div className="gal-root">

      {/* ══ PAGE HEADER ══ */}
      <header className="gal-header">
        <div className="gal-header-left">
          <span className="gal-eyebrow">Our Gallery</span>
          <h1 className="gal-title">
            Moments from <em>JERUSHALIGNE</em>
          </h1>
          <p className="gal-desc">
            A look inside our world — from team celebrations and awareness drives
            to facility milestones and community events.
          </p>
        </div>
        <div className="gal-header-img">
          <img
            src="/images/comparison/girl.webp"
            alt="Dental clinic gallery"
          />
        </div>
      </header>

      {/* ══ CONTROL BAR ══ */}
      <div className="gal-ctrl">
        <div className="gal-ctrl-inner">

          {/* Filter pills */}
          <div className="gal-filters">
            {GAL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`gal-pill ${activeCat === cat.id ? "active" : ""}`}
                onClick={() => setActiveCat(cat.id)}
              >
                {cat.label}
                <span className="gal-pill-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="gal-ctrl-right">
            <span className="gal-res-count">
              <strong>{filtered.length}</strong> photos
            </span>

            {/* Sort */}
            <div className="gal-sort">
              <button
                className="gal-sort-btn"
                onClick={() => setSortOpen((o) => !o)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {activeSortLabel}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`gal-sort-drop ${sortOpen ? "open" : ""}`}>
                {GAL_SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    className={`gal-sort-opt ${activeSort === opt.id ? "active" : ""}`}
                    onClick={() => { setActiveSort(opt.id); setSortOpen(false); }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* View toggle */}
            <div className="gal-view-toggle">
              {[
                { id: "masonry", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="5" height="8" rx="1"/><rect x="7" y="0" width="7" height="4" rx="1"/><rect x="7" y="6" width="7" height="8" rx="1"/><rect x="0" y="10" width="5" height="4" rx="1"/></svg>, title: "Masonry" },
                { id: "grid",    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="6" height="6" rx="1"/><rect x="8" y="0" width="6" height="6" rx="1"/><rect x="0" y="8" width="6" height="6" rx="1"/><rect x="8" y="8" width="6" height="6" rx="1"/></svg>, title: "Grid" },
                { id: "wide",    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="14" height="4" rx="1"/><rect x="0" y="5" width="14" height="4" rx="1"/><rect x="0" y="10" width="14" height="4" rx="1"/></svg>, title: "Wide" },
              ].map((v) => (
                <button
                  key={v.id}
                  className={`gal-view-btn ${activeView === v.id ? "active" : ""}`}
                  title={v.title}
                  onClick={() => setActiveView(v.id)}
                >
                  {v.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ GALLERY ══ */}
      <div className="gal-section">
        {/* Section label */}
        <div className="gal-label">
          <div className="gal-label-bar" />
          <div>
            <div className="gal-label-title">{info.title}</div>
            <div className="gal-label-sub">{info.sub}</div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={`gal-grid ${activeView}`} key={`${activeCat}-${activeSort}-${activeView}`}>
            {filtered.map((photo, i) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                index={i}
                onClick={openLb}
              />
            ))}
          </div>
        ) : (
          <div className="gal-empty show">
            <div className="gal-empty-icon">📷</div>
            <div className="gal-empty-title">No photos yet</div>
            <div className="gal-empty-sub">Nothing here in this category — check back soon.</div>
            <button className="gal-empty-btn" onClick={() => setActiveCat("all")}>
              View all photos
            </button>
          </div>
        )}
      </div>

      {/* ══ LIGHTBOX ══ */}
      {lightbox && (
        <Lightbox
          item={lightbox.photo}
          total={filtered.length}
          index={lightbox.index}
          onClose={closeLb}
          onPrev={prevLb}
          onNext={nextLb}
        />
      )}
    </div>
  );
}