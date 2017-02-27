import {RANDOMIZE_LIGHTS} from '../actions/index';
import {TOGGLE_LIGHTS} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case RANDOMIZE_LIGHTS:
      return [
        ...randomizeLightList(49)
      ];
    case TOGGLE_LIGHTS:
      return [
        ...toggleAdjacents(state, action.id)
      ]
  }
  return state;
}

function toggleAdjacents(state, id) {
  const lights = [];
  const cols = Math.sqrt(state.length);
  function sameRow(index1, index2) {
    const a = Math.floor(index1 / cols);
    const b = Math.floor(index2 / cols);
    return a === b;
  }
  state.map((light) => {
    if(  id === light.id ||
        (id === light.id + 1 && sameRow(light.id, light.id + 1)) ||
        (id === light.id - 1 && sameRow(light.id, light.id - 1)) ||
         id === light.id + cols || id === light.id - cols
      ) {
        light.active = light.active ? false : true;
      }
    lights.push(light);
  });
  return lights;
}

function randomizeLightList(totalLights) {
  const lights = [];
  for(var i = 0; i < totalLights; i++) {
    const randActive = Math.random() > 0.5;
    lights.push({id: i, active: randActive});
  }
  return lights;
}
