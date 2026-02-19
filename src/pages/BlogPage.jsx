import { useState, useMemo } from "react";
import "../styles/BlogListPage.css";

// ── DATA ──────────────────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All Articles" },
  { id: "oral-care", label: "Oral Care" },
  { id: "skin-care", label: "Skin Care" },
  { id: "in-the-news", label: "In the News" },
  { id: "hair-care", label: "Hair Care" },
  { id: "aligners-vs-braces", label: "Aligners vs Braces" },
  { id: "teeth-whitening", label: "Teeth Whitening" },
  { id: "retainer", label: "Retainer" },
];

const SORT_OPTIONS = [
  { id: "newest", label: "Newest First" },
  { id: "oldest", label: "Oldest First" },
  { id: "az", label: "A – Z" },
];

const POSTS = [
  {
    id: 1,
    slug: "a-fun-guide-to-surviving-with-retainer",
    category: "retainer",
    categoryLabel: "Retainer",
    date: "Feb 5, 2026",
    dateMs: new Date("2026-02-05").getTime(),
    title: "So You Got a Retainer….Now what? A Fun Guide to Surviving It",
    reviewer: "Dr. Manjul Jain",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    slug: "everything-you-need-to-know-before-you-start",
    category: "teeth-whitening",
    categoryLabel: "Teeth Whitening",
    date: "Feb 5, 2026",
    dateMs: new Date("2026-02-05").getTime(),
    title: "Teeth Whitening: Everything You Need to Know Before You Start",
    reviewer: "Pravin Shetty",
    img: "https://images.unsplash.com/photo-1588776814546-1ffbb3f5e39c?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    slug: "teeth-whitening-treatment-results-and-expert",
    category: "teeth-whitening",
    categoryLabel: "Teeth Whitening",
    date: "Feb 1, 2026",
    dateMs: new Date("2026-02-01").getTime(),
    title: "Teeth Whitening Treatment: Types, Results & Expert Advice",
    reviewer: "Dr. Apri Mehta",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    slug: "aligners-vs-braces-for-teenagers",
    category: "aligners-vs-braces",
    categoryLabel: "Aligners vs Braces",
    date: "Jan 29, 2026",
    dateMs: new Date("2026-01-29").getTime(),
    title: "Aligners VS Braces: Which Option Is Better for Teenagers?",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    slug: "post-hydrafacial-skin-care-routine",
    category: "skin-care",
    categoryLabel: "Skin Care",
    date: "Jan 27, 2026",
    dateMs: new Date("2026-01-27").getTime(),
    title: "Post HydraFacial Skin Care Routine Essentials",
    reviewer: "Dr. Regina Joseph",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    featured: false,
  },
  {
    id: 6,
    slug: "mesotherapy-longevity-aftercare",
    category: "skin-care",
    categoryLabel: "Skin Care",
    date: "Jan 20, 2026",
    dateMs: new Date("2026-01-20").getTime(),
    title: "Mesotherapy: Longevity & Tips for Aftercare",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    featured: false,
  },
  {
    id: 7,
    slug: "aligners-vs-braces-cost-comfort-results",
    category: "aligners-vs-braces",
    categoryLabel: "Aligners vs Braces",
    date: "Jan 16, 2026",
    dateMs: new Date("2026-01-16").getTime(),
    title: "Aligners VS Braces: Cost, Comfort & Results Compared",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
    featured: false,
  },
  {
    id: 8,
    slug: "everything-you-need-to-know-about-retainers",
    category: "oral-care",
    categoryLabel: "Oral Care",
    date: "Jan 12, 2026",
    dateMs: new Date("2026-01-12").getTime(),
    title: "Retainer 101: What They Are, Why You Need One & What No One Tells You",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1598256989536-775f33bd5cef?w=600&q=80",
    featured: false,
  },
  {
    id: 9,
    slug: "hydrafacial-treatment-benefits",
    category: "skin-care",
    categoryLabel: "Skin Care",
    date: "Jan 10, 2026",
    dateMs: new Date("2026-01-10").getTime(),
    title: "What is HydraFacial Treatment And What Are the Benefits?",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    featured: false,
  },
  {
    id: 10,
    slug: "what-dentists-dont-tell-you-about-aligners-vs-braces",
    category: "aligners-vs-braces",
    categoryLabel: "Aligners vs Braces",
    date: "Dec 21, 2025",
    dateMs: new Date("2025-12-21").getTime(),
    title: "What Most Dentists Don't Tell You About Aligners vs Braces",
    reviewer: "Dr. Apri Mehta",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    featured: false,
  },
  {
    id: 11,
    slug: "aligners-vs-braces-which-works-faster",
    category: "aligners-vs-braces",
    categoryLabel: "Aligners vs Braces",
    date: "Dec 21, 2025",
    dateMs: new Date("2025-12-21").getTime(),
    title: "Aligners vs Braces – Which Works Faster for Common Teeth Problems?",
    reviewer: "Dr. Pravin Shetty",
    img: "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=600&q=80",
    featured: false,
  },
  {
    id: 12,
    slug: "how-to-use-aligner-at-home",
    category: "oral-care",
    categoryLabel: "Oral Care",
    date: "Aug 22, 2025",
    dateMs: new Date("2025-08-22").getTime(),
    title: "How to Use, Clean & Eat with Aligners",
    reviewer: "Arpi Mehta",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    featured: false,
  },
  {
    id: 13,
    slug: "role-of-mouthwash",
    category: "oral-care",
    categoryLabel: "Oral Care",
    date: "Apr 28, 2025",
    dateMs: new Date("2025-04-28").getTime(),
    title: "The Role of Mouthwash in Maintaining a Bright Smile",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    featured: false,
  },
  {
    id: 14,
    slug: "oil-pulling-for-white-teeth",
    category: "oral-care",
    categoryLabel: "Oral Care",
    date: "Apr 28, 2025",
    dateMs: new Date("2025-04-28").getTime(),
    title: "Oil Pulling for Teeth Whitening",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
    featured: false,
  },
  {
    id: 15,
    slug: "derma-roller-for-hair",
    category: "hair-care",
    categoryLabel: "Hair Care",
    date: "Apr 24, 2025",
    dateMs: new Date("2025-04-24").getTime(),
    title: "Hair Revival: How to Use Derma Roller For Hair",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    featured: false,
  },
  {
    id: 16,
    slug: "toothsi-aligners-cost-india",
    category: "oral-care",
    categoryLabel: "Oral Care",
    date: "Apr 24, 2025",
    dateMs: new Date("2025-04-24").getTime(),
    title: "Toothsi Aligners Cost in India – Types of Braces & Price Factors",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    featured: false,
  },
  {
    id: 17,
    slug: "dental-hygiene-tips",
    category: "oral-care",
    categoryLabel: "Oral Care",
    date: "Mar 10, 2025",
    dateMs: new Date("2025-03-10").getTime(),
    title: "10 Daily Dental Hygiene Tips Your Dentist Wants You to Follow",
    reviewer: "Dr. Smile Team",
    img: "https://images.unsplash.com/photo-1537089421669-ee2f86d4b3e5?w=600&q=80",
    featured: false,
  },
  {
    id: 18,
    slug: "hair-care-basics",
    category: "hair-care",
    categoryLabel: "Hair Care",
    date: "Feb 14, 2025",
    dateMs: new Date("2025-02-14").getTime(),
    title: "Hair Care Basics: The Routine Your Hair Actually Needs",
    reviewer: null,
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
    featured: false,
  },
];

