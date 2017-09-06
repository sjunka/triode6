import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: '/static/imagen_grupo.JPG',
        id: '1',
        description: 'Trio de Seis es una agrupación de artistas que tienen entre sí una mayor vinculación que un movimiento artístico, aunque sí es habitual que pertenezcan al mismo movimiento; por ejemplo los neoplasticistas holandeses De Stijl (1917)',
        date: '2017-05-30'
      },
      {
        imageUrl: '/static/imagen_evento_guepsa.png',
        id: '2',
        description: 'Lorem ipsum dolor sit amet, consc, porta vulputate nisl. Proin et auctor justo. Nulla bibendum quam dolor. Donec non eros sed augue ullamcorper tempor fer',
        date: '2017-2-23'
      },
      {
        imageUrl: '/static/imagen_evento_Websa.jpg',
        id: '3',
        description: 'Lorem ipsum dolor sit amet, consc, porta vulputate nisl. Proin et auctor justo. Nulla bibendum quam dolor. Donec non eros sed augue ullamcorper tempor fer',
        date: '2017-07-30'
      },
      {
        imageUrl: '/static/imagen_danza_aerea.png',
        id: '4',
        description: 'Lorem ipsum dolor sit amet, consc, porta vulputate nisl. Proin et auctor justo. Nulla bibendum quam dolor. Donec non eros sed augue ullamcorper tempor fer',
        date: '2017-07-29'
      }

    ],

    user: {
      id: 'userid',
      registeredMeetups: [
        'evento1',
        'evento2'
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },

    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },

    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }

  }
})
