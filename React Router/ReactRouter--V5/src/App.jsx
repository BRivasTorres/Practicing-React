import BasicConcepts from "./components/BasicConcepts"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Acerca from "./pages/Acerca"
import Contacto from "./pages/Contacto"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"

function App() {
  return (
    <>
      <BasicConcepts /> 
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/acerca" component={Acerca} />
            <Route exact path="/contacto" component={Contacto} />
            <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </>
  )
}

export default App
