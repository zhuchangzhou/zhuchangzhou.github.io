<template>
  <div id="application">
    <div class="groupitem">
      <div class="itemtitle">问题描述</div>
      <group>
        <x-textarea
          style="font-size:16px;margin:5px 15px 5px 15px;"
          :max="20"
          placeholder="请输入问题详情描述"
          @on-focus="onEvent('focus')"
          @on-blur="onEvent('blur')"
        ></x-textarea>
      </group>
      <div class="itemtitle" style="margin:15px 0px;">上传图片</div>
      <div class="content" style="margin:10px 0;border:1px solid #eee;">
        <vux-upload
          url
          :headers="headers"
          :data="data"
          :images="images"
          :readonly="false"
          :max="2"
          :withCredentials="false"
          :span="4"
          :preview="true"
          @success="onSuccess"
          @error="onError"
          @remove="onRemove"
        ></vux-upload>
      </div>
      <!-- <grid-item :label="'掘金'" @click.native="href_to('https://juejin.im')">
          <img slot="icon" src="../../assets/image/ic_juejin.png">
        </grid-item>
        <grid-item :label="'网易'" @click.native="href_to(garden_url)">
          <img slot="icon" src="../../assets/image/ic_wangyi.png">
        </grid-item>
        <grid-item :label="'微信'" @click.native="href_to(gardenId_wx)">
          <img slot="icon" src="../../assets/image/ic_wx.png">
      </grid-item>-->
      <div class="itemtitle" style="margin-top:15px;">案件类型</div>
      <div class="content" style="margin:10px 0;border:1px solid #eee;">
        <popup-picker
          title="请选择类型"
          :data="list1"
          v-model="value1"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          placeholder="请选择类型"
        ></popup-picker>
      </div>
      <div class="itemtitle" style="margin-top:15px;">地理位置</div>
      <x-button
        type="primary"
        style="width:25%;text-algin:center;margin:50px 15px 0 0;float:right;"
      >发布</x-button>
    </div>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="800"
      is-show-mask
      text="这是一个弹出框"
      position="bottom"
    ></toast>
  </div>
</template>

<style lang="less" scoped>
body {
  background-color: #efeff4 !important;
}
.picker-buttons {
  margin: 0 15px;
}
#application {
  margin-top: 16px;
  position: absolute;
  width: 100%;
  .itemtitle {
    display: flex;
    align-items: center;
  }

  .itemtitle:before {
    content: "";
    display: inline-block;
    position: relative;
    top: 1px;
    width: 4px;
    height: 15px;
    margin: 0px 5px 0px 16px;
    background-color: #72bff3;
  }
  .weui-grid {
    height: 80px;
    text-align: center;
    font-size: 6.5px;
    color: #000000;
  }
  .weui-btn_primary {
    background-color: #0078de;
  }

  .weui-grid .weui-grid__label {
    font-size: 13px;
    margin: 4px 0px 12px;
    color: rgba(0, 0, 0, 0.9);
  }
  .weui-grid:before {
    border-right: 1px solid #ffffff;
  }
  .weui-grid:after {
    border-bottom: 1px solid #ffffff;
  }
  .weui-grids:before {
    border-top: 1px solid #ffffff;
  }
  .weui-grids {
    margin: 16px 0px;
    padding-bottom: 16px;
    border-bottom: 5px solid #f6f6f6;
    a {
      width: 25% !important;
    }
  }
  .weui-grid__icon {
    img {
      height: 20px;
      width: 20px;
      margin: auto;
    }
  }
  @import "~vux/src/styles/reset.less";

  .content {
    margin-top: 30px;
  }
}
</style>
<script>
import VuxUpload from "../../components/Upload";
import {
  XButton,
  Icon,
  PopupPicker,
  XTextarea,
  Grid,
  GridItem,
  GroupTitle,
  Group,
  Toast
} from "vux";
import store from "../../store/index";
import axios from "axios";

export default {
  store,
  components: {
    Icon,
    PopupPicker,
    Group,
    Grid,
    GridItem,
    GroupTitle,
    Toast,
    XTextarea,
    VuxUpload,
    XButton
  },
  data() {
    return {
      gardenId: "",
      garden_url: "",
      gardenId_wx: "",
      showPositionValue: false,
      headers: {
        token: "5b2944cqeqwe9226e62589bc80c4afbb1f7"
      },
      date: "",
      images: [],
      list1: [
        [
          "食品安全",
          "拆违治水",
          "矛盾纠纷",
          "消防安全",
          "环境卫生",
          "文明交通",
          "其他"
        ]
      ],
      value1: [""]
    };
  },
  created() {},
  methods: {
    onChange(val) {
      console.log("val change", val);
    },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    },
    href_to(_url) {
      if (_url == "") {
        this.showPositionValue = true;
      } else {
        this.$router.push({ path: "/iframe", query: { url: _url } });
      }
    },
    onSuccess(res, file) {
      this.images.push({
        src: "http://jy.pietian.com" + res.result.path
      });
    },
    onError(e) {
      console.log(e.message);
    },
    onRemove(index) {
      this.images.splice(index, 1);
    }
  }
};
</script>


