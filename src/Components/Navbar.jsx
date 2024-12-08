import React from "react";
import "../CSS/navbar.css";
import { FaSearch } from "react-icons/fa";

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
            <li className="black">Repertoire des Métiers</li>
            <li className="blue">Espace Lauréat</li>
            <li className="green">Espace Entreprise</li>
            <FaSearch />
          </ul>
          <input type="search" style={{ display: "none" }} />
        </nav>
      </div>
    </div>
  );
}
