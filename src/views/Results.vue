<template>
    <div class="section-mobile">

        <v-sheet class="d-flex flex-sm-row flex-column justify-center align-center bg-grey-lighten-4"
            style="min-height: 100vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="custom-sizing mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-sm-h2 text-h3 mb-8 font-weight-bold text-grey-darken-3">Conoce tu lista de Fans
                        y <span class="text-pink">Unfollowers</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img src="src/assets/instagram-logo.svg" alt="Icono SVG"
                                    style="width: 32px; height: 32px;" />
                            </v-icon>
                        </a>
                    </h1>

                    <p class="text-h6 text-grey-darken-1 font-weight-bold">Gestiona tu lista de seguidos y seguidores. Solo adjunta el ZIP que solicitaste a Instagram aquí abajo &#128071;
                    </p>
                </v-sheet>

                <v-sheet class="w-100 d-flex flex-column justify-center align-center bg-grey-lighten-4">

                    <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input>

                    <v-sheet class="d-flex flex-sm-row flex-column text-center mt-5 justify-center w-100 bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" @click="requestAPI" class="ma-3"
                            color="pink">
                            Buscar
                        </v-btn>

                        <v-btn href="/#steps" prepend-icon="mdi mdi-help" variant="tonal" class="ma-3">
                            Cómo obtengo el ZIP
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <v-sheet class="mt-10 d-flex flex-column justify-center bg-grey-lighten-4">
                <img src="src/assets/imagen-results.svg" alt="Icono SVG" class="custom-sizing-img" />
            </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-column bg-white pt-sm-16 pt-0" style="min-height: 100vh">

            <v-tabs v-model="tab" fixed-tabs class="bg-transparent w-100 ma-5">
                <v-tab>
                    Unfollowers
                </v-tab>
                <v-tab>
                    Fans
                </v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item key="unfollowers" value="unfollowers" class="bg-transparent mb-sm-0 mb-5">

                    <div v-for="item in unfollowers" class="d-flex justify-space-between align-center custom-sizing-card bg-white pa-5 mb-5" style="border-bottom: 1px solid #EEEEEE;">

                        <div class="d-flex align-center">
                            <v-icon icon="mdi-face-man-profile" color="pink" class="ma-1"></v-icon>

                            <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                <p class="ma-1">@{{ item.user_name }}</p>
                                <p class="ma-1 text-grey" style="font-size: 14px;">Desde {{ item.date }}</p>
                            </div>
                        </div>

                        <div class="d-flex flex-sm-row flex-column">
                            <v-btn size="x-small" class="ma-2" variant="tonal" color="grey-darken-3" :href="item.enlace" target="_blank">Ver perfil</v-btn>
                            <v-btn size="x-small" class="ma-2" variant="tonal" color="pink" :href="item.enlace" target="_blank">Dejar de seguir</v-btn>
                        </div>

                    </div>

                </v-window-item>

                <v-window-item key="fans" value="fans">
                    <v-card class="custom-size-card">
                        <v-banner lines="one" icon="mdi-lock" color="deep-purple-accent-4" class="my-4">
                            <v-banner-text>
                                Banner with one line of text.
                            </v-banner-text>

                            <template v-slot:actions>
                                <v-btn>Action</v-btn>
                            </template>
                        </v-banner>
                    </v-card>
                </v-window-item>
            </v-window>
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

import axios from 'axios';
import { scrollToSection } from '../utils/utils';

export default {

    data: () => ({
        currentPage: '/results',
        scrollToSection,
        rules: [
            value => {
                return !value || !value.length || value[0].size < 5000000 || 'El archivo ZIP debe pesar menos de 5MB'
            },
        ],
        selectedFile: null,
        alert: false,
        alertText: '',
        tab: 'unfollowers',
        unfollowers: [
            {
                "user_name": "_.histranger._",
                "enlace": "https://www.instagram.com/_.histranger._",
                "date": "2023-08-02"
            },
            {
                "user_name": "maar11.11",
                "enlace": "https://www.instagram.com/maar11.11",
                "date": "2023-07-31"
            },
            {
                "user_name": "esthepanycruz",
                "enlace": "https://www.instagram.com/esthepanycruz",
                "date": "2023-07-31"
            },
            {
                "user_name": "lily_lbm",
                "enlace": "https://www.instagram.com/lily_lbm",
                "date": "2023-07-31"
            },
            {
                "user_name": "sof_islass",
                "enlace": "https://www.instagram.com/sof_islass",
                "date": "2023-07-31"
            }
        ]
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

                const user = this.getUser();

                if (user) {

                } else {
                    this.alertText = 'Lo siento, parece que el nombre del archivo ZIP no es el original o no es el ZIP esperado.'
                    this.alert = true;
                }

            } else {
                this.alertText = 'No se ha seleccionado el archivo ZIP.'
                this.alert = true;
            }
        },

        // Limpiamos de memoria el archivo deseleccionado
        clearFile() {
            this.selectedFile = null;
        },

        getUser() {

            const fileName = this.selectedFile.name;

            if (fileName.includes('-')) {

                const split = fileName.split('-');

                if (split[0] == 'instagram' && split[split.length - 1].includes('.zip')) {

                    const lastElement = split[split.length - 1];

                    return lastElement.replace('.zip', '');

                }

            }

            return false;
        }
    },
}
</script>

<style scoped>

.custom-sizing {
    width: 90%;
    margin: 0 auto;
  
    @media only screen and (min-width: 600px) {
        width: 75%;
        margin: 0;
    }
  }

.custom-sizing-card {
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        width: 75%;
        margin: 0 auto;
    }
}

.custom-sizing-img {
    max-width: 250px;
    max-height: 250px;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        max-width: 550px;
        max-height: 550px;
        margin: -70px 0;
    }
}
</style>