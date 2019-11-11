/*
 * @Author: Jacob
 * @Date: 2019-11-11 10:31:18
 * @Last Modified by: Jacob
 * @Last Modified time: 2019-11-11 14:25:26
 */

/**
  *
  * @param {Object} preSelection
  * @param {HTMLDivElement} curNode
  * @description 在选中部分失焦后再次选中
  *
  */
export default function setPreviousRange(range, curNode) {
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
  return true
}
