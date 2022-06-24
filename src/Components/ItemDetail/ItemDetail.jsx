import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail() {

    function onAdd(){
        alert("Agregaste los Items al carrito")
    }


    return (
        <div>
        <h1 className='text-white'>ItemDetail</h1>
            <ItemCount Stock={20} initial={1} onAdd={onAdd}/>
        </div>
        )
}
