<template>
  <div class="block" @click="undo">
    <span class="iconfont" style="font-size:25px">&#xe603;</span>
  </div>
</template>

<script>
export default {
  name: 'Undo',
  methods: {
    undo() {
      document.execCommand('undo')
    }
  }
}
</script>

<style scoped>

</style>
