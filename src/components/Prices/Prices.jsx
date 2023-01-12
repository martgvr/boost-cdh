import React, { useState } from 'react'
import PriceCard from '../PriceCard/PriceCard'
import './prices.css'

const services = [
  {
    name: 'DESARROLLO WEB',
    color: '#75BFB2',
    services: [ 'Servicio 1', 'Servicio 2' ],
    prices: [
      { code: 'USD', price: '$99' },
      { code: 'ARS', price: '$35.000' }
    ]
  },
  {
    name: 'MARKETING',
    color: '#F29422',
    services: [ 'Servicio 1', 'Servicio 2' ],
    prices: [
      { code: 'USD', price: '$199' },
      { code: 'ARS', price: '$71.600' }
    ]
  },
  {
    name: 'BRANDING',
    color: '#BF4226',
    services: [ 'Servicio 1', 'Servicio 2', 'Servicio 3' ],
    prices: [
      { code: 'USD', price: '$299' },
      { code: 'ARS', price: '$107.640' }
    ]
  }
]

function Prices() {
  const [ coinSelected, setCoinSelected ] = useState('USD');

  function changeCoinHandler(e) {
    setCoinSelected(e.target.value);
  }

  return (
    <div className='prices' id='prices'>
      <h1>Tarifario</h1>
      <div className='prices__subtitle'>
        <div className='prices__subtitle--select'>
          <p>Selecciona tu moneda</p>
          <div className='select'>
            <select id='select' value={coinSelected} onChange={changeCoinHandler}>
              <option value="USD">Dolar USD</option>
              <option value="ARS">Peso Argentino</option>
            </select>
          </div>
        </div>
        <p>Estamos comprometidos con el despegue de tu negocio ¡Somos tu mejor opción!</p>
      </div>
      <div className='prices__cards'>
        { services.map(service => <PriceCard key={service.name} title={service.name} price={coinSelected === 'USD' ? service.prices[0].price : service.prices[1].price} color={service.color} services={service.services} />) }
      </div>
    </div>
  )
}

export default Prices