import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function LaureatCandidature() {
  const [candidature, setCandidature] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const user = useSelector((data) => data.user.user);

  useEffect(() => {
    setLoading(true); // Set loading to true before the fetch starts

    fetch("http://127.0.0.1:8000/api/candidatures", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ cin: user.CIN }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCandidature(data.candidatures);
        console.log(data)
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if(!candidature){
    return <p>loading....</p>
  }

  return (
    <div className="jobs-list-container">
      <h3>Les Dernières Offres D'emploi</h3>
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
      ) : (
        <table style={{ fontFamily: "serif" }} className="table table-striped">
          <tbody>
            {candidature.map((ele, index) => (
              <tr key={index}>
                <td>
                  <h4>{ele.offre.Post}</h4>
                  <p>
                    Type: {ele.offre.Type}
                    <span style={{ marginLeft: "20px" }}>
                      Date d'expiration: {ele.offre.Deadline}
                    </span>
                  </p>
                </td>
                <td className="text-align-end">
                  <NavLink to={`/Laureat/${ele.OffreId}`}>
                    <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text">Détails</span>
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
