import './App.css';
import Card from './components/Card/Card'
import logo from './images/logo.svg'

function App() {
  return (
    <div className="App">
   
      <img src={logo} alt='logo' />
      
      <Card />
    </div>
  );
}

export default App;
