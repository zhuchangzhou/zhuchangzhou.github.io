// 点击换图
$(".good_com li:first-child").click(function () {
    $(this).children("img").attr("src", "img/comment_10.png");
    $(".good_com li:nth-child(2)").children("img").attr("src", "img/comment_08.png");
    $(".good_com li:nth-child(3)").children("img").attr("src", "img/comment_09.png")
});
$(".good_com li:nth-child(2)").click(function () {
    $(this).children("img").attr("src", "img/comment_11.png");
    $(".good_com li:first-child").children("img").attr("src", "img/comment_07.png");
    $(".good_com li:nth-child(3)").children("img").attr("src", "img/comment_09.png")
});
$(".good_com li:nth-child(3)").click(function () {
    $(this).children("img").attr("src", "img/comment_12.png");
    $(".good_com li:first-child").children("img").attr("src", "img/comment_07.png");
    $(".good_com li:nth-child(2)").children("img").attr("src", "img/comment_08.png")
});
//点星星
$(".desc").on("click", "li", function () {
    var index = $(this).index();
    // var i=(index)%5+1;
    $(this).parent().find("img").attr("src", "img/comment_03.png");
    $(this).parent().find("img").slice(0, index + 1).attr("src", "img/comment_02.png")
});
$(".spend").on("click", "li", function () {
    var index = $(this).index();
    // var i=(index)%5+1;
    $(this).parent().find("img").attr("src", "img/comment_03.png");
    $(this).parent().find("img").slice(0, index + 1).attr("src", "img/comment_02.png")
});
$(".attitude").on("click", "li", function () {
    var index = $(this).index();
    // var i=(index)%5+1;
    $(this).parent().find("img").attr("src", "img/comment_03.png");
    $(this).parent().find("img").slice(0, index + 1).attr("src", "img/comment_02.png")
});
//跳转
$(".comToPro").click(function () {
    location.href = "pro_details.html"
});
//textarea
$(".comment table textarea").on("focus",function () {
    $(this).html("")
});
$(".comment table textarea").on("blur",function () {
    $(this).html("亲，满意请给五星好评哦")
})
//上传照片
$(".cam img").on("change", function () {
    var arr = this.files;
    for (var i = 0; i < arr.length; i++) {
        var fr = new FileReader();
        fr.readAsDataURL(arr[i]);
        fr.onload = function () {
            var img = document.createElement("img");
            img.src = this.result;
            $(".upload").append(img);
        }
    }
});
//上传照片
var num = 0;
var l = 0;
var sum = 0;
var photo = document.querySelector(".photo");
photo.onchange = psd;
function psd(){
    var arr = this.files;
    if (arr.length == 1) {
        l = 1;
    }else{
        alert("请上传一张，谢谢。体验效果较差，请投差评")
    }
    for (var i = 0; i < l; i++) {
        var fr = new FileReader();
        fr.readAsDataURL(arr[i]);
        fr.onload = function () {
            var img = document.createElement("img");
            img.src = this.result;
            $('.upload .img').append(img);
            $(".upload .img").append('<div class="mask">X</div>')
        }
        num++;
        if(num>=2){
            photo.onchange=null;
        }
    }
    $(".upload label span").html(num);
}
$(".cam").on("mouseover",".img img",function (e) {
    var ev=e||window.event;
    ev.stopImmediatePropagation();
    $(this).next(".mask").css({
        display:"block"
    })
});
$(".cam").on("mouseout",".img .mask",function (e) {
    var ev=e||window.event;
    ev.stopImmediatePropagation();
    $(this).css({
        display:"none"
    })
});
$(".cam").on("click", ".img .mask", function () {
    $(this).prev("img").remove();
    $(this).remove();
    num--;
    $(".upload label span").html(num);
    if(num<2){
        photo.onchange=psd;
    }
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