/**
 * Created by duodi on 2017/11/28.
 */
var Banner = {}
var timer ;
Banner.install = function(Vue) {
    Vue.windowWidth = document.body.offsetWidth;
    Vue.animate = function (obj, positionEnd, callback) {
        clearInterval(timer)
        timer = setInterval(function () {
            var objMaginLeft = obj.style.marginLeft ? parseInt(obj.style.marginLeft) : 0;
            var speed = objMaginLeft > positionEnd ? -5 : 5;//调速，每次移5px
            objMaginLeft += speed;
            if (Math.abs(objMaginLeft - positionEnd) <= 1) {
                objMaginLeft = positionEnd;
                clearInterval(timer)
                if (callback && callback.constructor == Function) {
                    callback()
                }
            }
            obj.style.marginLeft = objMaginLeft + "px"
        }, 2)
    }
}
if(typeof window !== undefined && window.Vue){
    window.Vue.use(Banner)
}
//自定义可视开关指令
Vue.directive("visibility-swatch",function(el,binding){
    if(binding.value){
        el.style.visibility="visible";
    }else{
        el.style.visibility="hidden";
    }
})
//城市三级联动
Vue.component("selectCity",{
    template:'<div ref="selectCityBox">' +
    '<select class="province" @click="clickProvince" @change="selectProvince"><option>请选择省份</option></select>' +
    '<select class="city" @change="selectCity"><option>请选择城市</option></select>' +
    '<select class="area"><option>请选择区域</option></select>' +
    '</div>',
    data:function(){
        return {
            provList:provinceList,//列表js
            selectBox:null,//组件
            province:null,//省select
            city:null,//城市select
            area:null,//区select
            arrcity:[],//城市数组
            arrarea:[],//区数组
            provinceIndex:"",//选择的省索引值
            cityIndex:"",//选择的城市索引值
        }
    },
    methods:{
        clickProvince:function(){
            this.selectBox=this.$refs.selectCityBox;
            this.province=this.selectBox.querySelector(".province");
            $(this.province).text("");
            for(var i=0;i<this.provList.length;i++){
                $("<option></option>").text(this.provList[i].name).appendTo($(this.province));
            }
        },
        selectProvince:function(){
            this.selectBox=this.$refs.selectCityBox;
            this.city=this.selectBox.querySelector(".city");
            this.provinceIndex=$(this.province).get(0).selectedIndex;
            $(this.city).text("");
            this.arrcity=this.provList[this.provinceIndex].cityList;
            for(var i=0;i<this.arrcity.length;i++){
                $("<option></option>").text(this.arrcity[i].name).appendTo($(this.city));
            }
            this.selectCity();
        },
        selectCity:function(){
            this.selectBox=this.$refs.selectCityBox;
            this.area=this.selectBox.querySelector(".area");
            this.cityIndex=$(this.city).get(0).selectedIndex;
            $(this.area).text("");
            this.arrarea=this.provList[this.provinceIndex].cityList[this.cityIndex].areaList;
            for(var i=0;i<this.arrarea.length;i++){
                $("<option></option>").text(this.arrarea[i]).appendTo($(this.area))
            }
        }
    }
})

