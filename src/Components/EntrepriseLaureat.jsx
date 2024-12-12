import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EntrepriseLaureat() {
  const [advanced, setAdvanced] = useState(true);
  const [form, setForm] = useState({
    secteur: "",
    niveau: "",
    diplome: "",
    ville: "",
    experience: "",
  });

  const handleAdvanced = () => {
    setAdvanced(!advanced);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="entreprise-laureat">
      <h3>Rechercher un laureat</h3>
      {advanced ? (
        <div className="secteur-search">
          <label htmlFor="secteur">Secteur :</label>
          <input
          className="input-competence"
            type="search"
            name="secteur"
            id="secteur"
            placeholder="Entrer un secteur"
          />
        </div>
      ) : (
        <div className="advanced-search">
          {/* secteur select */}
          <div>
            <label htmlFor="sector">Secteur :</label>
            <select
            className="input-competence"
              name="sector"
              id="sector"
              onChange={(e) => setForm({ ...form, secteur: e.target.value })}
            >
              <option>Choisir un secteur</option>
              <option value="digital">Digital</option>
              <option value="design">design</option>
            </select>
          </div>
          {/* niveau select */}
          {form.secteur && (
            <div>
              <label htmlFor="niveau">Niveau :</label>
              <select
              className="input-competence"
                name="niveau"
                id="niveau"
                onChange={(e) => setForm({ ...form, niveau: e.target.value })}
              >
                <option>Choisir un niveau</option>
                <option value="T">T</option>
                <option value="TS">TS</option>
                <option value="TS">QU</option>
              </select>
            </div>
          )}
          {/* dplome select */}
          {form.niveau && (
            <div>
              <label htmlFor="diplome">Diplome :</label>
              <select
              className="input-competence"
                name="diplome"
                id="diplome"
                onChange={(e) => setForm({ ...form, diplome: e.target.value })}
              >
                <option>Choisir un diplome</option>
                <option value="digital">Digital</option>
                <option value="design">design</option>
              </select>
            </div>
          )}
          {/* ville select */}
          {form.diplome && (
            <div>
              <label htmlFor="ville">Ville :</label>
              <select
              className="input-competence"
                name="ville"
                id="ville"
                onChange={(e) => setForm({ ...form, ville: e.target.value })}
              >
                <option>Choisir une ville</option>
                <option value="BM">Beni Mella</option>
                <option value="CS">Casa Blanca</option>
              </select>
            </div>
          )}
          {/* experience select */}
          {form.ville && (
            <div>
              <label htmlFor="experience">Experience :</label>
              <select
              className="input-competence"
                name="experience"
                id="experience"
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              >
                <option>nombre année experience</option>
                <option value="1">1 ans</option>
                <option value="2">2 ans</option>
                <option value="3">3 ans</option>
                <option value="4">4 ans</option>
                <option value="5">5 ans</option>
                <option value="6">6+ ans</option>
              </select>
            </div>
          )}
          <div>
            {form.experience && (
              <article className="profile">
                <img src={"./images/profil.jpg"} alt="laureat phot" />
                <p>nom</p>
                <p>prenom</p>
                <p>phone</p>
                <Link to="profildetails/id">laureat details</Link>
              </article>
            )}
          </div>
        </div>
      )}
      <div className="btns-entr">
        <div class="cards">
          <div class="card blue" onClick={handleAdvanced}>
            <p class="tip">Recherche avancée</p>
          </div>
          <div class="card red">
            <p class="tip">Rechercher</p>
          </div>
        </div>
      </div>
    </form>
  );
}
