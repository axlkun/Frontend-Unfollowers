<template>
    <div class="section-mobile">

        <v-sheet class="d-flex flex-sm-row flex-column justify-center align-center bg-grey-lighten-4"
            style="min-height: 100vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="custom-sizing mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-sm-h2 text-h3 mb-8 font-weight-bold text-grey-darken-3">Organiza tu Lista de Seguidores
                        en <span class="text-pink">Instagram</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img src="src/assets/instagram-logo.svg" alt="Icono SVG"
                                    style="width: 32px; height: 32px;" />
                            </v-icon>
                        </a>
                    </h1>

                    <p class="text-h6 text-grey-darken-1 font-weight-bold">Descubre quiénes no te siguen de vuelta y a
                        quiénes no sigues. ¡Ajusta tu círculo social de manera
                        sencilla!
                    </p>
                </v-sheet>

                <v-sheet class="w-100 d-flex flex-column justify-center align-center bg-grey-lighten-4">

                    <!-- <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input> -->

                    <v-sheet class="d-flex flex-sm-row flex-column text-center mt-5 justify-center w-100 bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" href="/results" class="ma-3"
                            color="pink">
                            Quién no me sigue
                        </v-btn>

                        <v-btn @click="scrollToSection('steps',currentPage)" prepend-icon="mdi mdi-help" variant="tonal" class="ma-3">
                            Como funciona
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <v-sheet class="mt-10 d-flex flex-column justify-center bg-grey-lighten-4">
                <v-alert class="custom-sizing" color="green-darken-4" icon="mdi mdi-security" title="Sin Contraseñas"
                    text="Unfollowers nunca solicita tus credenciales de Instagram para funcionar. Tu información personal está completamente a salvo."
                    variant="tonal"></v-alert>
                <img src="src/assets/imagen-home.svg" alt="Icono SVG" class="custom-sizing-img" />
            </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-column justify-center" style="min-height: 100vh" id="steps">

            <v-sheet class="pa-5 text-center">
                <h2 class="text-h4 ma-1 font-weight-black text-pink">¿Cómo funciona?</h2>
                <p class="text-h6 ma-1 font-weight-bold text-grey-darken-1">Sigue los siguientes pasos y descubre tus fans y
                    unfollowers</p>
            </v-sheet>

            <v-expansion-panels class="custom-sizing mx-auto">
                <v-expansion-panel v-for="item in stepsItems" :key="item.id" :class="item.color" class="ma-5">
                    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="text-h6"
                        style="min-height: 80px" :class="item.color2">
                        <span class="mdi ma-2" :class="item.icon"></span> {{ item.title }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text style="line-height: 2;">
                        <div v-html="item.description"></div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        </v-sheet>

        <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4" style="min-height: 100vh">
            <v-sheet class="pa-5 text-center bg-grey-lighten-4">
                <h2 class="text-h4 ma-1 font-weight-black text-pink">¿Por qué usar Unfollowers?</h2>
                <p class="text-h6 ma-1 font-weight-bold text-grey-darken-1">La manera mas segura de conocer tus unfollowers
                    y fans</p>
            </v-sheet>

            <v-sheet class="d-flex flex-sm-row flex-column justify-center bg-grey-lighten-4 " style="gap: 20px;">
                <v-sheet v-for="item in whyItems" :key="item.id" elevation="2" max-width="400" rounded="lg" width="90%"
                    class="pa-4 text-center bg-grey-lighten-4 custom-sizing">
                    <v-icon class="mb-5" color="pink" :icon="item.icon" size="112"></v-icon>

                    <h2 class="text-h5 mb-6">{{ item.title }}</h2>

                    <p class="mb-4 text-medium-emphasis text-body-5">
                        {{ item.description }}
                    </p>

                </v-sheet>
            </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-column align-center justify-center bg-white" style="min-height: 100vh;" id="contact">
            <v-sheet class="pa-5 text-center bg-white custom-sizing-contacto">
                <h2 class="text-sm-h3 text-h4 ma-1 font-weight-black text-pink">Contáctame</h2>
                <p class="text-h5 ma-1 font-weight-bold text-grey-darken-1">¿Tienes alguna pregunta, inquietud o simplemente
                    quieres decir hola? No dudes en ponerte en contacto.</p>
                <v-btn prepend-icon="mdi mdi-email-arrow-right-outline" variant="elevated"
                    href="mailto:axelcruz.dev@gmail.com" class="ma-3" color="pink">
                    Escribir un correo
                </v-btn>
            </v-sheet>

            <img src="src/assets/imagen-contacto.svg" alt="Icono SVG" class="custom-sizing-img-contacto" />
        </v-sheet>
    </div>
</template>

<script>
import { scrollToSection } from '../utils/utils';

export default {

    data: () => ({
        currentPage: '/',
        rules: [
            value => {
                return !value || !value.length || value[0].size < 5000000 || 'El archivo ZIP debe pesar menos de 5MB'
            },
        ],
        stepsItems: [
            {
                id: 1,
                color: 'bg-green-lighten-5',
                color2: 'text-green-darken-4',
                icon: 'mdi-instagram',
                title: '1- Solicita tu información a Instagram',
                description: '1- En tu dispositivo móvil ingresa a tu cuenta de Instagram, dirigete a tu perfil y abre el menú superior derecho, posteriormente accede a "Tu actividad" y selecciona "Descargar tu información"<br> 2- Toca en "Solicitar descarga", selecciona tu perfil de Instagram y presiona en "Siguiente"<br> 3- Ahora, dentro de la sección "Seleccionar tipos de información", escoge únicamente "Seguidores y seguidos" y presiona "Siguiente"<br> 4- Ahora en "Formato" selecciona "JSON" y en "Intervalo de fechas" selecciona "Desde el principio" y finalmente presiona "Enviar solicitud"'
            },
            {
                id: 2,
                color: 'bg-indigo-lighten-5',
                color2: 'text-indigo-darken-4',
                icon: 'mdi-download-box-outline',
                title: '2- Descarga el ZIP',
                description: '1- Ahora en tu navegador (computadora) abre la cuenta de correo asociado a tu Instagram <br> 2- Abre el correo electrónico enviado por Instagram con asunto "La descarga de tu información de Meta está lista" y da clic en "Descargar tu información" <br> 3- Esto te abrirá una nueva pestaña de Instagram donde te muestra la descarga disponible, da clic en "Descargar" y confirma que es tu cuenta. La descarga comenzará automaticamente',
            },
            {
                id: 3,
                color: 'bg-yellow-lighten-5',
                color2: 'text-yellow-darken-4',
                icon: 'mdi-folder-upload-outline',
                title: '3- Carga el ZIP',
                description: 'En Unfollowers.com, haz clic en "Selecciona el archivo ZIP" para abrir el explorador de archivos y elige el archivo ZIP que descargaste previamente. Una vez cargado el archivo da clic en "Buscar" y conoce los resultados!',
            }
        ],
        whyItems: [
            {
                id: 1,
                icon: 'mdi-security',
                title: 'Seguridad',
                description: 'Unfollowers no necesita acceso a tu cuenta. Tus datos están protegidos y seguros en todo momento.'
            },
            {
                id: 2,
                icon: 'mdi-lightning-bolt',
                title: 'Resultados Instantáneos',
                description: 'Obtén resultados al instante. Con Unfollowers, no tienes que esperar para conocer el estado de tus seguidores. '
            },
            {
                id: 3,
                icon: 'mdi-human',
                title: 'Experiencia Intuitiva',
                description: ' Nuestra plataforma fácil de usar te proporciona una experiencia fluida para que puedas obtener información útil sin complicaciones.'
            }
        ],
    }),

    methods: {

        scrollToSection

    }
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

.custom-sizing-img-contacto {
    max-width: 300px;
    max-height: 400px;
    margin: -50px auto;

    @media only screen and (min-width: 600px) {
        max-width: 550px;
        max-height: 550px;
        margin: -70px 0;
    }
}

.custom-sizing-contacto {
    max-width: 400px;
    max-height: 400px;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        max-width: 650px;
        max-height: 650px;
    }
}

</style>