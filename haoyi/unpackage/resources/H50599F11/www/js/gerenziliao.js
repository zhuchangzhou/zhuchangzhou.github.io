var loginId;//登陆id
var loginType;//登陆类型
var yemiantype=1;
var ctx;
//页面加载   获取全部信息
		$(function() {
			loginId = localStorage.getItem("loginId");
			loginType = localStorage.getItem("loginType");
			if(loginId=='' || loginId==null){
					layer.confirm('您还没有登陆，请登陆？', {
						btn: ['确定','取消'] //按钮
						}, function(){
							window.location.href='loginsj.html';
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
						gerenziliao(result);
						}else{
							layer.confirm('服务器请求超时，请稍后重试', {
							btn: ['确定','取消'] //按钮
							}, function(){
								window.location.reload()
							}, function(){
							window.history.back();
							});
						}
					},
					error:function(result){
						layer.confirm('服务器请求超时，请稍后重试', {
						btn: ['确定','取消'] //按钮
						}, function(){
							window.location.reload()
						}, function(){
						window.history.back();
						});
					}
				});
				}
				
			});
				
				
function gerenziliao(result){
	
	//
	var data=result["map"]["user"];
	var ue_pic=data["ue_pic"];
	var ctx1 = ctx.substring(0,ctx.length-1);
	var html='';
	html+='<div class="me_top_left_ming">'
	+'<span class="me_top_left_ming_ming">头像</span>'
	+'</div>'
	+'<div class="me_center_top_xinxi">';
	
    if(ue_pic!=null && ue_pic!=''){
		html+='<div class="me_center_top_touxiang_main_div_img"><img class="me_center_top_touxiang_main_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctxImg+''+ue_pic+'" alt="First slide"/></div>'
	}else{
		html+='<div class="me_center_top_touxiang_main_div_img"><img class="me_center_top_touxiang_main_img" src="img/2.jpg"/></div>'
	}
	html+='</div>'
	+'<div class="me_center_top_you">'
	+'<div class="me_center_top_you_img">'
	+'<a href="#"><img class="me_center_top_you_img_main" src="img/you.png"/></a>'
	+'</div>'
	+'</div>'
	$('.me_center_top').append(html);
}
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