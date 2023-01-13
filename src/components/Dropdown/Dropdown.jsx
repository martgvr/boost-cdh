import React, { useState } from 'react'
import './dropdown.css'

function Dropdown() {
  const [ isShown, setIsShown ] = useState(false);
  const [ coinSelected, setCoinSelected ] = useState('USD');

  const selectClickHandler = () => setIsShown(true)
  const selectLeaveHandler = () => setIsShown(false)

  function selectCoinHadler(coin) {
    setCoinSelected(coin)
    setIsShown(false)
  }

  return (
    <>
      <div className='select' onPointerEnter={selectClickHandler} style={{ 'border': isShown && '1px solid #F29422' }}>
        <div>{coinSelected}</div>
        <div className='select__icon'><img src="select.png" alt="" /></div>
      </div>
      {
        isShown && 
          <div className='options' onPointerLeave={selectLeaveHandler}>
            <div className='optionsContainer'>
              <div className='option' onClick={() => selectCoinHadler('ARS')}>
                <p>Peso Argentino</p>
                <img src="coin-ars.png" alt="" />
              </div>

              <div className='option' onClick={() => selectCoinHadler('USD')}>
                <p>Dólares</p>
                <img src="coin-usd.png" alt="" />
              </div>
            </div>
          </div>
        }
    </>
  )
}

export default Dropdown