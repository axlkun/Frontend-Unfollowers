<template>
  <v-app id="app">
    <v-app-bar class="bg-white" :elevation="0">
      <v-toolbar-title>Unfollowers</v-toolbar-title>
      <v-btn text>Tutorial</v-btn>
      <v-btn text>Contacto</v-btn>
    </v-app-bar>

    <main>
      <router-view></router-view>
    </main>

    <v-footer
    class="text-center d-flex flex-column" color="pink"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <!-- <div class="pt-0">
      .
    </div> -->

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
.custom-border-bottom {
  border-bottom: 1px solid gray; 
}

.section {
  width: 95%;
  max-width: 120rem;
  margin: 80px auto 0 auto;
  padding: 20px 10px;
}
</style>