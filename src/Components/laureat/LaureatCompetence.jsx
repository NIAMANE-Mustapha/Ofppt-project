import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LaureatCompetence() {
  const user = useSelector((data) => data.user.user);
  const token = useSelector((data) => data.user.token);
  const [competences, setCompetences] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const comptRef = useRef();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/showcompt", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: user.CIN }),
    })
      .then((res) => res.json())
      .then((data) => setCompetences(data));
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (
    <div className="competence-container">
      <input type="text" name="" id="" ref={comptRef} />
      <button
        className="submit-button"
        style={{ margin: "20px auto" }}
        onClick={() => {
          fetch("http://127.0.0.1:8000/api/addcompt", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: comptRef.current.value,
              cin: user.CIN,
            }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
            navigate("/Laureat");
        }}
      >
        Ajouter
      </button>
      <div>
        <h3 style={{ marginBottom: "20px" }}>Mes Compétences:</h3>
        {loading ? (
          <div className="loading-container">
            <div class="spinnerContainer">
              <div class="spinner"></div>
              <div class="loader">
                <p>loading</p>
                <div class="words">
                  <span class="word">Compétences</span>
                  <span class="word">Compétences</span>
                  <span class="word">Compétences</span>
                  <span class="word">Compétences</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          competences?.map((e) => {
            return <span className="comptence">{e.name}</span>;
          })
        )}
      </div>
    </div>
  );
}
