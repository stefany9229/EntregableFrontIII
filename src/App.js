// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

//import React, { useState } from 'react'
import Cabecera from './components/Cabecera.js'
import Listado from './components/Listado.js'
import React,{useState} from "react"
function App() {

  const [elementosComprado, setElementosComprados]=useState(0)


  const aumentarElementos =()=>{
    setElementosComprados(elementosComprado+1)
    //console.log("ejecuté aumentar elementos" + " " + elementosComprado)
  }

  return (
    <div className="App">
      <Cabecera  elementosComprado={elementosComprado}/>
      <Listado aumentarElementos={()=>aumentarElementos() } elementosComprado={elementosComprado}/>
      
    </div>
  );
}

export default App;
