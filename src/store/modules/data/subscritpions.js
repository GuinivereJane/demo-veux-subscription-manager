export default {
  change: {
    mutation: {
      method: function ({ commit }, payload = {}, state) {
        alert('change')
      }
    },
  },
  changeCounter: {
    action: {
      before: {
        method: function ({ dispatch }, payload = {}, state) {
          alert('before namespaced action')
        }
      },
      after: {
        method: function ({ dispatch }, payload = {}, state) {
          alert('after namespaced action')
        }
      },
    }
  },

}

