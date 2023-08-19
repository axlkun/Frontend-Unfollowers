<template>
  <v-app id="app">
    <v-app-bar class="bg-grey-lighten-4" :elevation="0">
      <v-toolbar-title><v-icon>
        <img src="src/assets/logo.svg" alt="Icono SVG"
            style="width: 24px; height: 24px;" />
    </v-icon>Unfollowers</v-toolbar-title>
      <v-btn @click="scrollToSection('steps')" text>Tutorial</v-btn>
      <v-btn @click="scrollToSection('contact')" text>Contacto</v-btn>
    </v-app-bar>

    <main>
      <router-view></router-view>
    </main>

    <v-footer
    class="text-center d-flex flex-column" color="pink"
  >
    <div>
      {{ new Date().getFullYear() }} — <strong>Unfollowers</strong>
    </div>
    <div>
      Illustration by <a class="reset-style" href="https://freeicons.io/mobile-illustrations-2/dcbf-spotify-account-illustration-472">Athul Mc</a>
                            on <a class="reset-style" href="https://freeicons.io">freeicons.io</a> 
    </div>
  </v-footer>
  </v-app>
</template>

<script>
import { scrollToSection } from './utils/utils';

export default {

    methods: {
      scrollToSection
    }
  }
</script>

<style>

.reset-style{
  text-decoration: none; 
  color: inherit;
}
</style>