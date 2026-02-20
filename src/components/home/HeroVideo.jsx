import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[110vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10" />     

      {/* Content */}
      {/* <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-white"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-amber-500/90 text-black text-sm font-semibold">
            Jerushaligne
          </span>

          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
           German - Uk Technology
            <br />
            Clear Aligners For Your Confidence
          </h1>

          <p className="mt-5 text-lg text-white/90">
            Style your Smile, Win your Confidence
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#book"
              className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-600 transition"
            >
              Consult Now
            </a>
          </div>
        </motion.div>
      </div> */}
    </section>
  );
}
