<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
    </main>

    <div class="text-center">
      <v-bottom-sheet v-if="!cookiesAccepted && currentRoute !== '/politica-de-cookies-unfollowerstracker'" v-model="sheet">
        <v-card class="text-center">
          <v-card-text>
            <div>
              Este sitio web utiliza cookies para asegurarnos que obtengas la mejor experiencia.
            </div>
          </v-card-text>
          <v-card-actions class="mx-auto">
            <v-btn
              variant="text"
              color="pink"
              href="/politica-de-cookies-unfollowerstracker"
            >
              Leer más
            </v-btn>
            <v-btn
              variant="tonal"
              color="pink"
              @click="acceptCookies"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-bottom-sheet>
    </div>

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
    blogEntry: [],
    sheet: true,
    currentRoute: '',
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
    },

    acceptCookies() {
      // Al hacer clic en "Aceptar", actualiza el estado y almacena en localStorage
      this.sheet = false;
      localStorage.setItem('cookiesAccepted', 'true');
    },
  },

  computed: {
    cookiesAccepted() {
      // Verifica si las cookies han sido aceptadas (almacenadas en localStorage)
      return localStorage.getItem('cookiesAccepted') === 'true';
    },
  },

  watch: {
    $route(to, from) {
      // Actualiza la propiedad currentRoute cuando cambia la ruta
      this.currentRoute = to.path;
    },
  },

  mounted() {
    this.getArticles();
    this.currentRoute = this.$route.path;
  }
}
</script>

<style>
.custom-sizing {
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 960px) {
    width: 75%;
    margin: 0;
  }
}

.custom-sizing-img {
  aspect-ratio: 1 / 1;
  width: 80%;
  object-fit: contain;
  margin: -15px auto;

  @media only screen and (min-width: 1024px) {
    width: 100%;

  }
}

.reset-style {
  /* le quita los estilos a los enlaces */
  text-decoration: none;
  color: inherit;
}

/* terminos y privacidad */

.privacy h1 {
  color: #E91E63;
}

.privacy {

  width: 90%;
  margin: 0 auto;
  line-height: 1.8;

  @media only screen and (min-width: 960px) {
    /* resto de vistas */
    max-width: 50%;
    min-height: 100vh;
  }
}

.section {
  margin: 20px 0;
}

.fecha {
  color: gray;
}
</style>