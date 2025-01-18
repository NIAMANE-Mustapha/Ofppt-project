import React, { useEffect, useRef, useState } from "react";

export default function EntrepriseCompetence() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [secteurs, setSecteurs] = useState([]);
  const [levels, setLevels] = useState([]);
  const [filiers, setFeliers] = useState([]);
  const [filtredfilieres, setFiltredFilieres] = useState([]);
  const [filiereData, setFiliereData] = useState({});
  const [competences, setCompetences] = useState([]);

  const filiereRef = useRef();
  const levelRef = useRef();
  const secteurRef = useRef();

  const [form, setForm] = useState({
    secteur: "",
    level: "",
    filiere: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/showSecteurs")
      .then((res) => res.json())
      .then((data) => setSecteurs(data));
    fetch("http://127.0.0.1:8000/api/showLevels")
      .then((res) => res.json())
      .then((data) => setLevels(data));
    fetch("http://127.0.0.1:8000/api/showfiliers")
      .then((res) => res.json())
      .then((data) => setFeliers(data));
      fetch("http://127.0.0.1:8000/api/showCompetences")
      .then((res) => res.json())
      .then((data) => setCompetences(data));
  }, [form]);

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
              onChange={(e) => setForm({ ...form, secteur: e.target.value,level:'' })}
              ref={secteurRef}
            >
              <option>Choisir un secteur</option>
              {secteurs.map((secteur) => (
                <option key={secteur.id} value={secteur.id}>
                  {secteur.name}
                </option>
              ))}
            </select>
          </div>
          {form.secteur && (
            <div>
              <label htmlFor="level">Level</label>
              <select
                className="input-competence"
                name="level"
                id="level"
                onChange={(e) => {
                  setForm({ ...form, level: e.target.value });
                  setFiltredFilieres(
                    filiers
                      .filter(
                        (elem) =>
                          elem.levelid === parseInt(levelRef.current.value)
                      )
                      .filter(
                        (elem) =>
                          elem.secteur_id === parseInt(secteurRef.current.value)
                      )
                  );
                }}
                ref={levelRef}
              >
                <option>Choisir un niveau</option>

                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {form.level &&  (
            <div className="searshed-lauriat">
              <label htmlFor="filiere">Filiere</label>
              <select className="input-competence" name="filiere" id="filiere"
              ref={filiereRef} onChange={e=>{
                setForm({ ...form, filiere: e.target.value })
                setFiliereData(filtredfilieres.find(ele=>ele.id===parseInt(filiereRef.current.value)))
                }}>
                <option>Choisir une filières</option>

                {filtredfilieres.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        {
            form.filiere && (
             <div className="filiereinfo">
                <h3>{filiereData.name}</h3>
                <h5>Présentation</h5>
                <p>{filiereData.Presentation}</p>
                <h5>Profile</h5>
                <ul>
                    {competences.filter((e)=>e.filiereid===filiereData.id).map((elem)=>(
                        <li key={elem.id}>{elem.name}</li>
                    ))}
                </ul>

             </div>
            )

        }
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
