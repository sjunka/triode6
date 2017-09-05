<template>
    <v-container>
        <h4 class="mb-3 text-xs-center info white--text">TRIO DE SEIS</h4>

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
          <v-btn large router to="/meetups" class="info">Mas Eventos</v-btn>
        </v-flex>

        <v-flex xs12 sm6 class="text-xs-center text-sm-left pb-2">
          <v-btn large router to="/meetup/new" light disabled class="info">Nuevo Evento</v-btn>
        </v-flex>


      </v-layout>

      <v-layout pt-2>
        <v-flex xs12>

          <h4 class="mb-3 text-xs-center info white--text">ARTISTAS</h4>
          <v-card class="elevation-0">
            <v-card-title class="pt-0 pb-0">
              <div>
                <p class="mb-0">Los integrantes de nuestro grupo artistico nacieron de la combinacion de la panela, miel y trozos
                   de piña encontrados en una taza de totumo.</p>
              </div>
            </v-card-title>

            <v-card-text>

              <v-expansion-panel expand>
                <v-expansion-panel-content v-for="artista in artistas" :key="artistas.nombre">
                  <div slot="header">{{ artista.nombre }}</div>
                  <v-card>
                    <v-card-text >
                      <v-flex class="grey lighten-3"
                        xs12
                        text-xs-center
                        layout
                        align-center
                        justify-center>

                        <v-avatar
                          size="130px">
                          <img :src='artista.imagen' alt="dados" >
                        </v-avatar>
                      </v-flex>

                      <v-divider></v-divider>
                      {{ artista.descripcion }}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-card-text>

          </v-card>






        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        artistas: [
          { nombre: 'EDWIN SARELY OSORIO',
            imagen: '/static/v.png',
            descripcion: 'Ademas de ser el Director de la agrupacion, maquilla y malabarea al son de tu cancion.'},

          { nombre: 'DIANA CARRASCAL',
            imagen: '/static/v.png',
            descripcion: 'Instructora de Danza Aerea, sus alas vuelan de arriba a abajo enrredando tus sentidos en sus torbellinos-'},

          { nombre: 'JULIAN NAVARRO',
            imagen: '/static/v.png',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates? '}
        ]
      }
    },
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
 </style>
