<template>
  <div>
    <p>{{mes}}</p>
    <mt-button type="default">default</mt-button>
    <mt-cell title="标题文字"></mt-cell>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        mes:'hello world'
      }
    },
  }
</script>

<style scoped lang='stylus'>
  p
    width:100%
    text-align center
</style>