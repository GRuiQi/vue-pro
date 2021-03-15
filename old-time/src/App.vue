<template>
  <div id="app">
  <img  class="top-theme" alt="Vue logo" src="./assets/logo.png">
  <swiper @sub-event="onTestClick" :url="m2"/>
  </div>
</template>

<script>
import Swiper from './components/swiper'
import m2 from '@/assets/home/m2.jpg'

export default {
  name: 'App',
  components: {
    Swiper
  },
  setup () {
    function onTestClick (event) {
      console.log(event)
    }
    return {
      m2,
      onTestClick
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
