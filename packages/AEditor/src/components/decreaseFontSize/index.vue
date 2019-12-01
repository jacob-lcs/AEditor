<template>
  <div class="block" @click="decreaseFontSize">
    <span class="iconfont" style="font-size:25px">&#xe611;</span>
  </div>
</template>

<script>
export default {
  name: 'DecreaseFontSize',
  methods: {
    decreaseFontSize() {
      document.execCommand('decreaseFontSize')
    }
  }
}
</script>

<style scoped>

</style>