const PER_PAGE = 9;

// ── BLOG CARD ──────────────────────────────────────────
function BlogCard({ post, featured }) {
  return (
    <a href={`/blog/${post.category}/${post.slug}`} className={`bl-card ${featured ? "bl-card--featured" : ""}`}>
      <div className="bl-card-img">
        <img src={post.img} alt={post.title} loading="lazy" />
        <span className="bl-card-tag">{post.categoryLabel}</span>
      </div>
      <div className="bl-card-body">
        <p className="bl-card-date">{post.date}</p>
        <h3 className="bl-card-title">{post.title}</h3>
        {post.reviewer && (
          <p className="bl-card-reviewer">
            <svg viewBox="0 0 24 24" fill="none" width="13" height="13">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Reviewed by {post.reviewer}
          </p>
        )}
        <span className="bl-card-arrow">
          Read more
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </a>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────
export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Filter + sort
  const filtered = useMemo(() => {
    let list = POSTS.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "newest") list = [...list].sort((a, b) => b.dateMs - a.dateMs);
    else if (sortBy === "oldest") list = [...list].sort((a, b) => a.dateMs - b.dateMs);
    else if (sortBy === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [activeCategory, sortBy, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);


  const handleCategory = (id) => {
    setActiveCategory(id);
    setPage(1);
  };

  const handleSort = (id) => {
    setSortBy(id);
    setSortOpen(false);
    setPage(1);
  };

  return (
    <div className="bl-root">
      {/* ── HERO HEADER ── */}
      <div className="bl-hero">
        <div className="bl-hero-inner">
          <p className="bl-hero-eyebrow">🦷 Expert Insights</p>
          <h1 className="bl-hero-title">Jerushaligne Blog</h1>
          <p className="bl-hero-sub">
            Expert tips and insights on oral care to keep you informed, confident, and smiling.
          </p>

          {/* Search bar */}
          <div className="bl-search">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" className="bl-search-icon">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="bl-search-input"
            />
            {search && (
              <button className="bl-search-clear" onClick={() => setSearch("")}>
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="bl-filterbar">
        <div className="bl-filterbar-inner">
          {/* Category tabs */}
          <div className="bl-tabs-wrap">
            <div className="bl-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`bl-tab ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => handleCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="bl-sort">
            <button className="bl-sort-btn" onClick={() => setSortOpen(!sortOpen)}>
              <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
                <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {SORT_OPTIONS.find((s) => s.id === sortBy)?.label}
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d={sortOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {sortOpen && (
              <div className="bl-sort-dropdown">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    className={`bl-sort-opt ${sortBy === opt.id ? "active" : ""}`}
                    onClick={() => handleSort(opt.id)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── RESULTS COUNT ── */}
      <div className="bl-main">
        <div className="bl-results-bar">
          <span className="bl-results-count">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && ` in "${CATEGORIES.find(c => c.id === activeCategory)?.label}"`}
            {search && ` for "${search}"`}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="bl-empty">
            <span>🔍</span>
            <p>No articles found. Try a different filter or search term.</p>
            <button onClick={() => { setActiveCategory("all"); setSearch(""); }}>Clear filters</button>
          </div>
        ) : (
          <>
            {/* Uniform grid */}
            <div className="bl-grid">
              {paginated.map((post) => (
                <BlogCard key={post.id} post={post} featured={false} />
              ))}
            </div>

            {/* ── PAGINATION ── */}
            {totalPages > 1 && (
              <div className="bl-pagination">
                <button
                  className="bl-page-btn bl-page-nav"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ← Prev
                </button>

                <div className="bl-page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                    const show = p === 1 || p === totalPages || Math.abs(p - page) <= 1;
                    const showDots = p === page - 2 || p === page + 2;
                    if (showDots) return <span key={p} className="bl-page-dots">…</span>;
                    if (!show) return null;
                    return (
                      <button
                        key={p}
                        className={`bl-page-btn ${page === p ? "active" : ""}`}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>

                <button
                  className="bl-page-btn bl-page-nav"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}