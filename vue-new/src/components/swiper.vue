<template>
 <div>
    <img @click="onImgClick" class="size" v-bind:src="url"/>
    <span>{{num}}</span>
 </div>
</template>

<script>
const testNum = 'hello,world'
export default {
  name: 'Swiper',
  props: {
    url: {
      type: String
    },
    num: {
      type: Number
    }
  },
  setup (props, context) {
    function onImgClick () {
      // 自定义事件并携带参数
      context.emit('sub-event', testNum)
    }
    return {
      onImgClick
    }
  }
}
</script>

<style scoped>
  .size{
    width:100%;
  }
</style>
