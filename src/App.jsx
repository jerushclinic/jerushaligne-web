import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OurOutlets from "./pages/OurOutlets";
import Contact from "./pages/Contact";
import AppointmentSlots from "./pages/AppointmentSlots";
import AdminSlots from "./pages/AdminSlots";

import PageTransition from "./animations/PageTransition";
import BackToTopIcon from "./components/BacktoTopIcon";


function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />

      {/* Page transition wrapper */}
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
            path="/our-outlets"
            element={
              <PageTransition>
                <OurOutlets />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />


        </Routes>
      </AnimatePresence>
      <BackToTopIcon />
   
      <Footer />
    </>
  );
}

export default App;
