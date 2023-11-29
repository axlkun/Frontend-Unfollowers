<template>
    <v-sheet class="d-flex flex-column align-center justify-center background-custom" style="min-height: 100vh;">
        <v-sheet class="bg-transparent pa-5 custom-sheet text-center">
            <v-chip variant="outlined" size="x-large" color="pink">
                Blog
            </v-chip>

            <h2 class="pt-5 text-h4 ma-1 font-weight-black text-pink">Artículos sobre estrategias en redes sociales, como alimentar el algoritmo, planes para crecer
                una audencia y mucho más...</h2>

            <p class="pt-5 text-h7 ma-5 font-weight-bold text-grey-darken-1">Lee los últimos artículos redactados, encuentra uno nuevo cada semana y maneja tus redes
                sociales como un profesional!</p>
        </v-sheet>


        <v-sheet class="d-flex flex-md-row flex-column justify-center bg-transparent mb-10" style="gap: 30px;">
           
            <v-card class="mx-auto rounded-lg" max-width="350" variant="elevated">
                <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover>
                    
                </v-img>

                <v-sheet class="pa-2">

                    <v-chip class="ma-1" variant="text" size="small">18 Agosto, 2024</v-chip>

                    <v-chip class="ma-1" variant="outlined" size="small">Instagram</v-chip>
            
                    <v-chip class="ma-1" variant="outlined" size="small">Estrategia</v-chip>
            
                  </v-sheet>

                  <v-card-title class="text-visible font-weight-bold">Top 10 Australian beaches and more text</v-card-title>

                <v-card-text class="text-visible">
                    <p>too much text here cuz is like an article summary and I need a litle bit more text here thanks</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="pink">
                        Leer
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto rounded-lg" max-width="350" variant="elevated">
                <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover>
                    
                </v-img>

                <v-sheet class="pa-2">

                    <v-chip class="ma-1" variant="text" size="small">18 Agosto, 2024</v-chip>

                    <v-chip class="ma-1" variant="outlined" size="small">Instagram</v-chip>
            
                    <v-chip class="ma-1" variant="outlined" size="small">Estrategia</v-chip>
            
                  </v-sheet>

                  <v-card-title class="text-visible font-weight-bold">Top 10 Australian beaches and more text</v-card-title>

                <v-card-text class="text-visible">
                    <p>too much text here cuz is like an article summary and I need a litle bit more text here thanks</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="pink">
                        Leer
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto rounded-lg" max-width="350" variant="elevated">
                <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover>
                    
                </v-img>

                <v-sheet class="pa-2">

                    <v-chip class="ma-1" variant="text" size="small">18 Agosto, 2024</v-chip>

                    <v-chip class="ma-1" variant="outlined" size="small">Instagram</v-chip>
            
                    <v-chip class="ma-1" variant="outlined" size="small">Estrategia</v-chip>
            
                  </v-sheet>

                  <v-card-title class="text-visible font-weight-bold">Top 10 Australian beaches and more text</v-card-title>

                <v-card-text class="text-visible">
                    <p>too much text here cuz is like an article summary and I need a litle bit more text here thanks</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="pink">
                        Leer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-sheet>

    </v-sheet>
</template>

<script>

export default {
    name: 'BlogSection'
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