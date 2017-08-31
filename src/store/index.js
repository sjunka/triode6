import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://68.media.tumblr.com/6139bd02162efb5aa21c203c996764ee/tumblr_ovh3i4UtEc1w6292to1_400.jpg',
        id: 'myid',
        title: '',
        date: ''
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Villa_de_leyva.jpg',
        id: 'myid',
        title: 'Villa de Leyva',
        date: ''
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Rompiendo_el_edicto_-_Manuela_Beltr%C3%A1n.JPG',
        id: 'myid',
        title: 'Socorro',
        date: '2017-07-30'
      },
      {
        imageUrl: 'https://c1.staticflickr.com/6/5138/5426314914_cbe74ccab2_b.jpg',
        id: 'myid',
        title: 'San Gil',
        date: '2017-07-29'
      }

    ],

    user: {
      id: 'my id',
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
        return state.loadedMeetups.find((meetups) => {
          // return meetup.id === meetupId
        })
      }
    }

  }
})
