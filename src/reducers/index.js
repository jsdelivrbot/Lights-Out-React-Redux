import { combineReducers } from 'redux';
import RandomizeReducer from './reducer_randomize_lights';
const rootReducer = combineReducers({
  lightsListReduced: RandomizeReducer
});

export default rootReducer;
