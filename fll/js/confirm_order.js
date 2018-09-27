$("label").on("tap",function(){
    if(!$(this).children()[0].checked){
        $(this).css({"background":"url('img/confirm_order_003.png')","background-size":"100% 100%"});
    }
    else{
        $(this).css({"background":"url('img/confirm_order_001.png')","background-size":"100% 100%"});
    }
})
//当点击提交订单时调到付款页面
$(".place_order").on("tap",function(){
        // location.href="pay.html";
        // 弹出个div
        $(".mask").css({"display":"block"});
        $(this).parent().find(".pop-up").css({"display":"block"});
})
// 弹出付款页面后，跳转页面成功失败
$(".footer input").on("tap",function(){
    if(confirm("确定付款吗")){
        location.href()
    }
})
//点击箭头时会跳转页面
var f=true;
$(".address li i").on("tap",function(){
    location.href="user.html";
    // 实现区域的显示和隐藏
    // $(this).parent().parent().css({"overflow":"hidden"});
    // 通过高度来实现
    // 开关的实现
    // if(f=!f){
    //     $(this).parent().parent().css({"height":"0.80rem"});
    //     $(this).text(">")
    // }else {
    //     $(this).parent().parent().css({"height":"1.40rem"});
    //     $(this).text("<");
    // }
})