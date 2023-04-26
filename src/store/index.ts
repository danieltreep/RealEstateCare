import { createStore } from 'vuex'
import getInspections from '@/services/getInspectionsService.js';
import Inspection from '@/helpers/inspectionClass';

export default createStore({
  state: {
    inspections: [],
    darkMode: false,
    loggedIn: false,
    modalOpen: false,
  },
  mutations: {
    // Update inspecties en verander elke dateAdded in een Date object zodat die gesorteerd kan worden
    setInspections(state, payload) {
      state.inspections = payload;
      state.inspections.map(inspection => inspection.dateAdded = new Date(inspection.dateAdded)); 
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
      state.inspections.sort((a, b) => b.dateAdded - a.dateAdded); 
    },
    sortOnOldest(state) {
      state.inspections.sort((a, b) => a.dateAdded - b.dateAdded); 
    },
    deleteInspection(state, payload) {
      state.inspections = state.inspections.filter(inspection => inspection.id !== payload);
    },
    addInspection(state, payload) {
      state.inspections = [...state.inspections, payload];
    },
    // Vind index van de aan te passen inspectie en pas die aan met de nieuwe payload
    changeInspection(state, payload) {
      const index = state.inspections.findIndex(inspection => inspection.id === payload.id); 
      state.inspections[index] = payload;
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
    // Commit mutatie op basis van value
    sortOnDate(context, value) {
      if (value === 'Nieuwste') {
        context.commit('sortOnNewest');
      } else if (value === 'Oudste') {
        context.commit('sortOnOldest');
      }
    },
    deleteInspection(context, value) {
      context.commit('deleteInspection', value);
    },
    addInspection(context, value) {
      context.commit('addInspection', value);
    },
    changeInspection(context, value) {
      context.commit('changeInspection', value);
    }
  },
  getters: {
    getSelectedInspection: (state) => (id) => {
      return state.inspections.find(inspection => inspection.id === id);
    },
    getHighestId(state) {
      const idArray = [];                                                 // Initieer nieuw array
      state.inspections.map(inspection => idArray.push(inspection.id));   // Push alle id's naar nieuwe array
      idArray.sort((a, b) => a - b);                                      // Sorteer array zodat de hoogste id als laatste is
      return idArray.pop();                                               // Retourneer het laatste item in de array, ook wel de hoogste id
    }
  }
})
