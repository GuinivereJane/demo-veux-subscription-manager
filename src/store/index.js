import Vue from 'vue'
import Vuex from 'vuex'
import subscriptionManager from 'vuex-subscription-manager';
const subscriptions = subscriptionManager(modules);


import modules from './modules';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootCounter: 0,
  },
  actions: {
    rootAction({ commit }, payload) {
      console.log(payload, '---root');
      commit('rootMutation', payload);
    },
  },
  mutations: {
    rootMutation(state, payload) {
      state[payload.target] = payload.value;
    }
  },
  modules: {
    ...modules
  },
  plugins: [subscriptions],

})
