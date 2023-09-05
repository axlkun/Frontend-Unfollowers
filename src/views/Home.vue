<template>
    <div>
        <!-- Seccion de inicio -->
        <v-sheet class="d-flex flex-sm-row flex-column justify-center align-center bg-grey-lighten-4"
            style="min-height: 90vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="custom-sizing mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-sm-h2 text-h3 mb-8 font-weight-bold text-grey-darken-3">Descubre quién no te sigue de vuelta
                        en <span class="text-pink">Instagram</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img :src="instagramLogo" alt="Icono Instagram SVG" style="width: 32px; height: 32px;"
                                    loading="lazy" />
                            </v-icon>
                        </a>
                    </h1>

                    <h2 class="text-h6 text-grey-darken-1 font-weight-bold">
                        ¡Descubre al instante quién no te sigue en Instagram sin necesidad de contraseñas! Toma el control de tu círculo social de forma sencilla y segura.
                    </h2>

                    <v-sheet class="d-flex flex-sm-row flex-column align-center bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" @click="redirectToResults"
                            class="mt-10 mx-center" color="pink">
                            Quién no me sigue
                        </v-btn>
                    </v-sheet>

                </v-sheet>


            </v-sheet>

            <v-sheet class="mt-10 d-flex flex-column justify-center bg-grey-lighten-4">
                <v-alert class="custom-sizing" color="green-darken-4" icon="mdi mdi-security" title="Sin Contraseñas"
                    text="Unfollowers nunca solicita tus credenciales de Instagram para funcionar. Tu información personal está completamente a salvo."
                    variant="tonal"></v-alert>
                <img :src="imgHome" alt="Imagen Home SVG" class="custom-sizing-img" loading="lazy" />
            </v-sheet>
        </v-sheet>

        <!-- Seccion del como funciona -->
        <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto" style="min-height: 100vh">

            <v-sheet class="pa-5 text-center">
                <h2 class="text-h4 ma-1 font-weight-black text-pink">¿Cómo funciona Unfollowers Tracker?</h2>
                <p class="text-h7 ma-5 font-weight-bold text-grey-darken-1">Nuestra herramienta analiza tus datos
                    proporcionados y compara tu lista de seguidores con la lista de personas a las que sigues. Luego, te
                    muestra quiénes no te siguen de vuelta.</p>
            </v-sheet>

            <v-expansion-panels>
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

        <!-- seccion del video tutorial -->
        <v-sheet class="d-flex flex-column align-center justify-center bg-grey-lighten-4" style="min-height: 100vh" id="steps">
            <v-sheet class="pa-5 text-center bg-grey-lighten-4">
                <h2 class="text-h4 ma-1 font-weight-black text-pink">Video tutorial: Cómo utilizar nuestra herramienta</h2>
                <p class="text-h7 ma-5 font-weight-bold text-grey-darken-1">Aprende paso a paso cómo sacar el máximo
                    provecho de <span class="text-pink">Unfollowers Tracker</span> para descubrir quiénes no te siguen de
                    vuelta en Instagram.</p>
            </v-sheet>

            <v-sheet class="bg-grey-lighten-4">
        
                    <iframe class="video" src="https://www.youtube.com/embed/cogo5gbBJC8" title="Descubre quién no te sigue en Instagram SIN riesgos de iniciar sesión | Unfollowers Tracker" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
            </v-sheet>

        </v-sheet>

        <!-- seccion de Por que Unfollowers -->
        <v-sheet class="d-flex flex-column justify-center" style="min-height: 100vh">
            <v-sheet class="pa-5 text-center">
                <h2 class="text-h4 ma-1 font-weight-black text-pink">¿Por qué usar Unfollowers Tracker?</h2>
                <p class="text-h6 ma-1 font-weight-bold text-grey-darken-1">La manera mas segura de conocer tus unfollowers
                    y fans</p>
            </v-sheet>

            <v-sheet class="d-flex flex-sm-row flex-column justify-center" style="gap: 20px;">
                <v-sheet v-for="item in whyItems" :key="item.id" elevation="2" max-width="400" rounded="lg" width="90%"
                    class="pa-4 text-center custom-sizing">
                    <v-icon class="mb-5" color="pink" :icon="item.icon" size="112"></v-icon>

                    <h2 class="text-h5 mb-6">{{ item.title }}</h2>

                    <p class="mb-4 text-medium-emphasis text-body-5">
                        {{ item.description }}
                    </p>

                </v-sheet>
            </v-sheet>
        </v-sheet>

        <!-- seccion de contacto  -->
        <v-sheet class="d-flex flex-sm-row flex-column justify-center align-center bg-grey-lighten-4" style="min-height: 100vh;"
            id="contact">
            <v-sheet class="pa-5 text-center bg-grey-lighten-4 custom-sheet-size">
                <h2 class="text-sm-h3 text-h4 ma-5 font-weight-black text-pink">Contactar</h2>
                <p class="text-h5 ma-5 font-weight-bold text-grey-darken-1">¿Tienes alguna pregunta, inquietud o simplemente
                    quieres decir hola? No dudes en ponerte en contacto.</p>
                <v-btn prepend-icon="mdi mdi-email-arrow-right-outline" variant="elevated"
                    href="mailto:axelcruz.dev@gmail.com" class="ma-5" color="pink">
                    Escribir un correo
                </v-btn>
            </v-sheet>

            <img :src="imgContacto" alt="Imagen Contacto SVG" class="custom-sizing-img-contacto" loading="lazy" />
        </v-sheet>

        <v-sheet class="d-flex flex-column align-center justify-center background-custom" style="min-height: 100vh;">
            <v-sheet class="pa-5 text-center bg-transparent custom-sheet-size">
                <h2 class="text-sm-h3 text-h4 ma-5 font-weight-black text-pink">¡Empieza ahora!</h2>
                <p class="text-h5 ma-5 font-weight-bold text-grey-darken-1">No esperes más para descubrir quiénes no te siguen de vuelta en Instagram. Nuestra herramienta gratuita está lista para ayudarte a gestionar tu lista de seguidores.</p>
                <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated"
                    class="ma-5" color="pink" @click="redirectToResults">
                    Quien no me sigue
                </v-btn>
            </v-sheet>
        </v-sheet>

    </div>
