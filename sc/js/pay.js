/**
 * Created by Administrator on 2017/11/19.
 */

//选择支付方式，改变label样式
function changelabel(){
    $("input[type=radio]").each(function(ind){
        if($(this).prop("checked")){
            $("label").eq(ind).css({"background":"url('img/shop_cart_select.jpg') no-repeat 6.3rem 0.12rem","background-size":"0.18rem 0.18rem"});
        }else{
            $("label").eq(ind).css({"background":"url('img/pay_03.png') no-repeat 6.3rem 0.12rem","background-size":"0.18rem 0.18rem"});
        }
    })
}
$("label").on("tap",function(){
    changelabel();
})
//选择银行卡，显示下拉框
$(".select").on("tap",function(e){
    var ev=e||window.event;
    ev.stopPropagation();
    $(".select_option").show();
})
//点其他地方，去除下拉框
$("body").on("tap",function(){
    $(".select_option").hide();
})
//选择银行卡，赋值，并钩选
$(".select_option li").on("tap",function(e){
    // var ev=e||window.event;
    // ev.stopPropagation();
    $(".select").text($(this).text());
    $("input[type=radio]").eq(0).prop("checked","checked");
    changelabel();
})

//点击确认，先判断支付方式是否已选
// 确认支付：跳转至成功页面；取消支付：跳转至失败页面
$("input[type=button]").on("tap",function(){
    var isselect=false;
    $("input[type=radio]").each(function(){
        if($(this).prop("checked")){
            isselect=true;
        }
    })
    if(isselect){
        var com=confirm("确认支付？");
        if(com){
            location.href="pay_success.html";
        }else{
            location.href="pay_failure.html";
        }
    }else{
        alert("请选择支付方式！");
    }

})
function readOrder(){
    var orderInfo=localStorage.shopOrder?JSON.parse(localStorage.shopOrder):[];
    return orderInfo;
}
function rewrite(){
    // $(".pro_list").empty();
    var order=readOrder();
    var ht="";
    for(var i=0;i<order.length;i++){
        ht+="<li>\n" +
            "            <a href=\"pro_details.html\"><img src=" +order[i].imgUrl+
            " alt=\"\"></a>\n" +
            "            <div class=\"right\">\n" +
            "                <div>\n" +
            "                    <h3><a href=\"pro_details.html\">" +order[i].name+
            "</a></h3>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <span>颜色：</span>\n" +
            "                    <img src=\"img/shop_cart_color.jpg\" alt=\"\" class=\"color\">\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <span>数量：</span>\n" +
            "                    <span>" +order[i].num+
            "</span>\n" +
            "                    <p>￥" +order[i].price+
            "</p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </li>"
        $(".pro_list").html(ht);
    }
    var price=0;
    for(var i=0;i<order.length;i++){
        price+=order[i].price*order[i].num;
    }
    price=Number(price).toFixed(2)
    var num=order.length;
    $(".total").find("span").text("￥"+price+"（共"+num+"件）");
}
rewrite();




