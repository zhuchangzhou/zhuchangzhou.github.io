/**
 * Created by duodi on 2017/11/22.
 */
var count=60;//验证码发送60秒
var flag=true;//点击发送验证码开关
var vm=new Vue({
    el:".regist_info",
    data:{
        isCouldSee:false,//密码可视
        codeMsg:"获取验证码",//验证码提示信息
        psw:"",     //输入密码
        phone:"",   //输入的手机号
        code:"",    //输入的验证码
        errorTip:"",     //错误信息
        isChecked:false,     //同意协议
        labelcheck:"background: url('img/register_select_1.png') 1.48rem center / 0.28rem 0.28rem no-repeat;",   //打勾样式
    },
    methods:{
        //点击改变input的type和可视图片改变
        isSee:function(){
            this.isCouldSee=!this.isCouldSee;
            this.psw=this.psw;
        },
        //点击获取验证码
        getCode:function(){
            if(flag){
                flag=false;
                var t=setInterval(countTime,1000)
            }
            function countTime(){
                count--;
                vm.codeMsg="请在" + count + "后再次获取";
                if(count==60){flag=true;}
                if(count>0&&count<60){flag=false;}
                if(count==0){
                    clearInterval(t);
                    vm.codeMsg="重新发送验证码";
                    count=60;
                    flag=true;
                }
            }
        },
        //验证手机号
        checkPhone:function(){
            if(!/^1(3|4|5|7|8)\d{9}$/g.test(this.phone)){
                this.errorTip="手机号格式错误！";
            }else{
                this.errorTip="";
            }
        },
        //验证密码6~20位
        checkPsw:function() {
           if(!/^\w{6,20}$/g.test(this.psw)){
               this.errorTip="*请输入6~20位登录密码";
           }
            else{
               this.errorTip="";
           }
        },
        //点击注册按钮
        toRegist:function(){
            if(this.psw==""||this.phone==""||this.code==""||this.isChecked==false||this.errorTip!=""){
                alert("请完善信息！")
            }else{
                var userInfo={
                    userId:this.phone,
                    psw:this.psw
                }
                localStorage.userInfo=JSON.stringify(userInfo);
                location.href="login.html";
            }
        }
    }
})
new Vue({
    el:"header",
    methods: {
        //返回
        goBack: function () {
            history.back()
        }
    }
})






















