<template>
  <v-app id="app">

    <!-- header -->
    <v-app-bar class="bg-grey-lighten-4" :elevation="0">
      <v-toolbar-title @click="redirectToHome" style="cursor: pointer;"><v-icon>
          <img src="src/assets/logo.svg" alt="Icono SVG" style="width: 24px; height: 24px;" />
        </v-icon>Unfollowers</v-toolbar-title>
      <v-btn @click="scrollToSection('steps', currentRoute)" text>Tutorial</v-btn>
      <v-btn @click="scrollToSection('contact', currentRoute)" text>Contacto</v-btn>
    </v-app-bar>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view></router-view>
    </main>

    <!-- footer -->
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
    '$route.path'(newPath) { // observa cambios en las rutas que se visitan
      this.currentRoute = newPath;
    },
  },

  data() {
    return {
      currentRoute: '', // Aquí almacenaremos la ruta actual
    };
  },
  
  methods: {
    scrollToSection, // se declara la función importada

    redirectToHome() { // función que reedirige al home
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
.custom-sizing {
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 600px) {
      width: 75%;
      margin: 0;
  }
}

.custom-sizing-img { /* adapta las imagenes */
  max-width: 250px; /* vista móvil */
  max-height: 250px;
  margin: 0 auto;

  @media only screen and (min-width: 600px) { /* resto de pantallas */
      max-width: 550px;
      max-height: 550px;
      margin: -70px -20px;
  }
}

.reset-style { /* le quita los estilos a los enlaces */
  text-decoration: none;
  color: inherit;
}

.section-mobile { /* utilidad para la visualización en vista móvil */
  padding: 60px 0 0 0; /* vista móvil */

  @media only screen and (min-width: 600px) { /* resto de pantallas */
    padding: 0;
  }
}
</style>