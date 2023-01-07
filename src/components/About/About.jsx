import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import './about.css'

function About() {
  return (
    <div className='about'>
      <h3 className='about__title'>Potenciamos tu negocio para que pueda despegar</h3>
      <div className='about__subtitle'>
        <h2>¿Por qué somos la solución perfecta para tu negocio?</h2>
        <p>Nuestro equipo empatiza con tu necesidad directa y crea el ambiente perfecto para que el resultado final de nuestro trabajo refleje la esencia de tu empresa.</p>
      </div>
      <div className='about__cards'>
        <AboutCard title={'Misión'} image={'mision.png'} backgroundColor={'#75BFB2'} text={'Facilitar el despegue de las marcas y establecerlas en el mundo online con una estrategia clara para cada una de ellas.'} />
        <AboutCard title={'Visión'} image={'vision.png'} backgroundColor={'#252526'} text={'Ser reconocida como la empresa que brinda un servicio INTEGRAL Y DE CALIDAD PREMIUM a una cartera distinguida de clientes a través de soluciónes que están a la vanguardia de las necesidades tecnológicas a nivel internacional.'} />
      </div>
    </div>
  )
}

export default About