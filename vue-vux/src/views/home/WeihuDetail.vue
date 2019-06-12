<template>
	<div class="weihu-detail">
		<app-header :back="true" titleContent="发声详情"></app-header>
		<head-desc v-if="flag" :bgImage="weihuContent.head_pic" :name="weihuContent.name" :address="weihuContent.areas_name" :tel="weihuContent.phone" :timer="weihuContent.created_at"></head-desc>
		<div>
			<p class="text">{{weihuContent.content}}</p>
			<list-images v-if="flag" :listImage = "weihuContent.img" :count="6" style="margin:5px 10px;"></list-images>
		</div>
	</div>
</template>

<script>
import {XHeader} from 'vux'
import appHeader from '../../components/header'
import { getWeiHuDetail } from '../../api/supervisor'
import headDesc from '../../components/HeadDisc'
import listImages from '../../components/listImages'
const SUCCESS = 200
export default {
  name: 'weihuDetail',
  data () {
    return {
      weihuContent: {},
      flag: false
    }
  },
  components: {
    XHeader,
    appHeader,
    headDesc,
    listImages,
  },
  created () {
    this._getWeiHuDetail()
  },
  methods: {
    _getWeiHuDetail () {
      getWeiHuDetail(this.$route.params.id).then(res => {
        if (res.code === SUCCESS) {
          this.weihuContent = res.data.super
          this.flag = true
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.weihu-detail {
  .text {
    padding: 5px 10px;
    margin:5px 0;
    line-height: 16px;
  }
}
</style>
