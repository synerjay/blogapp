import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

// The App.js is where you put your components together and this Mother Component is being rendered to the index.js file
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
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
