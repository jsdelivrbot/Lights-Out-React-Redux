import { combineReducers } from 'redux';
import RandomizeReducer from './reducer_randomize_lights';
const rootReducer = combineReducers({
  lightsList: RandomizeReducer
});

export default rootReducer;
