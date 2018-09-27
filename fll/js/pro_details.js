// 点击checkbox
$("label").on("tap",function(){
    if(!$(this).children()[0].checked){
        $(this).css({"background":"url('img/pro_details_13.png')","background-size":"100% 100%"});
    }
    else{
        $(this).css({"background":"url('img/pro_details_12.png')","background-size":"100% 100%"});
    }
})
//加入购物车
$(".addToCart").on("tap",function(){
    var data=getShop();
    // 创建一个对象
    var objList={};
    // 获取各个属性
    objList.id=1;
    objList.name=$(".pro_gram").find("li").find("h3").text();
    objList.price=$(".pro_gram").find("li").find("p").find("b").text();
    objList.type=$(".pro_gram").find("li").find("h4").text();
    objList.num=1;
    var f=true;
    var id=0;
    if(data){
        // $.each(index,element)    index:选择器的 index 位置   element:当前索引值对应的值
        $.each(data,function(v,i){
            //console.log(v,i);
            if(i.id==objList.id){
                objList.num=i.num+1;
                f=false;
                //id=e?
                id=i;    
            }
        })   
    }
    console.log(objList);
    //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。该方法会改变原始数组
    if(!f){
        data.splice(id,1);
        data.push(objList);
        setShop(data);
        alert("加入购物车成功");
    }else{
        data.push(objList);
        setShop(data);
        alert("加入购物车成功");
    }
})
//点击立即购买的时候跳转到确定订单页
$(".toBuy").on("tap",function(){
    var data=[];
    var objList={};
    objList.id=1;
    objList.name=$(".pro_gram").find("li").find("h3").text();
    objList.price=$(".pro_gram").find("li").find("b").text();
    objList.type=$(".pro_gram").find("li").find("h4").text();
    objList.num=1;
    data.push(objList);
    writeOrder(data);
    location.href="confirm_order.html";
})
// 本地存储获取数据
function getShop(){
    var arr=[];
    if(localStorage.shoplist==undefined){
        arr=[];
    }else{
        arr=JSON.parse(localStorage.shoplist)
    }
    return arr;
}
// 设置数据
function setShop(data){
    localStorage.shoplist=JSON.stringify(data);
}
//?
function writeOrder(order){
    localStorage.shopOrder=JSON.stringify(order);
}

