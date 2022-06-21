
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import NavBar from './Components/NavBar/NavBar';



function App() {
  return (
  <div className="text-center menu">
    <div> <NavBar /></div>
    <div className='container'><ItemListContainer /></div>
  </div>
  );
}

export default App;
