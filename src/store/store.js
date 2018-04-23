import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    content: localStorage.getItem('content') || ''
  },
  actions: {
    updateContent({state, commit}, content) {
      commit('UPDATE_CONTENT', content)
      localStorage.setItem('content', content)
    }
  },
  mutations: {
    UPDATE_CONTENT(state, content) {
      state.content = content
    }
  },
  getters: {
    content: (state) => {
      return state.content
    }
  }
})
