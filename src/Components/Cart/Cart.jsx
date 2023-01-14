import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../Store/CartContext';
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const {clear,ProductosCarrito,TotalCompra}= useContext(CartContext);
  
  return (

    <>
    {      ProductosCarrito.length !== 0 ?
        (
          <div className=''>
           
            <h1 className='TituloCarrito'>Carritos de Compras</h1>
            
              {ProductosCarrito.map((item) => <CartItem key={item.id} item={item} />)}
              <br/>
              
              <br/>
                 <div className='TotalCompra'>Total Compra: $ {TotalCompra()}</div>
                 <div className='contenedorVaciarCart'>
                 <div className="VaciarCart">
                   <button  onClick={clear}>Vaciar Carrito
                    </button>
                 </div>
                 <div className="VaciarCart">
                   <button ><Link to={'/Checkout'}style={{color:'#000000'}}>Terminar Compra</Link></button></div>
                 </div>
                 </div>
        ) : (
          <div className='contenedorCart'>
            <div className='CarroVacio'>El carrito se encuentra vacio</div>
            <div className='botonCarroVacio'><Link to={'/'}style={{ color: '#00264D' }} >Seguir Comprando </Link></div>
            <div><img className='FotoCarroVacio' src='../images/carritoVacio.png'></img></div>
            
          </div>
        )
    }
    
  </>
  )

}
  
export default Cart
  