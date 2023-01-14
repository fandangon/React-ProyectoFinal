import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Store/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  const {AcumularCarro}= useContext(CartContext);
  return (
    <>
    <div className='estiloCarro'>
    <Link to={'/Cart'}><img src={'../images/carrito.png'} alt="carrito compras"/></Link>
    </div>
    {AcumularCarro()>0&&
    <button className='ContadorBotonCarro'>{AcumularCarro()}</button>
    }
    </>
  )
}

export default CartWidget
