import { createStore } from 'vuex';
import signup from './Modules/signup/index'
import login from './Modules/login/index'
const store = createStore({
  modules : {
      signup : signup,
      login : login,
  },

  state() {
    return{
      showLoader: false,
    };
  },
  getters: {
  },
 
  mutations: {
    showLoaderMutation(state, payload) {
        state.showLoader = payload;
    }
  },
  actions: {
  },
  modules: {
  }

})
export default store;