</template>

<script>
import { scrollToSection } from '../utils/utils';
import instagramLogo from '../assets/instagram-logo.svg';
import imgHome from '../assets/imagen-home.svg';
import imgContacto from '../assets/imagen-contacto.svg';

export default {

    data: () => ({
        instagramLogo,
        imgContacto,
        imgHome,

        stepsItems: [ /* texto para la seccion de tutorial */
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
                description: 'En Unfollowerstracker.com presiona "QUIEN NO ME SIGUE". Después da clic en "Selecciona el archivo ZIP" para abrir el explorador de archivos y elige el archivo ZIP que descargaste previamente. Una vez cargado el archivo da clic en "Buscar" y conoce los resultados!',
            }
        ],
        whyItems: [ /* texto para la seccion de por que unfollowers */
            {
                id: 1,
                icon: 'mdi-security',
                title: 'Seguridad',
                description: 'Unfollowers Tracker no necesita acceso a tu cuenta. Tus datos están protegidos y seguros en todo momento.'
            },
            {
                id: 2,
                icon: 'mdi-lightning-bolt',
                title: 'Resultados Instantáneos',
                description: 'Obtén resultados al instante. Con nuestra herramienta, no tienes que esperar para conocer el estado de tus seguidores. '
            },
            {
                id: 3,
                icon: 'mdi-account-group',
                title: 'Optimización de tu Círculo Social',
                description: 'Ajusta tu lista de seguidores de manera sencilla. Identifica a aquellos que ya no te siguen y toma decisiones informadas sobre a quién seguir.'
            }
        ],
    }),

    methods: {

        scrollToSection, /* se delcara el metodo importado */

        redirectToResults() {
            // Realiza la redirección a la página '/results'
            this.$router.push('/results');
        }
    },

}

</script>

<style scoped>
.custom-sizing-img-contacto {
    /* adapta la imagen de contacto*/
    max-width: 300px;
    /* vista movil */
    max-height: 400px;
    margin: -50px auto;

    @media only screen and (min-width: 600px) {
        /* resto de vistas */
        max-width: 650px;
        max-height: 650px;
        margin: 0 0 0 -80px;
    }
}

.video {
    /* adapta la sección de contacto*/
    /* vista movil */
    width: 100%;
    height: auto;

    @media only screen and (min-width: 600px) {
        width: 640px;
        height: 360px;
    }
}
.custom-sheet-size {
    /* adapta la sección de contacto*/
    /* vista movil */
    width: 100%;
    height: auto;

    @media only screen and (min-width: 600px) {
        width: 40%;
    }
}

.background-custom{
    background: radial-gradient(circle, rgba(252,228,236,1) 27%, rgba(236,239,241,1) 50%);
}

</style>