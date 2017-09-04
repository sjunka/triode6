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
        <v-flex xs12 sm6 class="text-xs-center text-sm-left pb-2">
          <v-btn large router to="/meetup/new" light disabled class="info">Agregar Evento</v-btn>
        </v-flex>
      </v-layout>

      <v-layout >
        <v-flex xs12>

          <v-card class="card_style">
            <v-card-media>
              <video class="video_position" poster="static/v.png" autoplay="true" loop>
                <source src="static/intro_video.mp4" type="video/mp4">
              </video>
            </v-card-media>
            increibles acrobacias
          </v-card>

        </v-flex>
      </v-layout>

    </v-container>

</template>

<script>
  export default {

    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
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
  .video_position{
    /*position: relative;*/
    /*top:50%;*/
    /*left:50%;*/
    /*transform: translate(-50%, -50%);*/
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }
  .card_style{
    height: 300px;
    width: 300px;
  }
</style>
