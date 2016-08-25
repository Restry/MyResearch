import React from 'react'; 

import NavLink from './commons/layouts/NavLink.jsx'
var Navigation = require('./commons/layouts/Navigation.jsx');
var Banner = require('./commons/layouts/Banner.jsx');

// Using "Stateless Functional Components"
export default function(props) {
  return (
     <div className="container-fluid">
            <div className="row">
                <Banner />
                    <div className="asm-center">
                        <div className="col-xs-2">
                            <Navigation />
                        </div>
                        <div className="col-xs-10 sops-right-slide no-padding">
                            {props.children}
                        </div>
                    </div> 
            </div> 
        </div> 
    );
}
