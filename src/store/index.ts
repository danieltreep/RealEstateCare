import { createStore } from 'vuex'
import getInspections from '@/services/getInspections.js';

export default createStore({
  state: {
    inspections: [],
    darkMode: false,
    loggedIn: false
  },
  
  mutations: {
    setInspections(state, payload) {
      state.inspections = payload;
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode; 
    },
    setLogin(state) {
      state.loggedIn = !state.loggedIn;
    }
  },
  actions: {
    fetchInspections(context) {
      getInspections()
        .then(data => context.commit('setInspections', data));
    },
    setDarkMode(context) {
      context.commit('setDarkMode');
    },
    loginUser(context) {
      context.commit('setLogin');
    }
  },
  getters: {
    getSelectedInspection: (state) => (id) => {
      return state.inspections.find(inspection => inspection.id === id);
    }
  }
  
})
