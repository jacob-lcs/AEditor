<template>
  <div class="block" @click="bold">
    <span class="iconfont" style="font-size:20px">&#xe609;</span>
  </div>
</template>

<script>
export default {
  name: 'Italic',
  methods: {
    bold() {
      document.execCommand('italic')
    }
  }
}
</script>

<style scoped>

</style>
