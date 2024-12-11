import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../CSS/laureat.css";

export default function Laureat() {
  return (
    <div>
      <div className="title">
        <p>Lauréat</p>
      </div>
      <div className="laureat-container">
        <nav className="laureat-links">
          <NavLink to="" end>Profil</NavLink>
          <NavLink to="laureatExperience">Experience</NavLink>
          <NavLink to="laureatDiplome">Diplomes</NavLink>
          <NavLink to="laureatLangue">Langue</NavLink>
          <NavLink to="laureatOffre">Offres d'emploi</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
