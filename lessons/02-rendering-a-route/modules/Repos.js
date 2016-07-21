import React from 'react'
import 'bootstrap3/dist/css/bootstrap.css'

export default React.createClass({
  render() {
    return <div className="row">
        <h1>Repos</h1>
        <ol className="breadcrumb">
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="#/about">about</a>
    </li>
    <li>
        <a href="#/repos">repos</a>
    </li>
    <li className="active">Current</li>
</ol>
    </div>
  }
})