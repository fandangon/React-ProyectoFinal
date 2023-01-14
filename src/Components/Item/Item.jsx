import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({img, titulo, nombre, precio, id }) => {
  
  return (
    <div className='contenedor'>
     <div className="card">
       <div className="imagenProducto"><img src={img}  ltt="Imagen Producto"/></div>
       <div className="tituloProducto">{titulo}</div>
       <div className="nombreProducto">{nombre}</div>
       <div className="precioProducto">$ {precio}</div>
       <div className="detallesProducto"><Link to={`/item/${id}`}style={{ color: '#00264D' }} >Ver Detalles </Link></div>
      </div>
    </div>
    
   
  );
};
export default Item;
