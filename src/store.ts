import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appSideBarStatus: true // default is closed
  },
  mutations: {
    SET_APP_SIDE_BAR_STATUS(state) {
      state.appSideBarStatus = !state.appSideBarStatus;
    }
  },
  actions: {
    updateSideBar({ commit }) {
      commit("SET_APP_SIDE_BAR_STATUS");
    }
  }
});

// mutations: {
//   updateValue(state, payload) {
//     state.value = payload;
//   }
// }

// actions: {
//   updateSideBar({commit}, payload) {
//     commit('updateSideBar', payload);
//   }
// }
