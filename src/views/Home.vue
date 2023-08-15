<template>
    <div class="section">

        <v-sheet class="d-flex flex-wrap justify-center">
            <v-sheet class="w-50">
                <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP" @change="handleFileChange"
                    @click:clear="clearFile">
                </v-file-input>
            </v-sheet>

            <v-sheet class="ma-5">
                <v-btn prepend-icon="mdi mdi-account-remove" variant="tonal" @click="requestAPI">
                    Buscar
                </v-btn>
            </v-sheet>
        </v-sheet>

        <v-snackbar v-model="alert" min-height="80px" transition="scroll-y-reverse-transition" >
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
                this.showAlert();
            }
        },

        // Limpiamos de memoria el archivo deseleccionado
        clearFile() {
            this.selectedFile = null;
        },

        showAlert() {
            this.alert = true;
            // setTimeout(() => {
            //     this.alert = false;
            // }, 5000);
        }

    }
}

</script>

<style></style>