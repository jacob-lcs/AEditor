<template>
  <div id="editorContainer" />
</template>

<script>
import { com } from './editor'
import html2canvas from 'html2canvas'
export default {
  name: 'FormulaDialog',
  model: {
    prop: 'value', // 绑定的值，通过父组件传递
    event: 'update' // 自定义事件名
  },
  computed: {

  },
  mounted() {
    // editor 初始化
    const editor = com.wiris.jsEditor.JsEditor.newInstance({ 'language': 'cn' })
    editor.insertInto(document.getElementById('editorContainer'))

    // 监听输入内容的变化
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    const element = document.getElementsByClassName('wrs_container')[0]
    const that = this
    const callback = function(records) {
      // that.$emit('update', editor.getMathML())
      html2canvas(element).then(function(canvas) {
        const dataUrl = canvas.toDataURL('image/png')
        that.$emit('update', `<img src="${dataUrl}" style="max-width: 100%; cursor:pointer;" oncontextmenu='event.preventDefault(); window.imgEl = event.toElement; let menu=document.getElementsByClassName("menu")[0]; menu.style.left = event.clientX+"px";menu.style.top=event.clientY+"px";menu.style.display="block";' >`)
      })
      // console.log(editor.getMathML())
    }
    const mo = new MutationObserver(callback)
    const option = {
      'childList': true,
      'subtree': true
    }
    mo.observe(element, option)
  }
}
</script>
