import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://68.media.tumblr.com/6139bd02162efb5aa21c203c996764ee/tumblr_ovh3i4UtEc1w6292to1_400.jpg',
        id: '1',
        title: 'TrioD6',
        description: 'Trio de Seis es una agrupación de artistas que tienen entre sí una mayor vinculación que un movimiento artístico, aunque sí es habitual que pertenezcan al mismo movimiento; por ejemplo los neoplasticistas holandeses De Stijl (1917)',
        date: '2017-05-30'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Villa_de_leyva.jpg',
        id: '2',
        title: 'Villa de Leyva',
        description: 'Lorem ipsum dolor sit amet, consc, porta vulputate nisl. Proin et auctor justo. Nulla bibendum quam dolor. Donec non eros sed augue ullamcorper tempor fer',
        date: '2017-2-23'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Rompiendo_el_edicto_-_Manuela_Beltr%C3%A1n.JPG',
        id: '3',
        title: 'Socorro',
        description: 'Lorem ipsum dolor sit amet, consc, porta vulputate nisl. Proin et auctor justo. Nulla bibendum quam dolor. Donec non eros sed augue ullamcorper tempor fer',
        date: '2017-07-30'
      },
      {
        imageUrl: 'https://c1.staticflickr.com/6/5138/5426314914_cbe74ccab2_b.jpg',
        id: '4',
        title: 'San Gil',
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
