import React from 'react'
import './Output.css'

function Output({ selectedValue, billValue, partyValue, handleReset }) {
  let tipAmount = 0;
  let total = 0;

  if (billValue && selectedValue && partyValue) {
    tipAmount = ((billValue * selectedValue) / 100) / partyValue;
    total = (billValue + ((billValue * selectedValue) / 100)) / partyValue;
  }

  return (
    <section className='output'>
      <div className='tip-amount'>
        <div className='text'>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className='amount'>{tipAmount ? `$${tipAmount.toFixed(2)}` : '$0.00'}</p>
      </div>
      <div className='total'>
        <div className='text'>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className='amount'>{total ? `$${total.toFixed(2)}` : '$0.00'}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </section>
  )
}

export default Output
