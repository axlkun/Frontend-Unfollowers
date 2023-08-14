<template>
  <v-app id="app">
    <v-app-bar class="custom-border-bottom d-flex mb-6 bg-white">
      <v-toolbar-title>Unfollowers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Tutorial</v-btn>
      <v-btn text>Contacto</v-btn>
    </v-app-bar>

    <main>
      <router-view></router-view>
    </main>

    <footer></footer>
  </v-app>
</template>

<script>

</script>

<style>
.custom-border-bottom {
  border-bottom: 1px solid gray; 
}
</style>