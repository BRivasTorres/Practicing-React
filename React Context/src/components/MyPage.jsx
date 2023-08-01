import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const initialTheme = "light"
const initialLanguaje = "en"

const translations = {
  es: {
    headerTitle : "Mi aplicacion SIN CONTEXT Api",
    buttonLogin : "Iniciar sesión"
  },
  en: {
    headerTitle : "My application without Context",
    buttonLogin : "Login"
  }
}

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme)
  const [language, setLanguage] = useState(initialLanguaje)
  const [texts, setTexts] = useState(translations[language])
  
  const handleTheme = (e) => {
    if(e.target.value === "light") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }
  
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
        <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguaje={handleLanguaje} />
        <Main theme={theme} texts={texts}/>
        <Footer theme={theme} texts={texts}/>
    </div>
  )
}

export default MyPage
