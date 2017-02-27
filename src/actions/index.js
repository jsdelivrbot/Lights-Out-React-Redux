export const TOGGLE_LIGHT = 'TOGGLE_LIGHT';
export const RANDOMIZE_LIGHTS = 'RANDOMIZE_LIGHTSS';

function toggleLight(id) {
  return {
    type: TOGGLE_LIGHT,
    id: id
  }
}

function() randomizeLights() {
  return {
    type: RANDOMIZE_LIGHTS
  }
}
