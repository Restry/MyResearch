import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Calendar from './components/calendar' 
import Gituser from './components/Gituser' 
import Home from './modules/Home' 

//import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'; 
  
render(( 
  <Router history={hashHistory}> 
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/calendar" component={Calendar}/>
      <Route path="/about" component={About}/>
      <Route path="/gituser" component={Gituser}/>
    </Route>
  </Router>
), document.getElementById("app"))
