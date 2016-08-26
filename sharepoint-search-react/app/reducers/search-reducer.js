import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    results: [],
    itemCount: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,//Math.ceil(_itemCount / _pageSize),
    searchQuery:'' 
};

const searchReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.SEARCH_SUCCESS:
        var data =action.data;
        
        data.pageCount = Math.ceil(data.itemCount / data.pageSize)
        
        return Object.assign({}, state, data);
  }

  return state;

}

export default searchReducer;
