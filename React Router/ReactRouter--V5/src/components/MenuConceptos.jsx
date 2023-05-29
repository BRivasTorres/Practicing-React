import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const MenuConceptos = () => {
  return (
    <div>
        <ol>
            <li>
                <span>Menú cone nelaces HTML no recomendado</span>
                <a href="">Home</a> 
                <a href="">Acerca</a> 
                <a href="">Contacto</a> 
            </li>
            <li>
                <span>Componente Link</span>
                <Link to="/home">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/contacto">Contacto</Link>
            </li>
            <li>
                <span>Componente NavLink</span>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink>
                <NavLink exact to="/acerca" activeClassName=" active ">Acerca</NavLink>
            </li>
            <li>
                <span>Parametros: </span>
                <Link to="/usuario/franz">Franz</Link>
                <Link to="/usuario/bonaparta">Bonaparta </Link>
            </li>
            <li>
                <span>Parametros de consulta:</span>
                <Link to="/productos">Productos</Link>
            </li>
            <li>
                <span>Redirecciones: </span>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
                <span>Rutas Anidadas: </span>
                <Link to="/react" >React Documentation</Link>
            </li>
            <li>
                <span>Rutas Privadas: </span>
                <Link to="/login" >Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ol>
    </div>
  )
}

export default MenuConceptos
