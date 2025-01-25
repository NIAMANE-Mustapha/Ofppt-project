import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../CSS/OffreDetails.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
export default function OffreDetails() {
  const [candidature, setCandidature] = useState([]);
  const { id } = useParams();
  const [offre, setOffre] = useState(null);
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [showbtn, setShowbtn] = useState(true);
  const navigate = useNavigate();

  const offres = useSelector((state) => state.offre.offre);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);

  function formatDate(dateString) {
    let createdAt = new Date(dateString);
    let day = createdAt.getDate().toString().padStart(2, "0");
    let month = (createdAt.getMonth() + 1).toString().padStart(2, "0");
    let year = createdAt.getFullYear();

    return `${day}/${month}/${year}`;
  }
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/candidatures", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({ cin: user.CIN }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCandidature(data.candidatures);
        })
        .catch((err) => console.log(err));
    if (candidature.find((c) => c.OffreId === parseInt(id))) {
      setShowbtn("none");
    }
    if (offres) {
      const myoffre = offres.find((offre) => offre.OffreId === parseInt(id));

      setOffre(myoffre);
    }
  }, [candidature]);

  const handlePostuler = (id) => {
    const payload = {
      cin: user.CIN,
      offreid: id,
    };

    if (!candidature.find((c) => c.OffreId === parseInt(id))) {
      setDisplay1("flex");
      fetch("http://127.0.0.1:8000/api/addcandidature", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      setTimeout(() => {
        navigate("/Laureat/LaureatCandidature");
      }, 2000);
    } else {
      setDisplay2("flex");
    }

    console.log(payload);
  };


  if (!offre) {
    return <p>Aucune offre trouvée.</p>;
  }

  return (
    <div className="offre-details-container">
      <div className="offre-header">
        <h1 className="offre-title">{offre.Post || "Titre de l'offre"}</h1>
        <p className="offre-subtitle">{offre.Type || "Type d'offre"}</p>
      </div>
      <div className="offre-content">
        <h2>Description de l'offre</h2>
        <p>{offre.Description || "Aucune description disponible."}</p>

        <h2>Profil Recherché</h2>
        <ul>
          <li>avoir un niveau {offre.Niveau}</li>
          <li>
            {offre.Experience > 0 ? (
              <span>{offre.Experience} ans d'experience</span>
            ) : (
              "débutant"
            )}
          </li>
        </ul>

        <h2>Informations supplémentaires</h2>
        <p>
          <strong>Ville :</strong> {offre.Ville || "N/A"}
        </p>
        <p>
          <strong>Nom d'Entreprise : </strong>
          {offre.NomEntreprise}
        </p>
        <p>
          <strong>Date de publication :</strong>{" "}
          {formatDate(offre.created_at) || "N/A"}
        </p>
        <p>
          <strong>Date limite :</strong> {offre.Deadline || "N/A"}
        </p>
      </div>
      <div class="info" style={{ display: display1 }}>
        <div class="info__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
          >
            <path
              fill="#393a37"
              d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
            ></path>
          </svg>
        </div>
        <div class="info__title">
          Votre candidature a été envoyée avec succès.
        </div>
        <div class="info__close">
          <svg
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              fill="#393a37"
            ></path>
          </svg>
        </div>
      </div>
      <div class="error" style={{ display: display2 }}>
        <div class="error__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
          >
            <path
              fill="#393a37"
              d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            ></path>
          </svg>
        </div>
        <div class="error__title">Vous avez déjà postulé</div>
        <div class="error__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            height="20"
          >
            <path
              fill="#393a37"
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="offre-footer">
        <button
          className="apply-button"
          style={{ display: showbtn }}
          onClick={() => handlePostuler(id)}
        >
          Postuler
        </button>
      </div>
    </div>
  );
}
