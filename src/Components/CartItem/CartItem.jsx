import React,{useContext} from 'react'
import CartContext from '../../Store/CartContext';
import './CartItem.css'

const CartItem=({item}) =>{
const {removeItem}= useContext(CartContext);

  return (
    <div>
    <div className='ContenedorCart'>
    <div className='ImagenCart'><img src={item.Img1}/></div> 
    <div className='NombreCart'>{item.Nombre}</div>
    <div className='CantidadCart'>Cantidad: {item.Cantidad}</div>
    <div className='PrecioCartUnit'>Precio Unitario $ {item.Precio}</div>
    <div className='PrecioCartTotal'>Precio $  {(item.Precio*item.Cantidad).toFixed(2)}</div> 
    <div className='RemoveItemCart'><button onClick={()=>removeItem(item.id)}><img src='../images/eliminar.png'></img></button></div>
    </div>
  
    </div>
  )
  
}

export default CartItem