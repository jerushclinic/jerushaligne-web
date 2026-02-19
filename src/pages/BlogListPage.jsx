import { useState, useEffect, useRef } from "react";
import "../styles/BlogPage.css";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-retainer", label: "What is a Retainer" },
  { id: "why-retainer", label: "Why Retainer" },
  { id: "types-of-retainer", label: "Types of Retainer" },
  { id: "the-need", label: "The Need" },
  { id: "faq", label: "FAQs" },
];

const faqs = [
  {
    q: "What's the fastest way to adjust to wearing a retainer?",
    a: "The fastest way to adjust to a retainer is to wear it as much as possible, especially full-time in the initial months. Follow your orthodontist's schedule consistently.",
  },
  {
    q: "How do I stop my retainer from smelling bad?",
    a: "Rinse your retainer with lukewarm water every time you remove it. Use a soft-bristled toothbrush with mild antibacterial soap or a specialised cleaning foam to gently brush all surfaces daily.",
  },
  {
    q: "Can I wear my retainer while playing sports?",
    a: "It's recommended not to wear removable retainers during sports as they can break and hurt your mouth. If you have a permanent or fixed retainer bonded behind your teeth, sports is completely safe.",
  },
  {
    q: "Is it normal for my retainer to feel tight after a break?",
    a: "Yes, completely normal. If you skip wearing your retainer for a few days, your teeth may shift slightly making it feel tight. It should settle soon — if not, consult your dentist.",
  },
  {
    q: "Can retainers change the shape of my face or jawline?",
    a: "No. Retainers maintain your tooth position — they don't change your facial shape or jawline.",
  },
];

