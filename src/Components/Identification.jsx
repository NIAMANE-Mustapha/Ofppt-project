import React, { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import "../CSS/Identification.css";
import { setUser,setToken } from "../redux/userSlice";
import { setEntreprise,setEntToken } from "../redux/entrepriseSlice";
export default function Identification() {
    const emailref=useRef()
    const pswref=useRef()
    const emaiEntrepriselref=useRef()
    const pswEntrepriseref=useRef()
    const dispatch=useDispatch()
    const navigate=useNavigate()


    /* const dispatch=useDispatch() */


    const handleSubmit=(e)=>{
        e.preventDefault()
        const payload={
            email:emailref.current.value,
            password:pswref.current.value,
        }
        fetch('http://127.0.0.1:8000/api/login',{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                'content-type':'application/json',
                Accept:'application/json'
            },
        })
        .then(res=>res.json())
        .then(res=>{
          if(res.token){
            dispatch(setUser(res.stg))
            dispatch(setToken(res.token))
            navigate('Laureat');
          }
        })
        .catch(err=>console.log(err))
    }
    const handleSubmitEntreprise=(e)=>{
        e.preventDefault()
        const payload2={
            email:emaiEntrepriselref.current.value,
            password:pswEntrepriseref.current.value,
        }

        fetch('http://127.0.0.1:8000/api/loginEntreprise',{
            method:'POST',
            body:JSON.stringify(payload2),
            headers:{
                'content-type':'application/json',
                Accept:'application/json'
            },
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res.token){
                dispatch(setEntreprise(res.entlog))
                dispatch(setEntToken(res.token))
                navigate('Entreprise');
            }
        }).catch(err=>console.log(err))
    }


  return (
    <div>
        <h2>Authentification:</h2>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="stagiaire">
          <form onSubmit={handleSubmit}>
            <label className="login-label" htmlFor="chk" aria-hidden="true">
              Lauréat
            </label>
            <input className="login-input" type="email" name="email" placeholder="Email"  required ref={emailref} />
            <input className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              required
              ref={pswref}
            />
            <button type="submit" className="loginbtn">
              Se connecter
            </button>
            <NavLink to="/InscriptionLaureat"><button className="signupbtn" type="button">S´inscrire</button></NavLink>
          </form>
        </div>

        <div className="entreprise">
          <form onSubmit={handleSubmitEntreprise}>
            <label  className="login-label" htmlFor="chk" aria-hidden="true">
              Entreprise
            </label>
            <input className="login-input" type="email" name="email" ref={emaiEntrepriselref} placeholder="Email" required />
            <input className="login-input"
              type="password"
              name="password"
              ref={pswEntrepriseref}
              placeholder="Password"
              required
            />
            <button type="submit" className="loginbtn">
              Se connecter
            </button>
            <NavLink to="/InscriptionEntreprise"><button className="signupbtn">S´inscrire</button></NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
