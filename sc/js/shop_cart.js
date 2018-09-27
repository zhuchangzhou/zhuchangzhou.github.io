/**
 * Created by Administrator on 2017/11/19.
 */
$(".container").on("tap","label",function(){
    //全选按钮全选、取消效果
    if($(this).children("input")[0].className=="selectall"){
        $(".select").prop("checked",$(".selectall").prop("checked"));
    }
    changelabel();
})
function changelabel(){
    var i=0;
    //选中的select变样式
    $(".select").each(function(ind){
        if($(this).prop("checked")){
            $("label").eq(ind).css({"background":"url('img/shop_cart_select.jpg') no-repeat 0 0","background-size":"0.18rem 0.18rem"});
            i++;
        }else{
            $("label").eq(ind).css({"background":"url('img/pay_03.png') no-repeat 0 0","background-size":"0.18rem 0.18rem"});
        }
    })
    //如果都选中，全选按钮就选中
    if(i==$(".select").length){
        $(".selectall").prop("checked","checked");
    }else{
        $(".selectall").prop("checked",false);
    }
    //选中全选按钮变样式
    if($(".selectall").prop("checked")){
        $(".selectall").parent("label").css({"background":"url('img/shop_cart_select.jpg') no-repeat 0 center","background-size":"0.18rem 0.18rem"});
    }else{
        $(".selectall").parent("label").css({"background":"url('img/shop_cart_selectall.png') no-repeat 0 center","background-size":"0.18rem 0.18rem"});
    }
    totalPrice();
}

function readShopCart(){
    var shopCartInfo=localStorage.shopCartInfo?JSON.parse(localStorage.shopCartInfo):[];
    return shopCartInfo;
}
function writeShopCart(shopCart){
    localStorage.shopCartInfo=JSON.stringify(shopCart);
}
function rewrite(){
    $(".pro_list").empty();
    var shopCart=readShopCart();
    var ht="";
    for(var i=0;i<shopCart.length;i++){
        ht+="<li>\n" +
            "            <label>\n" +
            "                <input type=\"checkbox\" class=\"select\">\n" +
            "            </label>\n" +
            "            <a href=\"pro_details.html\"><img src=" +shopCart[i].imgUrl+
            " alt=\"\"></a>\n" +
            "            <div class=\"right\">\n" +
            "                <div>\n" +
            "                    <h3><a href=\"pro_details.html\">" +shopCart[i].name+
            "</a></h3>\n" +
            "                    <img src=\"img/shop_cart_delete.jpg\" alt=\"\" class=\"del\">\n" +
            "                </div>\n" +
            "               <div>\n" +
            "                   <span>颜色：</span>\n" +
            "                   <img src=\"img/shop_cart_color.jpg\" alt=\"\" class=\"color\">\n" +
            "               </div>\n" +
            "               <div>\n" +
            "                   <span>数量：</span>\n" +
            "                   <div>\n" +
            "                       <input type=\"button\" value=\"-\" class=\"reduce\">\n" +
            "                       <input type=\"text\" value=" +shopCart[i].num+
            " class=\"num\">\n" +
            "                       <input type=\"button\" value=\"+\" class=\"add\">\n" +
            "                   </div>\n" +
            "                   <p class=\"price\">￥" +Number(shopCart[i].price*shopCart[i].num).toFixed(2)+
            "</p>\n" +
            "               </div>\n" +
            "            </div>\n" +
            "        </li>"
        $(".pro_list").html(ht);
    }
}
rewrite();

//件数改变时，价格改变
$(".container").on("keyup",".num",function(){
    if(isNaN($(this).val())){
        $(this).val($(this).val().slice(0,-1));
    }
});
$(".container").on("change",".num",numchange);
function numchange(){
    var shopcart=readShopCart();
    var index=$(".num").index(this);
    var unit_price=shopcart[index].price;
    var price=Number($(this).val()*unit_price).toFixed(2);
    $(this).parent().next().text("￥"+price);
    totalPrice();
    shopcart[index].num=$(this).val();
    writeShopCart(shopcart);
}
$(".container").on("tap",".reduce",function(){
    var shopcart=readShopCart();
    var index=$(".reduce").index(this);
    var unit=$(this).parent().find("input[type=text]").val();
    if(unit>1){
        unit--;
    }
    $(this).parent().find("input[type=text]").val(unit);
    var unit_price=shopcart[index].price;
    var price=Number(unit*unit_price).toFixed(2);
    $(this).parent().next().text("￥"+price);
    totalPrice();
    shopcart[index].num=unit;
    writeShopCart(shopcart);
})
$(".container").on("tap",".add",function(){
    var shopcart=readShopCart();
    var index=$(".add").index(this);
    var unit=$(this).parent().find("input[type=text]").val();
    unit++;
    $(this).parent().find("input[type=text]").val(unit);
    var unit_price=Number(shopcart[index].price);
    var price=Number(unit*unit_price).toFixed(2);
    $(this).parent().next().text("￥"+price);
    totalPrice();
    shopcart[index].num=unit;
    writeShopCart(shopcart);
})

// //选中的商品计价
// $("label").on("tap",function(){
//     totalPrice();
// })

//计算总价
function totalPrice(){
    var price=0;
    var num=0;
    $(".select").each(function(ind){
        if($(this).prop("checked")){
            price+=parseFloat($(".pro_list>li").eq(ind).find(".price").text().slice(1));
            num++;
        }
    })
    $(".total_price").text("￥"+price+"（共"+num+"件）");
}

//删除商品
$(".container").on("tap",".del",function(){
    var shopcart=readShopCart();
    var _this=$(this);
    var index=$(".del").index(this);
    $(".tip").css("display","block");
    $(".confirm").on("tap",function(){
        $(".tip").css("display","none");
        _this.parents(".right").parent().remove();
        shopcart.splice(index,1);
        writeShopCart(shopcart);
        totalPrice();
    })
    $(".cancel").on("tap",function(){
        $(".tip").css("display","none");
    })

})

//点击结算
var order=[];
var shopcart=readShopCart();
$(".toCalculate").on("tap",function(){
    if($(".total_price").text().match(/\d+/g)[1]==0){
        alert("请选择需结算的商品！")
    }else{
        $(".select").each(function(ind,val){
            if($(val).is(":checked")){
                order.push(shopcart[ind]);
            }
        })
        writeOrder(order);
        location.href="confirm_order.html";
    }
})

function writeOrder(order){
    localStorage.shopOrder=JSON.stringify(order);
}












