 $(function () {
    $(".banner_btn li").on("click",function () {
        var index=$(this).index();
        $(this).addClass("on").siblings("li").removeClass("on")
        $(".banner_img li").eq(index).fadeIn().siblings("li").fadeOut();
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
        $(".banner_btn li").eq(num).addClass("on").siblings("li").removeClass("on")
        $(".banner_img li").eq(num).fadeIn().siblings("li").fadeOut();
    }
    $(".banner").hover(
        function () {
            clearInterval(t)
        },function(){
            t=setInterval(move,2500)
        })
})