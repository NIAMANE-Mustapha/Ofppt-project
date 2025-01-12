import React, { useEffect, useRef, useState } from 'react'
import { FaCircle } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io';
import { RiFileAddLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';


export default function LaureatLangues() {
  const [langue, setLnague] = useState([])
  const [formShow, setFormShow] = useState(false);
  const user=useSelector(data=>data.user.user)
  const token=useSelector(data=>data.user.token)
  const handleShowForm=()=>{
    setFormShow(!formShow)
  }

  const langueRef=useRef()
  const levelRef=useRef()
  const fileRef=useRef()

  let payload={}

  const handleAddLangue=(e)=>{
    e.preventDefault()
    if(fileRef.current.files[0]){
      payload={
        cin:user.CIN,
        langue:langueRef.current.value,
        level:levelRef.current.value,
        file:fileRef.current.files[0].name,
      }
    }else {
      payload={
        cin:user.CIN,
        langue:langueRef.current.value,
        level:levelRef.current.value,
      }

    }

    console.log(payload)
    fetch('http://127.0.0.1:8000/api/storeLangue',{
      method:'POST',
      headers:{
        "content-type":"application/json",
        Accept:'application/json',
        Authorization:`Bearer ${token}`
      },
      body:JSON.stringify(payload),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }



  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/showlangues',{
      method:'POST',
      body:JSON.stringify({id:user.id}),
      headers:{
        Accept:'application/json',
        'content-type':'application/json',
      },
    })
    .then(res=>res.json())
    .then(data=>setLnague(data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="laureat-langues">
      {langue.map((ele) => (
        <div key={ele.LangueId} className="langues">
          <p className='langue-p'>{ele.LangueName}</p>
          <div>
            {Array.from({ length: ele.Niveau }).map((_, i) => (
              <FaCircle key={i} size={20} className='circle-langues' />
            ))}
          </div>
        </div>
      ))}

      <button className='showform-button' onClick={()=>handleShowForm(!formShow)}>
        <IoMdAdd/>
        Ajouter Langue
      </button>      {formShow && (
        <form onSubmit={handleAddLangue}>
          <div>
            <input
              type="text"
              name="langue"
              id="langue"
              pattern="[a-zA-Z]*"
              ref={langueRef}
              required
              className='input'
              placeholder='Langue'
            />
          </div>
          <div>
            <select name="maitrise" id="maitrise" required ref={levelRef} className='minimal'>
              <option>Degré de maitrise</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="container-btn-file">
            <RiFileAddLine size={20}/>
            Choisir un fichier
            <input className='file' name="text" type="file" ref={fileRef}/>
          </button>

          <button className='submit-button'> Ajouter</button>
        </form>
      )}
    </div>
  );
}
