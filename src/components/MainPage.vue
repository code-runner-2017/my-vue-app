<template>
    <v-container>
        <Thumb v-for='item in items' :src="item.url" :title="item.title"/>
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
                items: []
            }
        },
        mounted () {
            ImageServices.getImages()
                .then(response => {
                    this.items = response.data.items;

                });
        }
    }
</script>

<style scoped>

</style>