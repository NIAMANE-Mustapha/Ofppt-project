import React, { use, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EntrepriseContact() {
  const [show, setShow] = useState("emploi");
  const [offrelist, setOffrelist] = useState([]);
  const [candidature, setCandidature] = useState([]);
  const [activeButton, setActiveButton] = useState("button1");
  const ent = useSelector((data) => data.entreprise.entreprise);
  useEffect(() => {
    console.log(ent)
    fetch("http://127.0.0.1:8000/api/entrepriseOffre", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ Identifiant: ent.Identifiant }),
    })
      .then((res) => res.json())
      .then((data) => setOffrelist(data))
      fetch('' , {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({ Identifiant: ent.Identifiant }),
      })
  }, []);


  return (
    <div className="contact-entreprise">
      <div className="offre-type-div">
        <button
          className={`offre-type-btn ${
            activeButton === "button1" ? "active" : ""
          }`}
          onClick={() => {
            setActiveButton("button1");
            setShow("emploi");
          }}
        >
          Emploi
        </button>
        <button
          className={`offre-type-btn ${
            activeButton === "button2" ? "active" : ""
          }`}
          onClick={() => {
            setActiveButton("button2");
            setShow("stage");
          }}
        >
          Stage
        </button>
      </div>
      {show === "emploi" ? (
        <div className="emploi">
          <p className="candidat-postule">{offrelist.length} candidats postulé</p>
          {offrelist.map((offre, index) => (
            <article className="candidat-p">
              <img src="/images/candida1.jpg" alt="laureat" />
              <p className="contact-p">SAHI</p>
              <p className="contact-p">Salwa</p>
              <p className="contact-p">Bac +2</p>

              <Link>laureat details</Link>
            </article>
          ))}
          <article className="candidat-p">
            <img src="/images/candida2.jpg" alt="laureat" />
            <p className="contact-p">NOULI</p>
            <p className="contact-p">Manal</p>
            <p className="contact-p">Bac +5</p>

            <Link>laureat details</Link>
          </article>
        </div>
      ) : (
        <div className="stage">
          <p className="candidat-postule">
            85 laureat envoyé une demande de stage
          </p>
          <article className="candidat-p">
            <img src="/images/candida1.jpg" alt="laureat" />
            <p className="contact-p">SAHI</p>
            <p className="contact-p">Salwa</p>
            <p className="contact-p">Bac +2</p>

            <Link>laureat details</Link>
          </article>
          <article className="candidat-p">
            <img src="/images/candida3.webp" alt="laureat" />
            <p className="contact-p">SHAMI</p>
            <p className="contact-p">Mohamad</p>
            <p className="contact-p">Bac +3</p>

            <Link>laureat details</Link>
          </article>
        </div>
      )}
    </div>
  );
}
