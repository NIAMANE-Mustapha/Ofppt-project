import React from 'react'
import { CiMail } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { CiEdit } from "react-icons/ci";

export default function LaureatProfil() {
  return (
    <div className="laureat-profil">
      <img src="./images/profile.webp" alt="logo" className='profile-picture'/>
      <div className="laureat-profil-infos">
        <div className="icons">
          <div className="contact-icons">
            <FiPhone size={25} color="gold" className="icon" />
            <p>O6 00 00 00 00</p>
            <CiEdit size={25} className='edit-icon'/>
          </div>
          <div className="contact-icons">
            <CiMail size={25} color="gold" className="icon" />
            <p>Amine.karim@ofppt-edu.ma</p>
          </div>
          <div className="contact-icons">
            <CiLocationOn size={25} color="gold" className="icon" />
            <p>32, Bldi Sidi Youssef Beni Mellal</p>
            <CiEdit size={25} className='edit-icon'/>

          </div>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
            error sint, repellendus voluptates recusandae iusto dolore,
            perferendis amet blanditiis eum corporis possimus! Laborum nobis
            dolorem odio voluptate ullam. Fugit.
          </p>
          <span className='edit-icon'><CiEdit size={30}/></span>
        </div>
      </div>
    </div>
  );
}
