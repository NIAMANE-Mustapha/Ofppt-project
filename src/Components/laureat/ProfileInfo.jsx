import React, { useEffect, useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProfileInfo() {
  const user = useSelector((data) => data.user.user);
  const token = useSelector((data) => data.user.token);
  const [modify, setModify] = useState(true);
  const phoneRef = useRef(user.Phone);
  const adrRef = useRef(user.Adresse);
  const profileRef = useRef(user.Profile);
  const photoRef = useRef(user.Photo);
    let payload={

    }
  const handleUpdate=()=>{
    setModify(!modify)
    if(photoRef.current.files[0]){
      payload={
        Phone:phoneRef.current.value,
        Adresse:adrRef.current.value,
        Profile:profileRef.current.value,
        Photo:photoRef.current.files[0].name,
      }
    }else {
      payload={
        Phone:phoneRef.current.value,
        Adresse:adrRef.current.value,
        Profile:profileRef.current.value,
      }
    }
    console.log(payload)
    fetch('http://127.0.0.1:8000/api/update',{
      method:'PUT',
      body:JSON.stringify(payload),
      headers:{
        'content-type':'application/json',
        Accept:'application/json',
        Authorization:`Bearer ${token}`
      },
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return (
    <div className="laureat-profil">
      <div className="photo_container">
        <img
          src={`./images/${user.Photo ? user.Photo : "profile.webp"}`}
          alt="profile"
          className="profile-picture"
          onClick={() => document.getElementById("file").click()} // Trigger the file input click
        />
        <input
          type="file"
          name="file"
          id="file"
          ref={photoRef}
          style={{ display: "none" }} // Hide the input
        />
        <span style={{ fontWeight: "bold", marginTop: "20px" }}>
          {user.StagiaireName}
        </span>
      </div>
      <div className="laureat-profil-infos">
        <div className="icons">
          <div className="contact-icons">
            <CiMail size={25} color="gold" className="icon" />
            <p>{user.OFPPTMail}</p>
          </div>
          <div className="contact-icons">
            <FiPhone size={25} color="gold" className="icon" />
            {modify ? (
              <p>{user.Phone}</p>
            ) : (
              <input
                type="tel"
                defaultValue={user.Phone}
                placeholder="modifier votre telephone"
                ref={phoneRef}
              />
            )}
            <CiEdit
              size={25}
              className="edit-icon"
              onClick={() => setModify(!modify)}
            />
          </div>
          <div className="contact-icons">
            <CiLocationOn size={25} color="gold" className="icon" />
            {modify ? (
              <p>{user.Adresse}</p>
            ) : (
              <input
                defaultValue={user.Adresse}
                type="text"
                placeholder="modifier votre adresse"
                ref={adrRef}
              />
            )}
            <CiEdit
              size={25}
              className="edit-icon"
              onClick={() => setModify(!modify)}
            />
          </div>
        </div>
        <div className="description-profile">
          {modify ? (
            <p style={{ textAlign: "justify" }}>{user.Profile}</p>
          ) : (
            <textarea
              placeholder="modifier votre profile"
              ref={profileRef}
              defaultValue={user.Profile}
            ></textarea>
          )}
          <span className="edit-icon">
            <CiEdit size={30} onClick={() => setModify(!modify)} />
          </span>
        </div>
        {modify || <button className="modify-btn" onClick={handleUpdate}>
          modifier
        </button>}
      </div>
    </div>
  );
}
