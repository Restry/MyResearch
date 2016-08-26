//import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;
  let pages = {};

  if (searchType === 'users') {
    totalResults = store.userState.users.length;
  } else if (searchType === 'widgets') {
    totalResults = store.widgetState.widgets.length;
  } else if (searchType === 'search') {
    totalResults = store.searchState.results.length;
    pages = {
       itemCount: store.searchState.itemCount,
       pageIndex: store.searchState.pageIndex,
       pageSize: store.searchState.pageSize,
       searchQuery: store.searchState.searchQuery
    }
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults,
    pages
  };

};

export default connect(mapStateToProps)(SearchLayout);
