/**
 * Created by Administrator on 2017/11/19.
 */
//排序按钮点击效果
var i=1;
$(".sorting li").on("tap",function(){
    $(this).addClass("on").siblings().removeClass("on");
        $(".cansort").find("img").each(function(){$(this)[0].src="img/pro_list_arrowdown.png";})
        if($(this)[0].className=="cansort on"){
            $(this).find("img")[0].src="img/pro_list_arrowdown_on.png";
            i++;
            if(i%2){
                $(this).find("img")[0].src="img/pro_list_arrowup_on.png";
            }
        }
})
$(".addToCart").on("tap",function(){
    var shopCart=readShopCart();
    var pro={};
    pro.name=$(this).parent().find("a").text();
    pro.price=$(this).parent().find("span").text().slice(1);
    pro.num=1;
    pro.color="img/shop_cart_color.jpg";
    pro.imgUrl=$(this).parents("li").find("img").attr("src");
    shopCart.push(pro);
    writeShopCart(shopCart);
    alert("加入购物车成功！")
})

function readShopCart(){
    var shopCartInfo=localStorage.shopCartInfo?JSON.parse(localStorage.shopCartInfo):[];
    return shopCartInfo;
}
function writeShopCart(shopCart){
    localStorage.shopCartInfo=JSON.stringify(shopCart);
}

