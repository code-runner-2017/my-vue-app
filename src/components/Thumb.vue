<template>
    <div>
        <img :src="src" alt="">
    </div>
</template>

<script>
    export default {
        name: "Thumb",
        props: ['src'],
    }
</script>

<style scoped>
div {
    display: inline;
    margin-right: 4px;
}
</style>