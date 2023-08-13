<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
      <!-- Aquí puedes agregar una barra de navegación u otros elementos comunes -->
    </header>

    <main>
      <!-- Aquí se cargará la vista correspondiente según la ruta actual -->
      <router-view></router-view>
    </main>

    <footer>
      <!-- Aquí puedes agregar el contenido del pie de página -->
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
/* Aquí puedes agregar estilos específicos para tu aplicación */
</style>