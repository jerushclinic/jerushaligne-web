import { useState, useEffect, useRef } from "react";
import "../../styles/AppointmentForm.css";

/* ── Slider images ── */
const sliderImages = [
  { src: "/images/appointment/clinic1.webp", caption: "State-of-the-art Facility" },
  { src: "/images/appointment/clinic2.webp", caption: "Expert Dental Team" },
  { src: "/images/appointment/clinic3.webp", caption: "German-UK Aligner Tech" },
  { src: "/images/appointment/clinic4.webp", caption: "Comfortable Experience" },
  { src: "/images/appointment/clinic5.webp", caption: "Smile Transformation" },
];

/* ── Country codes ── */
const countryCodes = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1",  flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
];

const treatments = [
  "Teeth Aligners",
  "Tooth Cleaning",
  "Tooth Extraction",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces",
  "Other",
];

const outlets = ["Thuckalay", "Trichy", "Chennai"];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM", "05:30 PM",
];

/* ── Validation helpers ── */
const validators = {
  name: (v) => {
    if (!v.trim()) return "Full name is required";
    if (v.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s.'-]+$/.test(v)) return "Name can only contain letters";
    return "";
  },
  email: (v) => {
    if (!v.trim()) return "Email address is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email (e.g. name@email.com)";
    return "";
  },
  phone: (v) => {
    if (!v.trim()) return "Phone number is required";
    if (!/^\d{7,15}$/.test(v.replace(/\s/g, ""))) return "Enter a valid phone number (7–15 digits)";
    return "";
  },
  treatment: (v) => (!v ? "Please select a treatment" : ""),
  outlet: (v) => (!v ? "Please select a clinic location" : ""),
  date: (v) => {
    if (!v) return "Please select a preferred date";
    const selected = new Date(v);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) return "Date cannot be in the past";
    return "";
  },
  time: (v) => (!v ? "Please select a preferred time" : ""),
};

const initialForm = {
  name: "", email: "", countryCode: "+91", phone: "",
  treatment: "", outlet: "", date: "", time: "", notes: "",
};

