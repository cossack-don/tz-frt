import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import arrayItems from './Cards.js'

export default new Vuex.Store({
  state: {
    toggleBurgerFlag: false,
    arrayItems
  },

  getters: {

  },

  // Изменения стора
  mutations: {
    MUTATION_TOGGLE_BURGER_FLAG(state) {
      state.toggleBurgerFlag = !state.toggleBurgerFlag
    }
  },

  // Асинхронщина
  actions: {
    ACTION_TOGGLE_BURGER_FLAG({ commit }) {
      commit('MUTATION_TOGGLE_BURGER_FLAG')
    }
  },

  modules: {
  }
})
