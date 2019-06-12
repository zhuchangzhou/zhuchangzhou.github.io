<template>
  <div class="unused">
    <app-header :back="true" titleContent="尧都新闻"></app-header>
    <div class="list" v-for="(item,index) in lists" :key="index">
      <panel :list="[
          {
            src: item.img[0],
            title: item.content,
            desc: item.areas_name,
            url: '/wnewsDetail/'+ item.id,
            meta: {
              source: item.areas_name,
              date: '',
              other: ''
            }
          }
        ]" type="1"></panel>
        <!-- <span class="time">{{item.create_time*1000 | datego(item.create_time*1000)}}</span> -->
        <!-- <span class="time">{{item.create_time*1000 | dateFmtt("yyyy-MM-dd hh:mm:ss")}}</span> -->
        <span class="time">{{item.create_time*1000 | dateVux(item.create_time*1000)}}</span>
    </div>
    <back-top></back-top>
  </div>
</template>

<script>
import AppHeader from '../../components/header'
import {Panel} from 'vux'
import {getRentSaleList} from '../../api/wnews.js'
import backTop from '../../components/BackTop'
export default {
  name: 'rentSale',
  data () {
    return {
      list: []
    }
  },
  components: {
    AppHeader,
    Panel,
    backTop
  },
  created () {
    this._getRentSaleList()
  },
  methods: {
    _getRentSaleList () {
      getRentSaleList().then(res => {
        this.list = res.data
      })
    }
  },
  computed: {
    lists () {
      return this.list.reverse()
    }
  }
}
</script>

<style lang="less">
  .unused{
    .list {
      position: relative;
      .time{
        position: absolute;
        bottom: 14px;
        right: 10px;
        color: #CECECE;
        font-size: 13px;
      }
    }
    .weui-media-box__desc{
      margin-top: 10px;
    }
    .weui-media-box_appmsg .weui-media-box__hd{
      width: 80px;
    }
    .weui-media-box_appmsg .weui-media-box__thumb{
      vertical-align: middle;
    }
    .weui-media-box{
      padding: 10px;
    }
    .weui-panel{
      margin-top: 0;
    }
    .weui-panel:before{
      border-top: 1px solid transparent;
    }
    .weui-media-box__info__meta_extra {
      border-left: 1px solid transparent;
      color: red;
    }
  }
</style>
