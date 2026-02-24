import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/doctors-section.css";


const doctors = [
  {
    name: "Dr. A. Bladbin",
    role: "Chairman, Jerush Groups",
    degree: "MBBS(Ukraine), LLB, MDS(OMFS), PHD(Srilanka), PHD(Hons), FAM(Ger), MCHT(Ger), MCDC(Ger)",
    img: "/images/doctors/dr_bladbin.webp",
    additionalImg: "/images/doctors/dr_bladbin2.webp",
    contentSections: [
      {
        heading: "Academic Achievements and Professional Milestones:",

        // Using markdown syntax: **bold** __underline__
        paragraph: "Dr. Bladbin’s illustrious career began with his Bachelor of Dental Surgery (B.D.S.) degree in 2000, a milestone marked by numerous awards and distinctions. Recognized for his dedication and brilliance, he furthered his education by earning a Master’s Degree in Oral and Maxillofacial Surgery, where he emerged as the University topper in 2011. Demonstrating his commitment to holistic medical expertise, he completed his MBBS from Ukraine in 2021, expanding his capabilities as a healthcare provider.\n\n In addition to these degrees, Dr. Bladbin has pursued advanced postgraduate training in Implantology in Switzerland. With nearly two decades of experience, he has become a recognized authority in the surgical and restorative aspects of Dental Implantology. Complementing his extensive clinical expertise, he holds a PhD from the University of Sri Lanka and has acquired various certifications through ongoing postgraduate education in multiple countries. His global exposure ensures he remains at the forefront of technological advancements and best practices in dental care."
      },
      {
        heading: "Clinical Expertise:",
        // Using HTML tags: <strong>bold</strong> <u>underline</u>
        paragraph: [
          "Renowned for his surgical precision and compassionate care, Dr. Bladbin specializes in addressing complex issues related to the face, mouth, jaws, and neck. His high standard of care and attention to detail ensure optimal outcomes for his patients. Whether handling advanced surgical procedures or routine care, he seamlessly blends professionalism with a friendly demeanor, earning the trust and respect of his patients"
        ]
      },
      {
        heading: "His areas of special interest include:",

        paragraph: "<strong>Multidisciplinary Dental Cases:</strong> Requiring careful coordination among various specialties to achieve optimal outcomes.\n\n<strong>Oral Surgery:</strong> With a focus on treating intricate problems of the jaw and face.\n\n<strong>Cosmetic Dentistry:</strong> Helping patients regain their confidence with advanced aesthetic solutions."
      },
      {
        heading: "Leadership and Service:",
        // Using HTML tags: <strong>bold</strong> <u>underline</u>
        paragraph: [
          "Beyond his clinical achievements, Dr. Bladbin exemplifies leadership and service in the community. On April 24, 2015, he joined the Kanyakumari District Home Guards as an Area Commander. His tenure in this role is marked by extraordinary dedication, simplicity, and unwavering commitment to duty. Rising to the rank of Area Commander, he has showcased a unique ability to inspire all-around support from colleagues, officials, and the general public during emergencies.\n\nGuided by the principles of <strong>“Duty,” “Honor” and “Discipline,”</strong> Dr. Bladbin has led by example, performing his responsibilities with moral fortitude even under challenging circumstances. His efforts have not only garnered professional acclaim but also touched the lives of countless individuals who have witnessed his swift and effective action in times of need."
        ]
      },
      {
        heading: "Recognition and Future Honors:",
             paragraph: "In recognition of his exemplary service and humanitarian efforts, Dr. Bladbin has been nominated for the prestigious President’s Award, a testament to his impactful contributions to society. This honor reflects his tireless dedication to improving the lives of others, both as a healthcare provider and as a public servant."
      },
      {
        heading: "Legacy and Vision:",
             paragraph: "Dr. Bladbin’s unwavering passion for his profession and his commitment to patient care have positioned him as a luminary in the dental and medical communities. Through his exceptional skills, leadership, and compassionate approach, he continues to inspire those around him, leaving an indelible mark on both his profession and the communities he serves."
      }
    ]
  },
  {
    name: "Dr. C. Binila Asir",
    role: "Director, Jerush Groups",
    degree: "MDS.,Oral & Maxillofacial Surgeon",
    img: "/images/doctors/dr_binila.webp",
    additionalImg: "/images/doctors/dr_binila2.webp",
    contentSections: [
      {
        heading: "Academic Achievements and Professional Milestones:",

        // Using markdown syntax: **bold** __underline__
        paragraph: "Dr. Binila serves as the esteemed Director of Jerush Dental Hospitals, bringing over 15 years of clinical experience as a leading dental surgeon. She completed her B.D.S. degree in 2004 and subsequently pursued a Postgraduate Master’s degree in Oral and Maxillofacial Surgery in 2012. Alongside her clinical excellence, she has carved a niche for herself as a Cosmetologist, seamlessly integrating aesthetic treatments into her dental practice."
      },
      {
        heading: "Clinical Expertise and Patient-Centric Care:",
        // Using HTML tags: <strong>bold</strong> <u>underline</u>
        paragraph: [
          "Dr. Binila’s career is defined by her extraordinary talent for artistic dentistry, a field where her precision and creativity come to life. Her work reflects not just technical expertise but also a commitment to creating beautiful, functional smiles for her patients. Known for her patience, kindness, and empathetic demeanor, she ensures that every patient under her care receives the highest level of attention and comfort.\n\nDr. Binila takes pride in educating her patients about sustainable oral health practices, emphasizing the importance of maintaining long-term dental hygiene. She believes in empowering patients by providing clear, comprehensive information about their treatments and aftercare. Her goal is to ensure patients leave her care with not just bright smiles but also the confidence to maintain optimal oral health."
        ]
      },
      {
        heading: "Special Interests and Innovations:",
        paragraph: "Dr. Binila has a particular interest in cosmetic dentistry, focusing on treatments that enhance the aesthetic appeal of her patients’ smiles. In addition to her cosmetic expertise, she offers a range of minimally invasive treatments, including dental restorations, replacements, and emergency dental care.\n\nA lifelong learner, Dr. Binila regularly updates her skills and knowledge to incorporate the latest advancements in dental technology. She integrates cutting-edge tools and techniques into her practice, ensuring her patients receive the utmost benefit of modern innovations."
      },
      {
        heading: "Awards and Recognitions:",
        // Using HTML tags: <strong>bold</strong> <u>underline</u>
        paragraph: [
          "Dr. Binila’s exceptional skills have been acknowledged by numerous prestigious organizations. She has received multiple awards for her expertise in dentistry, with a special emphasis on her proficiency in cosmetic procedures. These accolades highlight her unwavering commitment to excellence and her ability to transform lives through dentistry."
        ]
      },
      {
        heading: "Community Service and Outreach:",
             paragraph: "Beyond her clinical practice, Dr. Binila is deeply committed to giving back to the community. She actively organizes and participates in regular dental camps, aiming to make dental care accessible to underserved populations. At these camps, she provides free oral hygiene education and distributes dental care kits to the poor and needy, fostering awareness about the importance of oral health.\n\nHer efforts are rooted in her belief that everyone deserves access to quality dental care, regardless of their socioeconomic background. Through these initiatives, Dr. Binila has touched countless lives, making a profound impact on the community and bridging gaps in dental healthcare access."
      },
      {
        heading: "Legacy and Vision:",
             paragraph: "Dr. Binila’s unwavering dedication to her profession and her patients has solidified her reputation as a visionary leader in dentistry. Through her clinical expertise, artistic approach, and community-driven efforts, she continues to inspire trust and admiration among her patients and peers alike. Her passion for creating smiles and improving lives drives her to push boundaries, ensuring that Jerush Dental Hospitals remains a leader in modern, compassionate dental care."
      }
    ]
  },

  {
    name: "Dr.Bhagavath Keerthana",
    role: "Periodontist | Implantologist",
    degree: "BDS.,MDS",
    img: "/images/doctors/trichy/dr_bhagavath.webp",
    additionalImg: "/images/doctors/trichy/dr_bhagavath2.webp",
    contentSections: [
      {
        heading: "Career Path:",
        paragraph: "Dr. Aishwarya qualified as a dental surgeon in 2014 and joined Jerush as a duty doctor in 2015. Since her joining, she has excelled in diagnosing dental issues with expertise and precision. Her primary area of interest lies in endodontics, though she has also developed significant expertise in fixed partial dentures, restorations, extractions, and other dental procedures.\n\nDr. Aishwarya’s dedication and skill have consistently earned positive feedback from patients. She is highly regarded for her ability to clearly explain dental issues and treatment options, making her a trusted professional among her patients. She continues to be an integral part of the hospital, showcasing her extraordinary talent and commitment to the field of dentistry."
      }
    ]
  },
];




