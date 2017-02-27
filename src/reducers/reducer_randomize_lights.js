import {RANDOMIZE_LIGHTS} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case RANDOMIZE_LIGHTS:
      return [...state,
        ...randomizeLightList(9)
      ]
  }
  return state;
}

function randomizeLightList(totalLights) {
  const lights = [];
  for(var i = 0; i < totalLights; i++) {
    const randActive = Math.random() > 0.5;
    lights.push({id: i, active: randActive});
  }
  console.log(lights);
  return lights;

}
