var flag1=true,flag2=true,flag3=true,flag4=true;
//注册
var arr=[];
if(localStorage.hhd==undefined){
    arr=[];
}else{
    arr=JSON.parse(localStorage.hhd)
}
// 验证码
function checkCode() {
    $(".code_right").bind("click",function(){
        var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var n = 4, s = "",
            Code =[];
        for(var i = 0; i < n; i++){
            var rand = Math.floor(Math.random() * str.length);
            s += str.charAt(rand);
        }
        Code.push(s);
        $(this).html(Code)
    });
    var code=$(".code_right").html();
    var text=$(".code input").val();
    if(text==""){
        $(".code input").siblings("span").html("*验证码不能为空");
        $(".code input").siblings("span").css({
            color:"red"
        });
        flag1=false;
        return;
    }else if(text != code){
        $(".code input").siblings("span").html("*验证码输入错误");
        $(".code input").siblings("span").css({
            color:"red"
        });
        $(".code input").val("");
        flag1=false;
        return;
    }else if(text==code){
        $(".code input").siblings("span").html("*输入正确");
        $(".code input").siblings("span").css({
            color:"#707070"
        })
        flag1=true;
        return;
    }
}
// 昵称
function checkName() {
    var reg=/^[a-zA-Z0-9]{6,8}$/;
    var val=$(".nickname input").val();
    $.each(arr,function (index) {
        if(val==arr[index].zh){
            alert("该用户已存在");
            val="";
            $(".nickname input").val("");
        }
    });
    if(val.match(reg)==null||val.length<6||val.length>8){
            $(".nickname input").next("span").html("*请输入6-8位数字母结合，不区别大小写")
            $(".nickname input").next("span").css({
                color:"red"
            });
            flag2=false;
            return;
        }else{
            $(".nickname input").next("span").html("*输入正确");
            $(".nickname input").next("span").css({
                color:"#707070"
            });
            flag2=true;
            return;
        }
}
//手机号
function checkPhone() {
    var reg=/^1[3|4|5|7|8]\d{9}$/;
    var val=$(".phone-number input").val();
    if(val.match(reg)==null){
        $(".phone-number input").next("span").html("*请填写你的真实号码");
        $(".phone-number input").next("span").css({
            color:"red"
        });
        flag3=false;
        return;
    }else if(reg.test(val)==true){
        $(".phone-number input").next("span").html("*输入正确");
        $(".phone-number input").next("span").css({
            color:"#707070"
        });
        flag3=true;
        return
    }
}
//密码
function checkPass() {
    var reg=/^[a-z0-9_-]{6,18}$/gi;
    var val=$(".password input").val();
    if(val.match(reg)==null){
        $(".password input").next("span").html("*请输入6-18位数字母结合，不区分大小写");
        $(".password input").next("span").css({
            color:"red"
        });
        flag4=false;
        return;
    }else if(reg.test(val)==true){
        $(".password input").next("span").html("*输入正确");
        $(".password input").next("span").css({
            color:"#707070"
        });
        flag4=true;
        return;
    }
}
//确认密码
function checkConfirm() {
    var pass=$(".password input").val();
    var conf=$(".confirm-password input").val();
    if(conf != pass||pass==""){
        $(".confirm-password input").next("span").html("*两次输入的密码不一致");
        $(".confirm-password input").next("span").css({
            color:"red"
        });
        $(".confirm-password input").val("");
        return false;
    }else if(conf==pass){
        $(".confirm-password input").next("span").html("*输入正确");
        $(".confirm-password input").next("span").css({
            color:"#707070"
        });
        return true
    }
}
// 确定选择
var flag5;
$(".protocol").on("click",function () {
    if($(this).find("input").is(":checked")){
        $(this).find("input").prop("checked",true);
        $(this).children("label").css({
            background:"url('img/dui.png') no-repeat -1px 9px"
        })
        flag5=true;
    }else{
        $(this).find("input").prop("checked",false);
        $(this).children("label").css({
            background:'none'
        })
        flag5=false;
    }
})
// 注册
$(".free-registration").click(function(){
    checkName($(".nickname input").val());
    checkPass($(".confirm-password input").val());
    checkCode($(".code input").val());
    checkPhone($(".phone-number input").val());
    checkConfirm($(".confirm-password input").val());
    var userData=$(".nickname input").val();
    var pawData=$(".confirm-password input").val();
    var phData=$(".phone-number input").val();

    if(flag1==true&&flag2==true&&flag3==true&&flag4==true&&flag5==true){
        alert("恭喜您注册成功");
        arr.push({"zh":userData,"mm":pawData,"ph":phData});
        localStorage.hhd=JSON.stringify(arr);
        location.href="login.html"
    }else{
        alert("请完善资料")
    }
})

function checkForm() {
    return checkName() && checkPhone() && checkCode() && checkPass() && checkConfirm()
}