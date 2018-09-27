/**
 * Created by Administrator on 2017/11/19.
 */
//删除商品
$(".del").on("tap",function(){
    $(this).parents(".right").parent().remove();
})

//点击购买记录收起
$(".record").on("tap",function(){
    $(".pro_list").toggleClass("current");
    if($(".pro_list")[0].className=="pro_list"){
        $(".record").children("span:last-child").text("v");
    }else{
        $(".record").children("span:last-child").text(">");
    }
})