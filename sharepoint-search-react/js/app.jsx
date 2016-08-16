

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

            <div className="col-xs-2">
                <ul className="sops-list sops-left-nav">
                    <li><a href="#">主页</a> </li>
                    <li><a href="#">待办任务</a> </li>
                    <li><a href="#">文档</a> </li>
                    <li><a href="#">问题沟通</a> </li>
                    <li><a href="#">经验建议</a> </li>
                </ul> 
            </div>
    
            <div className="col-xs-10 sops-right-slide no-padding">
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