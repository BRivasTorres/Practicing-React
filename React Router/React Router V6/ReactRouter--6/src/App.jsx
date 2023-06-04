import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import Menu from "./pages/Menu"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/acerca' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
