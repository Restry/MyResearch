import React from 'react'
import NavLink from './NavLink'
 

export default React.createClass({
  render() {
    return ( 
        <div className="container">
             
            <div className="navbar">
                <a className="navbar-brand" href="#">Title</a>
                <ul className="nav navbar-nav">   
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/calendar">Calendar</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><NavLink to="/gituser">Gituser</NavLink></li>
                </ul>
            </div>
 
            {this.props.children}
        </div>  
    )
  }
})
