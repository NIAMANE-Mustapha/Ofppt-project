import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosSearch } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import "../CSS/JobSection.css";
export default function JobsSection() {
  const [display, setDisplay] = useState("none");
  const handleToggle = () => {
    setTimeout(
      () => setDisplay((display) => (display === "none" ? "flex" : "none")),
      300
    );
  };

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
        <h3>Les Dernières Offres D'emploi</h3>
        <table style={{ fontFamily: "serif" }} className="table table-striped">
          <tbody>
            {[
              {
                title: "Technicien Spécialisé",
                type: "CDI",
                expiry: "22/02/2025",
              },
              {
                title: "Technicien Spécialisé en Réseaux",
                type: "CDI",
                expiry: "15/03/2025",
              },
              {
                title: "Développeur Full Stack",
                type: "Contrat Freelance",
                expiry: "10/04/2025",
              },
              {
                title: "Analyste de Données",
                type: "CDI",
                expiry: "20/03/2025",
              },
              {
                title: "Ingénieur en Sécurité Informatique",
                type: "Stage Pré-embauche",
                expiry: "05/05/2025",
              },
              {
                title: "Administrateur Systèmes et Réseaux",
                type: "CDI",
                expiry: "30/04/2025",
              },
            ].map((job, index) => (
              <tr key={index}>
                <td>
                  <h4>{job.title}</h4>
                  <p>
                    Type: {job.type}{" "}
                    <span style={{ marginLeft: "20px" }}>
                      Date d'expiration: {job.expiry}
                    </span>
                  </p>
                </td>
                <td className="text-align-end">
                  <a href="#">Détail de l'offre</a>
                </td>
                {
                /* 
                  <td className="details">
                  <TbListDetails size={20}/>
                  </td>
                */
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
