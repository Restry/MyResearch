import axios from 'axios';
import store from '../store';
import { searchSuccess } from '../actions/search-actions';


/**
 * Search users
 */

export function search(query = '') {
  return axios.get('http://localhost:3001/users?q='+ query)
    .then(response => {
      store.dispatch(searchSuccess(response.data));
      return response;
    });
}


