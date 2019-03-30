<template>
    <div>
        <input :value="text"/>
        <v-btn  v-on:click="$emit('click', text)">Click</v-btn>
    </div>
</template>

<script>
    export default {
        name: "MyComponent",
        props: ['text'],
    }
</script>

<style scoped>
    input { border: 1px solid #EEEEEE; }
</style>