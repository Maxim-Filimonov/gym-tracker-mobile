import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import program from './program';

export default combineReducers({
  user,
  loading,
  program,
});
