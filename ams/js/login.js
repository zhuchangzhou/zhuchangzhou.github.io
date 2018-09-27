/**
 * Created by Administrator on 2017/11/22.
 */

new Vue({
    el:".login_info",
    data:{
        name:"",    //账号
        psw:"",    //密码
        isCouldSee:false,//密码可视
        errorTip:"",     //错误信息
    },
    methods:{
        //点击，清空账号
        cancelValue:function(){
            this.name="";
        },
        //点击改变input的type和可视图片改变
        isSee:function(){
            this.isCouldSee=!this.isCouldSee;
            this.psw=this.psw;
        },
        //点击登录按钮
        toLogin:function(){
            var userInfo=localStorage.userInfo?JSON.parse(localStorage.userInfo):[];
            if(this.psw==userInfo.psw||this.name==userInfo.userId){
                location.href="homepage.html";
            }else{
               this.errorTip="*账号或密码错误！";
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