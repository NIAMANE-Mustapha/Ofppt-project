import React from "react";
import react, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosSearch } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOffre } from '../../redux/offreSlice';  // Correct import
import { NavLink } from "react-router-dom";
import "../../CSS/LastOffres.css";
export default function LastOffers() {
  const [display, setDisplay] = useState("none");
  const [offres, setOffres] = useState([]);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setTimeout(
      () => setDisplay((display) => (display === "none" ? "flex" : "none")),
      300
    );
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/showoffre")
      .then((res) => res.json())
      .then((data) => setOffres(data.offres))
  }, [dispatch]);
  dispatch(setOffre(offres));
    return (
    <div className="jobsection-container">
      <div className="search-section">
        <div className="search-info">
          <div className="input-container">
            <label className="search-label" htmlFor="Mots-clés">
              Mots clés:
            </label>
            <input
              type="text"
              name="Mots-clés"
              id="Mots-clés"
              className="search-input"
            />
          </div>
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
        </div>
        {/* advanced search */}
        <div className="advanced-search" style={{ display: display }}>
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
          <button type="submit" className="searchbtn">
            <IoIosSearch color="white" className="search-icon-btn" />
            Rechercher
          </button>
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
        </table>
      </div>
      <Outlet />
    </div>
  );
}
