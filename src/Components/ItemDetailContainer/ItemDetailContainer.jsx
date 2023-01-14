import React, {useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import BaseDatos from '../../services/Firebase';
 import Spinner from '../Spinner/Spinner'
import { doc,getDoc } from 'firebase/firestore';

 const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const{id}=useParams();
  const [load, setLoad] = useState(true)
 
    const getItem= async(idItem)=>{
    try{
      setLoad(true)
      const item= doc(BaseDatos,"Productos",idItem)
      const Resultado= await getDoc(item)
      const detalleItem={id:Resultado.id,...Resultado.data()}
      setProducts(detalleItem)
      setLoad(false)
    }catch(error){console.log(error)}
  
  }

   
    useEffect(() => {
      getItem(id)
    }, [id])
    
    return (
      <>
        {load?<Spinner/>: <ItemDetail item={products} />}
        
      </>
    );
    
   }
export default ItemDetailContainer;
