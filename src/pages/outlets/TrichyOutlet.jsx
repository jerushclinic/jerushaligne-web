import SectionWrapper from "../../components/SectionWrapper";
import OutletShowcase from "../../components/outlet-sections/OutletShowcase";
import OutletAbout from "../../components/outlet-sections/OutletAbout";
import DoctorsSection from "../../components/DoctorsSection";
import TeethShortsSection from "../../components/TeethShortsSection";
import ReviewsSection from "../../components/outlet-sections/ReviewsSection";

export default function TrichyOutlet() {
  return (
    <>
      <OutletShowcase
        city="Trichy"
        rating="4.5"
        timings="10:00 AM – 11:00 PM (24/7 All Days)"
        address="No. 72, Second Floor, Pattabiraman Pillai Road, Thenur, Trichy – 600017"
        phone="+919489160033"
        clinicImages={[
          "/images/outlets/thuckalay/before-post.jpg",
          "/images/outlets/thuckalay/post-2.jpg",
        ]}
        banners={[
          "/images/outlets/thuckalay/aligner-kit.webp",
          "/images/outlets/thuckalay/jerushaligne-kit-2.webp",
        ]}
        mapSrc="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Trichy&output=embed"
      />

       <TeethShortsSection />

      <OutletAbout
        title="Jerush Dental Clinic Trichy" 
        description="Jerush Dental Clinic Thuckalay offers advanced dental treatments including aligners, implants, braces, cosmetic dentistry and smile makeover procedures. Our clinic is equipped with modern technology and experienced specialists to ensure painless, safe and long-lasting dental care for every patient."
        stats={[
          { icon: "😊", value: "30L+", label: "Happy Patients" },
          { icon: "🦷", value: "1500+", label: "Dentists" },
          { icon: "📅", value: "7 Days", label: "Open" },
          { icon: "🦷", value: "55K+", label: "Implants" },
          { icon: "😁", value: "7.8K+", label: "Dentures" },
          { icon: "🦷", value: "2L+", label: "Crowns" },
        ]}
      />

      <DoctorsSection />
      
     <SectionWrapper delay={0.4}>
           <ReviewsSection />
           </SectionWrapper>
    </>
  );
}
