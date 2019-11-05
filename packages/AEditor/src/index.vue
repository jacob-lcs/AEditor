<template>
  <div class="container">
    <div class="toolbar">
      <Title />
      <Bold />
      <StrickOut />
      <UnderLine />
      <InsertImage />
    </div>
    <div class="content" contenteditable="true" />
  </div>
</template>

<script>
import Title from './components/title/index'
import Bold from './components/bold/index'
import StrickOut from './components/strickout/index'
import UnderLine from './components/underline/index'
import InsertImage from './components/insert-image/index'
export default {
  name: 'AEditor',
  components: {
    Title,
    Bold,
    StrickOut,
    UnderLine,
    InsertImage
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
}
.content{
  height: 400px;
  text-align: left;
  overflow-y: scroll;
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
