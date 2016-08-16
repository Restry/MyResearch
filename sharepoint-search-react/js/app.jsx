var React = require('react');
var ReactDOM = require('react-dom');
var SearchBox = require('./components/SearchBox.jsx');
var SearchStatus = require('./components/SearchStatus.jsx');
var SearchResults = require('./components/SearchResults.jsx');
var Pages = require('./components/Page.jsx');
require('bootstrap/dist/css/bootstrap.css');


require('../css/styles.css');

var App = React.createClass({ 
  render: function() {    
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
            <div className="page-header">
                <h1>搜索 <small>输入关键字，回车键或点击按钮搜索...</small></h1>
            </div>
            <SearchBox />
            <SearchStatus />
            <SearchResults /> 
            <Pages />
            </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));