<template>
    <div class="section">

        
        <v-sheet class="d-flex flex-column justify-center align-center" style="min-height: 90vh;">
            <v-sheet class="custom-sizing mx-auto mb-8 text-center">
                <h1 class="text-h3 mb-8">Organiza tu Lista de Seguidores en <span class="font-weight-bold">Instagram</span>
                    <a href="https://www.instagram.com/" target="_blank">
                        <v-icon>
                            <img src="src/assets/instagram-logo.svg" alt="Icono SVG" style="width: 32px; height: 32px;" />
                        </v-icon>
                    </a>
                </h1>
                <p>Descubre quiénes <span class="font-weight-bold">no te siguen de vuelta</span> y a <span
                        class="font-weight-bold">quiénes no sigues.</span> ¡Ajusta tu círculo social de manera sencilla!
                </p>
            </v-sheet>

            <v-sheet class="w-100 d-flex flex-column justify-center align-center">
                
                <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP" @change="handleFileChange" class="custom-sizing"
                    @click:clear="clearFile">
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
        alertText: 'No se ha seleccionado el archivo ZIP.'
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
  @media only screen and (min-width: 600px) { /* breakpoint para móviles */
    width: 50%;
  }
}
</style>