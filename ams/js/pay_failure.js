/**
 * Created by Administrator on 2017/12/10.
 */
/**
 * Created by Administrator on 2017/12/10.
 */
var vm=new Vue({
    el:".app",
    data:{
        orderInfo:[]
    },
    methods:{
        //读取localStorage confirmorder
        readorderInfo: function () {
            var order = localStorage.confirmOrderInfo ? JSON.parse(localStorage.confirmOrderInfo) : [];
            return order;
        },
    },
    mounted:function(){
        //读取loaclStorage数据，赋值
        this.orderInfo = this.readorderInfo().splice(-1);
    }
})