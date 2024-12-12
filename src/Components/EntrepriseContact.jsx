import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EntrepriseContact() {
  const [show, setShow] = useState("emploi");
  const [activeButton, setActiveButton] = useState('button1');
  return (
    <div className='contact-entreprise'>
       <div className='offre-type-div'>
        <button
          className={`offre-type-btn ${activeButton === 'button1' ? 'active' : ''}`}
          onClick={() => {
            setActiveButton('button1'); 
            setShow("emploi");
          }}
        >
          Emploi
        </button>
        <button
          className={`offre-type-btn ${activeButton === 'button2' ? 'active' : ''}`}
          onClick={() => {
            setActiveButton('button2'); 
            setShow("stage");
          }}
        >
          Stage
        </button>
      </div>
      {show === "emploi" ? (
        <div className='emploi'>
          <p className='candidat-postule'>100 candidats postulé</p>
          <article className='candidat-p'>
            <img src="/images/candida1.jpg" alt="laureat" />
            <p className='contact-p'>nom</p>
            <p className='contact-p'>prenom</p>
            <Link>laureat details</Link>
          </article>
          <article className='candidat-p'>
            <img src="/images/candida1.jpg" alt="laureat" />
            <p className='contact-p'>Sahi</p>
            <p className='contact-p'>Salwa</p>
            <Link>laureat details</Link>
          </article>
        </div>
      ) : (
        <div className='stage'> 
          <p className='candidat-postule'>85 laureat envoyé une demande de stage</p>
          <article className='candidat-p'>
            <img src="/images/candida1.jpg" alt="laureat" />
            <p className='contact-p'>Sahi</p>
            <p className='contact-p'>Salwa</p>
            <Link>laureat details</Link>
          </article>
          <article className='candidat-p'>
            <img src="/images/candida1.jpg" alt="laureat" />
            <p className='contact-p'>nom</p>
            <p className='contact-p'>prenom</p>
            <Link>laureat details</Link>
          </article>
        </div>
      )}
    </div>
  );
}
