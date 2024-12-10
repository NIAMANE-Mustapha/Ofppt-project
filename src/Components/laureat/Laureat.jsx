import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../CSS/laureat.css'

export default function Laureat() {
  return (
    <div className="laureat-container">
      <div className='title'>
        <p>Lauréat</p>
      </div>
      <nav className="laureat-links">
        <NavLink to="">Profil</NavLink>
        <NavLink to="laureatExperience">Experience</NavLink>
        <NavLink to="laureatDiplome">Diplome</NavLink>
        <NavLink to="laureatLangue">Langue</NavLink>
        <NavLink to="laureatOffre">Offres d'emploi</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
