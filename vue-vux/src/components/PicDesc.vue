<template>
  <div class="pic-desc">
    <div class="pic" v-lazy:background-image="img"></div>
    <div class="desc">
      <div class="left-wrapper">
        <p v-show="content" class="top-left">{{content}}</p>
        <p v-show="text" class="middle-left"></p>
        <p
          v-show="time"
          class="bottom-left"
          style="float:left;"
        >{{time*1000 | dateFmtt('yyyy/MM/dd')}}</p>
        <span v-show="count" class="bottom-right" style="float:right">{{count}}</span>
      </div>
      <div class="right-wrapper">
        <p v-show="topright" class="top-right">top-right</p>
        <p v-show="middleright" class="middle-right">middle-right</p>
        <!-- <p v-show="count" class="bottom-right">{{count}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "img", "time", "count", "text", "topright", "middleright"],
};

</script>

<style lang="scss" scoped>
@import "../../src/common/sass/mixin";
.pic-desc {
  display: flex;
  margin: 5px 0 0 5px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #f2f2f2;
  .pic {
    flex: 0 0 80px;
    width: 80px;
    height: 80px;
    margin-right: 7px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .desc {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left-wrapper {
      flex: 16;
      .top-left {
        height:52px;
        line-height:28px;
        margin-bottom: 13px;
        font-size: 16px;
        @include ellipsis(1);
      }
      .middle-left {
        margin-bottom: 10px;
        color: #777;
        @include ellipsis(1);
      }
      .bottom-left {
        color: #666;
        @include ellipsis(1);
      }
    }
    .right-wrapper {
      flex: 1;
      text-align: right;
      .top-right {
        margin-bottom: 13px;
      }
      .middle-right {
        margin-bottom: 13px;
        color: #777;
        @include ellipsis(1);
      }
      .bottom-right {
        color: #666;
      }
    }
  }
}
</style>
