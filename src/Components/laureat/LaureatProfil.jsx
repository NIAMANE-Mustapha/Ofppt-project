import React from 'react'
import { CiMail } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';

export default function LaureatProfil() {
  return (
    <div className="laureat-profil">
      <img src="./images/profile.webp" alt="logo" width={150} height={150} />
      <div className="laureat-profil-infos">
        <div className="icons">
          <div>
            <FiPhone size={25} color="gold" className="icon" />
            <p>O6 00 00 00 00</p>
            <a href="#">modifier</a>
          </div>
          <div>
            <CiMail size={25} color="gold" className="icon" />
            <p>Amine.karim@ofppt-edu.ma</p>
          </div>
          <div>
            <CiLocationOn size={25} color="gold" className="icon" />
            <p>32, Bldi Sidi Youssef Beni Mellal</p>
            <a href="#">Modifier</a>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
            error sint, repellendus voluptates recusandae iusto dolore,
            perferendis amet blanditiis eum corporis possimus! Laborum nobis
            dolorem odio voluptate ullam. Fugit.
          </p>
          <a href="#">Modifier</a>
        </div>
      </div>
    </div>
  );
}
