import './App.css';
import Card from './components/Card/Card'
import logo from './images/logo.svg'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt='logo' />
      </header>
      <Card />
    </div>
  );
}

export default App;
