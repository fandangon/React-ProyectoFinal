import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
 import{NavLink} from 'react-router-dom';
function NavBar() {
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-light estilo_barra ">
            <div className="container-fluid ">
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <li className="nav-item logo">
                            <NavLink to={'/'}  alt="carrito compras"className="nav-link" aria-current="page"><img src={'../images/logo_tonini.png'}/></NavLink>
                        </li>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">    
                           <li className="nav-item ">
                            <NavLink to={'/categoria/Cuidado'} className="nav-link" aria-current="page">Cuidado Personal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/categoria/Suplementos'} className="nav-link">Suplementos y Nutrición</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/categoria/Bebe'} className="nav-link">Bebe y Maternidad</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to={'/categoria/Dermocosmetica'} className="nav-link">Dermocosmetica</NavLink>
                        </li>
                      
                        <li className="nav-item">
                            <NavLink to={'/categoria/Perfumes'} className="nav-link">Perfumes y Fragancias</NavLink>
                        </li>
                       
                    </ul>
                     <CartWidget/>  
                                            
                    
                </div>
               
            </div>
            
        </nav>
        </>
  )
}
export default NavBar

