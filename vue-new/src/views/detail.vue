<template>
  <div class="about">
    <h1>页面详情</h1>
    <button @click="onClick">去子页面</button>
    <router-view/>
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store/index'
export default {
  name: 'Detail',
  components: {
   
  },
  setup () {
      console.log(router.currentRoute.value.params)
      function onClick () {
         store.commit('changeView',{
           routerParams: {
             name: 'SubDetail',
             params: {

             }
           }
         })
      }

      return {
        onClick
      }
  }
}
</script>
