import React, { use, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EntrepriseContact() {
  const [show, setShow] = useState("emploi");
  const [offrelist, setOffrelist] = useState([]);
  const [stagelist, setStagelist] = useState([]);
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
      .then((data) => {
        setOffrelist(data.filter(ele=>ele.Type!=='stage'))
        setStagelist(data.filter(ele=>ele.Type==='stage'))
        console.log(data)
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
          <p className="candidat-postule">vous avez {offrelist.length} offres</p>
          {offrelist.map((offre, index) => (
            <article className="" key={index} style={{border:'1px solid #252525',padding:'10px',margin:'10px 0'}}>
              <p>Poste : {offre.Post} </p>
              <p>Poste : {offre.Deadline} </p>
              <p>Poste : {offre.Type} </p>

              <Link to={`/Entreprise/EntrepriseOffreLaureat/${offre.OffreId}`}>laureat details</Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="stage">
          <p className="candidat-postule">
            vous avez {stagelist.length} offres de stage
          </p>
          {stagelist.map((offre, index) => (
            <article className="" key={index} style={{border:'1px solid #252525',padding:'10px',margin:'10px 0'}}>
              <p>Poste : {offre.Post} </p>
              <p>Poste : {offre.Deadline} </p>
              <p>Poste : {offre.Type} </p>

              <Link to={`/Entreprise/EntrepriseOffreLaureat/${offre.OffreId}`}>laureat details</Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
