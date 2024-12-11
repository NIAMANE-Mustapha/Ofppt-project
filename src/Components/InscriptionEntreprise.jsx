import "../CSS/InscriptionEntreprise.css";
export default function InscriptionEntreprise() {
  return (
    <div className="inscription-entreprise-container">
      <div className="title">
        <p>Inscription Entreprise</p>
      </div>
      <div className="inscription-entreprise">
        <form action="" className="inscription-entreprise-form">
            <h2>Recruteurs, inscrivez-vous et publiez vos offres d'emploi !</h2>
          {/*first section */}
          <div className="info-section">
            <h3>Votre entreprise</h3>
            <div className="Votre-entreprise-info">
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="ICE"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  ICE <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="NomE"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Nom de l'entreprise <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="Adress"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Adresse <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <select required name="SecteurActivite" class="input">
                  <option value="" disabled selected></option>
                  <option value="IT">Technologie de l'information</option>
                  <option value="Santé">Santé</option>
                  <option value="Éducation">Éducation</option>
                  <option value="Finance">Finance</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Industrie">Industrie</option>
                  <option value="Transport">Transport et Logistique</option>
                  <option value="Tourisme">Tourisme et Hôtellerie</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Construction">Construction</option>
                </select>
                <label class="user-label">
                  Secteur d'activité <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <select required name="Pays" class="input">
                  <option value="" disabled selected></option>
                  <option value="France">France</option>
                  <option value="Maroc">Maroc</option>
                  <option value="Canada">Canada</option>
                  <option value="États-Unis">États-Unis</option>
                  <option value="Allemagne">Allemagne</option>
                </select>
                <label class="user-label">
                  Pays <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="Ville"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Ville <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <select required name="NombreEmploye" class="input">
                  <option value="" disabled selected></option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
                <label class="user-label">Nombre d'employé</label>
              </div>
              <div class="input-group">
                <input type="url" name="SiteInternet" class="input" required />
                <label class="user-label">Site internet de l'entreprise</label>
              </div>
              <div class="input-files">
                <span style={{ fontWeight: "bold", fontFamily: "cursive" }}>
                  Logo :
                </span>
                <label for="file-upload" class="custom-file-label">
                  Choose File
                </label>
                <input type="file" id="file-upload" name="file-upload" />
              </div>
            </div>
          </div>
          {/*second section */}
          <div className="info-section">
            <h3>Vos coordonnées de contact</h3>
            <div className="Votre-entreprise-info">
              <div class="input-group">
                <select required name="civilite" class="input">
                  <option value="" disabled selected></option>
                  <option value="IT">Mr</option>
                  <option value="Mme">Mme</option>
                </select>
                <label class="user-label">
                  Civilité <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="prenom"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Prénom <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="Nom"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Nom <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <select required name="SecteurActivite" class="input">
                  <option value="" disabled selected></option>
                  <option value="responsableRH">
                    Responsable des Ressources Humaines
                  </option>
                  <option value="chargeRecrutement">
                    Chargé(e) de Recrutement
                  </option>
                  <option value="consultantRH">Consultant(e) RH</option>
                  <option value="assistantRH">
                    Assistant(e) Ressources Humaines
                  </option>
                  <option value="responsableFormation">
                    Responsable Formation
                  </option>
                  <option value="gestionnairePaie">Gestionnaire de Paie</option>
                  <option value="responsableCommunication">
                    Responsable Communication Interne
                  </option>
                  <option value="coachCarriere">Coach de Carrière</option>
                  <option value="directeurRH">Directeur/Directrice RH</option>
                  <option value="autre">Autre</option>
                </select>
                <label class="user-label">
                  Quelle est votre fonction?
                  <span className="isred"> *</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="text"
                  name="linkedin"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">LinkedIn</label>
              </div>

              <div class="input-group">
                <input
                  required
                  type="tel"
                  name="phone1"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Numéro de téléphone <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="tel"
                  name="phone2"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">Numéro de téléphone</label>
              </div>
            </div>
          </div>
          {/*second section */}
          <div className="info-section">
            <h3>Vos identifiants</h3>
            <div className="Votre-entreprise-info">
              <div class="input-group">
                <input
                  required
                  type="email"
                  name="email"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Votre email <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="email"
                  name="Cemail"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Confirmer Votre email <span className="isred">*</span>
                </label>
              </div>
              <div class="input-group">
                <input
                  required
                  type="password"
                  name="password"
                  autocomplete="off"
                  class="input"
                />
                <label class="user-label">
                  Choisissez un mot de pass{" "}
                  <span className="isred">*</span>
                </label>
              </div>
            </div>
          </div>
          <div className="submit-section">
            <p>
              (<span className="isred">*</span>) champ obligatoire
            </p>
            <button type="submit" className="submitbtn">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
