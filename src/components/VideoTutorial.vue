<template>

    <v-sheet class="d-flex flex-column align-center justify-center bg-grey-lighten-4" style="min-height: 100vh" id="steps">
        <v-sheet class="pa-5 text-center bg-grey-lighten-4">
            <h2 class="text-h4 ma-1 font-weight-black text-pink">Video tutorial: Cómo utilizar nuestra herramienta</h2>
            <p class="text-h7 ma-5 font-weight-bold text-grey-darken-1">Aprende paso a paso cómo sacar el máximo
                provecho de <span class="text-pink">Unfollowers Tracker</span> para descubrir quiénes no te siguen de
                vuelta en Instagram.</p>
        </v-sheet>

        <v-sheet class="bg-grey-lighten-4">
    
                <iframe class="video" src="https://www.youtube.com/embed/GxOowXWueoo" title="Descubre quién no te sigue en Instagram SIN riesgos de iniciar sesión | Unfollowers Tracker" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
        </v-sheet>

    </v-sheet>

</template>
    
<script>

export default {

    name: 'VideoTutorial',

}

</script>
    
<style scoped>
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
</style>