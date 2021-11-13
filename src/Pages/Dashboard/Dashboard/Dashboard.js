import * as React from 'react';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddAProduct from '../AddAProduct/AddAProduct';
import useAuth from '../../../hooks/useAuth';


import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Pay from '../Pay/Pay';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddAReview from '../AddAReview/AddAReview';


const Dashboard = () => { 
  const {admin, logOut} = useAuth();
  let { path, url } = useRouteMatch();

  return (
   <div>
     
    <div>
    <div class="row w-100">
   <div class="col-sm-6 col-md-3">
     <div class="card">
       <div class="card-body">
       <ul class="list-group">
  <li class="list-group-item">      <Link to="/home"><Button class="btn btn-success m-4 text-white w-75">Home</Button></Link> 
</li>
  <li class="list-group-item"><Link to={`${url}/logout`}><Button onClick={logOut} class="btn btn-success m-4 text-white w-75">Logout</Button></Link> </li>
 { admin ?
 <div><li class="list-group-item">          <Link to={`${url}/makeAdmin`}><Button class="btn btn-success m-4 text-white w-75">Make Admin</Button></Link>
 </li>
  <li class="list-group-item">      <Link to={`${url}/addAProduct`}><Button class="btn btn-success m-4 text-white w-75">Add A Product</Button></Link>
  </li>
  <li class="list-group-item">      <Link to={`${url}/manageProducts`}><Button class="btn btn-success m-4 text-white w-75">Manage Products</Button></Link>
  </li>
  <li class="list-group-item">            <Link to={`${url}/manageOrders`}><Button class="btn btn-success m-4 text-white w-75">Manage Orders</Button></Link>

  </li></div> :
  <div> <li class="list-group-item"><Link to={`${url}/pay`}><Button class="btn btn-success m-4 text-white w-75">Payment</Button></Link></li>
  <li class="list-group-item">      <Link to={`${url}/addAReview`}><Button class="btn btn-success m-4 text-white w-75">Add A Review</Button></Link>
</li>
  <li class="list-group-item">      <Link to={`${url}`}><Button class="btn btn-success m-4 text-white w-75">My Orders</Button></Link>
</li>
  </div>
  }
</ul>
       </div>
     </div>
   </div>
   <div class="col-sm-6 col-md-9">
     <div>
       <div class="card-body">
       { ! admin ?<h3 className="text-info mb-5">Check Your Orders</h3>:
 <div>   <h3 className="text-info mb-5">Welcome Admin</h3>
 </div>       }
         <Switch>
        { !admin&& <Route exact path={path}>
 <DashboardHome></DashboardHome>        
 </Route>}
         <Route exact path={`${path}/makeAdmin`}>
             <MakeAdmin></MakeAdmin>
         </Route>
         <Route exact path={`${path}/addAProduct`}>
             <AddAProduct></AddAProduct>
         </Route>
         <Route exact path={`${path}/manageProducts`}>
             <ManageProducts></ManageProducts>
         </Route>
         <Route exact path={`${path}/manageOrders`}>
             <ManageOrders></ManageOrders>
         </Route>
         <Route exact path={`${path}/addAReview`}>
             <AddAReview></AddAReview>
         </Route>
         <Route exact path={`${path}/pay`}>
             <Pay></Pay>
         </Route>
       </Switch>
       </div>
     </div>
   </div>
 </div>
    </div>
   </div>
  );
}

export default Dashboard;