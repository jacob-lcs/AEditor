<template>
  <div class="container">
    <div class="toolbar">
      <Title />
      <Bold title="加粗" />
      <StrickOut title="删除线" />
      <UnderLine title="下划线" />
      <InsertImage title="插入图片" />
      <Italic title="斜体" />
      <CreateLink :cureditor="currentEditor" title="插入链接" />
      <ForeColor :cureditor="currentEditor" title="字体颜色" />
      <BackColor :cureditor="currentEditor" title="背景颜色" />
      <DecreaseFontSize title="减小字体" />
      <IncreaseFontSize title="增大字体" />
      <Undo title="撤销" />
      <Redo title="重做" />
      <Formula :cureditor="currentEditor" />
    </div>
    <div id="AEeditor">
      <!--自定义右键菜单html代码-->
      <div class="menu" :class="{active: contextActive}" contenteditable="false" @click="closeMenu">
        <div class="menu-item">
          <input v-model="imgSize" type="range" class="menu__size-change">
        </div>
        <div class="menu-item" @click="floatLeft">悬浮在最左边</div>
        <div class="menu-item" @click="floatRight">悬浮在最右边</div>
        <div class="menu-item" @click="imgCenter">居中</div>
      </div>
      <div ref="AEditor" contenteditable="true" class="content" @keydown="ListenserKeyDown" @click="changeValue" @blur="changeValue" @input="changeValue" />
    </div>
  </div>
</template>

<script>
import './components/formula/components/mspace'
import Title from './components/title/index'
import Bold from './components/bold/index'
import StrickOut from './components/strickout/index'
import UnderLine from './components/underline/index'
import InsertImage from './components/insertImage/index'
import Italic from './components/italic/index'
import CreateLink from './components/createLink/index'
import ForeColor from './components/foreColor/index'
import BackColor from './components/backColor/index'
import DecreaseFontSize from './components/decreaseFontSize/index'
import IncreaseFontSize from './components/increaseFontSize/index'
import Redo from './components/redo/index'
import Undo from './components/undo/index'
import Formula from './components/formula/index'
export default {
  name: 'AEditor',
  components: {
    Title,
    Bold,
    StrickOut,
    UnderLine,
    InsertImage,
    Italic,
    CreateLink,
    ForeColor,
    BackColor,
    DecreaseFontSize,
    IncreaseFontSize,
    Redo,
    Undo,
    Formula
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  data() {
    return {
      contextActive: false,
      imgSize: 100,
      currentEditor: {}
    }
  },
  watch: {
    imgSize() {
      window.imgEl.style.width = `${this.imgSize}%`
    }
  },
  mounted() {
    this.currentEditor = this.$refs['AEditor']
  },
  methods: {
    closeMenu() {
      document.getElementsByClassName('menu')[0].style.display = 'none'
    },
    floatLeft() {
      window.imgEl.parentNode.style.textAlign = 'left'
    },
    floatRight() {
      window.imgEl.parentNode.style.textAlign = 'right'
    },
    imgCenter() {
      window.imgEl.parentNode.style.textAlign = 'center'
    },
    ListenserKeyDown() {
      // 监听输入 tab 时插入 四个空格
      if (event.keyCode === 9) {
        document.execCommand('insertText', false, '    ')
        event.preventDefault()
      }
    },
    changeValue() {
      this.$emit('update', this.currentEditor.innerHTML)
    }
  }
}
</script>

<style scoped>
.container{
  width: 500px;
  margin: 0 auto;
  border: #ccc9c9 1px solid;
  border-radius: 5px;
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
  border-radius: 5px 5px 0 0;
  user-select: none;
  padding-top: 5px;
  padding-bottom: 5px;
}
.content{
  height: 400px;
  text-align: left;
  overflow-y: scroll;
  position: relative;
  z-index: 1000;
}

/*css代码*/
.menu{
  width: 200px; /*设置为0 隐藏自定义菜单*/
  height: 125px;
  overflow: hidden; /*隐藏溢出的元素*/
  box-shadow: 0 1px 1px #888,1px 0 1px #ccc;
  position: absolute; /*自定义菜单相对与body元素进行定位*/
  display: none;
  background-color: white;
  text-align: left;
  z-index: 8000;
}
.menu-item{
  width: 130px;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
  cursor: pointer;
}
.menu-item:hover{
  background-color: #f5f5f5;
  width: 100%;
}
.menu__size-change{
  width: 180px;
  cursor: pointer;
}

/*控制整个滚动条*/
::-webkit-scrollbar {
  background-color: #f5f5f5;
  width: 7px;
  height: 10px;
  background-clip: padding-box;
}
/*滚动条中间滑动部分*/
::-webkit-scrollbar-thumb {
  background-color: #88888890;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover{
  background-color: #888888;
}
</style>

<style>
.block{
  cursor: pointer;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
}
.iconfont{
  color: gray;
}
.iconfont:hover{
  color: black;
}
@font-face {
  font-family: "iconfont";
  src: url("./iconfont/iconfont.eot");
  src: url("./iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./iconfont/iconfont.woff") format("woff"), url("./iconfont/iconfont.ttf") format("truetype"),
    url("./iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
