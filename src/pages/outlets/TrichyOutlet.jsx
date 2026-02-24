import SectionWrapper from "../../components/SectionWrapper";
import OutletShowcase from "../../components/outlet-sections/OutletShowcase";
import OutletAbout from "../../components/outlet-sections/OutletAbout";
import DoctorsTrichySection from "../../components/DoctorsTrichySection";
import TeethShortsSection from "../../components/TeethShortsSection";
import ReviewsSection from "../../components/outlet-sections/ReviewsSection";

export default function TrichyOutlet() {
  return (
    <>
      <OutletShowcase
        city="Trichy"
        rating="4.9"
        timings="10:00 AM – 11:00 PM (24/7 All Days)"
        address="No. 72, Second Floor, Pattabiraman Pillai Road, Thenur, Trichy – 600017"
        phone="+919489160033"
        clinicImages={[
          "/images/outlets/thuckalay/before-post.jpg",
          "/images/outlets/thuckalay/post-2.jpg",
        ]}
        banners={[
          "/images/outlets/jerush-trichy.webp",
          "/images/aligner-machine.jpg",
          "/images/outlets/thuckalay/aligner-kit.webp",
          "/images/outlets/thuckalay/jerushaligne-kit-2.webp",
        ]}
        mapSrc="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Trichy&output=embed"
      />

       <TeethShortsSection />

      <OutletAbout
        title="Invisible Teeth Braces in Trichy: Discreet Orthodontic Care for a Confident Smile" 
        description="At Jerush Dental Clinic, Trichy, we provide advanced invisible teeth braces in Trichy designed for patients 
        who want a straighter smile without the discomfort and visibility of metal braces. Our premium aligner system Jerushaligne 
        uses digital precision and customised treatment planning to gently move your teeth into perfect alignment comfortably and predictably. 
        If you are searching for invisible braces in Trichy or the best dental clinic for teeth alignment, Jerush offers modern orthodontic care 
        backed by clinical expertise and advanced technology."
        stats={[
            { icon: "🏆", value: "#1", label: "Clear Aligner Design" },
            { icon: "🦷", value: "5+", label: "Dental Experts" },
            { icon: "📅", value: "24/7", label: "Consultation" },
            { icon: "🦷", value: "5L+", label: "Aligner Treatments" },
            { icon: "😁", value: "2L+", label: "Smiles Delivered" },
            { icon: "😁", value: "99.9%", label: "Aligner Success Rate" },
          ]}
      />

      <DoctorsTrichySection />
      
     <SectionWrapper delay={0.4}>
           <ReviewsSection />
           </SectionWrapper>
    </>
  );
}
