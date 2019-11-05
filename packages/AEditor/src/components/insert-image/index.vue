<template>
  <div class="block" @click="insertImage">
    <span class="iconfont" style="font-size:20px">&#xe60f;</span>
  </div>
</template>

<script>
export default {
  name: 'InsertImage',
  methods: {
    insertImage() {
      const imageUrl = 'https://www.baidu.com/img/bd_logo1.png?where=super'
      const imageData = `<img src="${imageUrl}" style="width: 100%" onclick="console.log(1212)" />`
      document.execCommand('insertHTML', false, imageData)
    }
  }
}
</script>

<style scoped>

</style>
