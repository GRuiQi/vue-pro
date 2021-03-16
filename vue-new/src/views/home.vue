<template>
  <div id="app">
  <img  class="top-theme" alt="Vue logo" src="@/assets/logo.png">
  <swiper @sub-event="onSwitchClick" :url="m2"/>
  </div>
</template>

<script>
import Swiper from '../components/swiper'
import m2 from '@/assets/home/m2.jpg'
import store from '@/store/index'
export default {
  name: 'Home',
  components: {
    Swiper
  },
  setup () {
    function onSwitchClick () {
      store.commit('changeView',{
        routerParams: {
          name: 'Detail',
          params: {
            id: 3
          }
        }
      })
      console.log(store.state.url)

    }
    return {
      m2,
      onSwitchClick
    }
  }
}
</script>
