import { combineReducers } from 'redux';
import breed from './breed';
import cat from './cat';

const reducers = combineReducers({
  breed,
  cat,
});

export default reducers;
