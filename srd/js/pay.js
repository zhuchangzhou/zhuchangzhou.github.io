// 选择银行
$(".bank").on("click", "li", function () {
    var userSrc = $(this).find("img").attr("src");
    if ($(this).find("input").is(":checked")) {
        $(this).find("input").prop("checked", true);
        $(this).find("label").addClass("on");
        $(".shortcut").find("img").attr("src", userSrc);
    } else {
        $(".bank li").not($(this)).find("input").prop("checked", false);
        $(".bank li").not($(this)).find("label").removeClass("on");
    }
})
$(function () {
    $(".platform li:first-child").click(function () {
        $(this).children("label").css({
            background: "url('img/pay_danxuan_02.png') no-repeat center"
        });
        $(this).siblings(".platform li:last-child").children("label").css({
            background: "url('img/pay_danxuan_01.png') no-repeat center"
        })
    });
    $(".platform li:last-child").click(function () {
        $(this).children("label").css({
            background: "url('img/pay_danxuan_02.png') no-repeat center"
        });
        $(this).siblings(".platform li:first-child").children("label").css({
            background: "url('img/pay_danxuan_01.png') no-repeat center"
        })
    })
})
//获取数据
var arr = localStorage.money;
$(".order ul li:nth-child(2)").find("span").html(arr);
$(".pay_shortcut").find("span").html(arr);
//支付密码框

$("#payPassword_rsainput1").on("click", function () {
    if ($("#guangbiao1").css("left") == "0px") {
        $("#sixDigitPassword1 i").filter(":first").addClass("active");
        $("#guangbiao1").css("visibility", "visible");
    }
    if ($("#guangbiao1").css("left") == "235px") {
        $("#sixDigitPassword1 i").filter(":last").addClass("active");
        $("#guangbiao1").css("visibility", "visible");
    }
})
$("#payPassword_rsainput1").on("blur", function () {
    $("#sixDigitPassword1 i").removeClass("active");
    $("#guangbiao1").css("visibility", "hidden");
})
var inp_l = 0;
$("#payPassword_rsainput1").keyup(function () {
    var inp_v = $(this).val();
    if ((/\d/g.test(inp_v.slice(-1)) || inp_v == '')) {
        inp_l = inp_v.length;
        //$("p").html( "input的值为：" + inp_v +"; " + "值的长度为:" + inp_l);//测试用
        for (var x = 0; x <= 6; x++) {
            $("#sixDigitPassword1").find("i").eq(inp_l).addClass("active").siblings("i").removeClass("active");
            $("#sixDigitPassword1").find("i").eq(inp_l).prevAll("i").find("b").css({"display": "block"});
            $("#sixDigitPassword1").find("i").eq(inp_l - 1).nextAll("i").find("b").css({"display": "none"});
            $("#guangbiao1").css({"left": inp_l * 39});//光标位置
            if (inp_l == 0) {
                $("#sixDigitPassword1").find("i").eq(0).addClass("active").siblings("i").removeClass("active");
                $("#sixDigitPassword1").find("b").css({"display": "none"});
                $("#guangbiao1").css({"left": 0});
            }
            else if (inp_l == 6) {
                $("#sixDigitPassword1").find("b").css({"display": "block"});
                $("#sixDigitPassword1").find("i").eq(5).addClass("active").siblings("i").removeClass("active");
                $("#guangbiao1").css({"left": 5 * 39});
            }
        }
    } else {
        $(this).val(inp_v.slice(0, -1));
    }
});

//支付
function getData() {
    var cart_data = [];
    if (localStorage.tdlist == undefined) {
        cart_data = [];
    } else {
        cart_data = JSON.parse(localStorage.tdlist)
    }
    return cart_data;
}

function saveData(data) {
    localStorage.tdlist = JSON.stringify(data);
};
$(".confirm").on("click", ".btn", function () {
    var data = getData();
    console.log(data)
    var passWord = $("#payPassword_rsainput1").val();
    var reg = /^[0-9]+.?[0-9]*$/
    var com = confirm("确定提交吗？")
    if (passWord.length === 6 && reg.test(passWord) && com) {
        location.href = "pay_success.html"
    }
    else {
        location.href = "pay_failure.html"
    }
    saveData(data);
})
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