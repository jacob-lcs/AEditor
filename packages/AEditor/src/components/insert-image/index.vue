<template>
  <div class="block">
    <span class="iconfont" style="font-size:20px" @click="showImgUpload">&#xe60f;</span>
    <div ref="image-block" class="image-block">
      <div class="upload-img">
        <span class="iconfont upload-icon">&#xe610;
          <input type="file" class="upload-img__plunge" @change="upload">
        </span><br>
        <span>本地上传</span>
      </div>
      <!-- <div class="web-img">
        <input v-model="webImg" type="text" placeholder="请输入图片网址" class="web-img__input">
        <button class="web-img__submit" @click="submit">确定</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InsertImage',
  data() {
    return {
      webImg: ''
    }
  },
  methods: {
    showImgUpload() {
      this.$refs['image-block'].style.display = this.$refs['image-block'].style.display === 'block' ? 'none' : 'block'
    },
    upload(e) {
      const file = e.target.files[0]
      const param = new FormData() // 创建form对象
      param.append('file', file)// 通过append向form对象添加数据
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      } // 添加请求头
      axios.post('http://119.3.80.117/uploadImg', param, config)
        .then(response => {
          this.insertImage('http://119.3.80.117/media/', response.data.image)
          this.$refs['image-block'].style.display = 'none'
        })
    },
    submit() {
      this.insertImage('', this.webImg)
      this.$refs['image-block'].style.display = 'none'
      this.webImg = ''
    },
    insertImage(ip, name) {
      const imageUrl = `${ip}${name}`
      const imageHtml = `<img src="${imageUrl}" style="width: 100%; cursor:pointer;" oncontextmenu='event.preventDefault(); window.imgEl = event.toElement; let menu=document.getElementsByClassName("menu")[0]; menu.style.left = event.clientX+"px";menu.style.top=event.clientY+"px";menu.style.display="block";' >`
      document.execCommand('insertHTML', false, imageHtml)
    }
  }
}
</script>

<style scoped>
.block{
  position: relative;
}
.image-block{
  display: none;
  position: absolute;
  top: 35px;
  width: 250px;
  background-color: #f5f5f5;
  border-radius: 10%;
}
.upload-img{
  overflow: hidden;
  padding-bottom: 10px;
}
.upload-img__plunge{
  position: absolute;
  left: 0px;
  font-size: 50px;
  opacity: 0;
  filter: alpha(opacity=0);
}
.upload-icon{
  font-size: 50px;
  cursor: pointer;
}

.web-img{
  margin-top: 10px;
  padding-bottom: 10px;
}
.web-img__input{
  height: 20px;
}
.web-img__submit{
  margin-left: 10px;
  height: 25px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
}
</style>
