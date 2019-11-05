<template>
  <div class="block" @click="bold">
    <span class="iconfont" style="font-size:20px">&#xe607;</span>
  </div>
</template>

<script>
export default {
  name: 'Bold',
  methods: {
    bold() {
      document.execCommand('bold')
    }
  }
}
</script>

<style scoped>

</style>
