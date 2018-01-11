import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({ //Seperti repository
  state: {
    count: 0,
    films: []
  },
  mutations: { //Yang ngehandle perubahan dari state, ini seperti service
    increment (state) {
      state.count++
    },
    getData (state) {
		const URL = '/api/customers'
    	axios.get(URL)
					.then(response => {
						console.log('Hi im response', response.data)
						state.films = response.data
					})
					.catch(error => {
						console.log(error)
					})
    }

  },
  getters: { // Untuk mengambil nilai dari state
  	getCount: (state) => {
  		return state.count
  	},
  	getFilms: (state) => {
  		return state.films
  	}
  },
  actions: {
  	doAlert: () => {
  		alert("hi im am alert from the same action")
  	},
  	doIncrement: ({commit , dispatch}) => {
  		commit('increment'),
		dispatch('doAlert')
  	},
  	getData: ({commit}) => {
  		commit('getData')
  	}
  }
})

export default store