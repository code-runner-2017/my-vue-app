<template>
    <v-flex xs12 sm3 mr-2>
        <v-card>
            <v-img
                    :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                    height="150px"
                    width="100%"
            ></v-img>

            <v-card-title primary-title>
                <div>
                    <h4 class=" mb-0">{{ title }}</h4>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-checkbox></v-checkbox>
                <v-btn flat color="orange">Select</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "Thumb",
        props: ['src', 'title'],
    }
</script>

<style scoped>

</style>