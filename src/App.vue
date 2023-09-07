<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view></router-view>
    </main>

    <!-- footer -->
    <v-footer class="text-center d-flex flex-column" color="grey-lighten-2">

      <div class="d-flex flex-sm-row flex-column justify-space-evenly w-100 footer-section">

        <div class="section">
          <p>Navegacion</p>

          <ul>
            <li>Inicio</li>
            <li>Como funciona</li>
            <li>Tutorial</li>
            <li>Contacto</li>
            <li>Blog (construyendo)</li>
          </ul>
        </div>

        <div class="section">
          <p>Herramientas Gratis</p>

          <ul>
            <li>Quien no me sigue en Instagram</li>
          </ul>
        </div>

        <div class="section">
          <p>Más</p>

          <ul>
            <li>Términos</li>
            <li>Privacidad</li>
          </ul>
        </div>
        
      </div>
      
      <div class="d-flex flex-row justify-center w-100">
        <p class="ma-1">
          {{ new Date().getFullYear() }} — Unfollowers
          <a class="reset-style" href="https://www.instagram.com/axlkun/" target="_blank">
            By <strong>@axlkun</strong>&#129489;
          </a>
          Illustration by <a class="reset-style" href="https://freeicons.io/mobile-illustrations-2/dcbf-spotify-account-illustration-472" target="_blank">Athul Mc</a>
          on <a class="reset-style" href="https://freeicons.io" target="_blank">freeicons.io</a>
        </p>
        
      </div>
      
    </v-footer>
  </v-app>
</template>

<script>
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

/* terminos y privacidad */
.privacy{
    
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 600px) {
      /* resto de vistas */
      max-width: 70%;
      min-height: 100vh;
  }
}

.section{
  margin: 20px 0;
}

.fecha{
  color: gray;
}

/* footer */

.footer-section{
    
  width: 90%;
  text-align: center;
  margin: 0 auto;
  border-bottom: 1px solid gray;

  @media only screen and (min-width: 600px) {
      /* resto de vistas */
      width: 100%;
  }
}

.footer-section{
  line-height: 2;
}

.footer-section li:hover{
  color: #E91E63;
  cursor: pointer;
}

.footer-section p{
  font-weight: 600;
}

ul, ol {
  list-style: none;
}

</style>