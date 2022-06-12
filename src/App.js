
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return (
  <div class="text-center menu">
    <div> <NavBar /></div> 
    <div><ItemListContainer msg={"darle estilos"} /></div>
  </div>
  );
}

export default App;
