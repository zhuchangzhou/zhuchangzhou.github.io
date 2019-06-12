<template>
  <div class="header">
    <x-header :left-options="{backText: ''}" style="background-color:#0078de;" :title="titleContent">
      <a slot="right" v-show="unusedTitle">{{unusedTitle}}</a>
      <a slot="right" v-show="messageTitle">{{messageTitle}}</a>
      <a slot="right" v-show="helpTitle">{{helpTitle}}</a>
      <a slot="right" v-show="rentSaleTitle">{{rentSaleTitle}}</a>
    </x-header>
  </div>
</template>
<style lang="less">
  .header{
      padding-bottom: 46px;
    .vux-header{
      z-index: 9999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    .vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{
      color: #fff;
    }
    .vux-header .vux-header-left .left-arrow:before{
      border: 1px solid #fff;
      border-width: 1px 0 0 1px;
      top: 9px;
    }
    .tabbar{
      background-color:#00CC66;
      height:50px;
      position:relative;
    }
    .search{
      position:absolute;right:5px;top:5px;z-index:999;
    }
    .title{
      text-align:center;
      margin:auto;
      color:white;
      line-height:45px;
      font-size:18px;
    }
  }
</style>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'AppHeader',
    data () {
      return {
      }
    },
    props: [
      'titleContent',
      'back',
      'unusedTitle',
      'messageTitle',
      'helpTitle',
      'rentSaleTitle'
    ],
    components: {
      XHeader
    },
    methods: {
    }
  }
</script>