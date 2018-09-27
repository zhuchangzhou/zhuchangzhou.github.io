/**
 * Created by duodi on 2017/11/15.
 */
var cliH;
function getH(){
    return window.innerHeight||document.body.clientHeight;
}
cliH=getH();
var body=document.querySelector("body");
var section=document.querySelector("section");
body.style.height=cliH+"rem";
section.style.height=cliH-1.32+"rem";


var flag3=false;
//验证码切换
$(".code_right").on("tap",function(){
    var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var n=4,s="",code=[];
    for(var i=0;i<n;i++){
        var rand=Math.floor(Math.random()*str.length);
        s+=str.charAt(rand);
    }
    code.push(s);
    $(this).text(code);
})
//验证码核对
$(".code").on("blur",function(){
    var code_right=$(".code_right").text().toLowerCase();
    if($(this).val().toLowerCase()!=code_right.toLowerCase()){
        $(".codeTip").css("visibility","visible");
        flag3=false;
    }else{
        $(".codeTip").css("visibility","hidden");
        flag3=true;
    }
})
//取数据
function getUserInfo(){
    var userInfo=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):[];
    return userInfo;
}
var userInfo=getUserInfo();

//会员名验证
$(".userName").on("blur",function(){
    if($(this).val().replace("/^\s+$/gi","")==""){
        $(".userNameTip").css("visibility","visible");
    }else{
        $(".userNameTip").css("visibility","hidden");
    }
})

//密码验证
$(".password").on("blur",function(){
    if($(this).val().replace("/^\s+$/gi","")==""){
        $(".passwordTip").css("visibility","visible");
    }else{
        $(".passwordTip").css("visibility","hidden");
    }
})

//登录
$("input[type=button]").on("tap",function(){
    $.ajax({
        type:"post",
        url:"login.php",
        async:true,
        data:{
            "user":$(".userName").val(),
            "pass":$(".password").val()
        },
        success:function(msg){
            if($(".code").val().toLowerCase()==$(".code_right").text().toLowerCase()){
                if(msg==="login success"){
                    location.href="homepage.html";
                }else{
                    alert("用户名或密码不正确！");
                }
            }else{
                alert("验证码有误!")
            }

        }
    })
    // if($(".userName").val()==userInfo.name&&$(".password").val()==userInfo.password&&$(".code").val().toLowerCase()==$(".code_right").text().toLowerCase()){
    //     saveUsrId();
    //     location.href="homepage.html";
    // }else{
    //     alert("用户名或密码不正确！");
    // }
})









