import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../CSS/entreprise.css'

export default function Entreprise() {
  return (
    <div className='entreprise-container'>
      <div className='title'>
        <p>Espace Entreprise</p>
      </div>
      <nav className='entreprise-links'>
        <NavLink to={""} end>Identification</NavLink>
        <NavLink to={"entrepriseCompetence"}>Découvrir Metiers Ofppt</NavLink>
        <NavLink to={"entrepriseLaureat"}>Lauréat</NavLink>
        <NavLink to={"entrepriseOffre"}>Offres Emploi/stage</NavLink>
        <NavLink to={"entrepriseContact"}>Nous contacter</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
