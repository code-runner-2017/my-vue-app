<template>
    <v-layout >
        <Navigator @selected="onWorkspaceSelected"/>
        <v-container grid-list-md pt-0 align-start fill-height>
            <Contents :items="items"/>
        </v-container>
    </v-layout>
</template>

<script>
    import Navigator from "./Navigator";
    import Contents from './Contents'
    import Model from '../../services/Model'

    export default {
        name: "Serp",
        data() {
            return {
                myitems: ["Matrix", "Blade Runner", "Gone with the wind", "Citizen Kane", "Fargo", "Shining"],
                workspace: null,
                filters: null,
                sort: null
            }
        },
        components: {Navigator, Contents},
        computed: {
            items: function() {
                return this.myitems;
            }
        },
        methods: {
            onWorkspaceSelected(name) {
                this.workspace = name;
                this.updateModel();
            },
            updateModel() {
                Model.getItems({
                    workspace: this.workspace,
                    filters: this.filters,
                    sort: this.sort
                }).then(response => {
                    this.myitems = response.data;

                });
            },

        }
    }
</script>

<style scoped>

</style>