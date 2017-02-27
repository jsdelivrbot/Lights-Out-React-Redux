export const TOGGLE_LIGHTS = 'TOGGLE_LIGHTS';
export const RANDOMIZE_LIGHTS = 'RANDOMIZE_LIGHTS';

export function toggleLights(id) {
  return {
    type: TOGGLE_LIGHTS,
    id: id
  }
}

export function randomizeLights(totalLights, percentOn) {
  return {
    type: RANDOMIZE_LIGHTS,
    totalLights,
    percentOn
  }
}
