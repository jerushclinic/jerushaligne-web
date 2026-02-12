import OutletShowcase from "../../components/outlet-sections/OutletShowcase";
import OutletAbout from "../../components/outlet-sections/OutletAbout";
import DoctorsSection from "../../components/DoctorsSection";

export default function ThuckalayOutlet() {
  return (
    <>
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
        mapSrc="https://www.google.com/maps?q=Thuckalay&output=embed"
      />

      <OutletAbout
        title="Jerush Dental Clinic Thuckalay" 
        description="Jerush Dental Clinic Thuckalay offers advanced dental treatments including aligners, implants, braces, cosmetic dentistry and smile makeover procedures. Our clinic is equipped with modern technology and experienced specialists to ensure painless, safe and long-lasting dental care for every patient."
        stats={[
          { icon: "😊", value: "30L+", label: "Happy Patients" },
          { icon: "🦷", value: "5+", label: "Dental Experts" },
          { icon: "📅", value: "7 Days", label: "Open" },
          { icon: "🦷", value: "55K+", label: "Implants" },
          { icon: "😁", value: "7.8K+", label: "Dentures" },
          { icon: "🦷", value: "2L+", label: "Crowns" },
        ]}
      />
<DoctorsSection />


    </>
  );
}
