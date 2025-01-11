import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export default function LaureatExperience() {
  const [form, setForm] = useState(false)
  const [experience, setExperience] = useState([])
  const user=useSelector(data=>data.user.user)

  /* ajouter une exprerience */
  const titreRef=useRef()
  const dureeRef=useRef()
  const missionRef=useRef()
  const entrepriseRef=useRef()
  const certificatRef=useRef()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const payload={
      titre:titreRef,
      duree:dureeRef,
      mission:missionRef,
      entreprise:entrepriseRef,
      certificat:certificatRef,
    }
    fetch('http://127.0.0.1:8000/api/store',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(payload),
    })
  }

  /* fetch les experiences */
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/showexperience')
    .then(res=>res.json())
    .then(data=>setExperience(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='experience-profile'>
     <table >
      <thead>
       <tr>
        <th>Titre</th>
        <th>Durée</th>
        <th>Mission</th>
        <th>Nom de société</th>
       </tr>
      </thead>
      <tbody>
       {
        experience.filter(ele=>ele.CIN===user.CIN).map(ele=>(
          <tr key={ele.ExperienceId}>
            <td>{ele.Titre}</td>
            <td>{ele.Duree} mois</td>
            <td>{ele.Mission}</td>
            <td>{ele.EntrepriseName}</td>
          </tr>
        ))
       }
      </tbody>
     </table>
     <p onClick={()=>setForm(!form)} style={{cursor:'pointer'}}>+ajouter une experience</p>
     {form && (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Titre</label>
          <input type="text" name="" id="" ref={titreRef}/>
        </div>
        <div>
          <label htmlFor="">Dureé</label>
          <input type="text" name="" id="" ref={dureeRef}/>
        </div>
        <div>
          <label htmlFor="">Mission</label>
          <textarea name="" id="" ref={missionRef}></textarea>
        </div>
        <div>
          <label htmlFor="">Nom d'entreprise</label>
          <input type="text" name="" id="" ref={entrepriseRef}/>
        </div>
        <div>
          <label htmlFor="">Certificat</label>
          <input type="file" name="" id="" ref={certificatRef}/>
        </div>
        <button>ajouter</button>
     </form>
     )}
    </div>
  )
}
