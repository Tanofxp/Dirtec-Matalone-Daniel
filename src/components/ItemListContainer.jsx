import React, { useState } from 'react'


export default function ItemListContainer({miProd, maxStock}) {

  let [auxStock, setAuxStock] = useState(maxStock);
  
  function agregar(){
    alert("Su producto se agrego correctamente")
  };
  
  function aumentarStock(){

    setAuxStock( auxStock<maxStock?auxStock+1:auxStock=maxStock )
    
  }
  function restarStock(){

    setAuxStock( auxStock > 1 ? auxStock-1 : auxStock=1 )
  }

  return (
    <div className='text-white h1 text-capitalize mt-3'>
    <div className='container-fluid'>
        <h5>Producto {miProd.Marca}</h5>
        <h5 className='m-4'>Modelo {miProd.Modelo}</h5>
        <h5>Precio ${miProd.price}</h5>
        <div className='row'>
        <div className='col'>
        <button className='btn btn-danger mb-2' onClick={()=>{restarStock();}}>-</button>
        <input className='col-3 m-2 text-center' value={auxStock} disabled></input>
        <button className='btn btn-success mb-2' onClick={()=>{aumentarStock();}}>+</button>
        </div>
        <div>
          <button onClick={()=>{agregar()}} className='btn btn-primary mb-2'>Agregar al Carrito</button>
        </div>
        </div>
    </div>
    </div>
  )
}
