export const TOGGLE_LIGHT = 'TOGGLE_LIGHT';
export const RANDOMIZE_LIGHTS = 'RANDOMIZE_LIGHTS';

export function toggleLight(id) {
  return {
    type: TOGGLE_LIGHT,
    id: id
  }
}

export function randomizeLights() {
  return {
    type: RANDOMIZE_LIGHTS
  }
}
