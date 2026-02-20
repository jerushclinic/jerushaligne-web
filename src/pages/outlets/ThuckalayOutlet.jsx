import SectionWrapper from "../../components/SectionWrapper";
import OutletShowcase from "../../components/outlet-sections/OutletShowcase";
import OutletAbout from "../../components/outlet-sections/OutletAbout";
import DoctorsSection from "../../components/DoctorsSection";
import TeethShortsSection from "../../components/TeethShortsSection";
import ReviewsSection from "../../components/outlet-sections/ReviewsSection";

export default function ThuckalayOutlet() {
  return (
    <>
      <SectionWrapper>
        <OutletShowcase
          city="Thuckalay"
          rating="4.5"
          timings="10:00 AM – 11:00 PM (24/7 All Days)"
          address="Near & Behind Bustand, Brammapuram South, Thuckalay – 629175"
          phone="+919489160055"
          clinicImages={[
            "/images/outlets/thuckalay/before-post.jpg",
           "/images/outlets/thuckalay/jerushaligne-kit-2.webp",
          ]}
          banners={[
            "/images/outlets/jerush-thuckalay.webp",
            "/images/outlets/thuckalay/aligner-kit.webp",
            
            "/images/outlets/thuckalay/aligner-kit.webp",
             "/images/aligner-machine.jpg",
          ]}
          mapSrc="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Thuckalay&output=embed"
        />
      </SectionWrapper>

      <SectionWrapper delay={0.1}>
        <TeethShortsSection />
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <OutletAbout
          title="Your Trusted Choice for Invisible Aligners in Thuckalay"
          description="In the Jerush Dentoface clinic we offer the best and most comfortable treatment of teeth alignment using modern orthodontic technology and individual care. 
          Our dental team is focused on perfection, oral health and patient satisfaction to make your smile perfect. We have 23 years of trusted dental care, and our major strength 
          is providing advanced treatments such as dental implants, root canal treatment, and single visit dentistry using modern technology. In case you are considering straightening 
          misaligned teeth using Invisible Aligners in Thuckalay, then you can schedule your appointment now and begin the process of having a healthier and more confident smile."

          stats={[
            { icon: "🏆", value: "#1", label: "Clear Aligner Design" },
            { icon: "🦷", value: "5+", label: "Dental Experts" },
            { icon: "📅", value: "24/7", label: "Consultation" },
            { icon: "🦷", value: "5L+", label: "Aligner Treatments" },
            { icon: "😁", value: "2L+", label: "Smiles Delivered" },
            { icon: "😁", value: "99.9%", label: "Aligner Success Rate" },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <DoctorsSection />
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
      <ReviewsSection />
      </SectionWrapper>
    </>
  );
}
