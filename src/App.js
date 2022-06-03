import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Hola Soy una app de React !
        </p>
        <a
          className="App-link"
          href="https://dirtec.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vea mas Sobre Dirtec
        </a>
      </header>
    </div>
  );
}

export default App;
