import  { useState,createContext } from 'react'

export const CartContext= createContext({
ProductosCarrito:[]
});

  export const CartContextProvider=({children})=> {
  const [productosLista ,setProductosLista]=useState([]);
  
  const addItem=(item,Cantidad)=>{
    let itemAmount = { ...item, Cantidad };
    if (!isInCart(item.id)) {
        setProductosLista([...productosLista,itemAmount]);
    } else {
        
        const newProducts = productosLista.map(prod => {
            if(prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    Cantidad: prod.Cantidad + Cantidad
                }
                return newProduct
            } else {
                return prod
            }
        })

        setProductosLista(newProducts)
}
  }
  const removeItem =(id)=>{
    setProductosLista(productosLista.filter((i)=>i.id!==id))
  }
  const isInCart = (id) => {
    return productosLista.some((e) => e.id === id);
};

  const clear=()=>{
    setProductosLista([]);
  };

  const AcumularCarro=()=>{
    let total=0;
    productosLista.forEach((e)=>total=total+e.Cantidad)
    
    return total
  }

  const TotalCompra=()=>{
    let total=0;
    productosLista.forEach((e)=>total=total+ parseFloat(e.Cantidad*e.Precio))
    
    return total.toFixed(2);
  }
  const unidadPorProducto = (id) => {
    const foundInCart = productosLista.find((item) => item.id === id);
    return foundInCart ? foundInCart.Cantidad : 0;
  };
 
  
  return (
    <CartContext.Provider value={{
       ProductosCarrito:productosLista,
       addItem,
       removeItem,
       clear,
       AcumularCarro,
       TotalCompra,
       isInCart,
       unidadPorProducto
       
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;


