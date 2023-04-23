import { createStore } from 'vuex'
import getInspections from '@/services/getInspections.js';
import Inspection from '@/helpers/inspectionClass';

export default createStore({
  state: {
    inspections: [],
    darkMode: false,
    loggedIn: false,
    modalOpen: false
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
    },
    setModal(state, payload) {
      state.modalOpen = payload;
    },
    sortOnNewest(state) {
      state.inspections.map(inspection => inspection.dateAdded = new Date(inspection.dateAdded));
      state.inspections.sort((a, b) => b.dateAdded - a.dateAdded); 
    },
    sortOnOldest(state) {
      state.inspections.map(inspection => inspection.dateAdded = new Date(inspection.dateAdded));
      state.inspections.sort((a, b) => a.dateAdded - b.dateAdded); 
    }
  },
  actions: {
    fetchInspections(context) {
      getInspections()
      .then(data => {
        const inspectionClasses = data.map(inspection => new Inspection(inspection));
        context.commit('setInspections', inspectionClasses);
      })
    },
    setDarkMode(context) {
      context.commit('setDarkMode');
    },
    loginUser(context) {
      context.commit('setLogin');
    },
    setModal(context, value) {
      context.commit('setModal', value);
    },
    sortOnDate(context, value) {
      if (value === 'Nieuwste') {
        context.commit('sortOnNewest');
      } else if (value === 'Oudste') {
        context.commit('sortOnOldest');
      }
    }
  },
  getters: {
    getSelectedInspection: (state) => (id) => {
      return state.inspections.find(inspection => inspection.id === id);
    }
  }
  
})
