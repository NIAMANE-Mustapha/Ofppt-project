import React from "react";
import "../CSS/Identification.css";
export default function Identification() {
  return (
    <div>
        <h2>Authentification</h2>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="stagiaire">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Lauréat
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="loginbtn">
              Se connecter
            </button>
            <button className="signupbtn">S´inscrire</button>
          </form>
        </div>

        <div className="entreprise">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Entreprise
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="loginbtn">
              Se connecter
            </button>
            <button className="signupbtn">S´inscrire</button>
          </form>
        </div>
      </div>
    </div>
  );
}
