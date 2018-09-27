/**
 * Created by duodi on 2017/11/25.
 */
// 二级导航
$(function () {
    $(".navLeft").hover(function () {
        $(".nav_bottom").css("display", "block")
    }, function () {
        $(".nav_bottom").css("display", "none");
    })
});
//二级联动
$(function () {
    LazyLoad.css(["css/cityStyle.css"], function () {
        LazyLoad.js(["js/cityScript.js"], function () {
            var test = new citySelector.cityInit("inputTest");
            var test2 = new citySelector.cityInit("inputTest2");
        });
    });
});
//遮罩和二级联动
$(".wz").click(function () {
    $(".mask").css({
        display:"block"
    })
});
$(".mask").on("click",function () {
    $(this).css({
        display:"none"
    });
    $(".city-box").css({
        display:"none"
    })
})