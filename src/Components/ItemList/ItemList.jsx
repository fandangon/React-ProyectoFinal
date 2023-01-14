import Item from '../Item/Item';

const ItemList = ({ products }) => {
  
  return (
    <div>
      {products.map((product) => 
          (<Item item={product} key={product.id}img={product.Img1 } titulo={product.Titulo} nombre={product.Nombre}precio={product.Precio} id={product.id} />))} 
      
  </div>
  );
};
export default ItemList;






