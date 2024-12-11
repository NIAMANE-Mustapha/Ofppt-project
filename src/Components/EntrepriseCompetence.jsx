import React, { useState } from 'react'

export default function EntrepriseCompetence() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [form, setForm] = useState({
    secteur:'',
    filiere:'',
  })

  const handleShowAdvanced=()=>{
    setShowAdvanced(!showAdvanced)
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className='entreprise-competence'>
      {showAdvanced ? (
        <div className='advanced-search'>
          <div>
            <label
              htmlFor="sector"
              onChange={(e) => setForm({ ...form, secteur: e.target.value })}
            >
              Secteur :
            </label>
            <select
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
              <label htmlFor="filiere">Filières :</label>
              <select
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
            <div>
              <h4>Profile</h4>
              <p>profile details</p>
            </div>
          )}
        </div>
      ) : (
        <div className='secteur-search'>
          <label htmlFor="secteur">Secteur :</label>
          <input type="search" name="secteur" id="secteur" placeholder='Entrer un secteur'/>
        </div>
      )}
      <button onClick={handleShowAdvanced}>Advanced Search</button>
      <button>Rechercher</button>
    </form>
  );
}
