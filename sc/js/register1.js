/**
 * Created by duodi on 2018/04/01.
 */
// 动态给body和section加样式
var cliH;
function getH(){
    return window.innerHeight||document.body.clientHeight;
}
cliH=getH();
var body=document.querySelector("body");
var section=document.querySelector("section");
console.log(body);
console.log(section)
body.style.height=cliH+"rem";
section.style.height=cliH-1.32+"rem";
// 因为下面有六个选项，故先给六个开关 多个变量的定义
var flag1=false, flag2=false, flag3=false, flag4=false, flag5=false, flag6=false,flag7=false;
// 会员名的验证
$(".username").on("blur",function(){
    var reg=/^\w{6,18}$/g
    if(!reg.test($(this).val())){
        $(".usernameTip").css("visibility","visible");
        flag1=false;   
    }else{
        $(".usernameTip").css("visibility","hidden");
        flag1=true;
    }
})
//手机号验证：
$(".phone").on("blur",function(){
    var reg=/^1(3|4|5|7|8)\d{9}$/;
    if(!reg.test($(this).val())){
        $(".phoneTip").css("visibility","visible");
        flag2=false;
    }else{
        $(".phoneTip").css("visibility","hidden");
        flag2=true;
    }
})
//邮箱验证
$(".email").on("blur",function(){
    var reg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!reg.test($(this).val())){
        $(".emailTip").css("visibility","visible");
        flag3=false;
    }else{
        $(".emailTip").css("visibility","hidden");
        flag3=true;
    }
})
//密码验证
$(".passward").on("blur",function(){
    if($(this).val().replace(/\s+/g,"")==""){
        $(".passwordTip").css("visibility","visible");
        flag4=false;
    }else{
        $(".passwordTip").css("visibility","hidden");
        flag4=true;
    }
})
// 密码确认的验证
$(".confirmPass").on("blur",function(){
    if($(this).val()!=$(".passward").val()){
        $(".confirmPassTip").css("visibility","visible");
        flag5=false;
    }else{
        $(".confirmPassTip").css("visibility","hidden");
        flag5=true;
    }
})
// 验证码的切换
// $(".code_right").on("tap",function(){
//     var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     var s="",code=[];
//     for(var i=0;i<4;i++){
//         // charAt() 方法可返回指定位置的字符
//         var randindex=Math.floor(Math.random()*str.length);
//         // 四个随机位置已找到
//         s+=str.charAt(randindex);
//     }
//     code.push(s);
//     $(this).text(code);
// })
// 验证码的核对
var verifyCode = new GVerify("v_container");
 $(".code").on("blur",function(){
//     // 将有大写字母的情况变为小写   
//     var code_right=$(".code_right").text().toLowerCase();
//     if($(this).val().toLowerCase()!=code_right){
//         $(".codeTip").css("visibility","visible");
//         flag6=false;
//     }else{
//         $(".codeTip").css("visibility","hidden");
//         flag6=true;
//     }
// console.log(document.getElementsByClassName("code"))
    var res = verifyCode.validate(document.getElementsByClassName("code")[0].value);
    if(!res){
        $(".codeTip").css("visibility","visible");
        flag7=false;
    }else{
        $(".codeTip").css("visibility","hidden");
        flag7=true;
    }
 })

// 点击checkbox
$("label").on("tap",function(){
    check();
})
function check(){
    if($("input[type=checkbox]").is(":checked")){
        $("label").css({"background":'url("img/register_check_03.png") no-repeat 0.18rem center',"background-size":"0.2rem 0.2rem"});
    }else{
        $("label").css({"background":'url("img/register_check01.png") no-repeat 0.18rem center',"background-size":"0.2rem 0.2rem"});
    }
}
// 点击注册
$("input[type=button]").on("tap",function(){
    // console.log(flag7)
    // console.log(2);
    // :checked  jquery的选择器  所有被选中的 input 元素
   if(flag1&&flag2&&flag3&&flag4&&flag5&&flag7&&$("input[type=checkbox]").is(":checked")){
        // console.log(2);
        // 获取输入的这些值
        
        var userName=$(".username").val();
        var phone=$(".phone").val();
        var email=$(".email").val();
        var pass=$(".passward").val();
        console.log(pass);
        var userInfo={
            user:userName,
            phone:phone,
            pass:pass,
            email:email
        }
        // ajax
        $.ajax({
            type:"post",
            url:"reg.php",
            async:true,
            data:userInfo,
            success:function(data){
                console.log(data);
            }
        })
    }else{
        alert("请核对信息填写完整");
    }
})