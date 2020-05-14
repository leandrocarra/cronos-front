import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers';
import promise from 'redux-promise';
import multi from 'redux-multi';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, promise)(createStore)(rootReducers, devTools);

export default store;
