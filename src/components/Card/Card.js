import React from 'react'
import './Card.css'
import Output from '../Output/Output'
import dollar from '../../images/icon-dollar.svg'
import person from '../../images/icon-person.svg'

function Card() {
  return (
    <main className='main-card'>
      <div className='input-card'>
        <div className='input-container'>
          <p>Bill</p>
          <input type='text' placeholder='0'></input>
          <img src={dollar} alt='dollar icon' />
        </div>

        <div className='tip-container'>
          <p>Select Tip %</p>
          <div className='buttons-container'>
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <button>Custom</button>
          </div>
        </div>

        <div className='input-container'>
          <p>Number of People</p>
          <input type='text' placeholder='0'></input>
          <img src={person} alt='person icon' />
        </div>
      </div>

      <Output />
    </main>
  )
}

export default Card