const relatedArticles = [
  {
    tag: "Oral Care",
    date: "Oct 4, 2020",
    title: "Types of Braces: Removable vs Fixed — Which is Right For You?",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
  },
  {
    tag: "Oral Care",
    date: "Oct 16, 2023",
    title: "Smile Bright: Everything About Modern Teeth Whitening Kits",
    img: "https://images.unsplash.com/photo-1588776814546-1ffbb3f5e39c?w=400&q=80",
  },
  {
    tag: "Oral Care",
    date: "Feb 13, 2025",
    title: "Pioneer in Lingual Orthodontics & Innovative Smile Solutions",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <div className="faq-icon">
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <path
              d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {open && <div className="faq-answer">{faq.a}</div>}
    </div>
  );
}

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [readProgress, setReadProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const contentRef = useRef(null);

  // Read progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setReadProgress(Math.min((scrollTop / docHeight) * 100, 100));

      // Active section tracking
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top < 160) setActiveSection(id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  return (
    <div className="blog-root" ref={contentRef}>
      {/* Progress bar */}
      <div className="read-progress" style={{ width: `${readProgress}%` }} />

      {/* ── HERO ── */}
      <div className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-breadcrumb">
            <a href="#">All Blogs</a>
            <span>/</span>
            <a href="#">Oral Care</a>
            <span>/</span>
            <span>Retainer 101</span>
          </div>

          <div className="blog-tag">Oral Care</div>

          <h1 className="blog-hero-title">
            Retainer 101: What They Are, Why You Need One & What No One Tells You
          </h1>

          <p className="blog-hero-meta">
            <span>
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Jan 15, 2025
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              8 min read
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Dr. Smile Team
            </span>
          </p>

          <div className="blog-hero-img">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=85"
              alt="Dental retainer"
            />
            <div className="blog-hero-img-overlay" />
          </div>
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="blog-layout">

        {/* Sticky Sidebar */}
        <aside className="blog-sidebar">
          <div className="toc-card">
            <div className="toc-header">
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Table of Contents
            </div>
            <nav className="toc-nav">
              {sections.map((s) => (
                <button
                  key={s.id}
                  className={`toc-link ${activeSection === s.id ? "active" : ""}`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Share */}
          <div className="share-card">
            <p className="share-label">Share this article</p>
            <div className="share-btns">
              {["Twitter / X", "Facebook", "LinkedIn", "Copy Link"].map((s) => (
                <button key={s} className="share-btn">{s}</button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="sidebar-cta">
            <p>✨ Ready for your perfect smile?</p>
            <a href="#" className="sidebar-cta-btn">Book a Free Scan</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="blog-content">

          {/* Mobile TOC toggle */}
          <button className="mobile-toc-toggle" onClick={() => setTocOpen(!tocOpen)}>
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Table of Contents
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <path d={tocOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {tocOpen && (
            <div className="mobile-toc">
              {sections.map((s) => (
                <button key={s.id} className={`toc-link ${activeSection === s.id ? "active" : ""}`} onClick={() => scrollTo(s.id)}>
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* ── INTRODUCTION ── */}
          <section id="introduction" className="blog-section">
            <p className="blog-lead">
              A <strong>Teeth Retainer</strong> is the most important part of your smile journey — yet the one most people underestimate. After your aligners, your retainer steps in to keep your teeth from shifting back. Perfect smiles drift out of place simply because the retainer was ignored.
            </p>

            <div className="callout callout--amber">
              <div className="callout-icon">💡</div>
              <div>
                Everyone needs a retainer after clear aligner treatment. Whether you had extensive treatment for crowded or misaligned teeth — a retainer will keep your teeth from reverting back.
              </div>
            </div>

            <p>
              Retainers come in different types: <strong>Clear Retainers</strong>, which are invisible and easy to wear, or a <strong>permanent retainer</strong>, a thin wire which stays fixed behind your teeth for round-the-clock support. No matter which type, their purpose is the same — to protect the smile you worked so hard for.
            </p>
          </section>

          {/* ── WHAT IS A RETAINER ── */}
          <section id="what-is-retainer" className="blog-section">
            <h2 className="blog-h2">What Is a Retainer?</h2>

            <div className="blog-img-block">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffbb3f5e39c?w=900&q=80" alt="Clear retainer" />
            </div>

            <p>
              Teeth Retainers are used to maintain the corrected position of your teeth after your orthodontic treatment is completed. When you use clear aligners, a retainer ensures your smile stays straight and prevents teeth from shifting back to their original positions.
            </p>

            <p>
              Retainers can be removable or fixed, but their job remains the same: to maintain your results for the long term.
            </p>

            <h3 className="blog-h3">Why Your Dentist Swears By Retainers</h3>

            <div className="blog-img-block">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80" alt="Dentist" />
            </div>

            <p>
              Retainers are a custom-made orthodontic appliance designed to hold teeth in their new fixed position after aligner treatment is completed. Dentists insist on them because they consistently bring out positive results with a beautifully aligned smile.
            </p>

            <div className="numbered-list">
              {[
                { title: "Teeth Naturally Try to Shift Back", desc: "After orthodontic treatment, your teeth are still settling into their new positions. Without a retainer, they may slowly drift back. Retainers lock in your results and prevent unwanted movement." },
                { title: "They Protect Your Investment", desc: "Straightening teeth with aligners is a commitment. A retainer ensures you don't lose the progress you worked so hard for. A few hours of wearing a retainer now saves you from corrective treatment later." },
                { title: "Clear Retainers Are Comfortable & Invisible", desc: "Modern clear retainers are transparent, lightweight, and customised to fit snugly. Easy to wear, they deliver consistent, predictable retention." },
                { title: "They Maintain Your Bite & Smile Symmetry", desc: "Beyond straight teeth, retainers help maintain bite alignment and jaw balance, preventing long-term issues like uneven wear, chipping, or discomfort." },
                { title: "They Ensure Long-Term Oral Health", desc: "Properly aligned teeth are easier to clean, reducing the risk of cavities, gum problems, and plaque build-up." },
              ].map((item, i) => (
                <div key={i} className="numbered-item">
                  <div className="numbered-badge">{i + 1}</div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TYPES ── */}
          <section id="types-of-retainer" className="blog-section">
            <h2 className="blog-h2">Types of Retainers</h2>

            <div className="blog-img-block">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80" alt="Types of retainers" />
            </div>

            <p>
              After your smile transformation with clear aligners, choosing the right retainer is essential for keeping your results intact. Let's explore each type.
            </p>

            {/* Type cards */}
            {[
              {
                icon: "🦷",
                title: "Clear Aligners — The Invisible Bestie",
                desc: "If you love something comfortable, discreet, and easy to wear, clear retainers are your go-to. Made of transparent, lightweight material that fits snugly on your teeth.",
                bullets: ["Almost invisible — perfect for everyday wear", "Comfortable and fully customised", "Easy to clean and travel-friendly", "Removable — no food restrictions"],
                color: "amber",
              },
              {
                icon: "🔗",
                title: "Permanent Retainer — The Low-Maintenance One",
                desc: "A thin wire attached to the back of your front teeth. You don't need to remove it, remember it, or think about it — it's always working.",
                bullets: ["Perfect for people who forget removable retainers", "Ideal for patients with a history of gaps or crowding", "Provides 24/7 support without daily routine habits"],
                color: "blue",
              },
              {
                icon: "⚙️",
                title: "Fixed Retainer — The Set It & Forget It Type",
                desc: "Similar to a permanent retainer but placed only on specific teeth depending on your case. Bonded to the inner surface — invisible and completely hassle-free.",
                bullets: ["No need to remove or wear it manually", "Perfect for teens and adults alike", "Works quietly to prevent shifting around the clock"],
                color: "green",
              },
            ].map((type) => (
              <div key={type.title} className={`type-card type-card--${type.color}`}>
                <div className="type-card-icon">{type.icon}</div>
                <div className="type-card-body">
                  <h3 className="type-card-title">{type.title}</h3>
                  <p className="type-card-desc">{type.desc}</p>
                  <ul className="type-card-list">
                    {type.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* ── THE NEED ── */}
          <section id="the-need" className="blog-section">
            <h2 className="blog-h2">Why You Actually Need a Retainer</h2>
            <p className="blog-lead">
              Your teeth might look perfectly aligned after aligner treatment, but the journey isn't over yet. Without a retainer, your teeth can slowly shift back — and this can happen without you even noticing.
            </p>

            <div className="callout callout--red">
              <div className="callout-icon">⚠️</div>
              <div>
                <strong>What happens when you skip your retainer:</strong>
                <ul style={{ marginTop: "8px", paddingLeft: "16px" }}>
                  <li>Teeth start drifting back within weeks</li>
                  <li>Old gaps may reopen</li>
                  <li>Crowding or overlapping can return</li>
                  <li>You may need braces or aligners again</li>
                  <li>Fixing relapse is more time-consuming and expensive</li>
                </ul>
              </div>
            </div>

            <p>
              Your retainer isn't just an accessory — it's your smile's lifelong insurance. Wear it regularly, take care of it, and let it protect the smile you worked so hard to achieve.
            </p>

            <div className="cta-banner">
              <div className="cta-banner-text">
                <h3>Start Your Smile Journey Today</h3>
                <p>Get a free consultation with our experts and find the perfect retainer for you.</p>
              </div>
              <a href="#" className="cta-banner-btn">Book Free Scan →</a>
            </div>
          </section>

          {/* ── FAQs ── */}
          <section id="faq" className="blog-section">
            <h2 className="blog-h2">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </section>

          {/* ── RELATED ARTICLES ── */}
          <section className="blog-section">
            <h2 className="blog-h2">Related Articles</h2>
            <div className="related-grid">
              {relatedArticles.map((a) => (
                <a href="/bloglist" key={a.title} className="related-card">
                  <div className="related-img">
                    <img src={a.img} alt={a.title} />
                  </div>
                  <div className="related-body">
                    <div className="related-meta">
                      <span className="related-tag">{a.tag}</span>
                      <span className="related-date">{a.date}</span>
                    </div>
                    <h3 className="related-title">{a.title}</h3>
                    <span className="related-arrow">Read more →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
