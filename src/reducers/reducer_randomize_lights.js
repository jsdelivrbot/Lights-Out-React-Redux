import {RANDOMIZE_LIGHTS} from '../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case RANDOMIZE_LIGHTS:
        console.log("RANDOMIZE_LIGHTS reducer!!");
  }
  return state;
}
