<template>
  <div class="weihu">
    <ul>
      <li class="split">
        <div>
          <p class="text">我在尧都区某饭店上班，因生意不好，饭店关门，老板跑路，拖欠2月工资未发</p>
          <!-- <list-images v-if="flag" :listImage = "item.img" :count="3"></list-images> -->
        </div>
        <p class="read-count">浏览量：111</p>
      </li>
    </ul>
    <!-- <back-top></back-top> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {}
};
</script>

<style>
.weihu {
  width: 100%;
  padding-top: 44px;
}
.weihu .split {
  border-bottom: 10px solid #f2f2f2;
}
.text {
  padding: 5px 10px;
  line-height: 16px;
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