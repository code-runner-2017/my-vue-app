<template>
    <v-container px-2 py-2>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title class="white--text">Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>

        <v-spacer/>

        <v-layout mt-2>
            <WorkspaceNavigator @selected="onWorkspaceSelected"/>
            <v-container grid-list-md pt-0>
                <v-layout row wrap>
                    <ThumbWithPreview :src="item.url" :title="item.title" v-for='item in items'/>
                </v-layout>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
    import Thumb from './Thumb'
    import ThumbWithPreview from './ThumbWithPreview'
    import WorkspaceNavigator from './WorkspaceNavigator'
    import ImageServices from '../services/ImageServices'

    export default {
        name: "MainPage",
        components: {
            Thumb, WorkspaceNavigator, ThumbWithPreview
        },
        methods: {
            onWorkspaceSelected: function(workspaceName) {
                alert(workspaceName)
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