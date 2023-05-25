import BasicConcepts from "./components/BasicConcepts"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Acerca from "./pages/Acerca"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <>
      <BasicConcepts /> 
      <Router>
        <Switch>
            <Route exact path="/">
              <h3>Home</h3>
            </Route>
            <Route exact path="/acerca" component={Acerca} />
            <Route exact  path="/contacto" component={Contacto} />
        </Switch>
      </Router>
    </>
  )
}

export default App
