import NavLink from './components/layouts/NavLink.jsx'
var Pages = require('./components/Page.jsx');
var Navigation= require('./components/Navigation.jsx');
var Banner= require('./components/Banner.jsx');

export default React.createClass({
  render() {
    return ( 
        <div>
          <div className="container-fluid">
        <div className="row">
            
            <Banner />

            <div className="row asm-center">

                <div className="col-xs-2">
                    <Navigation />
                </div>
        
                    <div className="col-xs-10 sops-right-slide no-padding">
                         
                        <div className="navbar navbar-default">
                            <div className="container"> 
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav">
                                    
                                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li> 
                                    <li><NavLink to="/Holiday">Holiday</NavLink></li> 
                
                                    </ul>
                                </div> 
                            </div>
                        </div>
                        
                        {this.props.children}


                    </div>
                </div>

            </div> 
      </div>
      
 
        </div>  
    )
  }
})
