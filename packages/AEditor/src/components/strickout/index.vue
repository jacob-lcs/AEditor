<template>
  <div class="block" @click="strickOut">
    <span class="iconfont">&#xe60a;</span>
  </div>
</template>

<script>
export default {
  name: 'StrickOut',
  methods: {
    strickOut() {
      document.execCommand('strikeThrough')
    }
  }
}
</script>

<style scoped>

</style>
