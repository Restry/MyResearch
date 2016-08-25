import * as types from '../actions/action-types';

export function searchSuccess(data) {
  return {
    type: types.SEARCH_SUCCESS,
    data
  };
}
