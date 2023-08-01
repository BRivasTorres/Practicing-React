import React from 'react'
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const Footer = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <h4>Mi pié de pagina</h4>
    </div>
  )
}

export default Footer
