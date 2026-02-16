import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from '@emailjs/browser';

import "../styles/component.css";

export default function AppointmentCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });
  const [status, setStatus] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // ✅ EMAILJS - Replace with your IDs!
      await emailjs.send(
        'service_biws8ba',      // EmailJS dashboard → Services
        'YOUR_TEMPLATE_ID',     // EmailJS dashboard → Email Templates
        {
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          treatment: formData.treatment,
        },
        'YOUR_PUBLIC_KEY'       // EmailJS dashboard → Account → General
      );

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", treatment: "" });
      setTimeout(() => setStatus(""), 5000);

    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Error: " + err.text);
      setStatus("error");
    }
  };

  return (
    <section className="appt-cta">
      <div className="appt-card">
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
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleNameChange}
                required
              />
              <PhoneInput
                country="in"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="phone-input"
                containerClass="phone-container"
                enableSearch
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
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
              {status === "loading" ? "Submitting..." : "Request Appointment →"}
            </button>
            {status === "success" && (
              <p className="form-success">✅ Thanks for reaching us! We'll contact you soon.</p>
            )}
            {status === "error" && (
              <p className="form-error">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
        <div className="appt-right">
          <div className="appt-image-wrap">
            <img src="/images/doctors/doctors-img.png" alt="Dental Specialists" />
          </div>
        </div>
      </div>
    </section>
  );
}