import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LaureatOffre() {
  const offres=[
    {
      id:1,
      post:'Technicien Electricien',
      type:'Emploi',
      expiration:'15/10/2024'
    },
    {
      id:2,
      post:'Commerce International',
      type:'Stage',
      expiration:'15/10/2024'
    },
  ]
  return (
    <div className="laureat-offre">
      <h4>50 Offre en ligne</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="cle">Mot clé</label>
          <input type="text" name="cle" id="cle" />
        </div>
        <div>
          <label htmlFor="ville">Type</label>
          <select name="" id=""></select>
        </div>
        <div>
          <label htmlFor="">Ville</label>
          <select name="" id="">
            <option value="1">Beni Mellal</option>
            <option value="2">Casablanca</option>
            <option value="3">Tanger</option>
            <option value="4">Marrakech</option>
          </select>
        </div>
        <button className='advanced-search'>
          <FaSearch size={15} color="blue" /> Recherch avancée
        </button>
        <button className='submit-search'>
          <FaSearch size={15} color="#fff" />
          Recherche
        </button>
      </form>
      <p>LES DERNIERES OFFRES D'EMPLOI</p>
      <div className='all-offres'>
        {offres.map((ele) => (
          <article key={ele.id}>
            <h4>{ele.post}</h4>
            <div className="post-date">
              <p>Type: {ele.type}</p>
              <p>Date s'expiration: {ele.expiration}</p>
            </div>
            <Link>Detail de l'offre</Link>
          </article>
        ))}
      </div>
      <Link>TOUTES LES OFFRES</Link>
    </div>
  );
}
