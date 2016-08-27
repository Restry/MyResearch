import * as types from '../actions/action-types';

export function settingsSuccess(keys) {
  return {
    type: types.GET_SETTINGS_SUCCESS,
    keys
  };
}
