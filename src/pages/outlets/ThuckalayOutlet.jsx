import SectionWrapper from "../../components/SectionWrapper";
import OutletShowcase from "../../components/outlet-sections/OutletShowcase";
import OutletAbout from "../../components/outlet-sections/OutletAbout";
import DoctorsSection from "../../components/DoctorsSection";
import TeethShortsSection from "../../components/TeethShortsSection";
import PatronReviews from "../../components/outlet-sections/PatronReviews";

export default function ThuckalayOutlet() {
  return (
    <>
      <SectionWrapper>
        <OutletShowcase
          city="Kanyakumari"
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
          title="Straighten Misaligned Teeth with Invisible Aligners in Kanyakumari"
          description="Misaligned teeth may also influence your confidence and oral health as well as your smile. The Best Dental Clinic Jerush Dentoface offers the 
          advanced clear invisible aligners in Kanyakumari to make the patients have a straight, healthier smile without the pain and look of metal braces. Jerushaligne are 
          clear and custom-made trays that will push your teeth to correct alignment slowly. They are comfortable, precise and convenient; they would be a perfect fit among 
          teenagers, working professionals and adults who would want an orthodontic treatment that is discrete."


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
      <PatronReviews />
      </SectionWrapper>
    </>
  );
}
