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

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.SEARCH_SUCCESS:
      return Object.assign({}, state, { users: action.users });
  }

  return state;

}

export default userReducer;
