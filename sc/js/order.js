/**
 * Created by Administrator on 2017/11/19.
 */
//点击确定，跳转到支付页
$("input[type=button]").on("tap",function(){
    location.href="pay.html";
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






















