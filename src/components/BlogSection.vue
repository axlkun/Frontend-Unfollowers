<template>
    <v-sheet class="d-flex flex-column align-center justify-center background-custom" style="min-height: 100vh;">
        <v-sheet class="bg-transparent pa-5 custom-sheet text-center">
            <v-chip variant="outlined" size="x-large" color="pink" to="/blog">
                Blog
            </v-chip>

            <h2 class="pt-5 text-h4 ma-1 font-weight-black text-pink">Artículos sobre estrategias en redes sociales, como alimentar el algoritmo, planes para crecer
                una audencia y mucho más...</h2>

            <p class="pt-5 text-h7 ma-5 font-weight-bold text-grey-darken-1">Lee los últimos artículos redactados, encuentra uno nuevo cada semana y maneja tus redes
                sociales como un profesional!</p>
        </v-sheet>


        <v-sheet class="d-flex flex-md-row flex-column justify-center bg-transparent mb-10" style="gap: 30px;">
           
            <v-card v-for="article in blogEntry" class="mx-auto rounded-lg" max-width="350" variant="elevated">
                <v-img height="200" :src="`${dominio}${article.imageUrl}`"
                    cover>
                    
                </v-img>

                <v-sheet class="pa-2">

                    <v-chip class="ma-1" variant="text" size="small">{{ article.created_date }}</v-chip>

                    <v-chip v-for="category in article.categories" class="ma-1" variant="outlined" size="small">{{ category.name }}</v-chip>
                        
                  </v-sheet>

                  <v-card-title class="text-visible font-weight-bold">{{ article.title }}</v-card-title>

                <v-card-text class="text-visible">
                    <p>{{ article.summary }}</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="pink" :to="'/blog/' + article.slug">
                        Leer
                    </v-btn>
                </v-card-actions>
            </v-card>
            
        </v-sheet>

    </v-sheet>
</template>

<script>
import api from '../api';

export default {
    name: 'BlogSection',

    props: ['blogEntry'],

    data: () => ({
        dominio: api.defaults.baseURL
    })
}
</script>

<style scoped>
.background-custom {
    background: radial-gradient(circle, rgba(252, 228, 236, 1) 27%, rgba(236, 239, 241, 1) 50%);
}

.custom-sheet {
    @media only screen and (min-width: 960px) {
        width: 70%;
    }
}

.text-visible {
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
    line-height: 1;
}
</style>