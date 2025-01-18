import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
export default function Responsable() {
    const entreprise=useSelector(data=>data.entreprise.entreprise)
    const token=useSelector(data=>data.entreprise.token)
    const [responsable,setResponsable]=useState({});

     useEffect(() => {
        fetch("http://127.0.0.1:8000/api/showResponsable", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ id: entreprise.Identifiant }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setResponsable(data)
        })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div className="entreprise-indetification">
    <div className="entreprise-info">
      <p className="border">
        <span className="bold">ICE</span> : {entreprise.Identifiant}
      </p>
      <div className="entreprise-details">
        <p>
          <span className="bold">Nom:</span>{responsable.ResponsableCivilite}: {responsable.ResponsableName}
        </p>
        <p>
          <span className="bold">Post</span> : {responsable.ResponsableFonction}
        </p>
      </div>
      <p>
        <span className="bold">Mobile</span> : {responsable.ResponsableMobile}
      </p>
      <a href={`${responsable.ResponsableLinkedIn}`} target='_blank'>LinkedIn</a>
    </div>
    <div className="ofppt-v-logo">
      <img src="/images/ofppt-v-logo.png" alt="" />
    </div>
  </div>
  )
}
