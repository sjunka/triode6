<template>
    <v-container>



      <v-layout row wrap>
        <v-flex xs12 >
            <v-carousel style="height: 330px; cursor: pointer" dark>
              <v-carousel-item  v-for="meetup in meetups"
                               v-bind:src="meetup.imageUrl"
                               :key="meetup.id"
                                @click="onLoadMeetup(meetup.id)">

                <div class="title">
                  {{ meetup.title }}
                </div>

              </v-carousel-item>

            </v-carousel>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-3">
        <v-flex xs12 class="text-xs-center">
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur consequuntur cum debitis doloribus earum enim, eos esse fuga ipsam labore obcaecati omnis, quam quia quos repellat repudiandae sapiente sint? </p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/meetups" class="info">Explorar Eventos</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/meetup/new" light disabled class="info">Agregar Evento</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>
  export default {

    data () {
      return {
        meetups: [
          { imageUrl: 'https://68.media.tumblr.com/6139bd02162efb5aa21c203c996764ee/tumblr_ovh3i4UtEc1w6292to1_400.jpg', id: 'myid', title: '' },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Villa_de_leyva.jpg', id: 'myid', title: 'Villa de Leyva' },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Rompiendo_el_edicto_-_Manuela_Beltr%C3%A1n.JPG', id: 'myid', title: 'Socorro' },
          { imageUrl: 'https://c1.staticflickr.com/6/5138/5426314914_cbe74ccab2_b.jpg', id: 'myid', title: 'San Gil' }
        ]
      }
    },

    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 15px;
  }
</style>
