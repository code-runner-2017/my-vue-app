<template>
  <v-app>
    <MainPage/>
<!--    <TestLayout/>-->
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MainPage from './components/MainPage'
import TestLayout from './components/TestLayout'


export default {
  name: 'App',
  components: {
    HelloWorld,
    MainPage,
    TestLayout,

  },
  data () {
    return {
      //
    }
  }
}
</script>
