import React, { useState } from 'react'
import { FaCircle } from 'react-icons/fa'


export default function LaureatLangues() {
  const [formShow, setFormShow] = useState(false);
  const handleShowForm=()=>{
    setFormShow(!formShow)
  }

 const langues = [
   {
     id: 1,
     langue: "arabe",
     maitrise: 5,
   },
   {
     id: 2,
     langue: "Francais",
     maitrise: 4,
   },
   {
     id: 3,
     langue: "Anglais",
     maitrise: 3,
   },
 ];
  return (
    <div className="laureat-langues">
      {langues.map((ele) => (
        <div key={ele.id} className="langues">
          <p>{ele.langue}</p>
          <div>
            {Array.from({ length: ele.maitrise }).map((_, i) => (
              <FaCircle key={i} size={20} color="green" />
            ))}
          </div>
        </div>
      ))}

      <h4 onClick={handleShowForm}>Ajouter une langue</h4>
      {formShow && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="langue">La Langue</label>
            <input
              type="text"
              name="langue"
              id="langue"
              pattern="[a-zA-Z]*"
              required
            />
          </div>
          <div>
            <label htmlFor="maitrise">degré de maitrise</label>
            <select name="maitrise" id="maitrise" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button>Ajouter</button>
        </form>
      )}
    </div>
  );
}
