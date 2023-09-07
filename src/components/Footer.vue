<template>
    <v-footer class="text-center d-flex flex-column" color="grey-lighten-2">

        <div class="d-flex flex-sm-row flex-column justify-space-evenly w-100 footer-section">
  
          <div class="section">
            <p>Navegacion</p>
  
            <ul>
              <li>Inicio</li>
              <li>¿Cómo funciona?</li>
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
</template>

<script>
import { scrollToSection } from '../utils/utils';

export default {

    name: 'myFooter',

    methods: {
        scrollToSection, // se declara la función importada

    },

}
</script>

<style scoped>
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