/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { use, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LaureatPièces() {
  const coverLetterRef = useRef(null);
  const navigate = useNavigate();

  const cvRef = useRef(null);
  const user = useSelector((data) => data.user.user);
  const token = useSelector((data) => data.user.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      MotivationLetter: coverLetterRef.current.files[0].name,
      CV: cvRef.current.files[0].name,
    };
    console.log(payload);
    fetch("http://127.0.0.1:8000/api/updatecvletter", {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      navigate("/Laureat");
  };

  return (
    <div className="allpices">
      <div className="LaureatPièces">
        <h1>Pièces Jointes</h1>

        <form onSubmit={handleSubmit}>
          {/* Section pour le CV */}
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label
              htmlFor="cv"
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Joindre votre CV :
            </label>
            <label
              htmlFor="cv"
              className="btn-upload"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Importer un fichier
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.jpg,.png,.doc,.docx"
              style={{ display: "none" }}
              ref={cvRef}
            />
            {/* {user.CV && <p>Fichier choisi : {user.CV}</p>} */}
          </div>

          {/* Section pour la lettre de motivation */}
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label
              htmlFor="lettreMotivation"
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Joindre votre Lettre de Motivation :
            </label>
            <label
              htmlFor="lettreMotivation"
              className="btn-upload"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Importer un fichier
            </label>
            <input
              type="file"
              id="lettreMotivation"
              name="lettreMotivation"
              style={{ display: "none" }}
              ref={coverLetterRef}
            />
            {/* {lettreMotivation && (
              <p>Fichier choisi : {lettreMotivation.name}</p>
            )} */}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="btn-submit"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Soumettre les pièces jointes
          </button>
        </form>
      </div>
      <div className="showpieces">
        <h3>Mes Documents</h3>
        <div className="documentsList">
          <div className="singledoc">
            <a
              href={`http://localhost:3000/files/${user.CV}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }} // Optional, removes underline from the link
            >
              <button className="Documents-btn">
                <span className="folderContainer">
                  <svg
                    className="fileBack"
                    width="146"
                    height="113"
                    viewBox="0 0 146 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                      fill="url(#paint0_linear_117_4)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_4"
                        x1="0"
                        y1="0"
                        x2="72.93"
                        y2="95.4804"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8F88C2"></stop>
                        <stop offset="1" stopColor="#5C52A2"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="filePage"
                    width="88"
                    height="99"
                    viewBox="0 0 88 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="88"
                      height="99"
                      fill="url(#paint0_linear_117_6)"
                    ></rect>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_6"
                        x1="0"
                        y1="0"
                        x2="81"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="#686868"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="fileFront"
                    width="160"
                    height="79"
                    viewBox="0 0 160 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                      fill="url(#paint0_linear_117_5)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_5"
                        x1="38.7619"
                        y1="8.71323"
                        x2="66.9106"
                        y2="82.8317"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C3BBFF"></stop>
                        <stop offset="1" stopColor="#51469A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <p className="text">CV</p>
              </button>
            </a>
          </div>

          <div className="singledoc">
            <a
              href={`http://localhost:3000/files/${user.MotivationLetter}`} // Replace this with the correct path to your document
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }} // Optional, removes underline from the link
            >
              <button className="Documents-btn">
                <span className="folderContainer">
                  <svg
                    className="fileBack"
                    width="146"
                    height="113"
                    viewBox="0 0 146 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                      fill="url(#paint0_linear_117_4)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_4"
                        x1="0"
                        y1="0"
                        x2="72.93"
                        y2="95.4804"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8F88C2"></stop>
                        <stop offset="1" stopColor="#5C52A2"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="filePage"
                    width="88"
                    height="99"
                    viewBox="0 0 88 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="88"
                      height="99"
                      fill="url(#paint0_linear_117_6)"
                    ></rect>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_6"
                        x1="0"
                        y1="0"
                        x2="81"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="#686868"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="fileFront"
                    width="160"
                    height="79"
                    viewBox="0 0 160 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                      fill="url(#paint0_linear_117_5)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_5"
                        x1="38.7619"
                        y1="8.71323"
                        x2="66.9106"
                        y2="82.8317"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C3BBFF"></stop>
                        <stop offset="1" stopColor="#51469A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <p className="text">Motivation Letter</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