//增减数量
Vue.component("selectNum",{
    template:"<div ref='selectNumBox'>" +
    "<div class='reduce' @click='reduce'>-</div>" +
    "<span v-if='numflag'>{{animatedNumber}}</span>" +
    "<input type='text' class='num' v-model.lazy.number.trim='num' v-visibility-swatch='!numflag'>" +
    "<div class='add' @click='add'>+</div>" +
    "</div>",
    props:{
        //库存量（正number）
        residue:{type:Number,validator:function(value){
        return value>0
    }},
        // 是否显示错误信息开关（boolean,默认false）
        flag:{type:Boolean,default:true},

    },
    data:function(){
        return {
            num:1,//input默认数量
            animatedNumber:1,//变化的数量
            numflag:false//变化数量开关
        }
    },
    methods:{
        reduce: function(){
            this.num--;
            if(this.num<1){
                this.num=1;
            }
        },
        add:function(){
            this.num++;
            if(this.num>this.residue){
                //库存不足提示
                if(!this.flag){
                    this.$emit("show-error");
                }
                //显示库存量的最大值
                this.num=this.residue;
            }
        },

    },
    watch: {
        //库存不足时，数量递减到库存的最大值
        num: function(newValue, oldValue){
            //正则验证，是数子时继续
            if(/^\d+$/g.test(newValue)){
                if(newValue>this.residue){
                    //调出错误提示
                    if(!this.flag){
                        this.$emit("show-error");
                    }
                    //变化前与变化后的数值交换
                    this.numflag=true;
                    var nw=newValue;
                    newValue=this.residue;
                    oldValue=nw;
                    var vm = this
                    function animate () {
                        if (TWEEN.update()) {
                            requestAnimationFrame(animate)
                        }
                    }
                    new TWEEN.Tween({ tweeningNumber: oldValue })
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .to({ tweeningNumber: newValue }, 500)
                        .onUpdate(function () {
                            vm.animatedNumber = this.tweeningNumber.toFixed(0)
                        })
                        .start()
                    animate()
                }
            }else{
                this.num=1;
            }

        },
        //监测变化的数降到库存的最大值时，赋值给input,并且自己消失
        animatedNumber:function(newValue){
            if(newValue==this.residue){
                this.numflag=false;
                this.num=this.residue;
            }
        }
    }
})
var vm=new Vue({
    el:".app",
    data:{
        //轮播图
        banner:[
            {imgSrc:'img/pro_details_img1.png',id:1},
            {imgSrc:'img/pro_details_img2.png',id:2},
            {imgSrc:'img/pro_details_img3.png',id:3},
            {imgSrc:'img/pro_details_img4.png',id:4},
            {imgSrc:'img/pro_details_img5.png',id:5},
            {imgSrc:'img/pro_details_img6.png',id:6},
            {imgSrc:'img/pro_details_img7.png',id:7},
            {imgSrc:'img/pro_details_img8.png',id:8}
        ],
        //商品信息
        pro:{
                name:"美国品牌 迪斯按摩椅 DE-T06 全身多功能太空椅 全包裹全自动智能太空舱3D电动按摩器",
                salePrice:"19999.00",
                color:["迪斯(DESLEEP)DE-T06 贵宾棕","迪斯(DESLEEP)DE-T06 贵宾金","迪斯(DESLEEP)DE-T06 深咖色","迪斯(DESLEEP)DE-T06 白色","迪斯(DESLEEP)DE-T06 贵宾蓝","迪斯(DESLEEP)DE-T06 贵宾紫"],
                number:3,//商品剩余数量
                //评价标签
                commentTab:[
                    {tabName:"有图",num:1324},
                    {tabName:"追评",num:1100},
                    {tabName:"家人喜欢",num:2320},
                    {tabName:"外观漂亮",num:924},
                    {tabName:"按摩很好",num:810},
                    {tabName:"物美价廉",num:870},
                    {tabName:"舒服",num:350},
                    {tabName:"高大上",num:458},
                ],
            //评论(评价的用户名，好坏评，购买类型，评论内容，照片)
            commentDetails:[
                {
                    user:"13502136453",
                    level:5,
                    type:"智能太空舱3D电动按摩器 贵宾棕",
                    text:"外观漂亮，家人喜欢，安装简单，客服态度很好，物流很快，比较满意。",
                    imgUrl:[{img:"img/pro_details_img_com1.png"},{img:"img/pro_details_img_com2.png"},{img:"img/pro_details_img_com3.png"}]
                },
                {
                    user:"13502136453",
                    level:5,
                    type:"智能太空舱3D电动按摩器 贵宾棕",
                    text:"外观漂亮，家人喜欢，安装简单，客服态度很好，物流很快，比较满意。",
                    imgUrl:[{img:"img/pro_details_img_com1.png"},{img:"img/pro_details_img_com2.png"},{img:"img/pro_details_img_com3.png"}]
                }
            ]
        },
        //猜你喜欢商品
        guess_like_pro:[
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess1.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess2.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess3.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess1.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess2.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess3.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess1.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess2.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess3.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess1.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess2.png"},
            {name:" 按摩椅 SM-86L双SL导轨家用全身多功能豪华零重力智",price:"9897.00",imgUrl:"img/pro_details_guess3.png"},
        ],
        lis:null,//轮播li
        index:0,//图片索引值
        ul:null,//轮播ul
        flag:true,//轮播开关
        show:false,//数量不足的错误信息
        totalComNum:0//商品评价的总数
    },
    mounted:function(){
        //轮播初始值
        this.ul = this.$refs.slideUI;
        this.lis = this.ul.getElementsByTagName('li');
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].style.width = Vue.windowWidth+"px"
        }
        this.ul.style.width = Vue.windowWidth*this.lis.length+"px";
        
        for(var i=0;i<this.pro.commentTab.length;i++){
            this.totalComNum+=this.pro.commentTab[i].num;
        }
        this.totalComNum=Math.floor(this.totalComNum);
    },
    methods:{
        //滑动轮播
        bannerSwipe:function(e){
            var ev=e||window.event;
            var _this=this;
            if(this.flag){
                this.flag=false;
                if(ev.type=="swipeleft"){
                    if(this.index>=this.lis.length-1){
                        this.index=this.lis.length-1;
                        this.flag=true;
                        return;
                    }
                    this.index++;
                }
                if(ev.type=="swiperight"){
                    if(this.index<=0){
                        this.index=0;
                        this.flag=true;
                        return;
                    }
                    this.index--;
                }
                Vue.animate(this.ul,-this.index*Vue.windowWidth,function(){
                    _this.flag=true;
                })
            }
        },
        //改变show->true,再2秒后消失
        toShow:function(){
            this.show=true;
            setTimeout(function(){vm.show=!vm.show;},2000);
        }
    },
    
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