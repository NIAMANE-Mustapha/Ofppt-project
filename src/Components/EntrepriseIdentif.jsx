import React from "react";

export default function EntrepriseIdentif() {
  return (
    <div className="entreprise-indetification">
      <div className="entreprise-info">
        <img src="./images/companylogo.webp" alt="entreprise logo" />
        <p className="border">
          <span className="bold">ICE</span> : 001774471000008
        </p>
        <div className="entreprise-details">
          <p>SOCITE A RESPONSABLE LIMITEE</p>
          <p>RC 23129 MEKNES</p>
          <p>
            <span className="bold">Caital</span> : 100 000 DH
          </p>
          <p>
            <span className="bold">Création</span> : 03/03/2004
          </p>
        </div>
        <p>
          <span className="bold">Activité</span> : NEDOCE ET TRAVAUX DIVERS
        </p>
      </div>
      <div className="ofppt-v-logo">
        <img src="/images/ofppt-v-logo.png" alt="" />
      </div>
    </div>
  );
}
