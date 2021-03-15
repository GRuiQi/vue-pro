<template>
  <div id="app">
    <router-view @change-view="onChangeView"/>
    <!-- <Home /> -->
  </div>
</template>

<script>
  // import Home from '@/views/home'
  import router from '@/router'
  
  export default {
    name: 'App',
    components: {
      // Home
    },
    setup () {
      function onChangeView (event) {
        router.push({
          path: event
        })
      }
      return {
        onChangeView
      }
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
}
.top-theme{
  width:100%;
  height:50%;
}
</style>
