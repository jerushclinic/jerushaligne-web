// pages/Retainers.jsx
import "../styles/retainers.css";

import RetainersHero from "../components/retainers/RetainersHero";
import RetainersWhy from "../components/retainers/RetainersWhy";
import RetainersTypes from "../components/retainers/RetainersTypes";
import RetainersCare from "../components/retainers/RetainersCare";
import AppointmentCTA from "../components/AppointmentCTA";

export default function Retainers() {
  return (
    <main className="retainers-page">
      <RetainersHero />
      <RetainersWhy />
      <RetainersTypes />
      <RetainersCare />
      <AppointmentCTA />
     
    </main>
  );
}
