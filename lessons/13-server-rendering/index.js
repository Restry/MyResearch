// index.js
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './modules/routes'

render(
  <Router routes={routes} history={hashHistory}/>,
  document.getElementById('app')
)