/**
 * Created by Administrator on 2017/11/19.
 */
//返回
$(".back").on("tap",function(){
    history.back();
})
//搜索取消
$("header input").next().on("tap",function(){
    $("header input").val("").focus();
})

//点减
$(".reduce").on("tap",function(){
    var num=$(this).next().val();
    if(num>1){
        num--;
    }else{
        num=1;
    }
    $(this).next().val(num);
})
//点加
$(".add").on("tap",function(){
    var num=$(this).prev().val();
    num++;
    $(this).prev().val(num);
})
//修改数量，验证：不能输入除数子外的其他字符
$(".num").on("keyup",function(){
    var reg=/\D+/g;
    var num=$(this).val().replace(reg,"");
    $(this).val(num);
})
$(".num").on("change",function(){
    if($(this).val()==""){
        $(this).val(1);
    }
})