// Duplicate for infinite smooth loop
const extended = [...doctors, ...doctors];

/* ================= FORMAT PARSER ================= */
// Converts formatting syntax to HTML
const formatText = (text) => {
  if (!text) return text;
  
  // Replace markdown-style formatting
  let formatted = text
    // Bold: **text** or <b>text</b> or <strong>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic: *text* or <i>text</i> or <em>text</em>
    .replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, '<em>$1</em>')
    // Underline: __text__ or <u>text</u>
    .replace(/__(.*?)__/g, '<u>$1</u>');
  
  return formatted;
};

export default function DoctorsCarousel() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    // Don't auto-slide if modal is open or carousel is paused
    if (selected || isPaused) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, [selected, isPaused]);

  /* ================= LOOP RESET ================= */

  useEffect(() => {
    if (index >= doctors.length) {
      // Match the animation duration (600ms)
      setTimeout(() => setIndex(0), 600);
    }
  }, [index]);

  /* ================= KEYBOARD NAVIGATION ================= */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selected) {
        if (e.key === "Escape") setSelected(null);
      } else {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <>
      <section className="doc-section">
        <div className="doc-header">
          <h2>Meet Our Smile Experts</h2>
          <p>Certified doctors driving confident smiles</p>
        </div>

        <div
          className="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Doctors carousel"
        >

          <button
            className="arrow left"
            onClick={prev}
            aria-label="Previous doctor"
          >
            ‹
          </button>

          <div className="viewport">
            <motion.div
              className="track"
              animate={{ x: `-${index * 6.25}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {extended.map((doc, i) => (
                <div
                  key={i}
                  className="doc-item"
                  onClick={() => setSelected(doc)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(doc);
                    }
                  }}
                  aria-label={`View details for ${doc.name}`}
                >
                  <div className="img-wrapper">
                    <img src={doc.img} alt={doc.name} />
                  </div>
                  <h4>{doc.name}</h4>
                  <span>{doc.role}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            className="arrow right"
            onClick={next}
            aria-label="Next doctor"
          >
            ›
          </button>

        </div>

        {/* Carousel indicators */}
        <div className="indicators">
          {doctors.map((_, i) => (
            <button
              key={i}
              className={`indicator ${i === index % doctors.length ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="modal-image">
                <img 
                  src={selected.additionalImg || selected.img} 
                  alt={selected.name} 
                />
              </div>

              <h3 id="modal-title">{selected.name}</h3>
              <p className="degree">{selected.degree}</p>
              <p className="role">{selected.role}</p>

              {/* Multiple content sections */}
              <div className="modal-content-wrapper">
                {selected.contentSections.map((section, idx) => (
                  <div key={idx} className="modal-content-section">
                    <h4 className="content-heading">{section.heading}</h4>
                    
                    {/* Support both string with \n\n or array of paragraphs */}
                    <div className="content-paragraph-wrapper">
                      {Array.isArray(section.paragraph) ? (
                        // Array of paragraphs
                        section.paragraph.map((para, pIdx) => (
                          <p 
                            key={pIdx} 
                            className="content-paragraph"
                            dangerouslySetInnerHTML={{ __html: formatText(para) }}
                          />
                        ))
                      ) : (
                        // String with possible \n\n breaks
                        section.paragraph.split('\n\n').map((para, pIdx) => (
                          <p 
                            key={pIdx} 
                            className="content-paragraph"
                            dangerouslySetInnerHTML={{ __html: formatText(para) }}
                          />
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href="/contact" className="btn">
                Book Consultation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}