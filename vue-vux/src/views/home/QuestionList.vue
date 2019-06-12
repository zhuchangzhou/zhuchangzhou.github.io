<template>
  <div class="weihu">
    <ul>
      <li class="split" v-for="(item,index) in weihuData" :key="index">
        <div @click="$router.push(`/WeihuDetail/${item.id}`)">
          <p class="text">{{item.content}}</p>
          <list-images v-if="flag" :listImage = "item.img" :count="3"></list-images>
        </div>
        <p class="read-count">浏览量：{{item.reading_amount}}</p>
      </li>
    </ul>
    <back-top></back-top>
  </div>
</template>

<script>
import listImages from '../../../src/components/listImages'
import backTop from '../../../src/components/BackTop'
import {getWeiHuData} from '../../api/supervisor'
const SUCCESS = 200
// const FAIL = 400
export default {
  name: 'QuestionList',
  data () {
    return {
      weihuData: [],
      flag: true
    }
  },
  created () {
    this._getWeiHuData()
  },
  components: {
    listImages,
    backTop
  },
  methods: {
    _getWeiHuData () {
      getWeiHuData().then(res => {
        if (res.code === SUCCESS) {
          this.weihuData = res.data.data
          console.log(res.data.data)
          this.flag = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .weihu{
    width: 100%;
    // padding-top: 44px;
    .split{
      border-bottom: 10px solid #f2f2f2;
      .text{
        padding: 5px 5px;
        margin: 0;
        line-height: 25px;
      }
    }
    .read-count{
      padding: 0 10px;
      height: 26px;
      line-height: 26px;
      text-align: right;
      font-size: 13px;
      color: #888;
    }
  }
</style>
