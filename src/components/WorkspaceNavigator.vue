<template>
    <v-layout row>
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp" >
            <v-flex d-flex xs12>
                <v-list>
                    <v-list-tile dense v-for="item in items"
                            :key="item.title" @click="$emit('selected', item.title)">
                        <v-list-tile-action>
                            <v-icon :class="[item.icon]">{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
    import WorkspaceServices from '../services/WorkspaceServices'

    export default {
        name: "WorkspaceNavigator",
        data() {
            return {
                items: [],
                drawer: null
            }
        },
        mounted() {
            WorkspaceServices.getWorkspaces()
                .then(response => {
                    this.items = response.data.items;
                })
        }
    }
</script>

<style scoped>

</style>