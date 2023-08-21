<template>
    <div class="section-mobile">
        <v-sheet class="d-flex flex-column bg-grey-lighten-4 pt-sm-16 pt-0" style="min-height: 100vh">

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

                    <!-- <v-banner v-for="item in unfollowers" lines="one" icon="mdi-face-man-profile" color="pink"
                        class="my-4 custom-sizing-card" variant="tonal">
                        <v-banner-text>
                            <v-row class="">
                                <v-col cols="12" sm="auto">
                                    <p>@{{ item.user_name }}</p>
                                </v-col>
                                <v-col cols="12" sm="auto">
                                    <p class="text-grey">Desde {{ item.date }}</p>
                                </v-col>
                            </v-row>
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-row>
                                <v-col cols="12" sm="auto">
                                    <v-btn class="text-grey-darken-2" size="x-small">Ver perfil</v-btn>
                                </v-col>
                                <v-col cols="12" sm="auto">
                                    <v-btn class="" size="x-small">Dejar de seguir</v-btn>
                                </v-col>
                            </v-row>
                        </template>
                    </v-banner> -->

                    <div v-for="item in unfollowers" class="d-flex justify-space-between align-center custom-sizing-card bg-white pa-5 mb-5">

                        <div class="d-flex align-center">
                            <v-icon icon="mdi-face-man-profile" color="pink" class="ma-1"></v-icon>

                            <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                <p class="ma-1">@{{ item.user_name }}</p>
                                <p class="ma-1 text-grey" style="font-size: 14px;">Desde {{ item.date }}</p>
                            </div>
                        </div>

                        <div class="d-flex flex-sm-row flex-column">
                            <v-btn size="x-small" class="ma-2" variant="tonal" color="grey-darken-3">Ver perfil</v-btn>
                            <v-btn size="x-small" class="ma-2" variant="tonal" color="pink">Dejar de seguir</v-btn>
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
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data: () => ({
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
        
    },
}
</script>

<style scoped>
.custom-sizing-card {
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        width: 75%;
        margin: 0 auto;
    }
}
</style>