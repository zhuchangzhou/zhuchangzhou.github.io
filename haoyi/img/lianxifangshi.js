var loginId;//登陆id
var loginType;//登陆类型
var yemiantype=1;
var ctx;
//页面加载   获取全部信息
		$(function() {
			loginId=getCookie("loginId");//获取loginId
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
					url:ctx+"online_LearningCourse/get_user_byu_id.action",
					data:{"u_id":loginId},
					dataType:"json",
					async:false,
					success: function(result) {
						console.log(result);
						if(result!=null && result!=''){
						lianxifangshi(result);
						}else{
							layer.confirm('服务器请求超时，请稍后重试', {
							btn: ['确定','取消'] //按钮
							}, function(){
								  window.history.back();
							}, function(){
							   window.history.back();
							});
						}
					},
					error:function(result){
						layer.confirm('服务器请求超时，请稍后重试', {
						btn: ['确定','取消'] //按钮
						}, function(){
							window.history.back();
						}, function(){
						 window.history.back();
						});
					}
				});
				}
				
			});
function lianxifangshi(result){
	 var data=result["map"]["user"];
	 var u_cellphone=data["u_cellphone"];
	 var ue_email=data["ue_email"];
	 var ue_wxNum=data["ue_wxNum"];
	 var ue_qq=data["ue_qq"];
   var html='';
   html+='<a href="javascript:;">'
   +'<div class="me_center_center_main shouji">'
   +'<div class="me_center_center_main_ming">'
   +'<span>手机号码</span>'
   +'</div>'
   +'<div class="me_center_center_input ">';
	 if(u_cellphone!="null" && u_cellphone!='' && u_cellphone!=null){
		 html+='<span class="me_center_center_input_shouji">'+u_cellphone+'</span>'
	 }else{
		 html+='<span class="me_center_center_input_shouji">请输入您的手机号码</span>'
	 }
	 html+='</div>'
   +'<div class="me_center_center_main_you">'
   +'<img class="me_center_center_main_you_img" src="img/you.png"/>'
   +'</div>'
   +'</div>'
   +'</a>'
   +'<a href="javascript:;">'
   +'<div class="me_center_center_main email">'
   +'<div class="me_center_center_main_ming">'
   +'<span>邮箱地址</span>'
   +'</div>'
   +'<div class="me_center_center_input">';
	 if(ue_email!="null" && ue_email!='' && ue_email!=null){
		 html+='<span class="me_center_center_input_email">'+ue_email+'</span>';
	 }else{
		 html+='<span class="me_center_center_input_email">请输入您的邮箱地址</span>';
	 }
	 html+='</div>'
   +'<div class="me_center_center_main_you">'
   +'<img class="me_center_center_main_you_img" src="img/you.png"/>'
   +'</div>'
   +'</div>'
   +'</a>'
   +'<a href="javascript:;">'
   +'<div class="me_center_center_main weixin">'
   +'<div class="me_center_center_main_ming">'
   +'<span>微信</span>'
   +'</div>'
   +'<div class="me_center_center_input">';
	 if(ue_wxNum!="null" && ue_wxNum!='' && ue_wxNum!=null){
	 	html+='<span class="me_center_center_input_weixin">'+ue_wxNum+'</span>';
	 }else{
	 	html+='<span class="me_center_center_input_weixin">请输入您的微信号码</span>'
	 }
	 html+='</div>'
   +'<div class="me_center_center_main_you">'
   +'<img class="me_center_center_main_you_img" src="img/you.png"/>'
   +'</div>'
   +'</div>'
   +'</a>'
   +'<a href="javascript:;">'
   +'<div class="me_center_center_main qqNum">'
   +'<div class="me_center_center_main_ming">'
   +'<span>QQ</span>'
	 +'</div>'
	 +'<div class="me_center_center_input">';
	 if(ue_qq!="null" && ue_qq!='' && ue_qq!=null){
	 html+='<span class="me_center_center_input_qq">'+ue_qq+'</span>';
	 }else{
	 html+='<span class="me_center_center_input_qq">请输入您的qq号码</span>';
	 }
	 html+='</div>'
   +'<div class="me_center_center_main_you">'
   +'<img class="me_center_center_main_you_img" src="img/you.png"/>'
   +'</div>'
   +'</div>'
   +'</a>'
   $('.me_center_center').append(html);
}
    $(function(){
    	//手机
    	$('.shouji').click(function(){
    			var data=$('.me_center_center_input_shouji').text();
    			window.location.href='../yemian/shoujihaoma.html?data='+data;
    	});
    	
    	//邮箱
    	$('.email').click(function(){
    			var data=$('.me_center_center_input_email').text();
    			window.location.href='../yemian/youxiangdizhi.html?data='+data;
    	});
    	//微信
    	$('.weixin').click(function(){
    			var data = $(".me_center_center_input_weixin").text();
    			window.location.href='../yemian/weixinhaoma.html?data='+data;
    	});
			//qq
    	$('.qqNum').click(function(){
    			var data=$('.me_center_center_input_qq').text();
    			window.location.href='../yemian/qqhaoma.html?data='+data;
    	});
    })
	//获取当前账户id
	//cookie开始
	//获取cookie
	function getCookie(name) {
	  var cookies = document.cookie;
	  var list = cookies.split(";");          // 解析出名/值对列表
	      
	  for(var i = 0; i < list.length; i++) {
	    var arr = list[i].split("=");          // 解析出名和值
	    if(arr[0] == name)
	      return decodeURIComponent(arr[1]);   // 对cookie值解码
	  } 
	  return "";
	}