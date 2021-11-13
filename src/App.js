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
import AddAProduct from './Pages/Dashboard/AddAProduct/AddAProduct';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Reviews from './Pages/Home/Reviews/Reviews';
import AddAReview from './Pages/Dashboard/AddAReview/AddAReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Pay from './Pages/Dashboard/Pay/Pay';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';

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
          <Route exact path="/reviews">
            <Reviews />
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
          <Route exact path="/dashboard/addAProduct">
            <AddAProduct />
          </Route>
          <Route exact path="/dashboard/manageProducts">
            <ManageProducts />
          </Route>
          <Route exact path="/dashboard/manageOrders">
            <ManageOrders />
          </Route>
          <Route exact path="/dashboard/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route exact path="/dashboard/addAReview">
            <AddAReview />
          </Route>
          <Route exact path="/dashboard/pay">
            <Pay />
          </Route>
          <Route exact path="/myOrders">
            <MyOrders />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
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
