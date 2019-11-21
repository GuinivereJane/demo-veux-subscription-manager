export default {
  change(state, payload) {
    state[payload.target] = payload.value;
  }
}