export default function AppointmentForm() {
  /* ── Slider state ── */
  const [af_slide, setAfSlide] = useState(0);
  const af_sliderTimer = useRef(null);

  const af_startAuto = () => {
    af_sliderTimer.current = setInterval(() => {
      setAfSlide((p) => (p + 1) % sliderImages.length);
    }, 3200);
  };

  useEffect(() => {
    af_startAuto();
    return () => clearInterval(af_sliderTimer.current);
  }, []);

  const af_goTo = (i) => {
    clearInterval(af_sliderTimer.current);
    setAfSlide((i + sliderImages.length) % sliderImages.length);
    af_startAuto();
  };

  /* ── Form state ── */
  const [af_form, setAfForm] = useState(initialForm);
  const [af_errors, setAfErrors] = useState({});
  const [af_touched, setAfTouched] = useState({});
  const [af_codeOpen, setAfCodeOpen] = useState(false);
  const [af_submitted, setAfSubmitted] = useState(false);
  const [af_loading, setAfLoading] = useState(false);

  /* Validate single field */
  const af_validate = (field, value) => {
    const fn = validators[field];
    return fn ? fn(value) : "";
  };

  /* On change */
  const af_onChange = (field, value) => {
    setAfForm((p) => ({ ...p, [field]: value }));
    if (af_touched[field]) {
      setAfErrors((p) => ({ ...p, [field]: af_validate(field, value) }));
    }
  };

  /* On blur — mark touched and validate */
  const af_onBlur = (field) => {
    setAfTouched((p) => ({ ...p, [field]: true }));
    setAfErrors((p) => ({ ...p, [field]: af_validate(field, af_form[field]) }));
  };

  /* Validate all on submit */
  const af_validateAll = () => {
    const fields = ["name", "email", "phone", "treatment", "outlet", "date", "time"];
    const newErrors = {};
    const newTouched = {};
    fields.forEach((f) => {
      newTouched[f] = true;
      newErrors[f] = af_validate(f, af_form[f]);
    });
    setAfTouched(newTouched);
    setAfErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  /* Submit */
  const af_onSubmit = async (e) => {
    e.preventDefault();
    if (!af_validateAll()) return;
    setAfLoading(true);
    await new Promise((r) => setTimeout(r, 1800)); // simulate API
    setAfLoading(false);
    setAfSubmitted(true);
  };

  /* Today's date string for min attribute */
  const af_todayStr = new Date().toISOString().split("T")[0];

  /* Phone — digits only */
  const af_onPhoneInput = (e) => {
    const val = e.target.value.replace(/[^\d\s]/g, "");
    af_onChange("phone", val);
  };

  return (
    <section className="af-section">
      <div className="af-wrapper">

        {/* ══════════════ LEFT — SLIDER ══════════════ */}
        <div className="af-left">
          <div className="af-slider">
            {/* Track */}
            <div
              className="af-track"
              style={{ transform: `translateX(-${af_slide * 100}%)` }}
            >
              {sliderImages.map((img, i) => (
                <div key={i} className="af-slide">
                  <img
                    src={img.src}
                    alt={img.caption}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/600x700/ffd700/1a3a2a?text=${encodeURIComponent(img.caption)}`;
                    }}
                  />
                  <div className="af-slide-caption">
                    <span>{img.caption}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button className="af-arrow af-arrow--left" onClick={() => af_goTo(af_slide - 1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="af-arrow af-arrow--right" onClick={() => af_goTo(af_slide + 1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Dots */}
            <div className="af-dots">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  className={`af-dot ${i === af_slide ? "af-dot--active" : ""}`}
                  onClick={() => af_goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Info overlay card */}
          <div className="af-info-card">
            <div className="af-info-item">
              <span className="af-info-icon">🦷</span>
              <div>
                <strong>Expert Dentists</strong>
                <p>Certified specialists at every outlet</p>
              </div>
            </div>
            <div className="af-info-divider" />
            <div className="af-info-item">
              <span className="af-info-icon">⚡</span>
              <div>
                <strong>Quick Response</strong>
                <p>We confirm within 2 hours</p>
              </div>
            </div>
            <div className="af-info-divider" />
            <div className="af-info-item">
              <span className="af-info-icon">📍</span>
              <div>
                <strong>3 Locations</strong>
                <p>Thuckalay · Trichy · Chennai</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ RIGHT — FORM ══════════════ */}
        <div className="af-right">
          {af_submitted ? (
            /* ── Success State ── */
            <div className="af-success">
              <div className="af-success-icon">✅</div>
              <h3>Appointment Requested!</h3>
              <p>Thank you, <strong>{af_form.name}</strong>! We've received your request for <strong>{af_form.treatment}</strong> at our <strong>{af_form.outlet}</strong> clinic.</p>
              <p className="af-success-sub">Our team will confirm your appointment on <strong>{af_form.email}</strong> or call you at <strong>{af_form.countryCode} {af_form.phone}</strong> within 2 hours.</p>
              <button className="af-btn-primary" onClick={() => { setAfSubmitted(false); setAfForm(initialForm); setAfTouched({}); setAfErrors({}); }}>
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              <div className="af-form-header">
                <span className="af-eyebrow">📅 Book Now</span>
                <h2 className="af-form-title">Request an Appointment</h2>
                <p className="af-form-sub">Fill in your details and we'll confirm your slot shortly.</p>
              </div>

              <form className="af-form" onSubmit={af_onSubmit} noValidate>

                {/* ── Full Name ── */}
                <div className={`af-field ${af_touched.name && af_errors.name ? "af-field--error" : af_touched.name && !af_errors.name ? "af-field--valid" : ""}`}>
                  <label className="af-label">Full Name <span className="af-required">*</span></label>
                  <div className="af-input-wrap">
                    <span className="af-input-icon">👤</span>
                    <input
                      type="text"
                      className="af-input"
                      placeholder="e.g. Ramesh Kumar"
                      value={af_form.name}
                      onChange={(e) => af_onChange("name", e.target.value)}
                      onBlur={() => af_onBlur("name")}
                      maxLength={60}
                      autoComplete="name"
                    />
                    {af_touched.name && !af_errors.name && <span className="af-valid-tick">✓</span>}
                  </div>
                  {af_touched.name && af_errors.name && <p className="af-error">{af_errors.name}</p>}
                </div>

                {/* ── Email ── */}
                <div className={`af-field ${af_touched.email && af_errors.email ? "af-field--error" : af_touched.email && !af_errors.email ? "af-field--valid" : ""}`}>
                  <label className="af-label">Email Address <span className="af-required">*</span></label>
                  <div className="af-input-wrap">
                    <span className="af-input-icon">✉️</span>
                    <input
                      type="email"
                      className="af-input"
                      placeholder="e.g. ramesh@gmail.com"
                      value={af_form.email}
                      onChange={(e) => af_onChange("email", e.target.value)}
                      onBlur={() => af_onBlur("email")}
                      autoComplete="email"
                    />
                    {af_touched.email && !af_errors.email && <span className="af-valid-tick">✓</span>}
                  </div>
                  {af_touched.email && af_errors.email && <p className="af-error">{af_errors.email}</p>}
                </div>

                {/* ── Phone with country code ── */}
                <div className={`af-field ${af_touched.phone && af_errors.phone ? "af-field--error" : af_touched.phone && !af_errors.phone ? "af-field--valid" : ""}`}>
                  <label className="af-label">Phone Number <span className="af-required">*</span></label>
                  <div className="af-phone-row">
                    {/* Country code dropdown */}
                    <div className="af-code-wrap">
                      <button
                        type="button"
                        className="af-code-btn"
                        onClick={() => setAfCodeOpen((p) => !p)}
                        aria-label="Select country code"
                      >
                        <span>{countryCodes.find((c) => c.code === af_form.countryCode)?.flag}</span>
                        <span>{af_form.countryCode}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M6 9l6 6 6-6"/></svg>
                      </button>
                      {af_codeOpen && (
                        <ul className="af-code-menu">
                          {countryCodes.map((c) => (
                            <li key={c.code}>
                              <button
                                type="button"
                                className={af_form.countryCode === c.code ? "active" : ""}
                                onClick={() => { af_onChange("countryCode", c.code); setAfCodeOpen(false); }}
                              >
                                <span>{c.flag}</span>
                                <span>{c.name}</span>
                                <span className="af-code-num">{c.code}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {/* Phone input */}
                    <div className="af-input-wrap af-input-wrap--phone">
                      <input
                        type="tel"
                        className="af-input"
                        placeholder="98765 43210"
                        value={af_form.phone}
                        onChange={af_onPhoneInput}
                        onBlur={() => af_onBlur("phone")}
                        maxLength={15}
                        autoComplete="tel"
                        inputMode="numeric"
                      />
                      {af_touched.phone && !af_errors.phone && <span className="af-valid-tick">✓</span>}
                    </div>
                  </div>
                  {af_touched.phone && af_errors.phone && <p className="af-error">{af_errors.phone}</p>}
                </div>

                {/* ── Treatment ── */}
                <div className={`af-field ${af_touched.treatment && af_errors.treatment ? "af-field--error" : af_touched.treatment && !af_errors.treatment ? "af-field--valid" : ""}`}>
                  <label className="af-label">Treatment Required <span className="af-required">*</span></label>
                  <div className="af-input-wrap">
                    <span className="af-input-icon">🦷</span>
                    <select
                      className="af-input af-select"
                      value={af_form.treatment}
                      onChange={(e) => af_onChange("treatment", e.target.value)}
                      onBlur={() => af_onBlur("treatment")}
                    >
                      <option value="">Select a treatment</option>
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {af_touched.treatment && !af_errors.treatment && <span className="af-valid-tick">✓</span>}
                  </div>
                  {af_touched.treatment && af_errors.treatment && <p className="af-error">{af_errors.treatment}</p>}
                </div>

                {/* ── Clinic Location ── */}
                <div className={`af-field ${af_touched.outlet && af_errors.outlet ? "af-field--error" : af_touched.outlet && !af_errors.outlet ? "af-field--valid" : ""}`}>
                  <label className="af-label">Preferred Clinic <span className="af-required">*</span></label>
                  <div className="af-input-wrap">
                    <span className="af-input-icon">📍</span>
                    <select
                      className="af-input af-select"
                      value={af_form.outlet}
                      onChange={(e) => af_onChange("outlet", e.target.value)}
                      onBlur={() => af_onBlur("outlet")}
                    >
                      <option value="">Select a clinic location</option>
                      {outlets.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    {af_touched.outlet && !af_errors.outlet && <span className="af-valid-tick">✓</span>}
                  </div>
                  {af_touched.outlet && af_errors.outlet && <p className="af-error">{af_errors.outlet}</p>}
                </div>

                {/* ── Date & Time row ── */}
                <div className="af-row">
                  {/* Date */}
                  <div className={`af-field ${af_touched.date && af_errors.date ? "af-field--error" : af_touched.date && !af_errors.date ? "af-field--valid" : ""}`}>
                    <label className="af-label">Preferred Date <span className="af-required">*</span></label>
                    <div className="af-input-wrap">
                      <span className="af-input-icon">📅</span>
                      <input
                        type="date"
                        className="af-input"
                        value={af_form.date}
                        min={af_todayStr}
                        onChange={(e) => af_onChange("date", e.target.value)}
                        onBlur={() => af_onBlur("date")}
                      />
                      {af_touched.date && !af_errors.date && <span className="af-valid-tick">✓</span>}
                    </div>
                    {af_touched.date && af_errors.date && <p className="af-error">{af_errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div className={`af-field ${af_touched.time && af_errors.time ? "af-field--error" : af_touched.time && !af_errors.time ? "af-field--valid" : ""}`}>
                    <label className="af-label">Preferred Time <span className="af-required">*</span></label>
                    <div className="af-input-wrap">
                      <span className="af-input-icon">🕐</span>
                      <select
                        className="af-input af-select"
                        value={af_form.time}
                        onChange={(e) => af_onChange("time", e.target.value)}
                        onBlur={() => af_onBlur("time")}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {af_touched.time && !af_errors.time && <span className="af-valid-tick">✓</span>}
                    </div>
                    {af_touched.time && af_errors.time && <p className="af-error">{af_errors.time}</p>}
                  </div>
                </div>

                {/* ── Notes (optional) ── */}
                <div className="af-field">
                  <label className="af-label">Additional Notes <span className="af-optional">(optional)</span></label>
                  <div className="af-input-wrap af-input-wrap--textarea">
                    <span className="af-input-icon af-input-icon--top">📝</span>
                    <textarea
                      className="af-input af-textarea"
                      placeholder="Any specific concerns or requirements..."
                      value={af_form.notes}
                      onChange={(e) => af_onChange("notes", e.target.value)}
                      rows={3}
                      maxLength={300}
                    />
                  </div>
                  <p className="af-char-count">{af_form.notes.length}/300</p>
                </div>

                {/* ── Submit ── */}
                <button
                  type="submit"
                  className={`af-btn-primary ${af_loading ? "af-btn--loading" : ""}`}
                  disabled={af_loading}
                >
                  {af_loading ? (
                    <><span className="af-spinner" />Booking your appointment...</>
                  ) : (
                    <>📅 Confirm Appointment</>
                  )}
                </button>

                <p className="af-privacy">
                  🔒 Your information is safe with us and will never be shared.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
