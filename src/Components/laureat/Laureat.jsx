import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../CSS/laureat.css";

export default function Laureat() {
  return (
    <div>
      <div className="title">
        <p>Espace Lauréat</p>
      </div>
      <div className="laureat-container">
        <nav className="laureat-links">
          <NavLink to="" end>Profil</NavLink>
          <NavLink to="LastOffers" >Derniére Offres D'emplois</NavLink>
          <NavLink to="laureatOffre">Historiques de Candidature </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
