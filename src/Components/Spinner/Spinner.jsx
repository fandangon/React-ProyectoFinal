import React from 'react'
import './Spinner.css'
 import 'bootstrap/dist/css/bootstrap.min.css'
import { ThreeBody } from '@uiball/loaders'

  function cargando()
  {
    return(
      <div className='contenedorSpinner'>
        <div className='spinner'>
  <ThreeBody 
   size={35}
   speed={1.1} 
   color=" blue" 
  />  
  </div>
  </div>
    )
  }
    export default cargando

