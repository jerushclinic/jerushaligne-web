import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import WhyJerushaligneIsDifferent from "./pages/WhyJerushaligneIsDifferent";
import GalleryEvents from "./pages/GalleryEvents";
import ClearAligners from "./pages/ClearAligners";
import Retainers from "./pages/Retainers";
import OurOutlets from "./pages/OurOutlets";
import ThuckalayOutlet from "./pages/outlets/ThuckalayOutlet";
import TrichyOutlet from "./pages/outlets/TrichyOutlet";
import ChennaiOutlet from "./pages/outlets/ChennaiOutlet";
import BlogPage from "./pages/BlogPage";
import BlogListPage from "./pages/BlogListPage";
import ContactUs from "./pages/ContactUs";

import PageTransition from "./animations/PageTransition";
import BackToTopIcon from "./components/BacktoTopIcon";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingSocialIcons from "./components/FloatingSocialIcons";

function App() {
  const location = useLocation();

  // ✅ Scroll To Top Fix Added Here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/story-of-jerushaligne"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />

          <Route
            path="/leadership"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />

          <Route
            path="/gallery-events"
            element={
              <PageTransition>
                <GalleryEvents />
              </PageTransition>
            }
          />

          <Route
            path="/clear-aligners"
            element={
              <PageTransition>
                <ClearAligners />
              </PageTransition>
            }
          />

          <Route
            path="/retainers"
            element={
              <PageTransition>
                <Retainers />
              </PageTransition>
            }
          />

          <Route
            path="/why-jerushaligne-is-different"
            element={
              <PageTransition>
                <WhyJerushaligneIsDifferent />
              </PageTransition>
            }
          />

          <Route
            path="/our-outlets"
            element={
              <PageTransition>
                <OurOutlets />
              </PageTransition>
            }
          />

          <Route
            path="/outlets/thuckalay-outlet"
            element={
              <PageTransition>
                <ThuckalayOutlet />
              </PageTransition>
            }
          />

          <Route
            path="/outlets/trichy-outlet"
            element={
              <PageTransition>
                <TrichyOutlet />
              </PageTransition>
            }
          />

          <Route
            path="/outlets/chennai-outlet"
            element={
              <PageTransition>
                <ChennaiOutlet />
              </PageTransition>
            }
          />

          <Route
            path="/blog"
            element={
              <PageTransition>
                <BlogPage />
              </PageTransition>
            }
          />

          <Route
            path="/bloglist"
            element={
              <PageTransition>
                <BlogListPage />
              </PageTransition>
            }
          />

          <Route
            path="/contact-us"
            element={
              <PageTransition>
                <ContactUs />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <BackToTopIcon />

      <WhatsAppButton
        phone="+919876543210"
        message="Hello! I want to book an appointment."
      />

      <FloatingSocialIcons />

      <Footer />
    </>
  );
}

export default App;