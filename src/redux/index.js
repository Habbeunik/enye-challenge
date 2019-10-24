import { combineReducers, createStore } from 'redux';

import userReducer from './users/reducer';

const rootReducer = combineReducers({
  users: userReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

export default store;