/**
 * Created by Administrator on 2017/11/19.
 */
$(".order_nav").on("tap","li",function(){
    $(".list_box").children().eq($(this).index()).show().siblings().hide();
    $(this).addClass("on").siblings().removeClass("on");
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
        ht+="<li>" +
            "<a href=\"pro_details.html\"><img src="+order[i].imgUrl+
            " ></a> " +
        "<h3><a href=\"pro_details.html\">"+order[i].name+"</a></h3> " +
        "<span>1</span> " +
        "<img src=\"img/shop_cart_color.jpg\"class=\"color\"> " +
        "<span>￥"+order[i].price+"</span> " +
        "<div class=\"option\"> " +
        "<div class=\"statue\">待收货</div> " +
        "<div class=\"details\"><a href=\"###\">订单详情</a></div> " +
        "<div class=\"cancel\">取消订单</div> " +
        "</div> " +
        "</li>"
        $(".order_list").html(ht);
    }
}
rewrite();
