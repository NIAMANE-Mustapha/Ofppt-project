import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export default function Responsable() {
    const entreprise=useSelector(data=>data.entreprise.entreprise)
    const token=useSelector(data=>data.entreprise.token)
    const [responsable,setResponsable]=useState({});
      const [loading, setLoading] = useState(true);


     useEffect(() => {
        fetch("http://127.0.0.1:8000/api/showResponsable", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ id: entreprise.Identifiant }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setResponsable(data)
        })
          .catch((err) => console.log(err));
          setTimeout(() => {
            setLoading(false);
          }, 2000);
      }, []);
  return (
    <div className="entreprise-indetification">
        {loading ? (
        <div class="wrapper">
        <div class="blue ball"></div>
        <div class="red ball"></div>
        <div class="yellow ball"></div>
        <div class="green ball"></div>
      </div>


      ) :
    <div className="entreprise-info">
      <p className="border">
        <span className="bold">ICE</span> : {entreprise.Identifiant}
      </p>
      <div className="entreprise-details">
        <p>
          <span className="bold">Nom:</span>{responsable.ResponsableCivilite}: {responsable.ResponsableName}
        </p>
        <p>
          <span className="bold">Poste</span> : {responsable.ResponsableFonction}
        </p>
      </div>
      <p>
        <span className="bold">Mobile</span> : {responsable.ResponsableMobile}
      </p>
      <a href={`${responsable.ResponsableLinkedIn}`} target='_blank'><FaLinkedin size={30} /></a>
      <BiLogoGmail color='red' size={30} />
    </div>}
    <div className="ofppt-v-logo">
      <img src="/images/ofppt-v-logo.png" alt="" />
    </div>
  </div>
  )
}
