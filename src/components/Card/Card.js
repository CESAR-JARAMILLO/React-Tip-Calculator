import { useState, useRef } from 'react';
import Output from '../Output/Output';
import Button from '../Button/Button';
import './Card.css';
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';

function Card() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [billValue, setBillValue] = useState(0);
  const [partyValue, setPartyValue] = useState(0);
  const [customValue, setCustomValue] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);


  const billInputRef = useRef(null);
  const partyInputRef = useRef(null);

  const handleClick = (value) => {
    setSelectedValue(value);
    setSelectedButton(value);
    setCustomValue("");
  };
  

  const handleBillChange = (event) => {
    const value = parseFloat(event.target.value);
    setBillValue(value);
  };

  const handlePartyChange = (event) => {
    const value = parseFloat(event.target.value);
    setPartyValue(value);
  };

  const handleCustomChange = (event) => {
    const value = parseFloat(event.target.value);

    if (event.target.value !== "") {
      setSelectedButton(null);
    }

    setSelectedValue(value);
    setCustomValue(event.target.value);
  };

  const handleReset = () => {
    setBillValue(0);
    setPartyValue(0);
    setSelectedValue(null);
    setCustomValue('');
    billInputRef.current.value = '';
    partyInputRef.current.value = '';
  };

  return (
    <main className='main-card'>
      <div className='input-card'>
        <div className='input-container'>
          <p>Bill</p>
          <input
            ref={billInputRef}
            onChange={handleBillChange}
            type='text'
            placeholder='0'
          />
          <img src={dollar} alt='dollar icon' />
        </div>

        <div className='tip-container'>
          <p>Select Tip %</p>
          <div className='buttons-container'>
            <Button value={5} handleClick={() => handleClick(5)} isSelected={selectedButton === 5}>
              5%
            </Button>
            <Button value={10} handleClick={() => handleClick(10)} isSelected={selectedButton === 10}>
              10%
            </Button>
            <Button value={15} handleClick={() => handleClick(15)} isSelected={selectedButton === 15}>
              15%
            </Button>
            <Button value={25} handleClick={() => handleClick(25)} isSelected={selectedButton === 25}>
              25%
            </Button>
            <Button value={50} handleClick={() => handleClick(50)} isSelected={selectedButton === 50}>
              50%
            </Button>
            <input
              onChange={handleCustomChange}
              className='custom-button'
              type='text'
              placeholder='Custom'
              value={customValue}
            />
          </div>
        </div>

        <div className='input-container'>
          <p>Number of People</p>
          <input
            ref={partyInputRef}
            onChange={handlePartyChange}
            type='text'
            placeholder='0'
          />
          <img src={person} alt='person icon' />
        </div>
      </div>

      <Output
        selectedValue={selectedValue}
        billValue={billValue}
        partyValue={partyValue}
        handleReset={handleReset}
      />
    </main>
  );
}

export default Card;