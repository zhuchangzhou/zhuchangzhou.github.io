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

//侧边栏
$(".mune_icon").on("tap",function(){
    $(".sideMune").toggleClass("on")

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
    console.log(shopCart)
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











