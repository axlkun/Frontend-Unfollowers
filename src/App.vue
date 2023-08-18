<template>
  <v-app id="app">
    <v-app-bar class="bg-grey-lighten-4" :elevation="0">
      <v-toolbar-title><v-icon>
        <img src="src/assets/logo.svg" alt="Icono SVG"
            style="width: 24px; height: 24px;" />
    </v-icon>Unfollowers</v-toolbar-title>
      <v-btn text>Tutorial</v-btn>
      <v-btn text>Contacto</v-btn>
    </v-app-bar>

    <main>
      <router-view></router-view>
    </main>

    <v-footer
    class="text-center d-flex flex-column" color="pink"
  >
    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Unfollowers</strong>
    </div>
  </v-footer>
  </v-app>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>

/* .section {
  width: 95%;
  max-width: 120rem;
  margin: 80px auto 0 auto;
  padding: 20px 10px;
}*/
</style>