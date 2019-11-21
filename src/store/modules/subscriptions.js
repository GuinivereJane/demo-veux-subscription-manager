export default {
  rootMutation: {
    mutation: {
      method: function ({ commit }, payload = {}, state) {
        alert('rootMutation')
      }
    },
  },
  rootAction: {
    action: {
      before: {
        method: function ({ dispatch }, payload = {}, state) {
          alert('before root action')
        }
      },
      after: {
        method: function ({ dispatch }, payload = {}, state) {
          alert('after root action')
        }
      },
    }
  }
}