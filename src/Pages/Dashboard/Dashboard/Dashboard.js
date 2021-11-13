import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
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



const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, logOut} = useAuth();


  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-dark h-100">
      <h3 className="text-info mt-3">Welcome to Dashboard</h3> 
      <Link to="/home"><Button class="btn btn-success m-4 text-white w-75">Home</Button></Link>     
      { admin &&
        <Box>
          <Link to={`${url}/makeAdmin`}><Button class="btn btn-success m-4 text-white w-75">Make Admin</Button></Link>
      <Link to={`${url}/addAProduct`}><Button class="btn btn-success m-4 text-white w-75">Add A Product</Button></Link>
      <Link to={`${url}/manageProducts`}><Button class="btn btn-success m-4 text-white w-75">Manage Products</Button></Link>
        </Box>
      }
    <div className="bg-dark">
    <Link to={`${url}/pay`}><Button class="btn btn-success m-4 text-white w-75">Payment</Button></Link>
      <Link to={`${url}/addAReview`}><Button class="btn btn-success m-4 text-white w-75">Add A Review</Button></Link>
      <Link to={`${url}`}><Button class="btn btn-success m-4 text-white w-75">My Orders</Button></Link>
      <Link to={`${url}/logout`}><Button onClick={logOut} class="btn btn-success m-4 text-white w-75">Logout</Button></Link>
    </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: 'text.primary' }}>
       
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'text.primary' }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, bgcolor: 'text.primary',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' }, bgcolor: 'text.primary',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },bgcolor: 'text.primary' }}
      >
        <Toolbar />
        <h3 className="text-info mb-5">Check Your Orders</h3>
        <Switch>
        <Route exact path={path}>
<DashboardHome></DashboardHome>        
</Route>
        <Route exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path={`${path}/addAProduct`}>
            <AddAProduct></AddAProduct>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;