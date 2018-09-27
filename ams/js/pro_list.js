/**
 * Created by Administrator on 2017/12/3.
 */
var pro_list=[
    {
        id:1,
        name:"按摩椅家用 太空舱零重力全身多功能按摩椅SM-700 蓝白色",
        price:"3998.00",
        imgUrl:"img/pro_list_img1.png",
        type:"按摩椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"皮革",//1.皮革；2：真皮；3：合成皮；4：纺织物
        sale_num:111
    },
    {
        id:2,
        name:"按摩椅家用 太空舱零重力全身多功能按摩椅SM-700 蓝白色",
        price:"19980.00",
        imgUrl:"img/pro_list_img2.png",
        type:"按摩椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"真皮",//1.皮革；2：真皮；3：合成皮；4：纺织物
        sale_num:12
    },
    {
        id:3,
        name:"按摩椅家用 太空舱零重力全身多功能按摩椅SM-700 蓝白色",
        price:"998.00",
        imgUrl:"img/pro_list_img3.png",
        type:"按摩椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"合成皮",//1.皮革；2：真真皮；3：合成皮；4：纺织物
        sale_num:4356
    },
    {
        id:4,
        name:"助眠椅家用 太空舱零重力全身多功能助眠椅SM-700 蓝白色",
        price:"9880.00",
        imgUrl:"img/pro_list_img4.png",
        type:"助眠椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"合成皮",//1.皮革；2：真真皮；3：合成皮；4：纺织物
        sale_num:666
    },
    {
        id:5,
        name:"助眠椅家用 太空舱零重力全身多功能助眠椅SM-700 蓝白色",
        price:"1988.00",
        imgUrl:"img/pro_list_img5.png",
        type:"助眠椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"皮革",//1.皮革；2：真真皮；3：合成皮；4：纺织物
        sale_num:230
    },
    {
        id:6,
        name:"助眠椅家用 太空舱零重力全身多功能助眠椅SM-700 蓝白色",
        price:"6988.00",
        imgUrl:"img/pro_list_img6.png",
        type:"助眠椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"真皮",//1.皮革；2：真皮；3：合成皮；4：纺织物
        sale_num:12
    },
    {
        id:7,
        name:"按摩器家用 太空舱零重力全身多功能按摩器SM-700 蓝白色",
        price:"968.00",
        imgUrl:"img/pro_list_img7.png",
        type:"按摩器",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"纺织物",//1.皮革；2：真真皮；3：合成皮；4：纺织物
        sale_num:909
    },
    {
        id:8,
        name:"按摩器家用 太空舱零重力全身多功能按摩器SM-700 蓝白色",
        price:"9688.00",
        imgUrl:"img/pro_list_img8.png",
        type:"按摩器",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"纺织物",//1.皮革；2：真真皮；3：合成皮；4：纺织物
        sale_num:188
    },
    {
        id:9,
        name:"办公椅家用 太空舱零重力全身多功能办公椅SM-700 蓝白色",
        price:"2688.00",
        imgUrl:"img/pro_list_img1.png",
        type:"办公椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"合成皮",//1.皮革；2：真皮；3：合成皮；4：纺织物
        sale_num:2228
    },
    {
        id:10,
        name:"办公椅家用 太空舱零重力全身多功能办公椅SM-700 蓝白色",
        price:"688.00",
        imgUrl:"img/pro_list_img2.png",
        type:"办公椅",//1:按摩椅；2：助眠椅；3：按摩器；4：办公椅
        material:"皮革",//1.皮革；2：真皮；3：合成皮；4：纺织物
        sale_num:55
    }
]
var vm=new Vue({
    el:".main",
    data:{
        pro_list:pro_list,
        //筛选
        filter_selection:{
            type:[
                {id:1,name:"按摩椅"},
                {id:2,name:"助眠椅"},
                {id:3,name:"按摩器"},
                {id:4,name:"办公椅"}
            ],
            material:[
                {id:1,name:"皮革"},
                {id:2,name:"真皮"},
                {id:3,name:"合成皮"},
                {id:4,name:"纺织物"}
            ],
            size:["155 x 65 x 103cm","165 x 65 x 113cm","170 x 70 x 113cm","175 x 75 x 130cm","180 x 80 x 135cm","195 x 85 x 150cm"],
            price:["0~3000","3000~6000","6000~9000","9000~12000","20000~30000","30000以上"],
            method:["自取","送上门","邮寄"]
        },
        //升序asc:true/降序dec：false
        sort_method:true,
        //筛选框出现消失开关
        filter_is_show:false,

        pro_list_after_filter:[],

        //获取用户filter的选项
        user_filter:{
            type:[],
            material:[],
            size:[],
            price:"",
            method:[],
        },
        typeIsChecked:false,
        //选中样式
        selectedStyle:{
            background:"#D3201B",
            color:"white",
            "border-radius":"0.1rem"
        },
        notSelectedStyle:{
            color:"#666",
            background:"white",
        },

        //加入购物车的商品信息
        shopCart:{
            name:"",
            price:"",
            imgUrl:"",
            unit:1,
            color:"蓝白色",
            type:"SM-700 "
        },
        //弹框点击“确定”
        isconfirm:false,
    },
    methods:{
        //加入购物车
        addToCart:function(e){
            var ev=e||window.event;
            var shopCart=this.readShopCartInfo();
            var length=localStorage.id?localStorage.id:0;
            this.shopCart.id=parseInt(length)+1;
            localStorage.id=this.shopCart.id;
            this.shopCart.name=$(ev.target).parent().find("h3").text();
            this.shopCart.price=$(ev.target).parent().find("span").text().slice(1);
            this.shopCart.imgUrl=$(ev.target).parent().find("img").attr("src");
            shopCart.push(this.shopCart);
            this.writeShopCartInfo(shopCart);
            this.isconfirm=true;//弹出确认框
        },
        //读取localStorage
        readShopCartInfo:function(){
          var shopCart=localStorage.shopCartInfo?JSON.parse(localStorage.shopCartInfo):[];
            return shopCart;
        },
        //写入localStorage
        writeShopCartInfo:function(shopCartInfo){
            localStorage.shopCartInfo=JSON.stringify(shopCartInfo);
        },
        //filter
        selectType:function(e){
            var ev=e||window.event;
            ev.stopImmediatePropagation();
            //如果checked,排除重复，push,否则，删除该条数据
            if($(ev.target).is(":checked")){
                $(ev.target).parent("label").css(this.selectedStyle);
                if(this.user_filter.type.indexOf(ev.target.value)==-1){
                    this.user_filter.type.push(ev.target.value);
                }
                console.log( this.user_filter.type);
            }else{
                $(ev.target).parent("label").css(this.notSelectedStyle);
                var ind=this.user_filter.type.indexOf(ev.target.value);
                this.user_filter.type.splice(ind,1);
                console.log( this.user_filter.type);
            }
        },
        selectMaterial:function(e){
            var ev=e||window.event;
            ev.stopImmediatePropagation();
            if($(ev.target).is(":checked")){
                $(ev.target).parent("label").css(this.selectedStyle);
                if(this.user_filter.material.indexOf(ev.target.value)==-1){
                    this.user_filter.material.push(ev.target.value);
                }
                console.log( this.user_filter.material);
            }else{
                $(ev.target).parent("label").css(this.notSelectedStyle);
                var ind=this.user_filter.material.indexOf(ev.target.value);
                this.user_filter.material.splice(ind,1);
                console.log( this.user_filter.material);
            }
        },
        selectmethod:function(e){
            var ev=e||window.event;
            ev.stopImmediatePropagation();
            if($(ev.target).is(":checked")){
                $(ev.target).parent("label").css(this.selectedStyle);
                if(this.user_filter.method.indexOf(ev.target.value)==-1){
                    this.user_filter.method.push(ev.target.value);
                }
                console.log( this.user_filter.method);
            }else{
                $(ev.target).parent("label").css(this.notSelectedStyle);
                var ind=this.user_filter.method.indexOf(ev.target.value);
                this.user_filter.method.splice(ind,1);
                console.log( this.user_filter.method);
            }
        },
        selectSize:function(e){
            var ev=e||window.event;
            ev.stopImmediatePropagation();
            if($(ev.target).is(":checked")){
                $(ev.target).parent("label").css({color:"#cc0000"});
                if(this.user_filter.size.indexOf(ev.target.value)==-1){
                    this.user_filter.size.push(ev.target.value);
                }
                console.log( this.user_filter.size);
            }else{
                $(ev.target).parent("label").css({color:"#666"});
                var ind=this.user_filter.size.indexOf(ev.target.value);
                this.user_filter.size.splice(ind,1);
                console.log( this.user_filter.size);
            }
        },
        selectPrice:function(e){
            var ev=e||window.event;
            ev.stopImmediatePropagation();
            $(".price").find("label").css({color:"#666"});
            if($(ev.target).is(":checked")){
                $(ev.target).parent("label").css({color:"#cc0000"});
                this.user_filter.price=ev.target.value;
                console.log( this.user_filter.price);
            }
        },
        //点击确认筛选,只做了价格的筛选
        confirmFilter:function(){
            this.pro_list=pro_list;
            this.pro_list_after_filter=[];
            for(var i=0;i<this.pro_list.length;i++){
                if(this.user_filter.price!=""){
                    var pricearea=this.user_filter.price.split("~");
                    if(pricearea.length==2){
                        if(parseFloat(this.pro_list[i].price)>=pricearea[0]&&parseFloat(this.pro_list[i].price)<pricearea[1]){
                            this.pro_list_after_filter.push(this.pro_list[i])
                        }
                    }else{
                        if(parseFloat(this.pro_list[i].price)>=parseFloat(pricearea)){
                            this.pro_list_after_filter.push(this.pro_list[i])
                        }
                    }
                }
            }
            this.pro_list=this.pro_list_after_filter;
            this.filter_is_show=false;
        },

        //点击出现筛选框
        filterShow:function(){
            this.filter_is_show=true;
        },
        //点击取消筛选框
        filterHide:function(){
            this.pro_list=pro_list;
            this.pro_list_after_filter=[];
            this.filter_is_show=false;
        },
        //默认排序
        sortByDefault:function(){
            this.pro_list=this.quickSort(this.pro_list,"id",true);
        },
        //按销量排
        sortByProceed:function(){
            this.pro_list=this.quickSort(this.pro_list,"sale_num",this.sort_method);
            this.sort_method=!this.sort_method;
        },
        //按价格排
        sortByPrice:function(){
            this.pro_list=this.quickSort(this.pro_list,"price",this.sort_method);
            this.sort_method=!this.sort_method;
        },
        //快速排序
        quickSort:function(array,keyvalue,sort){
            var length = array.length;
            if(sort) {
                if (length <= 1) {
                    return array;
                } else {
                    var smaller = [];
                    var bigger = [];
                    var base = [array[0]];
                    for (var i = 1; i < length; i++) {
                        if (parseFloat(array[i][keyvalue]) < parseFloat(base[0][keyvalue])) {
                            smaller.push(array[i]);
                        } else {
                            bigger.push(array[i]);
                        }
                    }
                    return this.quickSort(smaller, keyvalue,sort).concat(base.concat(this.quickSort(bigger, keyvalue,sort)))
                }
            }else{
                if (length <= 1) {
                    return array;
                } else {
                    var smaller = [];
                    var bigger = [];
                    var base = [array[0]];
                    for (var i = 1; i < length; i++) {
                        if (parseFloat(array[i][keyvalue]) > parseFloat(base[0][keyvalue])) {
                            bigger.push(array[i]);
                        } else {
                            smaller.push(array[i]);
                        }
                    }
                    return this.quickSort(bigger, keyvalue,sort).concat(base.concat(this.quickSort(smaller, keyvalue,sort)))
                }
            }
        }
    }
})