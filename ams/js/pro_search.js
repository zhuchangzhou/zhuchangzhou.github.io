/**
 * Created by duodi on 2017/12/1.
 */
Vue.directive("focus",function(el,binding){
    if(binding.value==""){
        el.focus();
    }
})
var vm=new Vue({
    el:".search_page",
    data:{
       //热门搜索
        hot_search:["办公椅","按摩椅","助眠椅","按摩器","麻将椅","魔王椅"],
       //历史搜索
        history_record:["办公椅","按摩椅","助眠椅"],
        //搜索内容
        search_text:"",
    },
    methods:{
        //清除历史记录
        clearHistory:function(){
            this.history_record=[];
        },
        cancelSearch:function(){
            this.search_text="";
        },
        goBack: function () {
            history.back()
        }
    }
})