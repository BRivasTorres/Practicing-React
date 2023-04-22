import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './Components/Componente'
import Propiedades from './Components/Props'
import RenderizadoCondicional from './Components/ConditionalRendering'
import Eventos from './Components/Events'
import ComponentsComunication from './Components/ComponentsComunication'
import LifeCicle from './Components/LifeCicle'
import AsynchronousRequests from './Components/asynchronousRequests'
import Hooks from './Components/Hooks'

function App() {
  return (
    <div>
      {/* <Componente /> */}
      {/* <Propiedades
        //&Las propiedades son valores que son pasados a mis componentes, utilizando la siguinte sintaxis.
        cadena="string"
        numero={23}
        boolean={true}
        arreglo={[1, 2, 3]}
      /> */}
      {/* <Estado /> */}
      {/* <RenderizadoCondicional /> */}
      {/* <Eventos /> */}
      {/* <ComponentsComunication /> */}
      {/* <LifeCicle /> */}
      {/* <AsynchronousRequests /> */}

      <Hooks />
    </div>
  )
}

export default App
