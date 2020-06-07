import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const coordinator = {
  state: () => ({
    session: '',
    token: '',
    multiplayer: [],
    player: {
      firstname: '',
      lastname: '',
      position: '',
      company: ''
    },
    coordinate: 5,
    location: {
      left: 0,
      right: 100
    }
  }),
  mutations: {
    changeCoordinate: ({ state, newCoordinate }) => {

    },
    changeSession: ({ state, newSession, newToken, newMultiplayer, newLocation }) => {

    },
    multiplayerChangeCoordinate: ({ state, newCoordinate }) => {

    }
  },
  actions: {
    goLeft: ({ commit }) => {

    },
    goRight: ({ commit }) => {

    },
    changeLocation: ({ commit }) => {

    }
  },
  getters: {

  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coordinator
  }
})
