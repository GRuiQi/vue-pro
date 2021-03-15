<template>
  <div id="app">
  <img  class="top-theme" alt="Vue logo" src="@/assets/logo.png">
  <swiper @sub-event="onSwitchClick" :url="m2"/>
  </div>
</template>

<script>
import Swiper from '../components/swiper'
import m2 from '@/assets/home/m2.jpg'

export default {
  name: 'Home',
  components: {
    Swiper
  },
  setup (props,context) {
    function onSwitchClick () {
      context.emit('change-view','/detail')
    }
    return {
      m2,
      onSwitchClick
    }
  }
}
</script>
