import React from "react";
import "../CSS/navbar.css";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container">
      <div className="nav-container">
        <img className="ofppt-logo" src="./images/offtlogo.png" alt="IMG" />
        <nav className="first-nav">
          <div className="langue">
            <span>
              <a href="#">FR</a>
            </span>
            <span>
              <a href="#">AR</a>
            </span>
          </div>
          <ul className="navlist">
            <NavLink to="Metier" className="black">Repertoir des Métiers</NavLink>
            <NavLink to="Laureat" className="blue">Espace Lauréat</NavLink>
            <NavLink to="Entreprise" className="green">Espace Entreprise</NavLink>
            <FaSearch />
          </ul>
          <input type="search" style={{ display: "none" }} />
        </nav>
      </div>
    </div>
  );
}
