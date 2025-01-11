import React,{useRef} from "react";
import { useSelector } from "react-redux";
import "../CSS/entreprise.css";

export default function EntrepriseOffre() {
    const entreprise=useSelector(data=>data.entreprise.entreprise)
    const token=useSelector(data=>data.entreprise.token)
    const postRef=useRef()
    const missionRef=useRef()
    const secteurRef=useRef()
    const niveauRef=useRef()
    const diplomeRef=useRef()
    const experienceRef=useRef()
    const villeRef=useRef();
    const contractRef=useRef()
    const dateexpRef=useRef()
    const handlsubmit=(e)=>{
        e.preventDefault()
        console.log(entreprise.Identifiant)
        const payload={
            post:postRef.current.value,
            mission:missionRef.current.value,
            secteur:secteurRef.current.value,
            niveau:niveauRef.current.value,
            diplome:diplomeRef.current.value,
            experience:experienceRef.current.value,
            ville:villeRef.current.value,
            contract:contractRef.current.value,
            dateexp:dateexpRef.current.value,
            EntrepriseId : entreprise.Identifiant,
        }
        fetch("http://127.0.0.1:8000/api/addoffre",{
            method:'POST',

            body:JSON.stringify(payload),
            headers:{
                'content-type':'application/json',
                Accept:'application/json'
            },
        }).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }




  return (
    <form onSubmit={handlsubmit} className="entreprise-offre">
      <div>
        <label htmlFor="entreprise">Entreprise :</label>
        <input type="text" value={entreprise.E_name} name="entreprise" id="entreprise" />
      </div>
      <div>
        <label htmlFor="poste">Poste :</label>
        <input type="text" name="poste" id="poste" ref={postRef} />
      </div>
      <div>
        <label htmlFor="mission">Description du poste :</label>
        <textarea name="mission" id="mission" ref={missionRef}></textarea>
      </div>
      <div>
        <div>
          <label htmlFor="secteur" >Secteur :</label>
          <select name="secteur" ref={secteurRef} id="secteur">
            <option>Choisir un secteur</option>
            <option value="1">Digital</option>
            <option value="2">Chimie</option>
          </select>
        </div>
        <div>
          <label htmlFor="niveau">Niveau :</label>
          <select name="niveau" ref={niveauRef} id="niveau">
            <option>Choisir un niveau</option>
            <option value="t">T</option>
            <option value="ts">TS</option>
            <option value="q">QU</option>
          </select>
        </div>
        <div>
          <label htmlFor="diplome">Diplome :</label>
          <select name="diplome" ref={diplomeRef} id="diplome">
            <option>Choisir un diplome</option>
            <option value="1">Full Stack</option>
            <option value="2">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="experince">Expérience :</label>
          <select name="experince" ref={experienceRef} id="experince">
            <option>Nombre année expérience</option>
            <option value="1">1 ans</option>
            <option value="2">2 ans</option>
            <option value="3">3 ans</option>
            <option value="4">4 ans</option>
            <option value="5">5 ans</option>
            <option value="6">6+ ans</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="ville">Ville :</label>
        <select name="ville" ref={villeRef} id="ville">
          <option>Choisir une ville</option>
          <option value="bm">Beni Mellal</option>
          <option value="tanger">Tanger</option>
          <option value="rabat">Rabat</option>
        </select>
      </div>
      <div className="sex-container">
        <h4>Conrat:</h4>
        <div className="radio-group">
          <div className="sex">
            <input type="radio" ref={contractRef} name="contract" id="male" value="CDI" />
            <label htmlFor="male">CDI</label>
          </div>
          <div className="sex">
            <input type="radio" name="contract" id="female" value="CDD" />
            <label htmlFor="female">CDD</label>
          </div>
          <div className="sex">
            <input type="radio" name="contract" id="two" value="Stage" />
            <label htmlFor="two">Stage</label>
          </div>
          <div className="sex">
            <input type="radio" name="contract" id="two" value="Tempspariel" />
            <label htmlFor="two">Temps partiel</label>
          </div>
          <div className="sex">
            <input type="radio" name="contract" id="two" value="Alternance" />
            <label htmlFor="two">Alternance</label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="expire">Date d'expiration :</label>
        <input type="date" ref={dateexpRef} name="expire" id="expire" />
      </div>
      <div class="input-files-entreprise">
                <span style={{ fontWeight: "bold" }}>
                Joindre une annonce :
                <input type="file" id="file-upload-entreprise" name="file-upload" />
                </span>
                <label for="file-upload" class="custom-file-label-entreprise">
                  Choose File
                </label>

              </div>
      <button class="cta">
        <span>Annoncer</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  );
}
