/**
 * Created by Administrator on 2017/8/3 0003.
 */
$(function () {
    // 选项卡效果
    $(".banner_btn li").on("mousemove",function () {
        num=$(this).index();
        $(this).addClass("current").siblings("li").removeClass("current");
        $(".banner_img li").eq(num).fadeIn().siblings("li").fadeOut();
    })
    // 自动轮播效果
    var num=0;
    var t=setInterval(move,2000);
    function  move() {
        num++;
        if(num>2){
            num=0;
        }
        $(".banner_btn li").eq(num).addClass("current").siblings("li").removeClass("current");
        $(".banner_img li").eq(num).fadeIn().siblings("li").fadeOut();
    }
    // 鼠标经过和离开时效果
    $(".banner").hover(function ( ){
        clearInterval(t)
    },
    function(){
        t=setInterval(move,2000)
    })
})