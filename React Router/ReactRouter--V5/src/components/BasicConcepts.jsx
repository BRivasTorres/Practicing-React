import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Acerca from "../pages/Acerca"
import Contacto from "../pages/Contacto"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import MenuConceptos from "../components/MenuConceptos"
import Usuario from '../pages/Usuario'
import Productos from "../pages/Productos"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import ReactTopics from "../pages/ReactTopics"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import PrivateRoute from "./PrivateRoute"

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
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/contact">
                <Redirect to="/contacto" /> 
            </Route>
            <Route exact path="/about">
                <Redirect to="/acerca" /> 
            </Route>
            <Route path="/react" component={ReactTopics} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  )
}

export default BasicConcepts
