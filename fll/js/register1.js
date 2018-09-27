$("label").on("tap",function(){
    if(!$(this).children()[0].checked){
        $(this).css({"background":"url('img/register1_01.png')","background-size":"100% 100%"});
    }
    else{
        $(this).css({"background":"url('img/register1_03.png')","background-size":"100% 100%"});
    }
})



var myphoneVal;
var nationVal;
var phoneFlag;
// 手机号的验证 
$(".phone").on("change",function(){ 
     myphoneVal=$(".phone").val(); 
    var nationVal=$(".nation").val();
     phoneFlag=true;
    console.log(myphoneVal)
    // 点击下一步的时候对输入信息的验
    var reg_myphone=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/g;
    //console.log(!reg_myphone.test(myphoneVal))
    if (myphoneVal.trim()==="" || !reg_myphone.test(myphoneVal)) {
        alert("请填写正确的手机号码"); 
        // $(this).focus();
        $(this).val("");
        phoneFlag=false;
        return;
    }
})
// 点击
$(".next_step").on("tap",function(){
    console.log(myphoneVal)
    if(!myphoneVal){
        alert("请您去完善资料！！");
        return false;
    }else if(phoneFlag==true&&$("label").children()[0].checked){
        location.href="register2.html";
    }
})