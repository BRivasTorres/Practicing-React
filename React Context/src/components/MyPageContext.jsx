import FooterContext from "./FooterContext"
import HeaderContext from "./HeaderContext"
import MainContext from "./MainContext"
import { ThemmeProvider } from "../context/ThemeContext"
import { LanguajeProvider } from "../context/LanguajeContext"

const MyPageContext = () => {
  return (
    <div>
        <ThemmeProvider>
          <LanguajeProvider>
            <HeaderContext  />
            <MainContext />
            <FooterContext /> 
          </LanguajeProvider>
        </ThemmeProvider>
    </div>
  )
}
  
export default MyPageContext
