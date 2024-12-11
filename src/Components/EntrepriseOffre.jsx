import React from 'react'

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
        <label htmlFor="mission">Mission :</label>
        <textarea name="mission" id="mission"></textarea>
      </div>
      <div>
        <h3>Diplome</h3>
        <div>
          <label htmlFor="secteur">Secteur :</label>
          <select name="secteur" id="secteur">
            <option>choisir un secteur</option>
            <option value="digital">Digital</option>
            <option value="chimie">Chimie</option>
          </select>
        </div>
        <div>
          <label htmlFor="niveau">Niveau :</label>
          <select name="niveau" id="niveau">
            <option>choisir un niveau</option>
            <option value="t">T</option>
            <option value="ts">TS</option>
            <option value="q">QU</option>
          </select>
        </div>
        <div>
          <label htmlFor="diplome">Diplome :</label>
          <select name="diplome" id="diplome">
            <option>choisir un diplome</option>
            <option value="fs">full stack</option>
            <option value="mo">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="experince">Experince :</label>
          <select name="experince" id="experince">
            <option>nombre année experience</option>
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
        <label htmlFor="ville">ville</label>
        <select name="ville" id="ville">
          <option>ville</option>
          <option value="bm">Beni Mella</option>
          <option value="tanger">Tanger</option>
          <option value="rabat">Rabat</option>
        </select>
      </div>
      <div>
        <h4>Genre</h4>
        <label htmlFor="male">Masculin</label>
        <input type="radio" name="sexe" id="male" value={"feminin"} />
        <label htmlFor="female">Feminin</label>
        <input type="radio" name="sexe" id="female" value={"masculin"} />
        <label htmlFor="two">Les deux</label>
        <input type="radio" name="sexe" id="two" value={"deux"} />
      </div>
      <div>
        <label htmlFor="expire">Date d'expiration :</label>
        <input type="date" name="expire" id="expire" />
      </div>
      <div>
        <input type="file" name="annonce" id="annonce" />
      </div>
      <button>Annoncer</button>
    </form>
  );
}
