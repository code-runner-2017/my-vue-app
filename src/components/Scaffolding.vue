<template>
    <div> <!-- Use one root element under template, eg. DIV -->
        <Component1 :title="item"
                          :src="getRandomSrc()" v-for='item in items' v-key="item"/>

        <Component2 v-if="val" @click="onClick"/>
        {{ text }}
        <slot></slot>

        <slot name="header"></slot>
    </div>
</template>

<script>
    // import Component1 from './Component1'
    // import Component2 from './Component2'

export default {
    name: "Scaffolding",
    components: {
        /* Component1, Component2, ... */
    },
    props: ['text'],
    /* or typed properties:
    props: {
            title: String,
            likes: Number,
            isPublished: Boolean,
            commentIds: Array,
            author: Object,
            callback: Function,
            contactsPromise: Promise,
            foo: {
                type: String,
                required: true
            },
            fii: {
                type: String,
                default: 'abc'
            }

    },
    */
    methods: {
        onSelected : function(param) {
            // eg. this.$emit('myEvent')
        }
    },
    data() {
        return {
            // items: [],
            // ...
        }
    },
    computed: {     // for computed data
    /*
        items: function() {
            return this.myitems;
        }
     */
    },
    mounted () {
        /* Eg. invokes a service that returns a promise
        WorkspaceServices.getWorkspaces()
            .then(response => {
                this.items = response.data.items;
        })
         */
    },
    watch: {
        text() {
            // invoked when the 'text' property value changes
        }
    },
    beforeDestroy() {
        this.player.remove();
    },
    // type Ctrl-space in Intellij for more options
}
</script>

<style scoped>

</style>