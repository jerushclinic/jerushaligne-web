// WhyJerushaligneIsDifferent.jsx
import { motion } from "framer-motion";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
import FounderSection from "../components/jerushaligne-story/FounderHeroSection";
import "../styles/whyjerush.css";
import "../styles/AboutPage.css"


/* ================= FRAMER VARIANTS ================= */

const pageVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      {/* ================= HERO BREADCRUMB ================= */}
      <motion.div variants={sectionVariants}>
        <HeroBreadcrumb
          title="Story of Jerushaligne"
          subtitle="Let's Catch up How we Made"
          image="/images/comparison/girl.webp"
        />
      </motion.div>



        {/* ================= FOUNDER SECTION ================= */}
      <motion.div variants={sectionVariants}>
        <FounderSection />
      </motion.div>

    

    </motion.div>
  );
}
