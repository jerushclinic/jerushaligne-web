import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[110vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10" />     

     
    </section>
  );
}
