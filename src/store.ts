import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appSideBarStatus: true, // default is closed
    activeContact: null
  },
  mutations: {
    SET_APP_SIDE_BAR_STATUS(state) {
      state.appSideBarStatus = !state.appSideBarStatus;
    },
    SET_ACTIVECONTACT(state, id) {
      state.activeContact = id;
    }
  },
  actions: {
    updateSideBar({ commit }) {
      commit("SET_APP_SIDE_BAR_STATUS");
    },
    updateActiveContact({ commit }, id) {
      commit("SET_ACTIVECONTACT", id);
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
