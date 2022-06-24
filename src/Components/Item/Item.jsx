import React from 'react'

import './Item.css';

export default function Item({id, Modelo, Marca, precio, imgURL}) {
  return (
    <div className='col' key={id}>
      <div className="card text-dark m-5 ">
        <img src={imgURL} className="card-img-top" alt={Modelo}></img>
        <div className="card-body bg-warning">
          <h4 className="card-title">Marca: {Marca}</h4>
          <h5>Modelo: {Modelo}</h5>
          <h6 >ID: {id}</h6>
          <p className="card-text">Precio: {precio}</p>
          
        </div>
      </div>
    </div>
  )
}
