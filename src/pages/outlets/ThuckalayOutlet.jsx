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
          rating="4.6"
          timings="10:00 AM – 11:00 PM (24/7 All Days)"
          address="Near & Behind Bustand, Brammapuram South, Thuckalay – 629175"
          phone="+919489160055"
          clinicImages={[
            "/images/outlets/thuckalay/before-post.jpg",
            "/images/outlets/thuckalay/post-2.jpg",
          ]}
          banners={[
            "/images/outlets/thuckalay/aligner-kit.webp",
            "/images/outlets/thuckalay/jerushaligne-kit-2.webp",
          ]}
          mapSrc="https://www.google.com/maps?q=Jerush+Dentofacial+and+Cosmetic+Laser+Centre+Thuckalay&output=embed"
        />
      </SectionWrapper>

      <SectionWrapper delay={0.1}>
        <TeethShortsSection />
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <OutletAbout
          title="Jerush Dental Clinic Thuckalay"
          description="Jerush Dental Clinic Thuckalay offers advanced dental treatments including aligners, implants, braces, cosmetic dentistry and smile makeover procedures..."
          stats={[
            { icon: "🏆", value: "#1", label: "Clear Aligners" },
            { icon: "🦷", value: "5+", label: "Dental Experts" },
            { icon: "📅", value: "7 Days", label: "Open" },
            { icon: "🦷", value: "55K+", label: "Implants" },
            { icon: "😁", value: "7.8K+", label: "Dentures" },
            { icon: "😁", value: "2L+", label: "Happy Smiles" },
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
