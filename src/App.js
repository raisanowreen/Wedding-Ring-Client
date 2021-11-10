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
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/purchase/:productId">
            <Purchase />
          </PrivateRoute>
          <Route exact path="/footer">
            <Footer />
          </Route>
        </Switch>
    </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
