import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../CSS/OffreDetails.css";
import { useSelector } from "react-redux";
export default function OffreDetails() {
  const { id } = useParams();
  const [offre, setOffre] = useState(null);


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
  const handlePostuler=(id)=>{
    const payload={
      cin:user.CIN,
      offreid:id
    }
    console.log(payload)
    fetch('http://127.0.0.1:8000/api/addcandidature',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-type':'application/json',
        Authorization:`Bearer ${token}`
      }
      ,
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  useEffect(() => {
    if (offres) {
      const myoffre = offres.find((offre) => offre.OffreId === parseInt(id));

      setOffre(myoffre);
    }
  }, [offres]);

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
          <li>{offre.Experience>0? <span>{offre.Experience} ans d'experience</span>: 'débutant'}</li>
        </ul>

        <h2>Informations supplémentaires</h2>
        <p>
          <strong>Ville :</strong> {offre.Ville || "N/A"}
        </p>
        <p><strong>Nom d'Entreprise : </strong>{offre.NomEntreprise}</p>
        <p>
          <strong>Date de publication :</strong>{" "}
          {formatDate(offre.created_at) || "N/A"}
        </p>
        <p>
          <strong>Date limite :</strong> {offre.Deadline || "N/A"}
        </p>
      </div>
      <div className="offre-footer">
        <button className="apply-button" onClick={()=>handlePostuler(id)}>Postuler</button>
      </div>
    </div>
  );
}
