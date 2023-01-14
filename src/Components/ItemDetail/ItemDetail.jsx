import React, { useState,useContext, useEffect } from 'react';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Store/CartContext';
import Swal from 'sweetalert2'
const ItemDetail = ({ item }) => {
   const {addItem,unidadPorProducto}= useContext(CartContext);
   const [acumulador, setacumulador] =useState(0);
   const [img, setImg]= useState(item.img2)
   const [imgSel, setImgSel]= useState("2")
   const selectImg = (seleccion,pos)=>{
    setImg(seleccion)
    setImgSel(pos)
    
}
     function carrito(countProductosCarro) {
  
      if (countProductosCarro + unidadPorProducto(item.id) > item.Stock) {
        const availableToAdd = item.Stock - unidadPorProducto(item.id);
        if (availableToAdd>1){
        return Swal.fire({
          icon: 'error',
          text: `Solamente podes agregar ${availableToAdd} productos al carrito`,
        })
      }
      else if (availableToAdd===1)
      {
        return Swal.fire({
          icon: 'error',
          text: `Solamente podes agregar ${availableToAdd} producto al carrito`,
      })
      }
      else{
        return Swal.fire({
          icon: 'error',
          text: `El producto no cuenta con Stock`,
      })
      }
    }
         setacumulador(countProductosCarro)   
         addItem(item,countProductosCarro)
    }
 return (
   <>
   <div className='contenedorItem'>
   <div>
     <div className="imgMuestra1"><img onClick={()=>selectImg(item.Img1,"1")} className={imgSel==="1"?"imgMuestra1": "imgMuestra_noselect"} src={ item?.Img1}alt="Imagen item 1"/></div>
     <div className="imgMuestra1"><img onClick={()=>selectImg(item.Img2,"2")} className={imgSel==="2"? "imgMuestra1": "imgMuestra_noselect"} src={ item?.Img2}alt="Imagen item 2"/></div>
     <div className="imgMuestra1"><img onClick={()=>selectImg(item.Img3,"3")} className={imgSel==="3"? "imgMuestra1": "imgMuestra_noselect"} src={ item?.Img3}alt="Imagen item 3"/></div>
   </div>
   <div className="contenedorImagen">
    {img===undefined?<div className="imagenItem"><img className='imagenMuestra1' src={item.Img2} alt="Imagen Producto"/></div>: <div className="imagenItem"><img src={img}  alt="Imagen Producto"/></div>} 
   <div className="descripcionItem">{item?.Descripcion}</div>
   </div>
   <div className="datosItem">
   <div className="tituloItem">{item?.Titulo}</div>
     <div className="nombreItem">{item?.Nombre}</div>
     <div className="precioItem">$ {item?.Precio}</div>
     <div className="stockItem">Stock: {item?.Stock}</div>
    
    {acumulador!==0?(<button  className='botonCarro'><Link to='/Cart' style={{ color: '#00264D' }}>Ir al Carrito</Link></button>): <ItemCount initial={1} stock={item?.Stock} onAdd={carrito}></ItemCount>}
    
   </div>
     </div>
     
   </>
 );
};
export default ItemDetail;