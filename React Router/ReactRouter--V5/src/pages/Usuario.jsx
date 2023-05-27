import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const Usuario = () => {    
    let {userName} = useParams()
    
  return (
    <div>
        <h3>Perfil del usuario</h3>
        <p>Nombre del usuario</p>
        <h2>{userName}</h2>
    </div>
  )
}

export default Usuario
