import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './AppReducer';

export default combineReducers({
  app,
  routing: routerReducer
})
