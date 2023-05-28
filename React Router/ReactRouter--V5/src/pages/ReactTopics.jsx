import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Topic = () => {
    let {topic} = useParams()
    return(
        <div>
            <h4>{topic}</h4>
        </div>
    )
}

const ReactTopics = () => {
    let{path, url} = useRouteMatch
    
  return (
    <div>
      <h2>React Topics</h2>
      <ul>
        <li>
            <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
            <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
            <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
            <Link to={`${url}/componente`}>Componente</Link>
        </li>
      </ul>
      
      <Switch>
        <Route exact path={path}>
            <h3>Elige un tema de react</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel esse iure quo temporibus illum accusamus voluptate, magni suscipit. Doloremque aperiam rem, facilis eum quos quam vitae! Itaque exercitationem aut incidunt.</p>
        </Route>
        <Route path={`${path}/:topic`} componet={Topic} />
      </Switch>
    </div>
  )
}

export default ReactTopics
