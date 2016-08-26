
import store from '../store';
import { settingsSuccess } from '../actions/settings-actions';
import settings from '../../data/settings';
import _ from 'lodash';

export function get(key='') {
    var keys = settings.filter(k=>k.key==key)[0]
    store.dispatch(settingsSuccess(keys));

    return keys;
}