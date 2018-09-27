$(function () {
    $(".pro_btn li").on("click",function () {
        var index=$(this).index();
        $(this).addClass("on").siblings("li").removeClass("on")
        $(".pro_img li").eq(index).fadeIn().siblings("li").fadeOut();
    })
    var num=0;
    var t=setInterval(move,2500)
    function move() {
        num++;
        if(num>3){
            num=0
        }
        if(num<0){
            num=3
        }
        $(".pro_btn li").eq(num).addClass("on").siblings("li").removeClass("on")
        $(".pro_img li").eq(num).fadeIn().siblings("li").fadeOut();
    }
    $(".banner").hover(
        function () {
            clearInterval(t)
        },function(){
            t=setInterval(move,2500)
        })
    $(".banner_next").on("click",function () {

        move();
    })
    $(".banner_prev").on("click",function () {
        num--;
        if(num<0){
            num=3
        }
        $(".pro_btn li").eq(num).addClass("on").siblings("li").removeClass("on")
        $(".pro_img li").eq(num).fadeIn().siblings("li").fadeOut();
    })
})/**
 * Created by Administrator on 2017/7/18.
 */
