<template>
  <div class="block" @click="insertFormula">
    <span class="iconfont" style="font-size:25px" title="插入公式">&#xe613;</span>
    <div v-if="showDialog" class="formula-dialog">
      <FormulaDialog v-model="content" class="formula-dialog__input" />
      <div>
        <button class="formula-dialog__button submit" @click.stop="insertHtml">确定</button>
        <button class="formula-dialog__button cancel" @click.stop="closeFormulaDialog">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import placeCaretAtEnd from '../../utils/placeCaretAtEnd'
import FormulaDialog from './components/formulaDialog'
export default {
  name: 'Formula',
  components: {
    FormulaDialog
  },
  props: {
    cureditor: {
      type: [Object, HTMLDivElement],
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      content: ''
    }
  },
  mounted() {
  },
  methods: {
    insertFormula() {
      this.showDialog = true
    },
    closeFormulaDialog() {
      placeCaretAtEnd(this.cureditor)
      this.showDialog = false
    },
    insertHtml() {
      placeCaretAtEnd(this.cureditor)
      document.execCommand('insertHTML', false, `<span>${this.content}</span>`)
      this.closeFormulaDialog()
    }
  }
}
</script>

<style scoped>
.formula-dialog{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(91, 92, 89, 0.26);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
}
.formula-dialog__input{
  width: 700px;
}
.formula-dialog__button{
  margin-top: 10px;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  border: 0;
  outline: none;
}
.formula-dialog__button.submit{
  background-color: #409EFF;
}
.formula-dialog__button.cancel{
  background-color: #F56C6C;
}
</style>
