import React, { useState } from 'react'

import './ItemCount.css'
function ItemCount ({stock,initial,onAdd}) {
  const [count, setCount]=useState(initial);

  function sumaProducto(){
    if (count<stock){
      setCount(count + 1);
    }
  }

  function restaProducto(){
    if (count>initial){
      setCount(count - 1);
   }
  }
  return (
    <div>
      <button className='restar' onClick={()=> restaProducto()}>-</button>
      <input className='input'  readOnly value={count}></input>
      <button className='sumar'  onClick={()=> sumaProducto()}>+</button>
      <div>
      <button className='botonCarrito' onClick={()=> onAdd(count)}>Agregar al Carrito</button>
      </div>
     
    </div>
  )
}

export default ItemCount


