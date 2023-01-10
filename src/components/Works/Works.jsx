import React from 'react'
import WorksCarrousel from '../WorksCarrousel/WorksCarrousel'
import './works.css'

function Works() {
  return (
    <div className='works'>
        <h2>Un poco de nuestros trabajos realizados...</h2>
        <img src="elipse.png" alt="" />
        <WorksCarrousel />
        <img src="elipse.png" alt="" />
    </div>
  )
}

export default Works