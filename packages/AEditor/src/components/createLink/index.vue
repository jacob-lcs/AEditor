<template>
  <div class="block">
    <span class="iconfont" style="font-size:20px" @click="showInsertLink">&#xe60e;</span>
    <div ref="link-block" class="link-block">
      <div class="insert-link">
        <input v-model="name" type="text" placeholder="请输入名称" class="insert-link__input">
        <input v-model="link" type="text" placeholder="请输入链接" class="insert-link__input">
        <button class="insert-link__submit" @click="submit">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import placeCaretAtEnd from '../../utils/placeCaretAtEnd'
export default {
  name: 'CreateLink',
  props: {
    cureditor: {
      type: [Object, HTMLDivElement],
      required: true
    }
  },
  data() {
    return {
      name: '',
      link: ''
    }
  },
  methods: {
    showInsertLink() {
      this.$refs['link-block'].style.display = this.$refs['link-block'].style.display === 'block' ? 'none' : 'block'
    },
    submit() {
      placeCaretAtEnd(this.cureditor)
      const linkHtml = `<a href="${this.link}">${this.name.length === 0 ? this.link : this.name}</a>`
      document.execCommand('insertHTML', false, linkHtml)
      // document.execCommand('createLink', false, this.link)
      this.$refs['link-block'].style.display = 'none'
      this.link = ''
      this.name = ''
    }
  }
}
</script>

<style scoped>
.block{
  position: relative;
}
.link-block{
  display: none;
  position: absolute;
  top: 35px;
  width: 250px;
  background-color: #f5f5f5;
  border-radius: 10%;
  z-index: 8000;
}
.insert-link{
  margin-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}
.insert-link__input{
  height: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.insert-link__submit{
  margin-left: 10px;
  height: 25px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
}
</style>
