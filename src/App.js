
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import logo from './pngwing.com.png';


function App() {
  let maxStock = 10;
  let miProd = {Modelo: 'Thinkpad' , Marca: 'Lenovo ', price: 100000};
  return (
  <div className="text-center menu">
    <div> <NavBar /></div>
    <div className='d-flex justify-content-center'>
    <div className='card  text-dark m-1  border border-3 border-info bg-warning' >
        <img src={logo} alt="producto" />
        <ItemListContainer  miProd={ miProd } maxStock={maxStock}/>
    </div> 
    </div>
  </div>
  );
}

export default App;
