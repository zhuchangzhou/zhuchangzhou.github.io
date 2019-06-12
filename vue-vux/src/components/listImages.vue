<template>
  <div class="list-images" >
    <ul class="clearfix">
      <li class="image-wrapper" v-for="(item,index) in listImageSplice" :key="index">
        <div class="images" v-lazy:background-image = "item" @click="preview(index)"></div>
      </li>
    </ul>
  </div>
</template>

<script>
// import wx from 'weixin-js-sdk'
import Vue from 'vue'
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
export default {
  props: ['listImage', 'count'],
  computed: {
    listImageSplice () {
      return this.listImage.slice(0, this.count)
    }
  },
  methods: {
    preview (index) {
      this.$wechat.previewImage({
        current: this.listImage[index], // 当前显示图片的http链接
        urls: this.listImageSplice // 需要预览的图片http链接列表
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../common/sass/base';
  .list-images{
    .image-wrapper{
      box-sizing: border-box;
      float: left;
      width: 33.13333333%;
      height: 85px;
      text-align: center;
      margin-bottom: 15px;
      margin-right: 1px;
      .images{
        display: inline-block;
        width: 99%;
        height: 85px;
        
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
      }
    }
  }
</style>
