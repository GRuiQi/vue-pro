<template>
  <div id="app">
  <img  class="top-theme" alt="Vue logo" src="@/assets/logo.png">
  <swiper @sub-event="onSwitchClick" :url="m2"/>
  <button @click="onChangeComponent('keep')">点击切换到Keep组件</button>
  <button @click="onChangeComponent('static')">点击切换到Static组件</button>
  <keep-alive indlude="Static" exclude="Keep">
  <component v-bind:is="currentComponent"/>
  </keep-alive>
  </div>
</template>

<script>
import Swiper from '../components/swiper'
import m2 from '@/assets/home/m2.jpg'
import store from '@/store/index'
import Static from '../components/static'
import Keep from '../components/keep'
import {ref} from 'vue'
const currentComponent = ref('keep')
export default {
  name: 'Home',
  components: {
    Swiper,
    Static,
    Keep
  },
  setup () {
    function onChangeComponent (event) {
        currentComponent.value = event
    }

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
      onSwitchClick,
      currentComponent,
      onChangeComponent
    }
  }
}
</script>
