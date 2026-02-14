import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../styles/component.css";

export default function AppointmentCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  const [status, setStatus] = useState("");

  /* ✅ NAME – ONLY LETTERS */
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  /* ✅ FORM SUBMIT - UPDATED WITH BETTER ERROR HANDLING */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validations
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return setStatus("error");
    }

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid phone number");
      return setStatus("error");
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email");
      return setStatus("error");
    }

    if (!formData.treatment) {
      alert("Please select a treatment");
      return setStatus("error");
    }

    setStatus("loading");

    try {
      // ✅ FULL URL (Vercel production URL)
      const API_URL = window.location.hostname === "localhost" 
        ? "http://localhost:3000/api/appointment"
        : "https://jerushaligne-web-tau.vercel.app/api/appointment";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ Get response as text first (to handle non-JSON errors)
      const text = await res.text();
      console.log("Response:", text);

      // ✅ Parse JSON safely
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Server error: " + text.substring(0, 100));
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      
      // Reset Form
      setFormData({
        name: "",
        phone: "",
        email: "",
        treatment: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);

    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error: " + err.message);
      setStatus("error");
    }
  };

  return (
    <section className="appt-cta">
      <div className="appt-card">

        {/* LEFT */}
        <div className="appt-left">
          <span className="appt-eyebrow">BOOK APPOINTMENT</span>

          <h2>
            Schedule Your <span>Dental Visit</span>
          </h2>

          <motion.div
            className="ret-why-line"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <form onSubmit={handleSubmit}>
            <div className="appt-grid">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleNameChange}
                required
              />

              {/* PHONE */}
              <PhoneInput
                country="in"
                value={formData.phone}
                onChange={(phone) =>
                  setFormData({ ...formData, phone })
                }
                inputClass="phone-input"
                containerClass="phone-container"
                enableSearch
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />

              {/* TREATMENT */}
              <select
                value={formData.treatment}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    treatment: e.target.value,
                  })
                }
                required
              >
                <option value="">Select Treatment</option>
                <option>Clear Aligners</option>
                <option>Retainers</option>
                <option>Braces</option>
                <option>Smile Design</option>
              </select>
            </div>

            <button type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? "Submitting..."
                : "Request Appointment →"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="form-success">
                ✅ Thanks for reaching us! We'll contact you soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-error">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* RIGHT */}
        <div className="appt-right">
          <div className="appt-image-wrap">
            <img
              src="/images/doctors/doctors-img.png"
              alt="Dental Specialists"
            />
          </div>
        </div>

      </div>
    </section>
  );
}