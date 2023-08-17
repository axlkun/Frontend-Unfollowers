<template>
    <div class="section">

        <v-sheet class="d-flex flex-sm-row flex-column  align-center" style="min-height: 85vh">
            <v-sheet class="d-flex flex-column justify-center">
                <v-sheet class="custom-sizing mx-auto mb-8 text-center">
                    <h1 class="text-h3 mb-8 font-weight-bold text-grey-darken-3">Organiza tu Lista de Seguidores en <span
                            class="text-pink">Instagram</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img src="src/assets/instagram-logo.svg" alt="Icono SVG"
                                    style="width: 32px; height: 32px;" />
                            </v-icon>
                        </a>
                    </h1>

                    <p class="text-h6 text-grey font-weight-bold">Descubre quiénes no te siguen de vuelta y a
                        quiénes no sigues. ¡Ajusta tu círculo social de manera
                        sencilla!
                    </p>
                </v-sheet>

                <v-sheet class="w-100 d-flex flex-column justify-center align-center">

                    <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input>

                    <v-sheet class="d-flex flex-sm-row flex-column text-center mt-5 justify-center w-100">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" @click="requestAPI" class="ma-3"
                            color="pink">
                            Buscar
                        </v-btn>

                        <v-btn prepend-icon="mdi mdi-help" variant="tonal" class="ma-3">
                            Como funciona
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <v-sheet class="mt-10 d-flex flex-column justify-center ">
                <v-alert class="custom-sizing" icon="mdi mdi-security" title="Sin Contraseñas"
                    text="Unfollowers nunca solicita tus credenciales de Instagram para funcionar. Tu información personal está completamente a salvo."
                    variant="tonal"></v-alert>
                <img src="src/assets/imagen-home.svg" alt="Icono SVG" class="custom-sizing-img" />
            </v-sheet>
        </v-sheet>

        <v-sheet style="min-height: 100vh" class="">

            <v-sheet class="pa-5 text-center">
                <h2 class="text-h4 ma-1 font-weight-black text-pink">¿Cómo funciona?</h2>
                <p class="text-h6 ma-1 font-weight-bold text-grey">Sigue los siguientes pasos y descubre tus fans y unfollowers</p>
            </v-sheet>

              <v-timeline side="end">
                <v-timeline-item
                  v-for="item in items"
                  :key="item.id"
                  :dot-color="item.color"
                  size="small"
                >
                  <v-alert
                    :value="true"
                    :color="item.color"
                    :icon="item.icon"
                    :title="item.title"
                    variant="tonal"
                  >
                  <div v-html="item.description"></div>
                  </v-alert>
                </v-timeline-item>
              </v-timeline>
        </v-sheet>


        <v-snackbar v-model="alert" min-height="80px" transition="scroll-y-reverse-transition">
            {{ alertText }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="alert = false">
                    <span class="mdi mdi-close"></span>
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    data: () => ({
        rules: [
            value => {
                return !value || !value.length || value[0].size < 5000000 || 'El archivo ZIP debe pesar menos de 5MB'
            },
        ],
        selectedFile: null,
        alert: false,
        alertText: 'No se ha seleccionado el archivo ZIP.',
        items: [
            {
          id: 1,
          color: 'green-darken-4',
          icon: 'mdi-instagram',
          title: 'Solicita tu información a Instagram',
          description: '1- En tu dispositivo móvil ingresa a tu cuenta de Instagram, dirigete a tu perfil y abre el menú superior derecho, posteriormente accede a "Tu actividad" y selecciona "Descargar tu información"<br> 2- Toca en "Solicitar descarga", selecciona tu perfil de Instagram y presiona en "Siguiente"<br> 3- Ahora, dentro de la sección "Seleccionar tipos de información", escoge únicamente "Seguidores y seguidos" y presiona "Siguiente"<br> 4- Ahora en "Formato" selecciona "JSON" y en "Intervalo de fechas" selecciona "Desde el principio" y finalmente presiona "Enviar solicitud"'
        },
        {
          id: 2,
          color: 'indigo-darken-4',
          icon: 'mdi-download-box-outline',
          title: 'Descarga el ZIP',
          description: '1- Ahora en tu navegador (computadora) abre la cuenta de correo asociado a tu Instagram <br> 2- Abre el correo electrónico enviado por Instagram con asunto "La descarga de tu información de Meta está lista" y da clic en "Descargar tu información" <br> 3- Esto te abrirá una nueva pestaña de Instagram donde te muestra la descarga disponible, da clic en "Descargar" e ingresa tu contraseña. La descarga comenzará automaticamente',
        },
        {
          id: 3,
          color: 'yellow-darken-4',
          icon: 'mdi-folder-upload-outline',
          title: 'Carga el ZIP',
          description: 'En Unfollowers.com, haz clic en "Selecciona el archivo ZIP" para abrir el explorador de archivos y elige el archivo ZIP que descargaste previamente. Una vez cargado el archivo da clic en "Buscar" y conoce los resultados!',
        }
      ],
    }),

    methods: {

        // Asignamos el ZIP recibido a la variable selectedFile
        handleFileChange(event) {
            const files = event.target.files;
            if (files.length > 0) {
                this.selectedFile = files[0];
            } else {
                this.clearFile();
            }
        },

        // Realizamos la solicitud a la API 
        requestAPI() {
            if (this.selectedFile) {
                console.log('Archivo seleccionado:', this.selectedFile);
            } else {
                this.alert = true;
            }
        },

        // Limpiamos de memoria el archivo deseleccionado
        clearFile() {
            this.selectedFile = null;
        },
    }
}

</script>

<style scoped>
.custom-sizing {
    width: 100%;

    @media only screen and (min-width: 600px) {
        /* breakpoint para móviles */
        width: 75%;
    }
}

.custom-sizing-img {
    max-width: 250px;
    max-height: 250px;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        /* breakpoint para móviles */
        max-width: 550px;
        max-height: 550px;
        margin: -70px 0;
    }
}
</style>