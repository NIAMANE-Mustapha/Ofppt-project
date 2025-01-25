import React from "react";
import { useState, useEffect } from "react";
import "../CSS/StagiaireDetails.css";
import { useParams } from "react-router-dom";

export default function StagiaireProfile() {
  const { cin } = useParams();
  const [experience, setExperience] = useState([]);
  const [stagiaire, setStagiaire] = useState({});
  const [diplomes, setDiplomes] = useState([]);

  useEffect(() => {
    console.log(cin);
    fetch("http://127.0.0.1:8000/api/showstg")
      .then((res) => res.json())
      .then((data) => {
        const foundStagiaire = data.find((ele) => ele.CIN === cin);
        setStagiaire(foundStagiaire || {}); // Default to an empty object if not found
        if (foundStagiaire?.diplomes) {
          setDiplomes(foundStagiaire.diplomes); // Update diplomes if available
        }
      });
  }, []);

  return (
    <div className="stgprofile-container">
      <div className="avatar-container">
        <img
          src={`./images/${stagiaire.Photo || "default-avatar.png"}`} // Use default avatar if Photo is missing
          alt="Avatar"
          className="avatar"
        />
      </div>
      <div className="info_stg">
        <h2 className="name">
          {stagiaire.StagiaireName || "Nom indisponible"}
        </h2>
        <p className="detail">
          <strong>Ville:</strong> {stagiaire.Ville || "Non spécifiée"}
        </p>
        <p className="detail">
          <strong>Contact:</strong> {stagiaire.OFPPTMail || "Non spécifié"}
        </p>
        <h2>Profile</h2>
        <p style={{ textAlign: "justify", width: "50%", margin: "auto" }}>
          {stagiaire.Profile}{" "}
        </p>
      </div>
      <div className="diplomes-profile">
        <h3>Diplomes</h3>

        <table>
          <thead>
            <tr>
              <th>Intitulé du Diplome</th>
              <th>Etablissement</th>
              <th>Année d'obtention</th>
              <th>Mention</th>
            </tr>
          </thead>
          <tbody>
            {stagiaire.diplomes && stagiaire.diplomes.length > 0 ? (
              stagiaire.diplomes.map((ele, ind) => (
                <tr key={ind}>
                  <td>{ele.NomDiplome}</td>
                  <td>{ele.Etablissement}</td>
                  <td>{ele.AnneeDiplome}</td>
                  <td>{ele.Mention}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Aucun diplôme disponible</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="experience-profile">
        <h3>Éxperience</h3>

        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Durée</th>
              <th>Mission</th>
              <th>Nom de société</th>
            </tr>
          </thead>
          {stagiaire.experiences && stagiaire.experiences.length > 0 ? (
            stagiaire.experiences.map((ele, ind) => (
              <tr key={ind}>
                <td>{ele.Titre}</td>
                <td>{ele.Duree}</td>
                <td>{ele.Mission}</td>
                <td>{ele.EntrepriseName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucun diplôme disponible</td>
            </tr>
          )}
        </table>
      </div>
      <div>
        <h3>Compétences</h3>
        {stagiaire.competences && stagiaire.competences.length > 0 ? (
            stagiaire.competences.map((ele, ind) => (
             <span className="comptence" key={ind}>{ele.name}</span>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucun diplôme disponible</td>
            </tr>
          )}
      </div>
    </div>
  );
}
