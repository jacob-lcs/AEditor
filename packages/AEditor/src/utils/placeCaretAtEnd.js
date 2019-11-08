/*
 * @Author: Jacob
 * @Date: 2019-11-08 16:12:03
 * @Last Modified by: Jacob
 * @Last Modified time: 2019-11-08 16:27:50
 */

/**
 * @description 将光标定位的指定位置
 * @param {DOM} el
 */
export default function placeCaretAtEnd(el) { // 传入光标要去的jq节点对象
  el.focus()
  if (typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined') {
    var range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)
    var sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  } else if (typeof document.body.createTextRange !== 'undefined') {
    var textRange = document.body.createTextRange()
    textRange.moveToElementText(el)
    textRange.collapse(false)
    textRange.select()
  }
}
