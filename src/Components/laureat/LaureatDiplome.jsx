import React, { cache, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { RiFileAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


export default function LaureatDiplome() {
  const [form, setForm] = useState(false);
  const [diplome, setDiplome] = useState([]);
  const [secteur, setSecteur] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const user = useSelector((data) => data.user.user);
  const token = useSelector((data) => data.user.token);

  /* ajouter un diplome */
  const diplomeRef = useRef();
  const niveauRef = useRef();
  const etabRef = useRef();
  const anneRef = useRef();
  const mentionRef = useRef();
  const certificatRef = useRef();
  const secteurRef = useRef();

  const handleAddDiplome = (e) => {
    e.preventDefault();
    const payload = {
      diplome: diplomeRef.current.value,
      niveau: niveauRef.current.value,
      etab: etabRef.current.value,
      anne: anneRef.current.value,
      mention: mentionRef.current.value,
      SecteurID: secteurRef.current.value,
      file: certificatRef.current.files[0].name,
      cin: user.CIN,
    };
    console.log(payload);
    fetch("http://127.0.0.1:8000/api/storeDiplome", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      navigate("/Laureat");
  };

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/showdiplomes", {
      method: "POST",
      body: JSON.stringify({ id: user.id }),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDiplome(data))
      .catch((err) => console.log(err));


    fetch("http://127.0.0.1:8000/api/showSecteurs")
      .then((res) => res.json())
      .then((data) => setSecteur(data))
      .catch((err) => console.log(err));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, []);

  return (
    <div className="diplomes-profile">
      {loading ? (
        <div className="loading-container">
          <div class="spinnerContainer">
            <div class="spinner"></div>
            <div class="loader">
              <p>loading</p>
              <div class="words">
                <span class="word">Diplômes</span>
                <span class="word">Diplômes</span>
                <span class="word">Diplômes</span>
                <span class="word">Diplômes</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
            {diplome.map((ele) => (
              <tr key={ele.DiplomeId}>
                <td>{ele.NomDiplome} </td>
                <td>{ele.Etablissement} </td>
                <td>{ele.AnneeDiplome} </td>
                <td>{ele.Mention} </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="showform-button" onClick={() => setForm(!form)}>
        <IoMdAdd />
        ajouter diplome
      </button>
      {form && (
        <form onSubmit={handleAddDiplome}>
          <div>
            <input
              className="input"
              type="text"
              required
              ref={diplomeRef}
              placeholder="votre diplome"
            />
            <input
              className="input"
              type="text"
              required
              ref={etabRef}
              placeholder="Etablissement"
            />
            <input
              className="input"
              type="text"
              required
              ref={anneRef}
              placeholder="Année"
            />
            <input
              className="input"
              type="text"
              required
              ref={mentionRef}
              placeholder="Mention"
            />
          </div>

          <div>
            <select ref={secteurRef} className="minimal" required>
              <option>Secteur</option>
              {secteur.map((e) => (
                <option value={`${e.id}`} key={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select ref={niveauRef} className="minimal" required>
              <option>Niveau</option>
              <option value="T">techniscien</option>
              <option value="TS">techniscien spécialisé</option>
              <option value="Q">Qualifiant</option>
              <option value=""></option>
            </select>
          </div>

          <div className="fichier-certification">
            <strong>Joindre mon diplôme :</strong>
            <button className="container-btn-file">
              <RiFileAddLine size={20} />
              Choisir un fichier
              <input
                className="file"
                name="text"
                type="file"
                ref={certificatRef}
                required
              />
            </button>
          </div>
          <button className="submit-button"> Ajouter</button>
        </form>
      )}
    </div>
  );
}
