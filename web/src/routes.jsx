import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer';
import HomeContainer from './containers/HomeContainer';
import EnsureLoggedInContainer from './containers/EnsureLoggedInContainer';

const AppRoute = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={HomeContainer}/>
        <Route component={EnsureLoggedInContainer}/>
      </Switch>
    </div>
  </Router>
)

export default AppRoute;