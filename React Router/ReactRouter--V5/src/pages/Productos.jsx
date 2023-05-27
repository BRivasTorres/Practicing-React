import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min"

const Productos = () => {
    const LIMIT = 20
    
    let {search} = useLocation()
    let query = new URLSearchParams(search)
    
    let start = parseInt(query.get("inicio")) || 1
    let end = parseInt(query.get("fin")) || LIMIT
    
    let history = useHistory()

    const handlePrev = () => {
        history.push({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT} `}) 
    }
    const handleNext = () => {
        history.push({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT} `})
    }
    
    
  return (
    <div>
      <h2>Productos</h2>
      <p>
        Mostrando productos del <b>1</b> al <b>20</b> 
      </p>
      <button onClick={handlePrev}>Atras</button>
      <button onClick={handleNext}>Adelante</button>
    </div>
  )
}

export default Productos
