import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../CSS/laureat.css"; // Ensure you have the relevant CSS file

export default function LaureatProfil() {
  const [activeLink, setActiveLink] = useState("Mon Compte"); // Default active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update active link
  };

  return (
    <div className="profile-container">
      <div className="profile-links">
        <Link
          to=""
          className={activeLink === "Mon Compte" ? "active" : ""}
          onClick={() => handleLinkClick("Mon Compte")}
        >
          Mon Compte
        </Link>
        <Link
          to="laureatExperience"
          className={activeLink === "laureatExperience" ? "active" : ""}
          onClick={() => handleLinkClick("laureatExperience")}
        >
          Experience
        </Link>
        <Link
          to="laureatDiplome"
          className={activeLink === "laureatDiplome" ? "active" : ""}
          onClick={() => handleLinkClick("laureatDiplome")}
        >
          Diplomes
        </Link>
        <Link
          to="laureatLangue"
          className={activeLink === "laureatLangue" ? "active" : ""}
          onClick={() => handleLinkClick("laureatLangue")}
        >
          Langues
        </Link>
        <Link
          to="LaureatPièces"
          className={activeLink === "LaureatPièces" ? "active" : ""}
          onClick={() => handleLinkClick("LaureatPièces")}
        >
          Pièces Jointes
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
