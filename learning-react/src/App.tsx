import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './Components/Componente'
import Propiedades from './Components/Props'
import Estado from './Components/State'
import RenderizadoCondicional from './Components/ConditionalRendering'
import Eventos from './Components/Events'

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

      <Eventos />
    </div>
  )
}

export default App
