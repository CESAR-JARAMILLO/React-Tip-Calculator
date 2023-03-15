import React from 'react'
import './Card.css'
import Output from '../Output/Output'

function Card() {
  return (
    <main className='main-card'>
      <div className='input-card'>
        <div className='input-container'>
          <p>Bill</p>
          <input type='text'></input>
        </div>

        <div className='tip-container'>
          <p>Select Tip</p>
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
          <input type='text'></input>
        </div>
      </div>
      
      <Output />
    </main>
  )
}

export default Card