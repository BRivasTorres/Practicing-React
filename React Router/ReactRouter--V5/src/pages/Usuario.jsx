import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const Usuario = () => {    
    let {username} = useParams()
    
  return (
    <div>
        <h3>Perfil del usuario</h3>
        <p>Nombre del usuario : {username} </p>
    </div>
  )
}

export default Usuario
