import {useState} from 'react'
import Output from '../Output/Output'
import Button from '../Button/Button'
import './Card.css'
import dollar from '../../images/icon-dollar.svg'
import person from '../../images/icon-person.svg'

function Card() {

  const [selectedValue, setSelectedValue] = useState(null)
  const [billValue, setBillValue] = useState(0)
  const [partyValue, setPartyValue] = useState(0)

  const handleClick = (value) => {
    setSelectedValue(value)
  }

  const handleBillChange = (event) => {
    const value = parseFloat(event.target.value)
    setBillValue(value)
    // console.log(billValue)
  }
  
  const handlePartyChange = (event) => {
    const value = parseFloat(event.target.value)
    setPartyValue(value)
    // console.log(partyValue)
  }

  return (
    <main className='main-card'>
      <div className='input-card'>
        <div className='input-container'>
          <p>Bill</p>
          <input onChange={handleBillChange} type='text' placeholder='0'></input>
          <img src={dollar} alt='dollar icon' />
        </div>

        <div className='tip-container'>
          <p>Select Tip %</p>
          <div className='buttons-container'>
            <Button value={5} handleClick={() => handleClick(5)}>5%</Button>
            <Button value={5} handleClick={() => handleClick(10)}>10%</Button>
            <Button value={5} handleClick={() => handleClick(15)}>15%</Button>
            <Button value={5} handleClick={() => handleClick(25)}>25%</Button>
            <Button value={5} handleClick={() => handleClick(50)}>50%</Button>
            <Button>{selectedValue}</Button>
          </div>
        </div>

        <div className='input-container'>
          <p>Number of People</p>
          <input onChange={handlePartyChange} type='text' placeholder='0'></input>
          <img src={person} alt='person icon' />
        </div>
      </div>

      <Output 
        selectedValue={selectedValue} 
        billValue={billValue} 
        partyValue={partyValue} 
      />
    </main>
  )
}

export default Card