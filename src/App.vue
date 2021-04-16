<template>
  <div class="w-full h-full">
    <router-view
      class="relative w-full h-full"
      style="min-height: 100vh"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ContainerMain from './components/ContainerMain.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ContainerMain,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0 px;
}
</style>
