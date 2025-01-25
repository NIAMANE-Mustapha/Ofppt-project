import React from 'react'
import NavBar from '../Components/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer'

export default function NabvarLayout() {
  return (
    <div>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}
