import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

export default function LaureatCandidature() {
  const [candidature, setCandidature] = useState([])
  const user=useSelector(data=>data.user.user);

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/candidatures',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-type':'application/json',
      }
      ,
      body:JSON.stringify({cin:user.CIN})
    })
    .then(res=>res.json())
    .then(data=>setCandidature(data.candidatures))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="jobs-list-container">
    <h3>Les Dernières Offres D'emploi</h3>
    <table style={{ fontFamily: "serif" }} className="table table-striped">
      <tbody>
      {
       candidature.map((ele, index) => (
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
                    <button class="learn-more">
                     <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                     </span>
                     <span class="button-text">Détails</span>
                    </button>
                </NavLink>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
