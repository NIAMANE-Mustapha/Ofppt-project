import React from "react";
import react, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosSearch } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOffre } from "../../redux/offreSlice"; // Correct import
import { NavLink } from "react-router-dom";
import "../../CSS/LastOffres.css";
export default function LastOffers() {
  const [display, setDisplay] = useState("none");
  const [loading, setLoading] = useState(true); // State for loading

  const [offres, setOffres] = useState([]);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setTimeout(
      () => setDisplay((display) => (display === "none" ? "flex" : "none")),
      300
    );
  };
  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/showoffre")
      .then((res) => res.json())
      .then((data) => setOffres(data.offres));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, [dispatch]);
  dispatch(setOffre(offres));
  return (
    <div className="jobsection-container">
      <div className="search-section">
        <div className="search-info">
          <div className="input-container-main">
            <div class="group">
              <svg
                className="icon_search"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Recherche"
                type="search"
                className="input-search"
              />
            </div>
          </div>
          <button type="submit" className="search_button">
            <IoIosSearch color="white" className="search-icon-btn" />
            Rechercher
          </button>
        </div>
        {/* advanced search */}
        <div className="advanced-search" style={{ display: display }}>
          <div className="input-container">
            <label className="search-label" htmlFor="Metier">
              Métier:
            </label>
            <select name="Metier" id="Metier" className="search-input">
              <option value=""></option>
              <option value="Béni Mellal">
                Management, direction générale
              </option>
              <option value="Informatique">
                Informatique, nouvelles technologies
              </option>
              <option value="Gestion">Gestion, comptabilité, finance </option>
            </select>
          </div>
          <div className="input-container">
            <label className="search-label" htmlFor="Ville">
              Ville:
            </label>
            <select name="Type" id="Type" className="search-input">
              <option value=""></option>
              <option value="Béni Mellal">Béni Mellal</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Marrakesh">Marrakesh</option>
            </select>
          </div>
          <div className="input-container">
            <label className="search-label" htmlFor="secteur">
              Secteurs d'activité:
            </label>
            <select name="secteur" id="secteur" className="search-input">
              <option value=""></option>
              <option value="Activités associatives">
                Activités associatives
              </option>
              <option value="Conseil, audit, comptabilité">
                Conseil, audit, comptabilité
              </option>
              <option value="Import, export">Import, export</option>
            </select>
          </div>

          <div className="input-container">
            <label className="search-label" htmlFor="Niveaux">
              Niveaux d'études:
            </label>
            <select name="Niveaux" id="Niveaux" className="search-input">
              <option value=""></option>
              <option value="QUALIFICATION">Qualification</option>
              <option value="Spécialisation">Spécialisation</option>
              <option value="TECHNICIEN">Technicien</option>
              <option value="Technicien Spésialisé">
                Technicien Spécialisé
              </option>
            </select>
          </div>
          <div className="input-container">
            <label className="search-label" htmlFor="Niveaux">
              Types de contrat:
            </label>
            <select name="Niveaux" id="Niveaux" className="search-input">
              <option value=""></option>
              <option value="CDI">CDI</option>
              <option value="CDD ">CDD </option>
              <option value="Stage">Stage</option>
              <option value="Temps partiel">Temps partiel</option>
              <option value="Alternance">Alternance</option>
            </select>
          </div>
          <div className="input-container">
            <label className="search-label" htmlFor="langues">
              Langes:
            </label>
            <div class="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  className="ckeckbox-input"
                  name="langues"
                  value="Arabe"
                />
                <span></span> Arabe
              </label>
              <label>
                <input
                  type="checkbox"
                  className="ckeckbox-input"
                  name="langues"
                  value="Francais"
                />
                <span></span> Français
              </label>
              <label>
                <input
                  type="checkbox"
                  className="ckeckbox-input"
                  name="langues"
                  value="Anglais"
                />
                <span></span> Anglais
              </label>
              <label>
                <input
                  type="checkbox"
                  className="ckeckbox-input"
                  name="langues"
                  value="Espagnol"
                />
                <span></span> Espagnol
              </label>
            </div>
          </div>
        </div>
        <div className="btn-list">
          <label class="switch">
            <p>Recherche Avancé:</p>
            <input type="checkbox" onChange={handleToggle} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      {/* this is the offers section */}
      <div className="jobs-list-container">
        <h3>Liste des Opportunités Disponibles</h3>
        {loading ? (
        <div className="loading-container">
          <div class="spinnerContainer">
            <div class="spinner"></div>
            <div class="loader">
              <p>loading</p>
              <div class="words">
                <span class="word">Candidatures</span>
                <span class="word">Candidatures</span>
                <span class="word">Candidatures</span>
                <span class="word">Candidatures</span>
              </div>
            </div>
          </div>
        </div>
      ) :
        <table style={{ fontFamily: "serif" }} className="table table-striped">
          <tbody>
            {offres.map((ele, index) => (
              <tr key={index}>
                <td>
                  <h4>{ele.Post}</h4>
                  <p>
                    Type: {ele.Type}
                    <span style={{ marginLeft: "20px" }}>
                      Date d'expiration: {ele.Deadline}
                    </span>
                  </p>
                </td>
                <td className="text-align-end">
                  <NavLink to={`/Laureat/${ele.OffreId}`}>
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Détails</span>
                    </button>
                  </NavLink>
                </td>
                {/*
                  <td className="details">
                  <TbListDetails size={20}/>
                  </td>
                */}
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
      <Outlet />
    </div>
  );
}
