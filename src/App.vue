<template>
  <v-app id="app">
    <v-app-bar class="bg-grey-lighten-4" :elevation="0">
      <v-toolbar-title @click="redirectToHome" style="cursor: pointer;"><v-icon>
          <img src="src/assets/logo.svg" alt="Icono SVG" style="width: 24px; height: 24px;" />
        </v-icon>Unfollowers</v-toolbar-title>
      <v-btn @click="scrollToSection('steps', currentRoute)" text>Tutorial</v-btn>
      <v-btn @click="scrollToSection('contact', currentRoute)" text>Contacto</v-btn>
    </v-app-bar>

    <main>
      <router-view></router-view>
    </main>

    <v-footer class="text-center d-flex flex-column" color="pink">
      <div class="ma-1">
        {{ new Date().getFullYear() }} — <strong>Unfollowers</strong>
      </div>
      <div class="ma-1">
        Illustration by <a class="reset-style"
          href="https://freeicons.io/mobile-illustrations-2/dcbf-spotify-account-illustration-472" target="_blank">Athul
          Mc</a>
        on <a class="reset-style" href="https://freeicons.io" target="_blank">freeicons.io</a>
      </div>
      <div class="ma-1">
        <a class="reset-style" href="https://www.instagram.com/axlkun/" target="_blank">
          <p>By <strong>@axlkun</strong>&#129489;</p>
        </a>

      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { scrollToSection } from './utils/utils';

export default {
  watch: {
    '$route.path'(newPath) {
      this.currentRoute = newPath;
      // console.log('Ruta actual:', newPath);
    },
  },

  data() {
    return {
      currentRoute: '', // Aquí almacenaremos la ruta actual
    };
  },
  
  methods: {
    scrollToSection,

    redirectToHome() {
      this.$router.push('/');
    }
  },

  mounted() {
    // Inicializa la ruta actual cuando la aplicación se carga
    this.currentRoute = this.$route.path;
  }
}
</script>

<style>
.reset-style {
  text-decoration: none;
  color: inherit;
}

.section-mobile {
  padding: 60px 0 0 0;

  @media only screen and (min-width: 600px) {
    padding: 0;
  }
}
</style>