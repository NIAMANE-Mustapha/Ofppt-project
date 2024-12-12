import React, { useState } from "react";

export default function EntrepriseCompetence() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [form, setForm] = useState({
    secteur: "",
    filiere: "",
  });

  const handleShowAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="entreprise-competence"
    >
      {showAdvanced ? (
        <div className="advanced-search-Entreprise">
          <div>
            <label
              htmlFor="sector"
              onChange={(e) => setForm({ ...form, secteur: e.target.value })}
            ></label>
            <select
            className="input-competence"
              name="sector"
              id="sector"
              onChange={(e) => setForm({ ...form, secteur: e.target.value })}
            >
              <option>Choisir un secteur</option>
              <option value="digital">Digital</option>
              <option value="mechanic">Mecanic</option>
            </select>
          </div>
          {form.secteur && (
            <div>
              <label htmlFor="filiere"></label>
              <select
                className="input-competence"
                name="filiere"
                id="filiere"
                onChange={(e) => setForm({ ...form, filiere: e.target.value })}
              >
                <option>Choisir une filières</option>
                <option value="ft">dev full stack</option>
                <option value="mobile">dev mobile</option>
              </select>
            </div>
          )}
          {form.filiere && (
            <div className="searshed-lauriat">
              <h4>Profile</h4>
              <p>profile details</p>
            </div>
          )}
        </div>
      ) : (
        <div className="secteur-search">
          <label htmlFor="secteur"></label>
          <input
          className="input-competence"
            type="search"
            name="secteur"
            id="secteur"
            placeholder="Entrer un secteur"
          />
        </div>
      )}
      <div className="btns-entr">
        <div class="cards">
          <div class="card blue" onClick={handleShowAdvanced}>
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
