<template>
        <v-dialog
                v-model="dialog"
                width="500" height="500">

            <template v-slot:activator="{ on }">
                <Thumb :src="src" :title="title" @click="dialog=true"/>
            </template>

            <v-card>
                <v-img :src="src" width="500" height="500"/>
            </v-card>
        </v-dialog>
</template>

<script>
    import Thumb from './Thumb'

    export default {
        name: "ThumbWithPreview",
        components: { Thumb },
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

</style>