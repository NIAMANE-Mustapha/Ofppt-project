import "../CSS/InscriptionEntreprise.css";
import React, { useRef, useState } from "react";

export default function InscriptionEntreprise() {
  const [entrepriseType, setEntrepriseType] = useState("ICE");
  const identifientType = useRef(null);
  const eNameRef = useRef(null);
  const identifient = useRef(null);
  const adresseRef = useRef(null);
  const secteurRef = useRef(null);
  const paysRef = useRef(null);
  const villeRef = useRef(null);
  const nbEmployerRef = useRef(null);
  const siteInternetRef = useRef(null);
  const logoRef = useRef(null);
  const responsableCiviliteRef = useRef(null);
  const responsableNameRef = useRef(null);
  const responsableFonctionRef = useRef(null);
  const responsableLinkedInRef = useRef(null);
  const responsableFixeRef = useRef(null);
  const responsableMobileRef = useRef(null);
  const emailRef = useRef(null);
  const emailCRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const responsableId = identifient.current.value.slice(0, 4);
    const payload2 = {
      identifiantType: identifientType.current.value,
      identifiant: identifient.current.value,
      eName: eNameRef.current.value,
      adresse: adresseRef.current.value,
      secteur: secteurRef.current.value,
      pays: paysRef.current.value,
      ville: villeRef.current.value,
      nbEmployer: nbEmployerRef.current.value,
      siteInternet: siteInternetRef.current.value,
      logo: logoRef.current.value,
      email: emailRef.current.value,
      emailC: emailCRef.current.value,
      password: passwordRef.current.value,
      ResponsableId: responsableId,
    };
    console.log(responsableId);
    const payload3 = {
      EntrepriseId: identifient.current.value,
      ResponsableId: responsableId,
      responsableCivilite: responsableCiviliteRef.current.value,
      responsableName: responsableNameRef.current.value,
      responsableFonction: responsableFonctionRef.current.value,
      responsableLinkedIn: responsableLinkedInRef.current.value,
      responsableFixe: responsableFixeRef.current.value,
      responsableMobile: responsableMobileRef.current.value,
    };
    console.log(responsableId);
    console.log(payload3);
    fetch("http://127.0.0.1:8000/api/registerResponsable", {
      method: "POST",
      body: JSON.stringify(payload3),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    fetch("http://127.0.0.1:8000/api/registerEntreprise", {
      method: "POST",
      body: JSON.stringify(payload2),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="inscription-entreprise-container">
      <div className="title">
        <p>Inscription Entreprise</p>
      </div>
      <div className="inscription-entreprise">
        <form onSubmit={handleSubmit} className="inscription-entreprise-form">
          <h2>Recruteurs, inscrivez-vous et publiez vos offres d'emploi !</h2>
          {/*first section */}
          <div className="info-section">
            <h3>Votre entreprise</h3>
            <div className="Votre-entreprise-info">
              <div className="identifiant">
                <select
                  className="input_identifianttype"
                  name="TypeIdentifiant"
                  onChange={(e) => {
                    setEntrepriseType(e.target.value);
                  }}
                  ref={identifientType}
                >
                  <option value="ICE">ICE</option>
                  <option value="RC">RC</option>
                  <option value="IF">IF</option>
                </select>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    ref={identifient}
                    name="Identifiant"
                    autocomplete="off"
                    className="input"
                    pattern={
                      entrepriseType === "ICE"
                        ? "[0-9]{15}" // Matches a 15-digit ICE (Identifiant Commun d'Entreprise)
                        : entrepriseType === "RC"
                        ? "[A-Za-z0-9]{10}" // Matches a 10-character RC (Registre de Commerce)
                        : "[0-9]{8,15}" // Matches 8 to 15 digits for Identifiant Fiscal
                    }
                  />
                  <label className="user-label">
                    {entrepriseType} <span className="isred">*</span>
                  </label>
                </div>
              </div>

              <div className="input-group">
                <input
                  required
                  type="text"
                  name="E_Name"
                  autocomplete="off"
                  className="input"
                  ref={eNameRef}
                />
                <label className="user-label">
                  Raison Social <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="text"
                  name="Adresse"
                  autocomplete="off"
                  className="input"
                  ref={adresseRef}
                />
                <label className="user-label">
                  Adresse <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <select
                  required
                  name="Secteur"
                  className="input"
                  ref={secteurRef}
                >
                  <option value="" disabled selected></option>
                  <option value="IT">Technologie de l'information</option>
                  <option value="Santé">Santé</option>
                  <option value="Éducation">Éducation</option>
                  <option value="Finance">Finance</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Industrie">Industrie</option>
                  <option value="Transport">Transport et Logistique</option>
                  <option value="Tourisme">Tourisme et Hôtellerie</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Construction">Construction</option>
                </select>
                <label className="user-label">
                  Secteur d'activité <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <select required name="Pays" className="input" ref={paysRef}>
                  <option value="" disabled selected></option>
                  <option value="France">France</option>
                  <option value="Maroc">Maroc</option>
                  <option value="Canada">Canada</option>
                  <option value="États-Unis">États-Unis</option>
                  <option value="Allemagne">Allemagne</option>
                </select>
                <label className="user-label">
                  Pays <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="text"
                  name="Ville"
                  autocomplete="off"
                  className="input"
                  ref={villeRef}
                />
                <label className="user-label">
                  Ville <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <select
                  required
                  name="NbEmployer"
                  className="input"
                  ref={nbEmployerRef}
                >
                  <option value="" disabled selected></option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
                <label className="user-label">Nombre d'employé</label>
              </div>
              <div className="input-group">
                <input
                  type="url"
                  name="SiteInternet"
                  className="input"
                  required
                  ref={siteInternetRef}
                />
                <label className="user-label">Sitede l'entreprise</label>
              </div>
              <div className="input-files">
                <span style={{ fontWeight: "bold", fontFamily: "cursive" }}>
                  Logo :
                </span>
                <label htmlFor="file-upload" className="custom-file-label">
                  Choose File
                </label>
                <input type="file" id="file-upload" name="Logo" ref={logoRef} />
              </div>
            </div>
          </div>
          {/*second section */}
          <div className="info-section">
            <h3>Vos coordonnées de contact</h3>
            <div className="Votre-entreprise-info">
              <div className="input-group">
                <select
                  required
                  name="ResponsableCivilite"
                  className="input"
                  ref={responsableCiviliteRef}
                >
                  <option value="" disabled selected></option>
                  <option value="1">Mr</option>
                  <option value="2">Mme</option>
                </select>
                <label className="user-label">
                  Civilité <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="text"
                  name="ResponsableName"
                  autocomplete="off"
                  className="input"
                  ref={responsableNameRef}
                />
                <label className="user-label">
                  Nom <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <select
                  required
                  name="ResponsableFonction"
                  className="input"
                  ref={responsableFonctionRef}
                >
                  <option value="" disabled selected></option>
                  <option value="responsableRH">
                    Responsable des Ressources Humaines
                  </option>
                  <option value="chargeRecrutement">
                    Chargé(e) de Recrutement
                  </option>
                  <option value="consultantRH">Consultant(e) RH</option>
                  <option value="assistantRH">
                    Assistant(e) Ressources Humaines
                  </option>
                  <option value="responsableFormation">
                    Responsable Formation
                  </option>
                  <option value="gestionnairePaie">Gestionnaire de Paie</option>
                  <option value="responsableCommunication">
                    Responsable Communication Interne
                  </option>
                  <option value="coachCarriere">Coach de Carrière</option>
                  <option value="directeurRH">Directeur/Directrice RH</option>
                  <option value="autre">Autre</option>
                </select>
                <label className="user-label">
                  votre fonction :<span className="isred"> *</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="text"
                  name="ResponsableLinkedIn"
                  autocomplete="off"
                  className="input"
                  ref={responsableLinkedInRef}
                />
                <label className="user-label">LinkedIn</label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="tel"
                  name="ResponsableFixe"
                  autocomplete="off"
                  className="input"
                  ref={responsableFixeRef}
                />
                <label className="user-label">
                  Numéro Fixe <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="tel"
                  name="ResponsableMobile"
                  autocomplete="off"
                  className="input"
                  ref={responsableMobileRef}
                />
                <label className="user-label">Numéro Mobile</label>
              </div>
            </div>
          </div>
          {/*third section */}
          <div className="info-section">
            <h3>Vos identifiants</h3>
            <div className="Votre-entreprise-info">
              <div className="input-group">
                <input
                  required
                  type="email"
                  name="Email"
                  autocomplete="off"
                  className="input"
                  ref={emailRef}
                />
                <label className="user-label">
                  Votre email <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="email"
                  name="Email_c"
                  autocomplete="off"
                  className="input"
                  ref={emailCRef}
                />
                <label className="user-label">
                  Confirmer Votre email <span className="isred">*</span>
                </label>
              </div>
              <div className="input-group">
                <input
                  required
                  type="password"
                  name="Password"
                  autocomplete="off"
                  className="input"
                  ref={passwordRef}
                />
                <label className="user-label">
                  Mot de pass <span className="isred">*</span>
                </label>
              </div>
            </div>
          </div>
          <div className="submit-section">
            <p>
              (<span className="isred">*</span>) champ obligatoire
            </p>
            <button type="submit" className="submitbtn">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
