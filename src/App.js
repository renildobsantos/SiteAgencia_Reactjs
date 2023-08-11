import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Components/pages/Home'
import Sobre from './Components/pages/Sobre'
import Contato from './Components/pages/Contato'
import Header from './Components/layout/Header'
import Footer from './Components/layout/Footer'
import Container from './Components/layout/Container'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Sobre">
            <Sobre />
          </Route>
          <Route exact path="/Contato">
            <Contato />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
