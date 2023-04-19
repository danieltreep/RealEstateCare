import { createStore } from 'vuex'
import getInspections from '@/services/getInspections.js';

export default createStore({
  state: {
    inspections: [],
    darkMode: false
  },
  
  mutations: {
    setInspections(state, payload) {
      state.inspections = payload;
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode; 
    }
  },
  actions: {
    fetchInspections(context) {
      getInspections()
        .then(data => context.commit('setInspections', data));
    },
    setDarkMode(context) {
      context.commit('setDarkMode');
    }
  },
  getters: {
    getSelectedInspection: (state) => (id) => {
      return state.inspections.find(inspection => inspection.id === id);
    }
  }
  
})
