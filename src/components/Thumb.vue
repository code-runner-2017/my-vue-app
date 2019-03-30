<template>
    <div class="thumb">
            <img :src="src" :alt="title">
            <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "Thumb",
        props: ['src', 'title'],
    }
</script>

<style scoped>
    .thumb {
        display: inline;
        margin-right: 4px;
    }
</style>