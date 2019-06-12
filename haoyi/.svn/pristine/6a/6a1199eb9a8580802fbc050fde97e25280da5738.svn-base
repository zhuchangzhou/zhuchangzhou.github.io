var ctx;
var yemiantype=3;
var loginId;
var loginType;
var login_name;
var password;


$(function(){
	  var index = parent.layer.getFrameIndex(window.name);
      parent.layer.close(index);
	  loginId=getCookie("loginId");//获取loginId
		login_name=getCookie("login_name");//获取用户名
		password=getCookie("password");
	  loginType=getCookie("loginType");//获取loginType
	  if(loginId=='' || loginId==null){
			layer.confirm('您还没有登陆，请登陆？', {
			btn: ['确定','取消'] //按钮
			}, function(){
				window.location.href='../yemian/loginsj.html';
			}, function(){
				window.history.back();
			});
	}else{
	  $.ajax({
  	    type:"POST",
  	    url:ctx+"online_LearningCourse/get_user_byu_id.action", //地址，就是json文件的请求路径
  	    data:{"u_id":loginId},
  	    dataType:"json",
  	    async:false,
  	    success: function(result) {
					if(result!=null && result!=''){
						wode(result);
					}else{
						layer.confirm('服务器请求超时，请稍后重试', {
						btn: ['确定','取消'] //按钮
						}, function(){
							window.location.reload();
						}, function(){
							window.location.reload();
						});
					}
  	    },
  	    error:function(result){
					layer.confirm('服务器请求超时，请稍后重试', {
					btn: ['确定','取消'] //按钮
					}, function(){
						window.location.reload();
					}, function(){
					  window.location.reload();
					});
  	    }
       });
	}
});


//获取当前账户id
//cookie开始
//获取cookie
function getCookie(name) {
  var cookies = document.cookie;
  var list = cookies.split("; ");          // 解析出名/值对列表
      
  for(var i = 0; i < list.length; i++) {
    var arr = list[i].split("=");          // 解析出名和值
    if(arr[0] == name)
      return decodeURIComponent(arr[1]);   // 对cookie值解码
  } 
  return "";
}

function wode(result){
	//debugger
	var ctx1 = ctx.substring(0,ctx.length-1);
	var data=result["map"]["user"];
	var ue_pic=data["ue_pic"];
    var html='';
    var u_type=data["u_type"];
html+='<div class="me_center_top_touxiang">'
    +'<div class="me_center_top_touxiang_main">'
	if(ue_pic!=null && ue_pic!=''){
		html+='<a href="#"><img class="me_center_top_touxiang_main_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+ue_pic+'" alt="First slide"/></a>';
	}else{
		html+='<a href="#"><img class="me_center_top_touxiang_main_img" src="img/u=3566723562,1494900636&fm=26&gp=0.jpg"/></a>';
	}	
	html+='</div>'
	+'</div>'
	+'<div class="me_center_top_xinxi">'
	+'<a class="me_center_top_xinxi_xinming" href="#"><span>'+data["ue_username"]+'</span></a>';
	
	if(u_type==1){
		html+='<a class="me_center_top_xinxi_zhicheng" href="#"><span>管理员</span></a>';
	}else if(u_type==2){
		html+='<a class="me_center_top_xinxi_zhicheng" href="#"><span>教师</span></a>';
	}else if(u_type==3){
		html+='<a class="me_center_top_xinxi_zhicheng" href="#"><span>学生</span></a>';
	}else if(u_type==4){
	    html+='<a class="me_center_top_xinxi_zhicheng" href="#"><span>游客</span></a>';
	}	
	html+='</div>'
	+'<div class="me_center_top_you">'
	+'<div class="me_center_top_you_img">'
	+'<a href="#"><img class="me_center_top_you_img_main" src="img/you.png"/></a>'
	+'</div>'
	+'</div>'
	+'</div>';
	
    $(".me_center_top").append(html);
}

$(function(){
	 $('.me_center_footer_b').click(function(){
		    clearCookie();
				window.location.href='../yemian/loginsj.html';
	 });
	 $('.me_center_footer').click(function(){
		   window.location.href='../yemian/xiugaimima.html';
	 });
	 $('.me_center_top').click(function(){
		   window.location.href='../yemian/personalData.html';
	 });
});

// //清除全部cookie
// function clearCookie() {
// 	var cookies =  getCookie();
// 	var  str = cookies.split(";");
// 	//判断是否存在下列参数
// 		delCookie(str[i].split("=")[0]);
// }
/* function clearCookie(){ 
	var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
	if (keys) { 
		for (var i = keys.length; i--;) 
		document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
	} 
} */

function clearCookie(){ 
	var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
	if (keys) { 
		for (var i = keys.length; i--;) 
		document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
	} 
}