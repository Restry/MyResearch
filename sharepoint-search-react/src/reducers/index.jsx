import { combineReducers } from 'redux';

// Reducers
import searchReducer from './search-reducer';
import searchLayoutReducer from './searchLayout';

// Combine Reducers
var reducers = combineReducers({
    searchState: searchReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
