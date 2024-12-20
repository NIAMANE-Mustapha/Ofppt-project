import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "../CSS/Identification.css";
export default function Identification() {
  return (
    <div>
        <h2>Authentification:</h2>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="stagiaire">
          <form>
            <label className="login-label" htmlFor="chk" aria-hidden="true">
              Lauréat
            </label>
            <input className="login-input" type="email" name="email" placeholder="Email"  required />
            <input className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="loginbtn">
              Se connecter
            </button>
            <button className="signupbtn" onClick={(e)=>e.preventDefault()}>S´inscrire</button>
          </form>
        </div>

        <div className="entreprise">
          <form>
            <label  className="login-label" htmlFor="chk" aria-hidden="true">
              Entreprise
            </label>
            <input className="login-input" type="email" name="email" placeholder="Email" required />
            <input className="login-input"
              type="password"
              name="password"
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
