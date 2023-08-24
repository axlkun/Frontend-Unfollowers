<template>
  <v-app id="app">

    <myHeader></myHeader>

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
// import { scrollToSection } from './utils/utils.js';
import myHeader from './components/Header.vue';

export default {

  components: {
    myHeader, // Registra el componente
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

.custom-sizing-img {
  /* adapta las imagenes */
  max-width: 250px;
  /* vista móvil */
  max-height: 250px;
  margin: 0 auto;

  @media only screen and (min-width: 600px) {
    /* resto de pantallas */
    max-width: 550px;
    max-height: 550px;
    margin: -70px -20px;
  }
}

.reset-style {
  /* le quita los estilos a los enlaces */
  text-decoration: none;
  color: inherit;
}

</style>