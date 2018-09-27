/**
 * Created by duodi on 2017/11/16.
 */
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



//商品详情、累计评价
$(".btn li").on("tap",function(){
    $(".main").children().eq($(this).index()).show().siblings().hide();
    $(this).addClass("on").siblings().removeClass("on");
})

//点击购买
$(".toBuy").on("tap",function(){
    location.href="../confirm_order.html";
})

$(".addToCart").on("tap",function(){
    var shopCart=readShopCart();
    var pro={};
    pro.name=$(".container").eq(0).find("h3").text();
    pro.price=$(".container").eq(0).find("span").eq(0).text().slice(1);
    pro.num=$(".num").val();
    pro.color="img/shop_cart_color.jpg";
    pro.imgUrl="img/categories_pro_img9.jpg";
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
$(".toBuy").on("tap",function(){
    var order=[];
    var pro={};
    pro.name=$(".container").eq(0).find("h3").text();
    pro.price=$(".container").eq(0).find("span").eq(0).text().slice(1);
    pro.num=$(".num").val();
    pro.color="img/shop_cart_color.jpg";
    pro.imgUrl="img/categories_pro_img9.jpg";
    order.push(pro);
    writeOrder(order);
    location.href="confirm_order.html";
})
function writeOrder(order){
    localStorage.shopOrder=JSON.stringify(order);
}