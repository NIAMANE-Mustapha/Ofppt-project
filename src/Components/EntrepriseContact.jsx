import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EntrepriseContact() {
  const [show, setShow] = useState("emploi")
  return (
    <div>
      <button onClick={() => setShow("emploi")}>Emploi</button>
      <button onClick={() => setShow("stage")}>Stage</button>
      {show === "emploi" ? (
        <div>
          <p>100 candidats postulé</p>
          <article>
            <img src="./images/profil.png" alt="laureat" />
            <p>nom</p>
            <p>prenom</p>
            <Link>laureat details</Link>
          </article>
        </div>
      ) : (
        <div>
          <p>85 laureat envoyé une demande de stage</p>
          <article>
            <img src="./images/profil.png" alt="laureat" />
            <p>nom</p>
            <p>prenom</p>
            <Link>laureat details</Link>
          </article>
        </div>
      )}
    </div>
  );
}
