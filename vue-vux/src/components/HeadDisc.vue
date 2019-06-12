<template>
  <div class="headers">
    <div class="head-desc">
      <div class="head" v-lazy:background-image="bgImage"></div>
      <div class="desc">
        <div class="name-address">
          <!-- <p v-show="name" class="name">{{name}}</p> -->
          <p v-show="name" class="name">1860352****</p>
          <div>
            <!-- <span v-show="address" class="address">{{address}}</span> -->
            <span v-show="address" class="address">尧都区幸福还原附近xxxxx</span>
            <span v-show="timer" class="times" >{{timer*1000 | date()}}</span>
          </div>
        </div>
        <div class="tel-timer">
          <div style="display: none">
            <span style="color: #666">电话:</span>
            <a style="display: inline-block" v-show="tel" :href="'tel:'+tel" class="tel">{{tel}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "address", "tel", "timer", "bgImage"]
};
</script>

<style lang="scss" scoped>
.headers {
  .head-desc {
    display: flex;
    margin: 10px 10px;
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
    .head {
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      margin-right: 10px;
    }
    .desc {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name-address {
        width: 100%;
        .name {
          margin-bottom: 15px;
          font-size: 14px;
        }
        .address {
          font-size:14px;
          color: #666;
          float: left;
        }
        .times {
          font-size:14px;
          color: #666;
          float: right;
          margin-right:5px;
        }
      }
      .tel-timer {
        text-align: right;
        .tel {
          margin-bottom: 13px;
          display: block;
          font-style: italic;
          color: #0078de;
        }
        .timer {
          color: #999;
        }
      }
    }
  }
}
</style>
