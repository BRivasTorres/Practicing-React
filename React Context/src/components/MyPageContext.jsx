import { useState } from "react"
import FooterContext from "./FooterContext"
import HeaderContext from "./HeaderContext"
import MainContext from "./MainContext"
import { ThemmeProvider } from "../context/ThemeContext"


const initialLanguaje = "en"

const translations = {
  es: {
    headerTitle : "Mi aplicacion CON CONTEXT Api",
    buttonLogin : "Iniciar sesión"
  },
  en: {
    headerTitle : "My application with Context",
    buttonLogin : "Login"
  }
}

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguaje)
  const [texts, setTexts] = useState(translations[language])
  
  const handleLanguaje = (e) => {
    if(e.target.value === "es") {
      setLanguage("es")
      setTexts(translations.es)
    } else {
      setLanguage("en")
      setTexts(translations.en)
    }
    console.log(e.target.value)
  }
  
  return (
    <div>
        <ThemmeProvider>
            <HeaderContext texts= {texts} handleLanguaje={handleLanguaje} />
            <MainContext texts={texts}/>
            <FooterContext texts={texts}/>
        </ThemmeProvider>
    </div>
  )
}

export default MyPageContext
