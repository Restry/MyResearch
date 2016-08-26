import { combineReducers } from 'redux';

// Reducers
import searchReducer from './search-reducer';
import userReducer from './user-reducer';
import settingsReducer from './settings-reducer';
import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    searchState: searchReducer,
    userState: userReducer,
  //  widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer,
    settingsState:settingsReducer
});

export default reducers;
