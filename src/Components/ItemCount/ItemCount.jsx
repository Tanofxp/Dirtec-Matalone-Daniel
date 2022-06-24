
import React, { useState } from 'react'


export default function ItemCount({Stock, initial, onAdd}) {

  let [auxStock, setAuxStock] = useState(initial);


  function aumentarStock(){

    setAuxStock( auxStock<Stock?auxStock+1:auxStock=Stock )

  }
  function restarStock(){

    setAuxStock( auxStock > 1 ? auxStock-1 : auxStock=1 )
  }

  return (
    
    <div className='text-white h1 text-capitalize mt-5 '>
    <div className='container-fluid '>
        <div className='row'>
        <div className='col'>
        <button className='btn btn-danger mb-2' onClick={()=>{restarStock()}}>-</button>
        <input className='col-3 m-3 text-center' value={auxStock} disabled></input>
        <button className='btn btn-success mb-2' onClick={()=>{aumentarStock()}}>+</button>
        </div>
        </div>

    </div>
    <div>
      <button className='btn btn-info' onClick={onAdd}>Agregar al Carrito</button>
    </div>
    </div>
  )
}
    
