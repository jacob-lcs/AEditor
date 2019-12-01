<template>
  <div class="block">
    <span class="iconfont" style="font-size:20px" @click="showBackColor">&#xe60d;</span>
    <div ref="back-color-block" class="back-color-block">
      <colorPicker v-model="color" />
      <button class="back-color__submit" @click="submit">确定</button>
    </div>
  </div>
</template>

<script>
import { Chrome as colorPicker } from 'vue-color'
import setPreviousRange from '../../utils/setPreviousRange'
export default {
  name: 'BackColor',
  components: {
    colorPicker
  },
  props: {
    cureditor: {
      type: [Object, HTMLDivElement],
      required: true
    }
  },
  data() {
    return {
      color: '',
      preSelection: '',
      containsEditor: false,
      range: ''
    }
  },
  methods: {
    showBackColor() {
      this.preSelection = window.getSelection()
      this.containsEditor = this.preSelection.containsNode(this.cureditor, true)
      const range = document.createRange()
      if (window.getSelection().rangeCount >= 1) {
        range.setStart(this.preSelection.getRangeAt(0).startContainer, this.preSelection.getRangeAt(0).startOffset)
        range.setEnd(this.preSelection.getRangeAt(0).endContainer, this.preSelection.getRangeAt(0).endOffset)
      }
      this.range = range
      this.$refs['back-color-block'].style.display = this.$refs['back-color-block'].style.display === 'block' ? 'none' : 'block'
    },
    submit() {
      if (this.containsEditor) {
        setPreviousRange(this.range, this.cureditor)
      }
      document.execCommand('backColor', false, this.color.hex)
      this.$refs['back-color-block'].style.display = 'none'
    }
  }
}
</script>

<style scoped>
.block{
  position: relative;
}
.block>>>.vc-chrome{
  box-shadow: none;
}
.back-color-block{
  display: none;
  position: absolute;
  top: 35px;
  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);
  z-index: 8000;
}
.back-color__submit{
  height: 25px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
  margin-bottom: 10px;
}
</style>
