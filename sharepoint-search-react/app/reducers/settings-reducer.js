import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  keys: []
};

const settingsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_SETTINGS_SUCCESS:

      return Object.assign({}, state, { keys: action.keys });
 
  }

  return state;

}

export default settingsReducer;
