import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import "../CSS/entreprise.css";


export default function EntrepriseOffre() {
  const entreprise = useSelector((data) => data.entreprise.entreprise);
  const token = useSelector((data) => data.entreprise.token);
  const [selectedContract, setSelectedContract] = useState("");
  const navigate = useNavigate();


  const handleContractChange = (e) => {
    setSelectedContract(e.target.value);
  };
  const postRef = useRef();
  const missionRef = useRef();
  const secteurRef = useRef();
  const niveauRef = useRef();
  const AnnoncementeRef = useRef();
  const diplomeRef = useRef();
  const experienceRef = useRef();
  const villeRef = useRef();
  const contractRef = useRef();
  const dateexpRef = useRef();
  const handlsubmit = (e) => {
    e.preventDefault();
    console.log(entreprise.Identifiant);
    const payload = {
      post: postRef.current.value,
      mission: missionRef.current.value,
      secteur: secteurRef.current.value,
      niveau: niveauRef.current.value,
      diplome: diplomeRef.current.value,
      experience: experienceRef.current.value,
      ville: villeRef.current.value,
      contract: selectedContract,
      dateexp: dateexpRef.current.value,
      EntrepriseId: entreprise.Identifiant,
      NomEntreprise: entreprise.E_Name,
      Annoncement: AnnoncementeRef.current.files[0].name,
    };
    console.log(dateexpRef.current.value);
    fetch("http://127.0.0.1:8000/api/addoffre", {
      method: "POST",

      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      setTimeout(() => {
        navigate("/Entreprise/EntrepriseContact");
      }, 2000);
  };

  return (
    <form onSubmit={handlsubmit} className="entreprise-offre">
      <div>
        <label htmlFor="poste">Poste :</label>
        <input type="text" name="poste" id="poste" ref={postRef} />
      </div>
      <div>
        <label htmlFor="mission">Description du poste :</label>
        <textarea name="mission" id="mission" ref={missionRef}></textarea>
      </div>
      <div>
        <div>
          <label htmlFor="secteur">Secteur :</label>
          <select name="secteur" ref={secteurRef} id="secteur">
            <option value="">Choisir un secteur</option>
            <option value="1">Digital</option>
            <option value="2">Chimie</option>
            <option value="3">Santé</option>
            <option value="4">Finance</option>
            <option value="5">Énergie</option>
            <option value="6">Agriculture</option>
            <option value="7">Éducation</option>
            <option value="8">Transport</option>
            <option value="9">Construction</option>
            <option value="10">Tourisme</option>
          </select>
        </div>
        <div>
          <label htmlFor="niveau">Niveau :</label>
          <select name="niveau" ref={niveauRef} id="niveau">
            <option>Choisir un niveau</option>
            <option value="Technicien Specialisé">Technicien Spécialisé</option>
            <option value="Technicien">Technicien</option>
            <option value="Qualification">Qualification </option>
            <option value="Spécialisation">Spécialisation</option>
          </select>
        </div>
        <div>
          <label htmlFor="diplome">Diplome :</label>
          <select name="diplome" ref={diplomeRef} id="diplome">
            <option>Choisir un diplome</option>
            <option value="1">Full Stack</option>
            <option value="2">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="experince">Expérience :</label>
          <select name="experince" ref={experienceRef} id="experince">
            <option>Nombre année expérience</option>
            <option value="1">1 ans</option>
            <option value="2">2 ans</option>
            <option value="3">3 ans</option>
            <option value="4">4 ans</option>
            <option value="5">5 ans</option>
            <option value="6">6+ ans</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="ville">Ville :</label>
        <select name="ville" ref={villeRef} id="ville">
          <option>Choisir une ville</option>
          <option value="Beni Mellal">Beni Mellal</option>
          <option value="tanger">Tanger</option>
          <option value="Rabat">Rabat</option>
        </select>
      </div>
      <div className="sex-container">
        <h4>Type de Contrat:</h4>
        <div className="radio-group">
          <div className="sex">
            <input
              type="radio"
              name="contract"
              id="cdi"
              value="CDI"
              onChange={handleContractChange}
            />
            <label htmlFor="cdi">CDI</label>
          </div>
          <div className="sex">
            <input
              type="radio"
              name="contract"
              id="cdd"
              value="CDD"
              onChange={handleContractChange}
            />
            <label htmlFor="cdd">CDD</label>
          </div>
          <div className="sex">
            <input
              type="radio"
              name="contract"
              id="stage"
              value="Stage"
              onChange={handleContractChange}
            />
            <label htmlFor="stage">Stage</label>
          </div>
          <div className="sex">
            <input
              type="radio"
              name="contract"
              id="temps-partiel"
              value="Tempspariel"
              onChange={handleContractChange}
            />
            <label htmlFor="temps-partiel">Temps partiel</label>
          </div>
          <div className="sex">
            <input
              type="radio"
              name="contract"
              id="alternance"
              value="Alternance"
              onChange={handleContractChange}
            />
            <label htmlFor="alternance">Alternance</label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="expire">Date d'expiration :</label>
        <input type="date" ref={dateexpRef} name="expire" id="expire" />
      </div>
      <div className="input-files-entreprise">
        <label
          htmlFor="file-upload-entreprise"
          className="custom-file-label-entreprise"
        >
          Joindre une annonce :
          <input
            type="file"
            ref={AnnoncementeRef}
            id="file-upload-entreprise"
            name="file-upload"
            style={{ display: "none" }} // Hide the default file input
          />
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>

          </span>
        </label>
      </div>
      <button class="cta">
        <span>Annoncer</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  );
}
