<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
    </main>

    <myFooter :blogEntry="blogEntry"></myFooter>
  </v-app>
</template>

<script>
import api from './api';

import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';

export default {

  components: {
    myHeader, // Registra el componente
    myFooter
  },

  data: () => ({
    blogEntry: []
  }),

  methods: {
    getArticles() {
      api.get('/api/articles?limit=3')
        .then(response => {
          this.blogEntry = response.data.data;
        })
        .catch(error => {
          console.error('Error al hacer la solicitud GET:', error);
        });
      }
  },

  mounted() {
    this.getArticles();
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