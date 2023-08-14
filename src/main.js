import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router.js';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors'

const vuetify = createVuetify({
  components,
  directives,
  colors
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
