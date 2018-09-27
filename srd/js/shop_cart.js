// 全选
$(".radio").on("click", ".cart_all", function () {
    if ($(this).children("input").is(":checked")) {
        $(".check").children("input").each(function () {
            $(this).prop("checked", true);
            $(this).parent("label").css("background", "url('img/cart_dui.png') no-repeat center")
        });
        $(this).children("input").each(function () {
            $(this).prop("checked", true);
            $(".cart_all").css("background", "url('img/cart_dui.png') no-repeat center")
        });
        total();
    } else {
        $(".check").children("input").each(function () {
            $(this).prop("checked", false);
            $(this).parent("label").css("background", "none")
        });
        $(this).children("input").each(function () {
            $(this).prop("checked", false)
            $(".cart_all").css("background", "none")
        });
        total();
    }
});
function getData() {
    var cart=[];
    if(localStorage.tdlist==undefined){
        cart=[];
    }else{
        cart=JSON.parse(localStorage.tdlist)
    }
    return cart;
}
function saveData(data){
    localStorage.tdlist=JSON.stringify(data);
};
// 商品数量
function shop_info() {
    var data = getData();
    $.each(data, function (index, value) {
        // 商品名称
        $(".shop_title p").html(value.shop_title);
        //价格
        $(".price").html("￥" + value.price + ".00");
        // 数量
        var cart_pr = value.price;
        $(".num").val(value.number);
        var num = $(".num").val();
        var money = "￥" + num * cart_pr + ".00";
        $(".money").html(money);
    })
    total()
    saveData(data);
}

shop_info()
// 页面
function reWrite() {
    var data = getData();
    $("tr:not(tr:first)").remove();
    $.each(data, function (index, value) {
        $("<tr class='cart_list' align='center'>").attr('index', index).html(
            '                    <td class="shop_title">\n' +
            '                        <label class="check">' + '<input type="checkbox">\n' +
            '</label>\n' +
            '                        <img src="img/order_02.png" alt="">\n' +
            '                        <p>' + value.shop_title + '</p>\n' +
            '                    </td>\n' +
            '                    <td class="price">' + '￥' + value.price + '.00' + '</td>\n' +
            '                    <td class="number">\n' +
            '                        <input type="button" value="-" class="reduce">\n' +
            '                        <input type="text" class="num"  value="' + value.number + '" onFocus="if(value==defaultValue){value=\'\';}" onBlur="if(!value){value=defaultValue;}">\n' +
            '                        <input type="button" value="+" class="add">\n' +
            '                    </td>\n' +
            '                    <td class="money">' + '￥' + value.price * value.number + '.00' + '</td>\n' +
            '                    <td class="operation">\n' +
            '                        <input type="button" value="收藏">\n' +
            '                        <input type="button" value="删除" class="del">\n' +
            '                    </td>\n'
        ).insertAfter("table tr:first-child")
    })
    saveData(data);
}
// 单选

$("table").on("click", ".check", function () {
    var flg=true;
    if ($(this).children("input").is(":checked")) {
        $(this).children("input").each(function () {
            $(this).prop("checked", true);
            $(this).parent("label").css({
                background: "url('img/cart_dui.png') no-repeat center"
            })
        });
        total();
    } else {
        $(this).children("input").each(function () {
            $(this).prop("checked", false);
            $(this).parent("label").css({
                background: "none"
            })
        });
        $(".cart_all").css({
            background: "none"
        });
        total();
    }
    $(".cart_list input[type='checkbox']").prop('checked',function (index,value) {
        if(value===false){
            return  flg=false;
            total()
        }
    });
    if(flg){
        $(".cart_all").css({background:"url('img/cart_dui.png') no-repeat center"})
    }
});
// 加减
$(function () {
    var data = getData();
    reWrite();
    var num = "";
    $(".add").on("click", function () {
        $(this).each(function () {
            num = $(this).parent().children(".num").val();
            num++;
            $(this).parent().children(".num").val(num);
        })
        var price = $(".price").html();
        var money = "￥" + num * price.slice(1, 5) + ".00";
        $(this).parent().siblings(".money").html(money);
        saveData(data);
        total();
    })
    $(".reduce").on("click", function () {
        $(this).each(function () {
            num = $(this).parent().children(".num").val();
            if (num > 0) {
                if (num == 1) {
                    $(this).parent().children(".num").val(1)
                } else {
                    num--;
                    $(this).parent().children(".num").val(num);
                }
            }
        })
        var price = $(".price").html();
        var money = "￥" + num * price.slice(1, 5) + ".00";
        $(this).parent().siblings(".money").html(money)
        saveData(data);
        total();
    })
})
// 总价
function total() {
    var sele_price = 0;
    var total = 0
    $(".settle span").html(sele_price);
    $(".check input").each(function (index, value) {
        if ($(value).prop("checked")) {
            var price = parseInt($(value).parents(".cart_list").find(".money").html().slice(1, -3));
            total += price;

        }
        $(".settle span").html("￥" + total + ".00");
    })
}

//删除
$("table").on("click", ".del", function () {
    var data = getData();
    var index = $(this).parent().parent().index() - 1;
    data.splice(index, 1);
    saveData(data);
    reWrite();
});
window.addEventListener("storage", function (e) {
    reWrite();
});
// 结算
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
$(".settle").on("click", ".total", function () {
    var flag = false;
    var data = getData();
    $(".check input").each(function (index,value) {
        // if ($(".check").find("input").is(":checked")) {
        //     flag = true;
        // }
        if($(value).prop("checked")){
            flag=true;
            var order=get();
            var comOrder={
                order_title:$(this).parent().siblings("p").html(),
                order_price:$(this).parent().parent().siblings(".price").html(),
                order_number:$(this).parent().parent().siblings(".number").find("input[type=text]").val(),
                order_money:$(this).parent().parent().siblings(".money").html()
            }
            order.push(comOrder);
            save(order)
        }
    })
    if (flag == false) {
        alert("请先选择要结算的商品！");
    } else {
        location.href = "confirm_order.html";
    }
    saveData(data);
    reWrite();
})
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
        location.href = "user.html"
    })
}
