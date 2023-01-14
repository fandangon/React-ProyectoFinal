import React, { useState, useContext} from 'react'
import CartContext from '../../Store/CartContext';
import './Checkout.css'
import BaseDatos from '../../services/Firebase';
import { collection, addDoc} from 'firebase/firestore';
import { Link} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

export const Checkout = () => {
    
    const {ProductosCarrito,TotalCompra,clear}= useContext(CartContext)
    
    const [idOrden, setidOrden] = useState()
    const [load, setload] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:'',
        Mensaje:''
    })

    const {Nombre, Email, Telefono, Mensaje} = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generarPedido = async(data) => {
       
        try {
            const col = collection(BaseDatos,"Orders")
            const order = await addDoc(col,data) 
            setidOrden(order.id)
             clear()
           
        } catch (error) {
            console.log(error)
        }
    }

    const Enviar = (e) => {
        e.preventDefault()
        const dia = new Date()
         const items = ProductosCarrito.map(e=> {return {id:e.id,Titulo:e.Nombre,Precio:e.Precio,Cantidad:e.Cantidad}})
        const total = TotalCompra()
        const data = {buyer,dia,items,total}
        generarPedido(data)   
        
    }
    return (
        <>    
            {load ? <Spinner />
                : (!idOrden&&<div>
                  
                    <form className='container portada container-contacto' onSubmit={Enviar}>
                        <div className="left">
                        <div className="header">

                                <h2 className="animation  a1">DATOS COMPRADOR</h2>
                              </div>
                                   <div className="form">
                                       <p>
                                          <input type="text" name="Nombre" onChange={Input} className="form-field animation a3" value={Nombre} placeholder="Nombre" required />
                                       </p>
                                       <p>
                                           <input type="email" name="Email" onChange={Input} className="form-field animation a5" placeholder="Mail" value={Email} required />
                                       </p>
                                       <p>
                                           <input type="number" name="Telefono" onChange={Input} className="form-field animation a4" placeholder="Teléfono" value={Telefono} required />
                                       </p>

                                       <textarea name="Mensaje" onChange={Input} className="animation a6" placeholder="Dejanos tu comentario..." value={Mensaje} id="" cols="30" rows="10" required></textarea>

                                       <p>
                                           <button className="animation a6 button-form">Enviar
                                           </button>
                                       </p>
                                   </div>
                                   </div>
                                   <div className="right"></div>
                               </form>
                               
                </div>)
            }

            <div>
            {
                idOrden&&(
                    <div>
                        <h3>GRACIAS POR SU COMPRA</h3>
                        <h4>{`Su código de operación es: ${idOrden}`}</h4>
                        <h4>{`Le enviarenos a ${Email} la factura electrónica de su compra`}</h4>
                        <div className='botonCarroVacio'><Link to={'/'}style={{ color: '#00264D' }} >Realizar otra compra </Link></div>
                        <img  src='../images/carro lleno.png'></img>
                       
                    </div>
                    )
            }
            </div>

        </>
    )               
}



