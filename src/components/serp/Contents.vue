<template>
    <v-layout row wrap>
        <ThumbWithPreview :title="item"
                          :src="getRandomSrc()" v-for='item in items' v-key="item"/>
    </v-layout>
</template>

<script>
    import ThumbWithPreview from '../ThumbWithPreview'

    export default {
        name: "Contents",
        components: {ThumbWithPreview},
        methods: {
            getRandomSrc() {
                return 'https://unsplash.it/150/300?image=' + Math.floor((Math.random() * 100)+1);
            }
        },
        props: ['items']
    }
</script>

<style scoped>

</style>