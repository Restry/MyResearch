//import React from 'react';
import { connect } from 'react-redux';
import SearchList from '../views/search-list';
import * as searchApi from '../../api/search-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const SearchListContainer = React.createClass({

  componentDidMount: function() {
    //userApi.getUsers();
    store.dispatch(loadSearchLayout('search', 'Search Results'));
  },

  render: function() {
    return (
      <SearchList results={this.props.results} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    results: store.searchState.results
  };
};

export default connect(mapStateToProps)(SearchListContainer);
