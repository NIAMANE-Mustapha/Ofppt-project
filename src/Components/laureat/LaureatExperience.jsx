import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RiFileAddLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

export default function LaureatExperience() {
  const [form, setForm] = useState(false);
  const [experience, setExperience] = useState([]);
  const user = useSelector((data) => data.user.user);
  const token = useSelector((data) => data.user.token);

  /* ajouter une exprerience */
  const titreRef = useRef();
  const dureeRef = useRef();
  const missionRef = useRef();
  const entrepriseRef = useRef();
  const certificatRef = useRef();

  let payload = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (certificatRef.current.files[0]) {
      payload = {
        titre: titreRef.current.value,
        duree: dureeRef.current.value,
        mission: missionRef.current.value,
        entreprise: entrepriseRef.current.value,
        certificat: certificatRef.current.files[0].name,
        cin: user.CIN,
      };
    } else {
      payload = {
        titre: titreRef.current.value,
        duree: dureeRef.current.value,
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
  };

  /* fetch les experiences */
  useEffect(() => {
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
              <td>{ele.Duree} ans</td>
              <td>{ele.Mission}</td>
              <td>{ele.EntrepriseName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="showform-button" onClick={() => setForm(!form)}>
        <IoMdAdd color="#e8e8e8" size={20} />
        Ajouter experience
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
            <select ref={dureeRef} className="minimal" required>
              <option>Durée d'experience</option>
              <option value="<1"> inferieur 1 ans </option>
              <option value="1">1 ans</option>
              <option value="2">2 ans</option>
              <option value="3">3 ans</option>
              <option value="4">4 ans</option>
              <option value="5">5 ans</option>
              <option value="5+">plus 5 ans</option>
            </select>
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
            {" "}
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
