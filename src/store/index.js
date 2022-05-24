import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    naus: []
  }
  ,
  getters: {
  },
  mutations: {
    omplirNaus(state, saberAction) {
      state.naus = saberAction;
    }
  },
  actions: {
    saberNaus: async function ({commit}) {
      const data = await fetch('https://swapi.dev/api/starships/');
      const result = await data.json();
      const naus = result.results;
      //console.log(naus);
      commit('omplirNaus', naus)
    }
  },
  modules: {
  }
})

