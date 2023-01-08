import React from 'react'
import PriceCard from '../PriceCard/PriceCard'
import './prices.css'

function Prices() {
  return (
    <div className='prices' id='prices'>
      <h1>Tarifario</h1>
      <div className='prices__subtitle'>
        <p>Drop</p>
        <p>Estamos comprometidos con el despegue de tu negocio ¡Somos tu mejor opción!</p>
      </div>
      <div className='prices__cards'>
        <PriceCard title={'DESARROLLO WEB'} price={'$99'} color={'#75BFB2'} services={[ 'Servicio 1', 'Servicio 2' ]} />
        <PriceCard title={'MARKETING'} price={'$199'} color={'#F29422'} services={[ 'Servicio 1', 'Servicio 2' ]} />
        <PriceCard title={'BRANDING'} price={'$299'} color={'#BF4226'} services={[ 'Servicio 1', 'Servicio 2', 'Servicio 3' ]} />
      </div>
    </div>
  )
}

export default Prices