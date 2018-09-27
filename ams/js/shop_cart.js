/**
 * Created by Administrator on 2017/12/3.
 */
//pro_list
//label选中的样式
var selectedstyle="background: url('img/shop_cart_select_on.png') 0.2rem 0.5rem / 0.6rem 0.6rem no-repeat;"
//label未选中的样式
var notSelectedStyle="background: url('img/shop_cart_select.png') 0.2rem 0.5rem / 0.6rem 0.6rem no-repeat;"
//label选中的样式
var selectedallstyle="background: url('img/shop_cart_select_on.png') 0.2rem 0.32rem / 0.4rem 0.4rem no-repeat;"
//label未选中的样式
var notSelectedallStyle="background: url('img/shop_cart_select.png') 0.2rem 0.32rem / 0.4rem 0.4rem no-repeat;"

var colorArr=["浅杏色","深蓝色","蓝白色","贵宾金","深咖色"];
var typeArr=["ADB-6045 ","WV-123 ","FER00 ","SM-700 "]
Vue.component("proList",{
    props:['shopCart','isEdit'],
    template:'<li :data-index="shopCart.id">' +
    ' <label :style="isChecked?selectStyle:notSelectStyle">' +
    ' <input type="checkbox" class="select" @click="selectPro" :checked="isChecked"> ' +
    '</label> ' +
    '<a href="###"><img :src="shopCart.imgUrl" alt=""></a> ' +
    '<div v-show="!isEdit"><h3><a href="###">{{shopCart.name}}</a></h3>' +
    '<span>颜色：{{shopCart.color}}</span> ' +
    '<span>型号：{{shopCart.type}}</span> </div>' +
    '<div class="option"  v-show="isEdit">' +
    '<span>颜色：</span><label><select class="color" v-model="selectedColor" v-on:change="updateColor"><option v-for="item in colorArr":key="item.id" :value="item">{{item}}</option></select></label>' +
    '<span>型号：</span><label><select class="type" v-model="selectedType" v-on:change="updateType"><option v-for="item in typeArr":key="item.id" :value="item">{{item}}</option></select></label>' +
    '</div> ' +
    '<strong>￥{{shopCart.price}}</strong>' +
    '<div class="selectNum">' +
    "<div class='reduce' @click='reduce'>-</div>" +
    "<input type='text' class='num' v-model='shopCart.unit' @keyup='verification()'>" +
    "<div class='add' @click='add'>+</div>" +
    "<span class='sum' style='display:none'>{{sum}}</span>" +
    "</div>" +
    "</li>",
    data:function() {
        return {
            isChecked: false,
            selectStyle: selectedstyle,
            notSelectStyle: notSelectedStyle,
            isAllChecked:false,
            colorArr:colorArr,
            typeArr:typeArr,
            selectedColor:this.shopCart.color,//选择的颜色
            selectedType:this.shopCart.type//选择的类型
        }
    },
    methods:{
        updateColor:function(){
            this.shopCart.color=this.selectedColor;
            vm.$emit("updateShopCart",[this.shopCart.id,this.shopCart])
        },
        updateType:function(){
            this.shopCart.type=this.selectedType;
            vm.$emit("updateShopCart",[this.shopCart.id,this.shopCart])
        },
        // 单选
        selectPro:function(){
            this.isChecked=!this.isChecked;
            // 商品件数选中加1，未选中减1
            if(this.isChecked){
                vm.$emit("selectPro",[1,this.sum]);
            }else{
                vm.$emit("selectPro",[-1,this.sum]);
            }
        },
        // 减
        reduce:function(){
            if(this.shopCart.unit<=1){
                // 监听
                vm.$emit("confirmDelete",[this.shopCart.id,this.isChecked])
            }else{
                this.shopCart.unit--;
                vm.$emit("updateShopCart",[this.shopCart.id,this.shopCart])
            }
        },
        // 加
        add:function(){
            this.shopCart.unit++;
            vm.$emit("updateShopCart",[this.shopCart.id,this.shopCart])
        },
        //验证输入框
        verification:function(){
            this.shopCart.unit=this.shopCart.unit.replace(/[^\d]/g,"")
            vm.$emit("updateShopCart",[this.shopCart.id,this.shopCart])
        }
    },
    mounted:function(){
        this.isChecked=this.isAllChecked;
        console.log(this.isAllChecked);
        var _this=this;
        vm.$on("changeSelect",function(bool){
           _this.isAllChecked=bool;
            _this.isChecked=bool;
        })
    },
    computed:{
        sum:function(){
            if(this.isChecked){
                var s=this.shopCart.unit*this.shopCart.price
                vm.$emit("sumChange",[this.shopCart.id,s]);
                return s;
            }
            else{
                return 0;
            }
         }
    },
    watch:{
        isAllChecked:function() {
            this.isChecked=this.isAllChecked;
        }
    },
})
var vm=new Vue({
    el: ".app",
    data: {
        //加入购物车的商品信息
        shopCartInfo: [],
        //订单
        orderInfo:[],
        //全选
        isCheckedAll:false,
        selectStyle: selectedallstyle,
        notSelectStyle: notSelectedallStyle,
        proUL:null,
        proLi:null,
        totalPrice:0,
        isconfirm:false,//确认删除框
        index:null,//点击li的索引值
        num:null,
        selectedNum:0,//钩选数量
        isSelected:false,
        //编辑按钮
        istoEdit:false
    },
    methods: {
        //完成编辑
        finishEdit:function(){
            this.istoEdit=false;
        },
        //返回
        goBack: function () {
            history.back()
        },
        //点击编辑，切换
        toEdit:function(){
            vm.istoEdit=true;
        },
        //全选
        all:function(){
            var shopCart=this.readShopCartInfo();
            console.log(this.isCheckedAll)
            this.isCheckedAll=!this.isCheckedAll;
            this.$emit("changeSelect",this.isCheckedAll);
            if(this.isCheckedAll){
                this.selectedNum=shopCart.length;
            }else{
                this.selectedNum=0;
            }
        },
        doDelete:function(){
            var shopCart=this.readShopCartInfo();
            var deleIndex=0;
            for(var i=0;i<shopCart.length;i++){
                if(shopCart[i].id==this.index){
                    deleIndex=i;
                }
            }
            shopCart.splice(deleIndex,1);//删除该索引下的货品
            if(this.isSelected){
                this.selectedNum--;
            }
            this.isconfirm=false;//弹框消失
            this.writeShopCartInfo(shopCart);//写入本地存储
            this.shopCartInfo=this.readShopCartInfo();//页面重写

            if(this.selectedNum==shopCart.length){
                this.isCheckedAll=true;
            }else{
                this.isCheckedAll=false;
            }
        },
        //读取localStorage
        readShopCartInfo: function () {
            var shopCart = localStorage.shopCartInfo ? JSON.parse(localStorage.shopCartInfo) : [];
            return shopCart;
        },
        //写入localStorage
        writeShopCartInfo: function (shopCartInfo) {
            localStorage.shopCartInfo = JSON.stringify(shopCartInfo);
        },
        //读取localStorage order
        readorderInfo: function () {
            var order = localStorage.orderInfo ? JSON.parse(localStorage.orderInfo) : [];
            return order;
        },
        //写入localStorage order
        writeorderInfo: function (orderInfo) {
            localStorage.orderInfo = JSON.stringify(orderInfo);
        },
        //多选删除
        mulDelete:function(){
            this.proUL=this.$refs.proUL;
            $(this.proUL).find(".select").each(function(ind,val){
                if($(val).is(":checked")){
                    var pro_id=$(val).parent().parent().attr("data-index");
                    var shopCart=vm.readShopCartInfo();
                    var newshopCart=[];
                    for(var i=0;i<shopCart.length;i++){
                        if(shopCart[i].id!=pro_id){
                            newshopCart.push(shopCart[i]);
                        }
                    }
                    vm.writeShopCartInfo(newshopCart);
                    vm.selectedNum--;
                }
            })
            vm.shopCartInfo=vm.readShopCartInfo();
        },
        //去结算
        toOrder:function(){
            this.proUL=this.$refs.proUL;
            $(this.proUL).find(".select").each(function(ind,val){
                if($(val).is(":checked")){
                    var pro_id=$(val).parent().parent().attr("data-index");
                    var shopCart=vm.readShopCartInfo();
                    for(var i=0;i<shopCart.length;i++){
                        if(shopCart[i].id==pro_id){
                           vm.orderInfo.push(shopCart[i]);
                        }
                    }
                    vm.writeorderInfo(vm.orderInfo);
                }
            })
            location.href="confirm_order.html";
        }
    },
        mounted: function () {
            //读取loaclStorage数据，赋值
            this.shopCartInfo = this.readShopCartInfo();
            // 响应删除
            this.$on("confirmDelete",function(arr){
                this.isconfirm=true;//弹框
                this.index=arr[0];//赋传来的索引值
                this.isSelected=arr[1];//是否选中
            });
            //响应商品件数
            this.$on("selectPro",function(arr){
                this.selectedNum+=arr[0];
                var shopCart=this.readShopCartInfo();
                if(this.selectedNum==shopCart.length){
                    this.isCheckedAll=true;
                }else{
                    this.isCheckedAll=false;
                }
            });
            //更新购物车
            this.$on("updateShopCart",function(arr){
                var shopCart=this.readShopCartInfo();
                var updateIndex=0;
                for(var i=0;i<shopCart.length;i++){
                    if(shopCart[i].id==arr[0]){
                        updateIndex=i;
                    }
                }
                shopCart.splice(updateIndex,1,arr[1]);
                this.writeShopCartInfo(shopCart);
                this.shopCartInfo=this.readShopCartInfo();//页面重写
            })
            
        },
        updated:function(){
            this.proUL=this.$refs.proUL;
            var total=0;
            $(this.proUL).find(".sum").each(function(ind,val){
                total+=parseFloat($(val).text())
            })
            this.totalPrice=total;
        }

})