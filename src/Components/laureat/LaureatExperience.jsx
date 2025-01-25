import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RiFileAddLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function LaureatExperience() {
  const [form, setForm] = useState(false);
  const [encoure, setEncoure] = useState(false);
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(true); // State for loading
  const navigate = useNavigate();


  /* ajouter une exprerience */
  const titreRef = useRef();
  const datedebutRef = useRef();
  const datefinRef = useRef();
  const missionRef = useRef();
  const entrepriseRef = useRef();
  const certificatRef = useRef();

  const [experience, setExperience] = useState([]);
  const user = useSelector((data) => data.user.user);
  const token = useSelector((data) => data.user.token);

  let payload = {};
  const handleSubmit = (e) => {
    e.preventDefault();

    const startDate = new Date(datedebutRef.current.value);
    const finishDate = new Date(datefinRef.current.value);
    const yearsDifference = finishDate.getFullYear() - startDate.getFullYear();

    // Check if the finish date is before the start date in the same year
    const isBeforeAnniversary =
      finishDate.getMonth() < startDate.getMonth() ||
      (finishDate.getMonth() === startDate.getMonth() &&
        finishDate.getDate() < startDate.getDate());

    // Adjust the year difference if the finish date is before the start date
    const finalYears = isBeforeAnniversary
      ? yearsDifference - 1
      : yearsDifference;

    // If duration in years is less than 0, calculate the duration in months
    if (finalYears <= 0) {
      const monthsDifference =
        (finishDate.getFullYear() - startDate.getFullYear()) * 12 +
        finishDate.getMonth() -
        startDate.getMonth();
      setDuration(`${monthsDifference} mois`);
    } else if (isNaN(finalYears)) {
      setDuration("En coure");
    } else {
      setDuration(`${finalYears} ans`);
    }

    if (certificatRef.current.files[0]) {
      payload = {
        titre: titreRef.current.value,
        date_debut: datedebutRef.current.value,
        date_fin: datefinRef.current.value,
        duree: duration,
        mission: missionRef.current.value,
        entreprise: entrepriseRef.current.value,
        certificat: certificatRef.current.files[0].name,
        cin: user.CIN,
      };
    } else {
      payload = {
        titre: titreRef.current.value,
        date_debut: datedebutRef.current.value,
        date_fin: datefinRef.current.value,
        duree: duration,
        mission: missionRef.current.value,
        entreprise: entrepriseRef.current.value,
        cin: user.CIN,
      };
    }
    console.log(payload);
    fetch("http://127.0.0.1:8000/api/addexperience", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      navigate("/Laureat");

  };

  /* fetch les experiences */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetch("http://127.0.0.1:8000/api/showexpers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: user.id }),
    })
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="experience-profile">
      {loading ? (
        <div className="loading-container">
          <div class="spinnerContainer">
            <div class="spinner"></div>
            <div class="loader">
              <p>loading</p>
              <div class="words">
                <span class="word">Éxpériences</span>
                <span class="word">Expériences</span>
                <span class="word">Expériences</span>
                <span class="word">Expériences</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Durée</th>
              <th>Mission</th>
              <th>Nom de société</th>
            </tr>
          </thead>
          <tbody>
            {experience.map((ele) => (
              <tr key={ele.ExperienceId}>
                <td>{ele.Titre}</td>
                <td>{ele.Duree}</td>
                <td>{ele.Mission}</td>
                <td>{ele.EntrepriseName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="showform-button" onClick={() => setForm(!form)}>
        <IoMdAdd color="#e8e8e8" size={20} />
        Ajouter éxperience
      </button>
      {form && (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              ref={titreRef}
              className="input"
              placeholder="Titre"
              required
            />
            <input
              type="text"
              ref={entrepriseRef}
              className="input"
              placeholder="Nom d'entreprise"
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date Debut</label>
            <input
              type="date"
              ref={datedebutRef}
              className="input"
              placeholder="Nom d'entreprise"
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date Fin</label>
            <input
              type="date"
              ref={datefinRef}
              className="input"
              placeholder="Nom d'entreprise"
              required
              disabled={encoure ? "disables" : ""}
              readOnly={encoure ? "readonly" : ""}
            />
            <input
              type="checkbox"
              name="encoure"
              id="encoure"
              value="encoure"
              onChange={() => setEncoure(!encoure)}
            />
            <label htmlFor="encoure"> A ce jour</label>
          </div>

          <div>
            <textarea
              ref={missionRef}
              placeholder="description de votre mission"
              cols={40}
              rows={5}
              required
            ></textarea>
          </div>
          <div className="fichier-certification">
            <strong>Joindre une attestation :</strong>
            <button className="container-btn-file">
              <RiFileAddLine size={20} />
              Choisir un fichier
              <input
                className="file"
                name="text"
                type="file"
                ref={certificatRef}
              />
            </button>
          </div>
          <button className="submit-button"> Ajouter</button>
        </form>
      )}
    </div>
  );
}
