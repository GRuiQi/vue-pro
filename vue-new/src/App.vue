<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import router from '@/router'
  import {computed,watch} from 'vue'
  import store from '@/store/index'
  export default {
    name: 'App',
    components: {
    },
    setup () {
      const changedUrl = computed(()=>store.state.routerParams)
      watch(changedUrl,(newVal,oldVal)=>{
        console.log(oldVal)
        router.push(newVal)
      })
    
      return {
        store
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
