<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
  import Home from '@/views/home'

  export default {
    name: 'App',
    components: {
      Home
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
