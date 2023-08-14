<template>
    <div class="section">

        <v-sheet class="d-flex flex-wrap justify-center">
            <v-sheet class="w-50">
                <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP"></v-file-input>
            </v-sheet>
            
            <v-sheet class="ma-5">
            <v-btn prepend-icon="mdi mdi-account-remove" variant="tonal">
                Buscar
            </v-btn>
            </v-sheet>
        </v-sheet>

    </div>
</template>

<script>
export default {
    data: () => ({
        rules: [
            value => {
                return !value || !value.length || value[0].size < 5000000 || 'El archivo ZIP debe pesar menos de 5MB!'
            },
        ],
    }),
}
</script>

<style>
.section {
    width: 95%;
    max-width: 120rem;
    margin: 100px auto;
    min-height: 600px;
    padding: 20px 10px;
    border: 1px solid #E0E0E0;
}
</style>