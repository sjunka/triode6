<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>

        <v-card >
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="300px"
                >
                </v-card-media>

                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>

                      <div class="text-xs-center">
                        <p><strong>{{ meetup.title }}</strong></p>
                      </div>

                      <div>
                        <p>
                          {{ meetup.description }}
                        </p>
                        <p>{{ meetup.date }}</p>
                      </div>
                    </div>

                  </v-card-title>

                  <v-card-actions class="justify-center pt-0">
                      <v-btn class="info" raised :to="'/meetups/'+ meetup.id">
                        <v-icon left dark>arrow_forward</v-icon>
                        Ver mas
                      </v-btn>

                  </v-card-actions>

                </v-flex>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
