import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExpertDetails from './ExpertDetails';


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="content">
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/expert/:id">
                          <ExpertDetails />
                      </Route>
                  </Switch>
              </div>


          </div>
      </Router>
  );
}

export default App;
