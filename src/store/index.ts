import { createStore } from 'vuex'
import getInspections from '@/services/getInspections.js';

export default createStore({
  state: {
    inspections: []
  },
  
  mutations: {
    setInspections(state, payload) {
      state.inspections = payload;
    }
  },
  actions: {
    fetchInspections(context) {
      getInspections()
        .then(data => context.commit('setInspections', data));
    }
  },
  getters: {
    getSelectedInspection: (state) => (id) => {
      return state.inspections.find(inspection => inspection.id === id)
    }
  }
  
})
