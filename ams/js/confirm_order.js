/**
 * Created by Administrator on 2017/12/10.
 */
var prolist={
    props:["item"],
   template:"<li>" +
   "<a href='###'><img :src=item.imgUrl></a> " +
    "<p><a href='###'>{{item.name}}</a></p> " +
    "<span>颜色：{{item.color}}</span> " +
    "<span>型号：{{item.type}}</span> " +
    "<strong>￥{{item.price}}</strong> " +
    "<div class='selectNum'> " +
    "<div class='reduce' @click='reduce'>-</div> " +
    "<input type='text' class='num' v-model='item.unit' @keyup='verification()' @blur=check()>" +
    "<div class='add' @click='add'>+</div> " +
    "<span class='sum' style='display:none'>{{sum}}</span> " +
    "</div> " +
    "</li>",
    data:function(){
    return{
            // sum:0
        }
    },
    methods:{
        //减
        reduce:function(){
            if(this.item.unit<=1){
                // 监听
                vm.$emit("confirmDelete",this.item.id)
            }else{
                this.item.unit--;
                vm.$emit("updateorder",[this.item.id,this.item])
            }
        },
        //加
        add:function(){
            this.item.unit++;
            vm.$emit("updateorder",[this.item.id,this.item])
        },
        //验证输入框,输入时不能为数值外其他字符
        verification:function(){
            this.item.unit=this.item.unit.replace(/[^\d]/g,"");
        },
        //验证输入框，输入后值不能为空或为0，更新本地存储
        check:function(){
            if(this.item.unit==0||this.item.unit==''){
                this.item.unit=1;
            }
            vm.$emit("updateorder",[this.item.id,this.item])
        }
    },
    computed:{
        sum:function(){
            var s=this.item.unit*this.item.price
            return s;
        }
    }
}
var vm=new Vue({
    el:".app",
    data:{
        //订单信息
        orderInfo:[],
        //订单编号
        orderId:"",
        //发票(默认true)
        isSelected:true,
        //删除确认框
        isconfirm:false,
        // 总价
        totalPrice:0,
        proUL:null,
        proLi:null,
    },
    methods:{
        //读取localStorage order
        readorderInfo: function () {
            var order = localStorage.orderInfo ? JSON.parse(localStorage.orderInfo) : [];
            return order;
        },
        //写入localStorage order
        writeorderInfo: function (orderInfo) {
            localStorage.orderInfo = JSON.stringify(orderInfo);
        },
        //读取localStorage order
        readconfirmOrderInfo: function () {
            var order = localStorage.confirmOrderInfo ? JSON.parse(localStorage.confirmOrderInfo) : [];
            return order;
        },
        //写入localStorage order
        writeconfirmOrderInfo: function (orderInfo) {
            localStorage.confirmOrderInfo = JSON.stringify(orderInfo);
        },
        //选择是否要发票
        select:function(e){
            var ev=e||window.event;
            if(ev.target.tagName=="INPUT"){
                this.isSelected=!this.isSelected;
            }
        },
        //弹框点击确定删除
        doDelete:function(){
            var order=this.readorderInfo();
            var deleIndex=0;
            for(var i=0;i<order.length;i++){
                if(order[i].id==this.index){
                    deleIndex=i;
                }
            }
            order.splice(deleIndex,1);//删除该索引下的货品
            this.isconfirm=false;//弹框消失
            this.writeorderInfo(order);//写入本地存储
            this.orderInfo=this.readorderInfo();//页面重写
        },
        //确认订单
        confirmOrder:function(){
            var date=new Date();
            date=date.toLocaleString();
            var confirmOrder=this.readconfirmOrderInfo();
            var thisorder={};
            var thisprolist=this.readorderInfo();
            thisorder.date=date;
            thisorder.orderId=this.orderId;
            thisorder.statue=1;  //1：代付款
            thisorder.proList=thisprolist;
            confirmOrder.push(thisorder);
            this.writeconfirmOrderInfo(confirmOrder);
            location.href="pay.html";
        }
    },
    mounted: function () {
        //读取loaclStorage数据，赋值
        this.orderInfo = this.readorderInfo();
        //订单编号
        var date=new Date();
        var id=date.getTime().toString();
        this.orderId=id;
        //弹出删除框
        this.$on("confirmDelete",function(ind){
            this.isconfirm=true;//弹框
            this.index=ind;
        });
        //更新数据
        this.$on("updateorder",function(arr){
            var order=this.readorderInfo();
            var updateIndex=0;
            for(var i=0;i<order.length;i++){
                if(order[i].id==arr[0]){
                    updateIndex=i;
                }
            }
            order.splice(updateIndex,1,arr[1]);
            this.writeorderInfo(order);
            this.orderInfo=this.readorderInfo();//页面重写
        })
    },
    updated:function(){
        this.proUL=this.$refs.proUL;
        var total=0;
        $(this.proUL).find(".sum").each(function(ind,val){
            total+=parseFloat($(val).text())
        })
        this.totalPrice=total;
    },
    components:{
        "prolist":prolist
    }
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