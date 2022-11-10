import { createStore } from 'vuex';
import signup from './Modules/signup/index'
import login from './Modules/login/index'
const store = createStore({
  modules : {
      signup : signup,
      login : login,
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }

})
export default store;