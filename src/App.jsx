
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
 import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import{Routes,Route} from 'react-router-dom';
import { Checkout } from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <NavBar/> 
       <Routes>
       <Route path="/" element={<ItemListContainer />} />
       <Route path="/Cart" element={<Cart/>} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />  
                <Route path="/checkout" element={<Checkout/>} />             
        </Routes>
          <Footer/>  
    </div>
   
  );
  
}

export default App;

