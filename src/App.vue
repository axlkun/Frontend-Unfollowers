<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view></router-view>
    </main>

    <myFooter></myFooter>
  </v-app>
</template>

<script>
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';

export default {

  components: {
    myHeader, // Registra el componente
    myFooter
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

/* terminos y privacidad */

.privacy h1{
  color: #E91E63;
}

.privacy{
    
  width: 90%;
  margin: 0 auto;
  line-height: 1.8;

  @media only screen and (min-width: 600px) {
      /* resto de vistas */
      max-width: 50%;
      min-height: 100vh;
  }
}

.section{
  margin: 20px 0;
}

.fecha{
  color: gray;
}

</style>