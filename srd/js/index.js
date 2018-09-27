//楼层跳转
$(window).scroll(function () {
    var sHeight = $(window).scrollTop();
    if (sHeight < 840) {
        $(".floor_btn").fadeOut()
    }
    else {
        $(".floor_btn").fadeIn()
    }
});
$(".rTop").on("click", function () {
    $("html,body").animate({scrollTop: 0}, 810)
});
$(".pro_btn li").on("click", function () {
    var index1 = $(this).index();
    $(this).addClass("floor_on").siblings().removeClass("floor_on");
    var arr = [];
    $.each($(".title"), function (index, value) {
        arr[index] = $(value).offset().top
    });
    $("html,body").animate({scrollTop: arr[index1] + "px"});

});
var p = 0, t = 0;
$(window).scroll(function () {
    p = $(this).scrollTop();
    var arr = [];
    var sHight = $(window).scrollTop();
    $.each($(".title"), function (index, value) {
        var obj = $(value).offset()
        var top = obj.top;
        arr.push(top)
    });
    if (t <= p) {
        if (sHight < arr[0]) {
            $(".pro_btn li:first-child").addClass("floor_on").siblings().removeClass("floor_on")
        }
        if (sHight >= arr[1] && sHight < arr[2]) {
            $(".pro_btn li:nth-child(2)").addClass("floor_on").siblings().removeClass("floor_on")
        }
        if (sHight >= arr[2]) {
            $(".pro_btn li:nth-child(3)").addClass("floor_on").siblings().removeClass("floor_on")
        }
        if (sHight >= arr[3]) {
            $(".pro_btn li:nth-child(4)").addClass("floor_on").siblings().removeClass("floor_on")
        }
    }
    else {
        if (sHight < arr[0]) {
            $(".pro_btn li:first-child").addClass("floor_on").siblings().removeClass("floor_on")
        }
        if (sHight >= arr[1] - 80) {
            $(".pro_btn li:nth-child(2)").addClass("floor_on").siblings().removeClass("floor_on")
        }
        if (sHight >= arr[2] - 320) {
            $(".pro_btn li:nth-child(3)").addClass("floor_on").siblings().removeClass("floor_on")
        }
        if (sHight >= arr[3] - 360) {
            $(".pro_btn li:nth-child(4)").addClass("floor_on").siblings().removeClass("floor_on")
        }
    }
    t = p
});
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
        location.href="user.html"
    })
}