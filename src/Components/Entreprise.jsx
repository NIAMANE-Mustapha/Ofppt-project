import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../CSS/entreprise.css'

export default function Entreprise() {
  return (
    <>
     <div className='title'>
        <p>Espace Entreprise</p>
      </div>
    <div className='entreprise-container'>
      <nav className='entreprise-links'>
        <NavLink to={""} end>Identification</NavLink>
        <NavLink to={"Responsable"} >Résponsable</NavLink>
        <NavLink to={"entrepriseCompetence"}>Découvrir Metiers Ofppt</NavLink>
        <NavLink to={"entrepriseLaureat"}>Trouver Les Lauréats</NavLink>
        <NavLink to={"entrepriseOffre"}>Créer une Offre</NavLink>
        <NavLink to={"entrepriseContact"}>Candidat</NavLink>
      </nav>
      <Outlet />
    </div>
    </>
  );
}
