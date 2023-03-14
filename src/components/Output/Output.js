import React from 'react'
import './Output.css'

function Output() {
  return (
    <section className='output'>
      <div className='tip-amount'>
        <div className='text'>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className='amount'>$5.45</p>
      </div>
      <div className='total'>
      <div className='text'>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className='amount'>$5.45</p>
      </div>
      <button>Reset</button>
    </section>
  )
}

export default Output