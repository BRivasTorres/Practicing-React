import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const MainContext = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme} >
      <p>Bienvenido invitado</p>
      <p>Hola usuario</p>
      <p>Mi contenido principal</p>
    </div>
  )
}

export default MainContext
