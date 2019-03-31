<template>
    <v-layout row>
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp" >
            <v-flex d-flex xs12>
                <v-list>
                    <v-list-tile dense v-for="item in items"
                                 :key="item.title" @click="$emit('selected', item)">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
    export default {
        name: "Navigator",
        data() {
            return {
                items: ['Images','Videos', 'Documents', 'Products'],
                drawer: null
            }
        },
    }
</script>

<style scoped>

</style>