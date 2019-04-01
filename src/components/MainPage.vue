<template>
    <v-container px-2 py-2>
        <Header/>

        <v-spacer/>

        <Serp/>
    </v-container>
</template>

<script>
    import ImageServices from '../services/ImageServices'
    import Header from './Header'
    import Serp from './serp/Serp'

    export default {
        name: "MainPage",
        components: {
            Header, Serp
        },
        methods: {
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