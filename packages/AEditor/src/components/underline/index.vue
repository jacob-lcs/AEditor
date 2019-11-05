<template>
  <div class="block" @click="underLine">
    <span class="iconfont" style="font-size: 20px">&#xe60b;</span>
  </div>
</template>

<script>
export default {
  name: 'UnderLine',
  methods: {
    underLine() {
      document.execCommand('underline')
    }
  }
}
</script>

<style scoped>

</style>
