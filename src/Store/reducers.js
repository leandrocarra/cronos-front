import { combineReducers } from 'redux';

export default combineReducers({
  modal: require('../../src/modules/modal').default,
  sanfona: require('../../src/modules/sanfona').default,
});
