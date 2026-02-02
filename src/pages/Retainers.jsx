// pages/Retainers.jsx
import "../styles/retainers.css";

import RetainersHero from "../components/retainers/RetainersHero";
import RetainersWhy from "../components/retainers/RetainersWhy";

export default function Retainers() {
  return (
    <main className="retainers-page">
      <RetainersHero />
      <RetainersWhy />
     
    </main>
  );
}
