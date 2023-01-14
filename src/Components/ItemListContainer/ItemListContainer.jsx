import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import BaseDatos from '../../services/Firebase';
import Spinner from '../Spinner/Spinner'
const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const{idCategoria}=useParams();  
const [load, setLoad] = useState(true)
const getProd = async (category) =>{

    try {
     setLoad(true)
      const document = category ? query(collection(BaseDatos,"Productos"),where('Categoria','==',category)):collection(BaseDatos,"Productos")
      const col = await getDocs(document)
      const FirebaseData = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setProducts(FirebaseData)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }  
    useEffect(() => {
      getProd(idCategoria)
    }, [idCategoria])
    
    return (
      <>
        { load?<Spinner/>: <ItemList products={products} />}
       
      </>
    );
  };
  
  export default ItemListContainer;
  