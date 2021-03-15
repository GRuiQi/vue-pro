<template>
  <div id="app">
  <img  class="top-theme" alt="Vue logo" src="../assets/logo.png">
  <swiper @sub-event="onTestClick" :url="m2"/>
  <!-- <router-link to="/detail">Detail</router-link> -->
  <router-link to="/detail">Detail</router-link>
  <router-view />
  </div>
</template>

<script>
import Swiper from '../components/swiper'
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
