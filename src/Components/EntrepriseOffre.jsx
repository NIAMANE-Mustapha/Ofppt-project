import React from "react";
import "../CSS/entreprise.css";

export default function EntrepriseOffre() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="entreprise-offre">
      <div>
        <label htmlFor="entreprise">Entreprise :</label>
        <input type="text" name="entreprise" id="entreprise" />
      </div>
      <div>
        <label htmlFor="poste">Poste :</label>
        <input type="text" name="poste" id="poste" />
      </div>
      <div>
        <label htmlFor="mission">Description du poste :</label>
        <textarea name="mission" id="mission"></textarea>
      </div>
      <div>
        <div>
          <label htmlFor="secteur">Secteur :</label>
          <select name="secteur" id="secteur">
            <option>Choisir un secteur</option>
            <option value="digital">Digital</option>
            <option value="chimie">Chimie</option>
          </select>
        </div>
        <div>
          <label htmlFor="niveau">Niveau :</label>
          <select name="niveau" id="niveau">
            <option>Choisir un niveau</option>
            <option value="t">T</option>
            <option value="ts">TS</option>
            <option value="q">QU</option>
          </select>
        </div>
        <div>
          <label htmlFor="diplome">Diplome :</label>
          <select name="diplome" id="diplome">
            <option>Choisir un diplome</option>
            <option value="fs">Full Stack</option>
            <option value="mo">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="experince">Expérience :</label>
          <select name="experince" id="experince">
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
        <select name="ville" id="ville">
          <option>Choisir une ville</option>
          <option value="bm">Beni Mellal</option>
          <option value="tanger">Tanger</option>
          <option value="rabat">Rabat</option>
        </select>
      </div>
      <div className="sex-container">
        <h4>Genre:</h4>
        <div className="radio-group">
          <div className="sex">
            <input type="radio" name="sexe" id="male" value="masculin" />
            <label htmlFor="male">Masculin</label>
          </div>
          <div className="sex">
            <input type="radio" name="sexe" id="female" value="feminin" />
            <label htmlFor="female">Feminin</label>
          </div>
          <div className="sex">
            <input type="radio" name="sexe" id="two" value="deux" />
            <label htmlFor="two">Les deux</label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="expire">Date d'expiration :</label>
        <input type="date" name="expire" id="expire" />
      </div>
      <div class="input-files-entreprise">
                <span style={{ fontWeight: "bold" }}>
                Joindre une annonce :
                </span>
                <label for="file-upload" class="custom-file-label-entreprise">
                  Choose File
                </label>
                <input type="file" id="file-upload-entreprise" name="file-upload" />
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
