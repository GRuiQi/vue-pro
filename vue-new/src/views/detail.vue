<template>
  <div class="about">
    <h1>页面详情</h1>
    <button @click="onClick">去子页面</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
   
  },
  setup (context) {
      function onClick () {
         context.emit('change-view','/detail/sub')
      }

      return {
        onClick
      }
  }
}
</script>
