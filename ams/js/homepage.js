/**
 * Created by Administrator on 2017/11/22.
 */
// var Banner = {}
// var timer ;
// var page=0;
// Banner.install = function(Vue){
//     Vue.windowWidth = document.body.offsetWidth;
//     Vue.animate1 = function(obj,positionEnd,callback){
//         clearInterval(timer)
//         clearInterval(t)
//         timer = setInterval(function(){
//             var objMaginLeft = obj.style.marginLeft ? parseInt(obj.style.marginLeft) : 0;
//             var speed = objMaginLeft > positionEnd ? -5 : 5;//调速，每次移5px
//             objMaginLeft+=speed;
//             if(Math.abs(objMaginLeft-positionEnd) <= 1){
//                 objMaginLeft = positionEnd;
//                 clearInterval(timer)
//                 if(callback && callback.constructor == Function){
//                     callback()
//                 }
//             }
//             obj.style.marginLeft = objMaginLeft+"px"
//         },2)
//         t=setInterval(move,2000);
//     }
//     var t=setInterval(move,2000);
//     function move(){
//         page++;
//         if(page>=$(".banner li").length){
//         $(".banner ul").css({"margin-left":0})
//             page=1
//     }
//         $(".banner ul").animate({marginLeft:-parseInt($(".banner li")[0].style.width)*page},700,function(){
//
//             console.log("aa"+page)
//
//         })
//     }
// }
// if(typeof window !== undefined && window.Vue){
//     window.Vue.use(Banner)
// }
// new Vue({
//     el:".banner",
//     data:{
//         banner:[
//             {imgSrc:'img/banner1.jpg'},
//             {imgSrc:'img/banner2.jpg'},
//             {imgSrc:'img/banner3.jpg'},
//             {imgSrc:'img/banner1.jpg'}
//         ],
//         lis:null,
//         index:0,
//         ul:null,
//         flag:true,
//     },
//     mounted:function(){
//         this.ul = this.$refs.slideUI;
//         this.lis = this.ul.getElementsByTagName('li');
//         for(var i=0;i<this.lis.length;i++){
//             this.lis[i].style.width = Vue.windowWidth+"px"
//         }
//         this.ul.style.width = Vue.windowWidth*this.lis.length+"px"
//     },
//     methods:{
//         bannerSwipe:function(e){
//             var ev=e||window.event;
//             var _this=this;
//             if(this.flag){
//                 this.flag=false;
//                 if(ev.type=="swipeleft"){
//                     if(this.index>=this.lis.length-1){
//                         this.index=this.lis.length-1;
//                         this.flag=true;
//                         return;
//                     }
//                     this.index++;
//                     page++;
//                 }
//                 if(ev.type=="swiperight"){
//                     if(this.index<=0){
//                         this.index=0;
//                         this.flag=true;
//                         return;
//                     }
//                     this.index--;
//                     page--;
//                 }
//                 Vue.animate1(this.ul,-this.index*Vue.windowWidth,function(){
//                     _this.flag=true;
//                     console.log(page)
//                 })
//             }
//
//         }
//     }
//
// })
//轮播引用swiper.js
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var vm=new Vue({
    el:".app",//全局
    data:{
        //导航图标
        menus:[
            {imgSrc:"img/homepage_nav1.png",name:"手机充值"},
            {imgSrc:"img/homepage_nav2.png",name:"火热销售"},
            {imgSrc:"img/homepage_nav3.png",name:"最新专区"},
            {imgSrc:"img/homepage_nav4.png",name:"节日特惠"},
            {imgSrc:"img/homepage_nav5.png",name:"优惠券"},
            {imgSrc:"img/homepage_nav6.png",name:"温馨家居"},
            {imgSrc:"img/homepage_nav7.png",name:"会赚钱"},
            {imgSrc:"img/homepage_nav8.png",name:"查看更多"},
        ],
        //秒杀特惠商品
        secKillPro:[
            {price:"98.70",unit:45,imgSrc:"img/homepage_miao1.png",mark:"推荐"},
            {price:"87.50",unit:40,imgSrc:"img/homepage_miao2.png",mark:"省钱"},
            {price:"48.30",unit:70,imgSrc:"img/homepage_miao3.png",mark:"划算"},
            {price:"65.10",unit:68,imgSrc:"img/homepage_miao4.png",mark:""},
            {price:"92.70",unit:47,imgSrc:"img/homepage_miao2.png",mark:""},
            {price:"84.40",unit:14,imgSrc:"img/homepage_miao1.png",mark:""},
            {price:"49.50",unit:43,imgSrc:"img/homepage_miao3.png",mark:""},
            {price:"75.10",unit:53,imgSrc:"img/homepage_miao4.png",mark:""},
        ],
        //猜你喜欢
        guessPro:[
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"},
            {price:"1940.00",name:"欧利华OLIVA多功能全身电动智能家用太空舱按摩椅A09 香槟金", imgSrc:"img/homepage_gus1.png"}
        ],

        ul:null,//秒杀特惠ul
        lis:null,//秒杀特惠li
        offleft:0,//秒杀特惠ul左边距
        hour:"7",//倒计时“时”
        minute:"0",//倒计时“分”
        second:"05",//倒计时“秒”
    },
    mounted:function(){
        //让秒杀特惠的ul宽自适应
        this.ul=this.$refs.seckill_UL;
        this.lis=this.ul.getElementsByTagName("li");
        this.ul.style.width=this.lis.length*1.58+"rem";
        //每秒调用一次倒计时方法设置秒--
        var t=setInterval(this.countdown,1000);
    },
    methods: {
        //秒杀商品滑动
        sec_kill_swipe: function (e) {
            var ev = e || window.event;
            var swipeLength = ev.distance;//滑动长度
            var ulWidth=parseInt(vm.ul.style.width)*Vue.windowWidth/7.1786//秒杀特惠ul宽（px）
            //往左划
            if(ev.type=="swipeleft"){
                //滑动长度+ul左边距<=ul宽-屏幕宽时，滑动手指滑动的距离，否则多划100px后回来
                if(swipeLength+Math.abs(parseInt(vm.offleft))<=ulWidth-Vue.windowWidth){
                    $(".sec_kill_pro").animate({"margin-left":-1*swipeLength+parseInt(vm.offleft)},400,function(){
                        vm.offleft=$(".sec_kill_pro").css('margin-left');
                    })
                }else{
                    $(".sec_kill_pro").animate({"margin-left":-ulWidth+Vue.windowWidth-100},200,function(){
                        $(".sec_kill_pro").animate({"margin-left":parseInt(vm.ul.style.marginLeft)+50},400,function(){
                            vm.offleft=$(".sec_kill_pro").css('margin-left');
                        })
                    })
                }

            }
            //往右划
            else if(ev.type=="swiperight"){
                //滑动距离<=ul左边距时，滑动手指滑动的距离，否则多划100px后回来
                if(swipeLength<=Math.abs(parseInt(vm.offleft))){
                    $(".sec_kill_pro").animate({"margin-left":swipeLength+parseInt(vm.offleft)},400,function(){
                        vm.offleft=$(".sec_kill_pro").css('margin-left');
                    })
                }else{
                    $(".sec_kill_pro").animate({"margin-left":100},200,function(){
                        $(".sec_kill_pro").animate({"margin-left":0},400,function(){
                            vm.offleft=$(".sec_kill_pro").css('margin-left');
                        })
                    })
                }
            }
        },
        //倒计时，设置秒--
        countdown:function(){
            if(parseInt(this.second)==0){
                this.second=60;
            }
            this.second--;
            this.second=this.second<10?"0"+this.second:this.second;
        }
    },
    computed:{
        //监听倒计时“分”
        cminute:function(){
            if(parseInt(this.second)==0){
                if(parseInt(this.minute)==0){
                    this.minute=60;
                }
                this.minute--;
                return this.minute<10?"0"+this.minute:this.minute;
            }else{
                return this.minute<10?"0"+this.minute:this.minute;
            }
        },
        //监听倒计时“时”
        chour:function(){
            if(parseInt(this.minute)==0){
                if(parseInt(this.hour)==0){
                    this.hour=60;
                }
                this.hour--;
                return this.hour<10?"0"+this.hour:this.hour;
            }else{
                return this.hour<10?"0"+this.hour:this.hour;
            }
        }
    }
})
