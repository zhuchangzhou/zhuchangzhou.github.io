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
// 获得数据
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
window.addEventListener("storage", function (e) {
    reWrite();
});

function reWrite() {
    var orderData=getToOrder();
    $(".pro").remove();
    $.each(orderData,function(index,value) {
        $("<ul class='pro'>").attr('index',index).html(
            '<li>\n'+
            '<div>\n'+
            '<img src="img/order_02.png" alt="">\n'+
            '<p>'+value.title+'</p>\n'+
            '<span>品类：食品</span>\n'+
            '<b>'+'数量：'+value.number+'</b>\n'+
            '</div>\n'+
            '<i>'+value.price+'</i>\n'+
            '<ul>\n'+
            '<li class="on">\n'+
            '<input type="button" value="支付订单">\n'+
            '</li>\n'+
            '<li>\n'+
            '<input type="button" class="delta" value="取消订单">\n'+
            '</li>\n'+
            '</ul>\n'+
            '<a href="order_details.html" >订单详情 ></a>\n'+
            '</li>\n'
        ).insertAfter(".infor")
    });
    saveToOrder(orderData)
}
reWrite()
// 取消订单
$(".detail").on("click",".delta",function () {
    var orderData=getToOrder();
    var index=$(this).parent().parent().parent().index();
    orderData.splice(index,1);
    saveToOrder(orderData);
    reWrite();
    if($(".pro li").length==0){
        $(".detail").css("display","none")
    }
});
// //支付订单
// $(".pro .on input").click(function () {
//     location.href="pay.html"
// })
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