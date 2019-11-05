// packages/AEditor/index.js
// 导入组件，组件必须声明 name
import AEditor from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
AEditor.install = function(Vue) {
  Vue.component(AEditor.name, AEditor)
}

// 默认导出组件
export default AEditor
