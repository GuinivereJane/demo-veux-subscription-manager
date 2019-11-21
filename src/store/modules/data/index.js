import mutations from './mutations';
import state from './state';
import actions from './actions';
import subscriptions from './subscritpions';

const namespaced = true;
export default {
  namespaced,
  state,
  mutations,
  actions,
  subscriptions
};
