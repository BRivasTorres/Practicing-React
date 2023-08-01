import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext';

const HeaderContext = ({texts, handleLanguage}) => {
    const {theme, handleTheme} = useContext(ThemeContext);
  return (
    <div  className={theme } >
      <header>
        <h2>{texts.headerTitle}</h2>
        <h3>Mi Cabecera</h3>
        <select name="languaje" onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input type='radio' name='theme' id='light-context' value="light" onClick={handleTheme}/>
        <label htmlFor="light-context">Claro</label>
        <input type='radio' name='theme' id='dark-context' value="dark"  onClick={handleTheme}/>
        <label htmlFor="light-context">Oscuro</label>
        <button>{texts.buttonLogin} </button>
      </header>
    </div>
  )
}

export default HeaderContext
