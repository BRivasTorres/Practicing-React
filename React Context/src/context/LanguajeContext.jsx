import { createContext } from "react";
import { useState } from "react"


const LanguajeContext = createContext()
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

const LanguajeProvider = ({children}) => {
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
  
  
    const data = {texts, handleLanguaje}
    
    return <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
}

export {LanguajeProvider}

export default LanguajeContext

 