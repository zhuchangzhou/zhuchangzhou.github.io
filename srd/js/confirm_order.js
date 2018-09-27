//选择支票
$(".used").on("click","label",function(){
    if($(this).find("input").is(":checked")){
        $(this).find("input").prop("checked",true);
        $(this).find("div").addClass("on");
    }else{
        $(".used li").not($(this)).find("input").prop("checked",false);
        $(".used li").not($(this)).find("div").removeClass("on");
    }
})
//跳转地址页
$(".add_infor").on("click","input[type=button]",function () {
    location.href="address.html"
})
// // 获得立即购买数据
// $(function () {
//     function buyData() {
//         var buy=[];
//         if(localStorage.buylist==undefined){
//             buy=[];
//         }else{
//             buy=JSON.parse(localStorage.buylist)
//         }
//         return buy;
//     }
//     function saveBuy(buyInfor){
//         localStorage.buylist=JSON.stringify(buyInfor);
//     };
//     function reWrite() {
//         var buyInfor=buyData();
//         $(".table_infor tr:not(tr:last)").remove();
//         $.each(buyInfor,function(index,value) {
//             $("<tr class='cart_list' align='center'>").attr('index',index).html(
//                 '<td width="356" class="shop_title">\n'+
//                 '<img src="img/order_02.png" alt="" class="table_infor_img">\n'+
//                 '<p>'+value.buy_title+'</p>\n'+
//                 '</td>\n'+
//                 '<td width="234" class="price">'+'￥'+value.buy_price+'.00'+'</td>\n'+
//                 '<td width="176" class="num">\n'+
//                 '<div>'+value.buy_number+'</div>\n'+
//                 '</td>\n'+
//                 '<td class="money" width="235">'+'￥'+value.buy_price*value.buy_number+'.00'+'</td>\n'+
//                 '<td>\n'+
//                 '<input type="button" value="删除" class="delt">\n'+
//                 '</td>\n'
//             ).insertBefore(".table_infor tr:last-child")
//         });
//         var numArr=[];
//         var sum=0;
//         $(".money").each(function () {
//             var a=$(this).html().slice(1,-3);
//             var b=parseInt(a);
//             numArr.push(b)
//         })
//         for(var i=0; i<numArr.length;i++){
//             sum+=numArr[i];
//         }
//         var newsum="￥"+sum+".00";
//         $(".submit li:first-child span").html(newsum);
//         $(".submit li:nth-child(4) span").html(newsum);
//         saveBuy(buyInfor);
//     }
//     reWrite();
//     //删除
//     $("table").on("click",".delt",function () {
//         var buyInfor=buyData();
//         var index=$(this).parent().parent().index();
//         buyInfor.splice(index,1);
//         saveBuy(buyInfor);
//         reWrite();
//     });
// });
// 获取信息
$(function () {
    function get() {
        var arr=[];
        if(localStorage.orlist==undefined){
            arr=[];
        }else{
            arr=JSON.parse(localStorage.orlist)
        }
        return arr;
    }
    function save(order){
        localStorage.orlist=JSON.stringify(order);
    };
    function cWrite() {
        var order=get();
        $(".table_infor tr:not(tr:last)").remove();
        $.each(order,function(index,value) {
            $("<tr class='cart_list' align='center'>").attr('index',index).html(
                '<td width="356" class="shop_title">\n'+
                '<img src="img/order_02.png" alt="" class="table_infor_img">\n'+
                '<p>'+value.order_title+'</p>\n'+
                '</td>\n'+
                '<td width="234" class="price">' + value.order_price + '</td>\n'+
                '<td width="176" class="num">\n'+
                '<div>'+value.order_number+'</div>\n'+
                '</td>\n'+
                '<td class="money" width="235">' + value.order_money +  '</td>\n'+
                '<td>\n'+
                '<input type="button" value="删除" class="delt">\n'+
                '</td>\n'
            ).insertBefore(".table_infor tr:last-child")
        });
        var numArr=[];
        var sum=0;
        $(".money").each(function () {
            var a=$(this).html().slice(1,-3);
            var b=parseInt(a);
            numArr.push(b)
        });
        for(var i=0; i<numArr.length;i++){
            sum+=numArr[i];
        }
        var newsum="￥"+sum+".00";
        $(".submit li:first-child span").html(newsum);
        $(".submit li:nth-child(4) span").html(newsum);
        save(order);
    }
    cWrite();
    //删除
    $("table").on("click",".delt",function () {
        var order=get();
        var index=$(this).parent().parent().index();
        order.splice(index,1);
        save(order);
        cWrite();
    });
})
//传送数据到order
function getToOrder() {
    var dataToOrder=[];
    if(localStorage.toOrder==undefined){
        dataToOrder=[];
    }else{
        dataToOrder=JSON.parse(localStorage.toOrder)
    }
    return dataToOrder;
}
function saveToOrder(orderData) {
    localStorage.toOrder=JSON.stringify(orderData);
}
//确认订单
$(".submit li:nth-child(5)").on("click","input[type=button]",function () {
    var orderData=getToOrder();
    $(".table_infor tr:not(tr:last)").each(function () {
        var title=$(this).children(".shop_title").find("p").html();
        var price=$(this).children(".price").html();
        var number=$(this).children(".num").find("div").html();
        var oData={
            title:title,
            price:price,
            number:number,
        }
        orderData.push(oData);
    })
    saveToOrder(orderData);
    var p=$(".submit li:nth-child(4) span").html();
    localStorage.setItem("money",p);
    location.href="pay.html"
})
//登录
function getLogin() {
    var cart=[];
    if(localStorage.hhd==undefined){
        cart=[];
    }else{
        cart=JSON.parse(localStorage.hhd)
    }
    return cart;
}
var item=getLogin();
var userId=item[0].zh;
if(!userId){
    alert("请先登录！");
    location.href="login.html";
}else {
    $(".top .container .left a:nth-child(2)").html("<a href='user.html'>" + userId + "</a>");
    $(".top .container .left span").html("");
    $(".top .container .left a:nth-child(4)").html("<a href='login.html'>[退出]</a>");
    $(".top .container .left a:nth-child(2)").click(function () {
        location.href="user.html"
    })
}