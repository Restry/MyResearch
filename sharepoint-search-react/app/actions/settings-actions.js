import * as types from '../actions/action-types';

export function settingsSuccess(keys) {
  return {
    type: types.settingsSuccess,
    keys
  };
}
