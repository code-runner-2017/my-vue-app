<template>
    <v-container>
        <Thumb v-for='i in 20' :src="urls[i%3]"/>
    </v-container>
</template>

<script>
    import Thumb from './Thumb'
    import ImageServices from '../services/ImageServices'

    export default {
        name: "MainPage",
        components: {
            Thumb
        },
        methods: {
            foo: function() {

            }
        },
        props: ['text'],
        data() {
            return {
                urls: []
            }
        },
        mounted () {
            ImageServices.getImages()
                .then(response => {
                    this.urls = response.data.urls
                });
        }
    }
</script>

<style scoped>

</style>