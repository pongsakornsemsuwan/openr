import React from 'react'
import LeftPane from '../components/LeftPane/LeftPane';
import TopBar from '../components/TopBar/TopBar';
import InventoryContainer from './InventoryContainer';
import CustomerContainer from './CustomerContainer';
import AnalyticsContainer from './AnalyticsContainer';
import PopularityContainer from './PopularityContainer';
import CorrelationContainer from './CorrelationContainer';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
const DashboardContainer = () => {
  return (
    <div>
      <TopBar/>
      <div>
        <span>Dashboard</span>
        <LeftPane/>
        <div style={{display:'flex'}}>
          <div className="Dashboard__drawer" style={{width:256}} />
          <div className="Dashboard__main" style={{flex:1}}>
            <Switch>
              <Route path="/dashboard/inventory" component={InventoryContainer} />
              <Route path="/dashboard/customer" component={CustomerContainer} />
              <Route path="/dashboard/order" component={CustomerContainer} />
              <Route exact path="/dashboard/analytics" component={AnalyticsContainer} />
              <Route path="/dashboard/analytics/popularity" component={PopularityContainer} />
              <Route path="/dashboard/analytics/correlation" component={CorrelationContainer} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DashboardContainer;