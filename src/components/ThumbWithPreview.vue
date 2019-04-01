<template>
        <v-dialog
                v-model="dialog"
                width="500" height="500">

            <template v-slot:activator="{ on }">
                <Thumb :src="src" :title="title" @click="dialog=true"/>
            </template>

            <v-card class="vcard">
                <v-img :src="src" width="500" height="500" v-if="Math.random() > 0.3"/>
                <VideoPlayer v-else/>
            </v-card>
        </v-dialog>
</template>

<script>
    import Thumb from './Thumb'
    import VideoPlayer from "./VideoPlayer";

    export default {
        name: "ThumbWithPreview",
        components: {VideoPlayer, Thumb },
        props: ['src', 'title'],
        data () {
            return {
                dialog: false
            }
        },
        methods: {
            onThumbClicked: function() {
                this.dialog = true;
            }
        }
    }
</script>

<style scoped>
.vcard {
    background-color: black;
    overflow: hidden;
}
</style>