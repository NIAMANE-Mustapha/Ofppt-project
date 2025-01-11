import React from "react";
import { useSelector } from "react-redux";

export default function EntrepriseIdentif() {
    const entreprise=useSelector(data=>data.entreprise.entreprise)
    const token=useSelector(data=>data.entreprise.token)
  return (
    <div className="entreprise-indetification">
      <div className="entreprise-info">
        <img src="./images/companylogo.webp" alt="entreprise logo" />
        <p className="border">
          <span className="bold">ICE</span> : {entreprise.Identifiant}
        </p>
        <div className="entreprise-details">
          <p>{entreprise.E_Name}</p>
          <p>{entreprise.Adresse}</p>
          <p>
            <span className="bold">Caital</span> : 100 000 DH
          </p>
          <p>
            <span className="bold">Création du compte</span> : {entreprise.Created_At}
          </p>
        </div>
        <p>
          <span className="bold">Activité</span> : {entreprise.Secteur}
        </p>
      </div>
      <div className="ofppt-v-logo">
        <img src="/images/ofppt-v-logo.png" alt="" />
      </div>
    </div>
  );
}
