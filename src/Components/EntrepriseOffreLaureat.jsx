import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EntrepriseOffreLaureat() {
    const [stgs, setStgs] = useState(null)
    const {id}=useParams()
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/offresWithLaureat", {
      method: "POST",

      body: JSON.stringify({id:id}),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
        .then(res=>res.json())
        .then(data=>{
            console.log(data); // Check the API response structure
            setStgs(data); // Save the data to state
        })
    },[id])

  return (
    <div>
        {stgs ? (
        stgs.candidatures?.map((ele) => (
          <div key={ele.id}>
            {ele.stagiaire  ? (
              <div>
                <h4>Stagiaires:</h4>
                <p>{ele.stagiaire.StagiaireName}</p>
                <p>{ele.stagiaire.CIN}</p>
                <p>{ele.stagiaire.Ville}</p>
                <Link to={`/${ele.stagiaire.CIN}`}>
                    <div>
                    <button className="btnd">
                        <i className="animation"></i>Laureat Déatails<i className="animation"></i>
                </button>
              </div>
            </Link>
              </div>
            ) : (
              <p>No stagiaires available.</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
