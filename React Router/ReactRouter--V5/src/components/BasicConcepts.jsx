import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Acerca from "../pages/Acerca"
import Contacto from "../pages/Contacto"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import MenuConceptos from "../components/MenuConceptos"
import Usuario from '../pages/Usuario'

const BasicConcepts = () => {
  return (
    <div>
      <h3>Basic Components</h3>
       <Router>
        <MenuConceptos />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/acerca" component={Acerca} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/usuario/:username" component={Usuario} />
            <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  )
}

export default BasicConcepts
