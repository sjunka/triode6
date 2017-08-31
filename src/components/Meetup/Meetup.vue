<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>

          <v-card-title class="pb-0" >
            <h4 class="info--text">{{ meetup.title }}</h4>
          </v-card-title>

          <v-card-media
          :src="meetup.imageUrl"
          height="300px"
          >
          </v-card-media>

          <v-card-text>

            <div class="info--text ">
              <p class="ma-0">{{ meetup.date }}</p>
            </div>

            <div>
              <p>{{ meetup.description }}</p>
            </div>

          </v-card-text>

          <v-card-actions class="layout justify-center">

            <v-btn class="info"
                   :to="'/meetups/'"
            >Volver</v-btn>

            <v-btn class="info">Asistir</v-btn>

          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>
