//import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';
import SettingsLayoutContainer from './components/containers/settings-layout-container';

// Pages
import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import SettingsListContainer from './components/containers/settings-list-container';
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

        <Route path="settings">
          <Route component={SettingsLayoutContainer}>
            <IndexRoute component={SettingsListContainer} />
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
