var pay={
    template:"<li >\n" +
    "                <label :class=\"isSelected=='true'?'on':''\" >\n" +
    "                    <img :src=\"item.imgUrl\" alt=\"\">\n" +
    "                    <div>\n" +
    "                        <p>{{item.name}}支付</p>\n" +
    "                        <span>推荐有{{item.name}}的用户使用</span>\n" +
    "                    </div>\n" +
    "                    <input type=\"radio\" name='pay' value='true' @click='select'>\n" +
    "                </label>\n" +
    "            </li>",
    props:["item"],
    data:function(){
        //选支付方式
        return {
            isSelected:false,
        }
    },
    methods:{
        select:function(e){
            this.isSelected='true';
            var ev=e||window.event;
            if(ev.target.tagName=="INPUT") {
                vm.$emit("selectpay", this.item.id);
            }
        }
    }
}


var vm=new Vue({
    el:".app",
    data:{
        //订单信息
        orderInfo:[],
        //支付方式
        pay_method:[
            {id:1,name:"支付宝",imgUrl:"img/pay_zhi.png"},
            {id:2,name:"微信",imgUrl:"img/pay_wechat.png"},
            {id:3,name:"QQ",imgUrl:"img/pay_qq.png"},
        ],
        //确认支付的弹框
        isconfirm:false,
        //支付框未选提示
        isShow:false
    },
    methods:{
        //读取localStorage confirmorder
        readorderInfo: function () {
            var order = localStorage.confirmOrderInfo ? JSON.parse(localStorage.confirmOrderInfo) : [];
            return order;
        },
        //写入localStorage confirmorder
        writeorderInfo: function (orderInfo) {
            localStorage.confirmOrderInfo = JSON.stringify(orderInfo);
        },
        select:function(e){
            var ev=e||window.event;
            if(ev.target.tagName=="INPUT"){
                this.isSelected=!this.isSelected;
            }
        },
        //点击确认支付,先判断是否选择支付方式，后跳出弹框
        toPay:function(){
            var i=0;
            $(".pay_box li label").find("input").each(function(ind,val){
                if($(val).is(":checked")){
                    vm.isconfirm=true;
                    return i=true;
                }
            })
            if(!i){
                vm.isShow=true;
                setTimeout(function(){vm.isShow=false},2000);
            }

        },
        //点击确认，跳转成功支付
        pay:function(){
            location.href="pay_success.html";
        },
        //点击取消，跳转支付失败
        cancelPay:function(){
          location.href="pay_failure.html";
        }
    },
    mounted: function () {
        //读取loaclStorage数据，赋值
        this.orderInfo = this.readorderInfo().splice(-1);
        //除了选中的，其余的都改变会原来的样式
        this.$on("selectpay",function(ind){
           $(".pay_box li label").not($(".pay_box li label").eq(ind-1)).removeClass("on");
           $(".pay_box li label").eq(ind-1).addClass("on")
        })
    },
    components:{"pay":pay}
})
new Vue({
    el:"header",
    methods: {
        //返回
        goBack: function () {
            history.back()
        }
    }
})