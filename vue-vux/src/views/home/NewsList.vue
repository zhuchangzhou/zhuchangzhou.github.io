<template>
  <div>
    <swiper
      :list="imgs"
      auto
      style="width:100%;margin:2px auto;"
      height="200px"
      dots-class="custom-bottom"
      dots-position="right"
    ></swiper>
    <div class="weihu">
      <ul>
        <li class="split">
          <div class="split_one">
            <img class="ic_img" slot="icon" src="../../assets/image/icon_touxiang.png">
            <span class="split_one_sapn">1860352****</span>
            <span class="split_one_sapn_right">2019-1-6</span>
          </div>
          <div class="split_two">
            <img class="speak_img" slot="icon" src="../../assets/image/icon_speak.png">
            <p class="text">我在尧都区某饭店上班，因生意不好，饭店关门，老板跑路，拖欠2月工资未发</p>
          <!-- <list-images v-if="flag" :listImage = "item.img" :count="3"></list-images> -->
          </div>
           <div class="split_thr">
            <span class="read-count">浏览量：111</span>
          </div>
        </li>
        <li class="split">
          <div class="split_one">
            <img class="ic_img" slot="icon" src="../../assets/image/icon_touxiang.png">
            <span class="split_one_sapn">1860352****</span>
            <span class="split_one_sapn_right">2019-1-6</span>
          </div>
          <div class="split_two">
            <img class="speak_img" slot="icon" src="../../assets/image/icon_speak.png">
            <p class="text">我在尧都区某饭店上班，因生意不好，饭店关门，老板跑路，拖欠2月工资未发</p>
            <!-- <list-images v-if="flag" :listImage = "item.img" :count="3"></list-images> -->
          </div>
           <div class="split_thr">
            <span class="read-count">浏览量：111</span>
          </div>
        </li>
        <li class="split">
          <div class="split_one">
            <img class="ic_img" slot="icon" src="../../assets/image/icon_touxiang.png">
            <span class="split_one_sapn">1860352****</span>
            <span class="split_one_sapn_right">2019-1-6</span>
          </div>
          <div class="split_two">
            <img class="speak_img" slot="icon" src="../../assets/image/icon_speak.png">
            <p class="text">我在尧都区某饭店上班，因生意不好，饭店关门，老板跑路，拖欠2月工资未发</p>
            <!-- <list-images v-if="flag" :listImage = "item.img" :count="3"></list-images> -->
          </div>
           <div class="split_thr">
            <span class="read-count">浏览量：111</span>
          </div>
        </li>
        <li class="split">
          <div class="split_one">
            <img class="ic_img" slot="icon" src="../../assets/image/icon_touxiang.png">
            <span class="split_one_sapn">1860352****</span>
            <span class="split_one_sapn_right">2019-1-6</span>
          </div>
          <div class="split_two">
            <img class="speak_img" slot="icon" src="../../assets/image/icon_speak.png">
            <p class="text">我在尧都区某饭店上班，因生意不好，饭店关门，老板跑路，拖欠2月工资未发</p>
            <!-- <list-images v-if="flag" :listImage = "item.img" :count="3"></list-images> -->
          </div>
          <div class="split_thr">
            <span class="read-count">浏览量：111</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- <cell
      :key="x"
      v-for="x in Objlist"
      :title="x.name"
      :link="{path: '/newsdetail',query:{id:x.id,tag:'精选'}}"
      :inline-desc="x.body"
    >
      <img class="ic_img" slot="icon" src="../../assets/image/ic_label_today.png">
      <div>
        <span class="pubdate">{{x.pub_date}}</span>
      </div>
    </cell> -->

    <back-top></back-top>
  </div>
</template>
<style>
.split{
    border-bottom: 1px solid #cccccc;
    width:97%;
    margin: 0 auto;
}
.split_one {
  height: 38px;
  line-height: 25px;
  margin: 15px 0;
}
.split_one_sapn {
  position: relative;
  float: left;
  top: 8px;
  left: 28px;
}
.split_one_sapn_right {
  float: right;
  position: relative;
  top: 8px;
  right: 15px;
}
.ic_img {
  float: left;
  position: relative;
  left: 18px;
  width: 38px;
  height: 38px;
}
.speak_img {
  float: left;
  position: relative;
  left: 18px;
  width: 38px;
  height: 23px;
}
.weui_cell_bd > p {
  font-size: 15px;
}

.pubdate {
  font-size: 5px;
}
.weihu {
  width: 100%;
}

.text {
  padding: 0px 25px;
  margin-left: 45px;
  line-height: 25px;
  font-size: 14px;
}
.read-count {
  padding: 0 10px;
  height: 26px;
  line-height: 26px;
  text-align: right;
  font-size: 13px;
  color: #888;
}
</style>
<script>
import listImages from '../../components/listImages';
import { Group, Cell, Swiper, Scroller, Divider } from "vux";
import axios from "axios";
import BackTop from "../../components/BackTop";

const imgList = [
  "http://5b0988e595225.cdn.sohucs.com/images/20180428/2513a7f47fd54b2282dfdffe56f1f34b.jpeg",
  "http://5b0988e595225.cdn.sohucs.com/images/20180428/1cafe37619f047328b892c76d0ece07a.jpeg",
  "http://5b0988e595225.cdn.sohucs.com/images/20180428/4198ee9fda4b45fb80dd1d028a711126.jpeg"
];

const urlList = imgList.map((one, index) => ({
  url: "javascript:", //这里填写图片点击的链接
  img: one
}));

export default {
  name: "NewsList",
  data() {
    return {
      ishow: false,
      Objlist: [],
      pageIndex: 1,
      catalog: 0,
      imgs: urlList
    };
  },
  components: {
    Scroller,
    Cell,
    Group,
    Divider,
    Swiper,
    BackTop,
    listImages
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      var that = this;
      this.page = 1;
      let data = { page: 1, rows: this.rows * this.page };
      axios
        .get("/comments", { params: data })
        .then(function(response) {
          // console.log(response.data); //获取数据
          let res_data = response.data;
          if (res_data.length > 0) {
            that.Objlist = res_data.slice(0, 20);
            that.$nextTick(() => {
              // console.log("$nextTick");
            });
          }
        })
        .catch(function(error) {
          // console.log(error);
        });
    },
    load(uuid) {
      setTimeout(() => {
        this.getList();
        this.$broadcast("pulldown:reset", uuid);
      }, 1000);
    }
  }
};
</script>
