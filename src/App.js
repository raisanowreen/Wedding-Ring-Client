import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import ExploreProducts from './Pages/Home/ExploreProducts/ExploreProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>  
        <Route exact path="/navigation">
            <Navigation />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/exploreProducts">
            <ExploreProducts />
          </Route>
          <Route exact path="/footer">
            <Footer />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
