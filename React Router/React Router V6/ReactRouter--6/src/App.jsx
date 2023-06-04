import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'

const Acerca = () => {
  return(
    <h1>Acerca</h1>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Acerca</h1>} />
          <Route path='/acerca' element={<Acerca />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
