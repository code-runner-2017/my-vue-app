<template>
    <v-container grid-list-sm text-xs-center>
        <v-layout row wrap>
            <v-flex xs1 v-for="id in 14">
                <v-card dark color="primary">
                    <v-card-text class="px-0">{{id}}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "TestLayout"
    }
</script>

<style scoped>

</style>