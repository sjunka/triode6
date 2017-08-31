<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card >
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-card-media
                  src="https://68.media.tumblr.com/b150a0775c080572ede9b8e73a73e89a/tumblr_ovh38c8J4z1w6292to1_1280.jpg"
                  height="120px"
                >
                </v-card-media>

                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>

                      <div class="text-xs-center">
                        <p><strong>Trio de 6</strong></p>
                      </div>

                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae cumque dolores ex fugiat laboriosam mollitia obcaecati odit saepe soluta
                        </p>
                      </div>
                    </div>

                  </v-card-title>

                  <v-card-actions >
                    <v-btn flat to="/meetups/1 ">
                      <v-icon left>arrow_forward</v-icon>
                      Ver Informacion
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

