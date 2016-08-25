//var React = require('react');
var SearchActions = require('../../actions/SearchActions');

var SearchBox = React.createClass({
  getInitialState: function() { 
    return {
      searchQuery: ''
    }
  },
  
  onKeyPress: function(event) {
    if (event.charCode === 13) {
      this.search();
    }
  },
  
  onChange: function(event) {
    this.setState({searchQuery: event.target.value});
  },
  
  search: function() {
    this.props.search();  
  },


  getQuery: function() {
    return this.refs.search.value;
  },
  
  render: function() {
    return ( 
      <div className="col-md-6 input-group"> 
        <input type="text" ref="search" className="form-control" placeholder="Search for..." onKeyPress={this.onKeyPress} />
        <span className="input-group-btn">
            <button onClick={this.search} className="btn btn-default" type="button">
            搜索
            </button>
        </span> 
    </div> 
    );
  }
});

module.exports = SearchBox;