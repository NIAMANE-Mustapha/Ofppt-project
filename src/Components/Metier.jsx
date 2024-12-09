import React from 'react'
import JobSection from './JobsSection'
import Identification from './Identification'
import '../CSS/Metier.css'

export default function Metier() {
  return (
    <div className='metiercontainer'>
      <Identification/>
      <JobSection/>
    </div>
  )
}
