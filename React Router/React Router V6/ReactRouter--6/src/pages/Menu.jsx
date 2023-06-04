import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav className="menu">
            <Link to="/" >Home</Link>
            <Link to="/acerca" >Acerca</Link>
            <Link to="/contacto" >Contacto</Link>
        </nav>
    </div>
  )
}

export default Menu
