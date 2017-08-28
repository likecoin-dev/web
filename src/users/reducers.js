import { combineReducers } from 'redux';


import login from './login/reducers';
import registration from './registration/reducers';
import activation from './activation/reducers';
import profile from './profile/reducers';

export default combineReducers({
  login, registration, activation, profile
})