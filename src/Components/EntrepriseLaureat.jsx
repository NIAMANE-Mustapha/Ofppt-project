import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function EntrepriseLaureat() {
  const [advanced, setAdvanced] = useState(true);
  const [stagiaires, setStagiares] = useState([]);
  const [secteur, setSecteur] = useState([]);
  const [levels, setLevels] = useState([]);

  const secteurRef = useRef();
  const levelRef = useRef();
  const villeRef = useRef();
  const experienceRef = useRef();
  const comptRef = useRef();

  const [filtredstagiaires, setFiltredStagiaires] = useState([]);

  const [form, setForm] = useState({
    secteur: "",
    niveau: "",
    ville: "",
    experience: "",
  });
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/showstg")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStagiares(data);
        setFiltredStagiaires(data);
      });

    fetch("http://127.0.0.1:8000/api/showSecteurs")
      .then((res) => res.json())
      .then((data) => setSecteur(data));

    fetch("http://127.0.0.1:8000/api/showLevels")
      .then((res) => res.json())
      .then((data) => setLevels(data));
  }, []);

  const handleAdvanced = () => {
    setAdvanced(!advanced);
  };

  const handleClick = () => {
    const filtered = stagiaires.filter((stagiaire) =>
      stagiaire.competences.some(
        (ele) => ele.name === comptRef.current.value.toUpperCase()
      )
    );
    setFiltredStagiaires(filtered);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="entreprise-laureat">
      <h3>Rechercher un laureat</h3>
      {advanced ? (
        <div className="secteur-search">
          <label htmlFor="secteur">Compétences :</label>
          <input
            className="input-competence"
            type="search"
            name="secteur"
            id="secteur"
            placeholder="Entrer une Compétence"
            ref={comptRef}
          />
        </div>
      ) : (
        <div className="advanced-search">
          {/* secteur select */}
          <div className="filters">
            <label htmlFor="sector">Secteur :</label>
            <select
              className="input-competence"
              name="sector"
              id="sector"
              onChange={(e) => {
                setForm({ ...form, secteur: e.target.value });
                setFiltredStagiaires(
                  stagiaires.filter((stg) =>
                    stg.diplomes.some((diplome) => {
                      return (
                        diplome.SecteurID === parseInt(secteurRef.current.value)
                      );
                    })
                  )
                );
              }}
              ref={secteurRef}
            >
              <option>Secteur</option>
              {secteur.map((e) => (
                <option value={`${e.id}`} key={e.id}>
                  {e.name}
                </option>
              ))}
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
                ref={levelRef}
                onChange={(e) => {
                  setForm({ ...form, niveau: e.target.value });
                  setFiltredStagiaires(
                    filtredstagiaires.filter((stg) =>
                      stg.diplomes.some((diplome) => {
                        return (
                          diplome.Niveau === parseInt(levelRef.current.value)
                        );
                      })
                    )
                  );
                }}
              >
                <option>Choisir un niveau</option>
                {levels.map((lev) => (
                  <option value={lev.id} key={lev.id}>
                    {lev.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* dplome select */}
          {/* ville select */}
          {form.niveau && (
            <div>
              <label htmlFor="ville">Ville :</label>
              <select
                className="input-competence"
                name="ville"
                id="ville"
                ref={villeRef}
                onChange={(e) => {
                  setForm({ ...form, ville: e.target.value });
                  setFiltredStagiaires(
                    filtredstagiaires.filter(
                      (stg) => stg.Ville === villeRef.current.value
                    )
                  );
                }}
              >
                <option>Choisir une ville</option>
                <option value="Beni Mellal">Beni Mella</option>
                <option value="Casa Blanca">Casa Blanca</option>
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
                ref={experienceRef}
                onChange={(e) => {
                  setForm({ ...form, experience: e.target.value });
                  setFiltredStagiaires(
                    filtredstagiaires.filter((stg) =>
                      stg.experiences.some((diplome) => {
                        return diplome.Duree === experienceRef.current.value;
                      })
                    )
                  );
                }}
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
        </div>
      )}

      <div className="btns-entr">
        <div class="cards">
          <div class="card blue" onClick={handleAdvanced}>
            <p class="tip">Recherche avancée</p>
          </div>
          <div class="card red">
            <p class="tip" onClick={handleClick}>
              Rechercher
            </p>
          </div>
        </div>
      </div>
      <div className="stagiaireslist">
        {filtredstagiaires.map((e) => (
          <article className="profile" key={e.CIN}>
            <img
              src={`/images/${e.Photo}`}
              alt="laureat phot"
              className="stgimg"
            />
            <p>{e.StagiaireName}</p>
            <p>{e.Ville}</p>
            <p></p>
            <Link to={`/${e.CIN}`}>
              <div>
                <button className="btnd">
                  <i className="animation"></i>Laureat Déatails<i className="animation"></i>
                </button>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </form>
  );
}
