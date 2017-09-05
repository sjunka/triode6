<template>
  <v-app>
    <!--Menu lateral-->
    <!--Menu lateral-->
    <!--Menu lateral-->

    <v-navigation-drawer v-model="sideNav" temporary>

          <v-flex
            xs12
            text-xs-center
            layout
            align-center
            justify-center>
          <v-avatar
          :tile="false"
          size="130px">
            <img src="./assets/dados.png" alt="dados" >
            </v-avatar>
          </v-flex>

          <v-divider></v-divider>

          <v-list>
              <v-list-tile v-for="item in menuItems"
                           :key="item.title"
                           :to="item.link">
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>{{ item.title }}</v-list-tile-content>
              </v-list-tile>
          </v-list>

      </v-navigation-drawer>

    <!--Menu lateral-->
    <!--Menu lateral-->
    <!--Menu lateral-->



    <v-toolbar dark class="info">

          <div>
              <v-toolbar-side-icon
              @click.stop="sideNav=!sideNav">
              </v-toolbar-side-icon>
          </div>

          <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer;">TrioD6</router-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-xs-only">

              <v-btn flat
                     v-for="item in menuItems"
                     :key="item.title"
                     :to="item.link">
                  <v-icon left >{{ item.icon }}</v-icon>
                  {{ item.title }}
              </v-btn>
          </v-toolbar-items>

      </v-toolbar>
      <main>
          <router-view></router-view>
      </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
         {icon: 'person', title: 'Mi Perfil', link: '/profile'},

         {icon: 'supervisor_account', title: 'Ver Eventos', link: '/meetups'},
//         {icon: 'room', title: 'Crear Meetups', link: '/meetups/new'},

         {icon: 'directions_run', title: 'Sobre Nosotros'},
         {icon: 'phone_iphone', title: 'Redes Sociales'},
         {icon: 'control_point', title: 'Ubicanos'}

//         {icon: 'face', title: 'Sign up', link: '/signup'},
//         {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
