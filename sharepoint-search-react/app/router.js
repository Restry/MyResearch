//import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import WidgetListContainer from './components/containers/widget-list-container';
import SearchListContainer from './components/containers/search-list-container';
 
export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="users">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={UserListContainer} />
          </Route>
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

        <Route path="widgets">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={WidgetListContainer} />
          </Route>
        </Route>

        <Route path="search">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={SearchListContainer} />
          </Route>
        </Route>

        
    </Route>
  </Router>
);
