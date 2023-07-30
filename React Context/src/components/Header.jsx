import React from 'react'

const Header = ({theme, handleTheme}) => {
  return (
    <div  className={theme } >
      <header>
        <h2>Mi aplicación SIN Context API</h2>
        <h3>Mi Cabecera</h3>
        <select name="languaje" >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input type='radio' name='theme' id='light' value="light" onClick={handleTheme}/>
        <label htmlFor="light">Claro</label>
        <input type='radio' name='theme' id='dark' value="dark"  onClick={handleTheme}/>
        <label htmlFor="light">Oscuro</label>
        <button>Iniciar Seción</button>
      </header>
    </div>
  )
}

export default Header
