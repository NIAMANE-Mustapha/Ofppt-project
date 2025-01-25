import React, { useState } from "react";
import "../CSS/navbar.css";
import { FaSearch } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  // State for setting the background image
  const [bgImage, setBgImage] = useState("/images/bg.jpeg");

  // Function to handle background image change
  const handleBgChange = (image) => {
    setBgImage(image);
  };

  return (
    <div
      className="container-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.5s ease",
      }}
    >
      <div className="nav-container">
        <NavLink to="">
          <img className="ofppt-logo" src="/images/offtlogo.png" alt="IMG" />
        </NavLink>
        <nav className="first-nav">
          <div className="langue-container">
            <ul className="first-links">
              <Link>OFPPT</Link>
              <Link>Capital Humain</Link>
              <Link>Newsroom</Link>
              <Link>Contact</Link>
            </ul>
            <div className="langue">
              <span>
                <a href="#">FR</a>
              </span>
              <span>
                <a href="#">AR</a>
              </span>
            </div>
          </div>
          <ul className="navlist">
            <NavLink
              to=""
              className="orange"
              end
              onClick={() => handleBgChange("/images/bg.jpeg")}
            >
              Trouver une Formation
            </NavLink>
            <NavLink
              to=""
              className="bluen"
              onClick={() =>
                handleBgChange("/images/inscription-ouverte-2019-vf.png")
              }
            >
              Espace Lauréat
            </NavLink>
            <NavLink
              to=""
              className="greenn"
              onClick={() => handleBgChange("/images/20512809.jpg")}
            >
              Espace Entreprise
            </NavLink>
            <NavLink
              to=""
              className="black"
              end
              onClick={() => handleBgChange("/images/bg.jpeg")}
            >
              Espace Insertion
            </NavLink>
            <FaSearch />
          </ul>
          <input type="search" style={{ display: "none" }} />
        </nav>
      </div>
    </div>
  );
}
