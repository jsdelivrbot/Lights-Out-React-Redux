export const TOGGLE_LIGHT = 'TOGGLE_LIGHT';

function toggleLight(id) {
  return {
    type: TOGGLE_LIGHT,
    id: id
  }
}
