// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionPresets";

import HeroVideo from "../components/HeroVideo";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import BeforeAfterSection from "../components/BeforeAferSection";
import HappySmilesSection from "../components/HappySmilesSection";
import EventsCarousel from "../components/EventsCarousel";
import HowItWorks from "../components/HowItWorks";
import GallerySection from "../components/GallerySection";
import TechEnabledSection from "../components/TechEnabledSection";
import TreatmentComparison from "../components/TreatmentComparison";
import DoctorsSection from "../components/DoctorsSection";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-800"
      style={{ fontFamily: "'Figtree', sans-serif" }}
    >
      <main>
        {/* Hero already animated internally */}
        <HeroVideo />

        {/* Services */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ServicesSection />
        </motion.div>

        {/* About already animated internally */}
        <AboutSection />


      {/* HowItWorks */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <HowItWorks />
        </motion.div>

      {/* Comparison Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TreatmentComparison />
        </motion.div>


        {/* DoctorsSection */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <DoctorsSection />
        </motion.div>


        {/* Happy Smiles */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <HappySmilesSection />
        </motion.div>


          {/* TechEnabled Sectiom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TechEnabledSection />
        </motion.div>


        {/* Before / After already animated internally */}
        <BeforeAfterSection />

       

        {/* Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <GallerySection />
        </motion.div>

     

        {/* Events */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <EventsCarousel />
        </motion.div>
      </main>

      {/* Floating helpers */}
      <WhatsAppButton
        phone="+919876543210"
        message="Hello! I want to book an appointment."
      />
      
    </div>
  );
}
