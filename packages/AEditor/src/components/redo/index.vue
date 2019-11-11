<template>
  <div class="block" @click="redo">
    <span class="iconfont" style="font-size:20px">&#xe604;</span>
  </div>
</template>

<script>
export default {
  name: 'Redo',
  methods: {
    redo() {
      document.execCommand('redo')
    }
  }
}
</script>

<style scoped>

</style>
