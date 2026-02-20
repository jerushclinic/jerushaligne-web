import SectionWrapper from "../../components/SectionWrapper";
import OutletShowcase from "../../components/outlet-sections/OutletShowcase";
import OutletAbout from "../../components/outlet-sections/OutletAbout";
import DoctorsSection from "../../components/DoctorsSection";
import ReviewsSection from "../../components/outlet-sections/ReviewsSection";

export default function ChennaiOutlet() {
  return (
    <>
      <OutletShowcase
        city="Chennai"
        rating="4.5"
        timings="10:00 AM – 11:00 PM (24/7 All Days)"
        address="Chandhini Apartment, 29, Mahatma Gandhi Rd, Near SBI, Shastri Nagar, Adyar, Tamil Nadu - 600020"
        phone="+919751010107"
        clinicImages={[
          "/images/outlets/thuckalay/before-post.jpg",
          "/images/outlets/thuckalay/post-2.jpg",
        ]}
        banners={[
          "/images/outlets/jerush-chennai.webp",
          "/images/aligner-machine.jpg",
          "/images/outlets/thuckalay/aligner-kit.webp",
          "/images/outlets/thuckalay/jerushaligne-kit-2.webp",
        ]}
        mapSrc="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Chennai&output=embed"
      />

      <OutletAbout
        title="Jerush Dental Clinic Chennai" 
        description="Jerush Dental Clinic Chennai offers advanced dental treatments including aligners, implants, braces, cosmetic dentistry and smile makeover procedures. Our clinic is equipped with modern technology and experienced specialists to ensure painless, safe and long-lasting dental care for every patient."
        stats={[
            { icon: "🏆", value: "#1", label: "Clear Aligner Design" },
            { icon: "🦷", value: "5+", label: "Dental Experts" },
            { icon: "📅", value: "24/7", label: "Consultation" },
            { icon: "🦷", value: "5L+", label: "Aligner Treatments" },
            { icon: "😁", value: "2L+", label: "Smiles Delivered" },
            { icon: "😁", value: "99.9%", label: "Aligner Success Rate" },
          ]}
      />

      <DoctorsSection />
      
     <SectionWrapper delay={0.4}>
           <ReviewsSection />
           </SectionWrapper>

    </>
  );
}
