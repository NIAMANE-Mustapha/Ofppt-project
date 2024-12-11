import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LaureatOffre() {
  return (
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
  );
}
