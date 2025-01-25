import React, { useRef } from "react";
import "../CSS/InscriptionLaureat.css";
import { useNavigate } from "react-router-dom";

export default function InscriptionLaureat() {
    const nomRef = useRef();
    const cinRef = useRef();
    const telRef = useRef();
    const villeRef = useRef();
    const adrRef = useRef();
    const emailRef = useRef();
    const confirmEmailRef = useRef();
    const pswRef = useRef();
    const confirmPswRef = useRef();
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload={
            adr:adrRef.current.value,
            ville:villeRef.current.value,
            cin:cinRef.current.value,
            name:nomRef.current.value,
            phone:telRef.current.value,
            email:emailRef.current.value,
            password:pswRef.current.value,
        }
        console.log(payload.email)
        if (!payload.email.match(/^[a-zA-Z0-9._%+-]+@ofppt-edu\.ma$/)) {
            alert('Adresse email doit se terminer par @ofppt-edu.ma.');
        }
        console.log(payload)
        fetch('http://127.0.0.1:8000/api/register',{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                'content-type':'application/json',
                Accept:'application/json'
            },
        }).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
        navigate('/')
    }


  return (
    <div className="inscription-laureat">
      <h2>Candidat, inscriver-vous en 1 minute</h2>
      <form onSubmit={handleSubmit} >
        <h3>Vos informations</h3>
        <div className="inscription-lauraet-infos">


        <div className="input-group">
            <input type="text" name="prenom" id="prenom" required ref={nomRef} />
            <label htmlFor="prenom">
            Nom et Prénom <span className="isred">*</span>
            </label>
          </div>
          <div className="input-group">
            <input type="text" name="Adress" id="Adress" required ref={adrRef} />
            <label htmlFor="prenom">
              Adresse <span className="isred">*</span>
            </label>
          </div>
           <div className="input-group">
            <input type="text" name="Ville" id="Ville" required ref={villeRef} />
            <label htmlFor="prenom">
              Ville <span className="isred">*</span>
            </label>
          </div>
          <div className="input-group">
            <input type="text" name="CIN" id="CIN" required ref={cinRef} />
            <label htmlFor="prenom">
              CIN <span className="isred">*</span>
            </label>
          </div>

          <div className="input-group">
            <input type="tel" name="tel" id="tel" required ref={telRef}/>
            <label htmlFor="tel">
              Tel <span className="isred">*</span>
            </label>
          </div>

          <div className="input-group">
            <input type="email" name="email" id="email" pattern="^[a-zA-Z0-9._%+-]+@ofppt-edu\.ma$" required ref={emailRef}/>
            <label htmlFor="email">
              Votre email <span className="isred">*</span>
            </label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="confirmemail"
              id="confirmemail"
              required
              ref={confirmEmailRef}
            />
            <label htmlFor="confirmemail">
              Confirmez votre email <span className="isred">*</span>
            </label>
          </div>

          <div className="input-group">
            <input type="password" name="psw" id="psw" required ref={pswRef}/>
            <label htmlFor="psw">
              Choisissez un mot de passe <span className="isred">*</span>
            </label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmepsw"
              id="confirmepsw"
              required
              ref={confirmPswRef}
            />
            <label htmlFor="confirmepsw">
              Confirmez votre mot de passe <span className="isred">*</span>
            </label>
          </div>
        </div>


        <p>
          (<span className="isred">*</span>) champ obligatoire
        </p>
        <div className="submit-section" >
          <button type="submit" className="submitbtn-2">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
