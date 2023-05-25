import BasicConcepts from "./components/BasicConcepts"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <BasicConcepts /> 
      <Router>
        <Switch>
            <Route exact path="/">
              <h3>Home</h3>
            </Route>
            <Route exact path="/acerca">
              <h3>Acerca</h3>
            </Route>
            <Route exact path="/contacto">
              <h3>Contacto</h3>
            </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
