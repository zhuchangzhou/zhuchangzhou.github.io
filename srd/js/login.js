//验证码
function createCode() {
    $(".code p").bind("click", function () {
        var str = "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var n = 4, s = "",
            Code = [];
        for (var i = 0; i < n; i++) {
            var rand = Math.floor(Math.random() * str.length);
            s += str.charAt(rand);
        }
        Code.push(s);
        $(".code span").html(Code)
    })
}
//登录
var flag,f;
var arr=JSON.parse(localStorage.hhd);
$(".member-login").click(function(){
    var inputCode = $(".cod").val();
    if(inputCode=="") {
        alert("请输入验证码！");
        f=false;
    }
    else if(inputCode!= $(".code input").val() ) {
        alert("验证码输入错误!");
        createCode();
        $(".cod").val("");
        f=false;
    }
    else if(inputCode==$(".code input").val()){
        f=true;
    }

    arr.forEach(function(val){
        if(val.zh==$(".login-name input").val()&&val.mm==$(".password input").val()){
            flag=true;
        }else{
            flag=false;
        }
    })
    if(flag==true&&f==true){
        alert("^-^ OK")
        location.href="index.html"
    }if(flag==true&&f==false){
        // alert("账号密码不正确")
    }if(flag==false&&f==true) {
        alert("账号密码不正确");
    }if(flag==false&&f==false){
        alert("账号密码不正确")
    }
})
