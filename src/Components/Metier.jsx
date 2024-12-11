import React from "react";
import JobSection from "./JobsSection";
import Identification from "./Identification";
import "../CSS/Metier.css";

export default function Metier() {
  return (
    <div className="metiercontainer">
      <div className="title">
        <p>Accueil</p>
      </div>
      <Identification />
      <JobSection />
    </div>
  );
}
