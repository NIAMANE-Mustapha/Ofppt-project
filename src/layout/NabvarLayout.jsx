import React from 'react'
import NavBar from '../Components/Navbar'
import {Outlet} from 'react-router-dom'

export default function NabvarLayout() {
  return (
    <div>
     <NavBar/>
     <Outlet/>
    </div>
  )
}
