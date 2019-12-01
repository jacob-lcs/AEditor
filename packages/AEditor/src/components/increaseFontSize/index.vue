<template>
  <div class="block" @click="increaseFontSize">
    <span class="iconfont" style="font-size:25px">&#xe612;</span>
  </div>
</template>

<script>
export default {
  name: 'IncreaseFontSize',
  methods: {
    increaseFontSize() {
      document.execCommand('increaseFontSize')
      // document.execCommand('insertHTML', false, '<font size="5">12</font>')
    }
  }
}
</script>

<style scoped>

</style>
