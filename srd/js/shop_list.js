// 复选框
$(".xl").on("click", function () {
    if ($(this).find("input").is(":checked")) {
        $(this).find("input").prop("checked", true);
        $(this).find("div").css({
            background: "url('img/dui.png') no-repeat -4px -2px"
        })
    } else {
        $(this).find("input").prop("checked", false);
        $(this).find("div").css({
            background: "white"
        })
    }
})
$(".dplj").on("click", function () {
    if ($(this).find("input").is(":checked")) {
        $(this).find("input").prop("checked", true);
        $(this).find("div").css({
            background: "url('img/dui.png') no-repeat -4px -2px"
        })
    } else {
        $(this).find("input").prop("checked", false);
        $(this).find("div").css({
            background: "white"
        })
    }
})
// 更多
var f=true;
$(".menu li:nth-child(2) .more span").click(function () {
    if(f) {
        $(".menu li ul").css({
            display: "block"
        })
    }
    if(f=!f){
        $(".menu li ul").css({
            display:"none"
        })
    }
})
//多选
$(".menu").on("click",".duoxuan",function () {
    // $(".menu li:nth-child(2) dd:not(dd:nth-child(10),dd:nth-child(11))").find("a").on("click",function () {
    //     var y=$(this).html();
    //     var index=$(".menu li:first-child dl").find("dd").index();
    //     // var dd=$("<dd></dd>").text(y);
    //     // $(".menu li:first-child dl").append(dd);
    //     $(".menu li:first-child dl dd").eq(index).html(y);
    // });
    // // $(".more").find("li").on("click",function () {
    // //     var y=$(this).html();
    // //     var dd=$("<dd></dd>").text(y);
    // //     $(".menu li:first-child dl").append(dd);
    // // })
    var dd=$('.menu dd');
    console.log(dd)
    for(var i=0;i<dd.length;i++){
        dd[i].onclick=function(){
            // var text=dd[i].innerHTML;
            // console.log(text)

            dd[i].style.backgroundColor="red"
        }
    }

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
