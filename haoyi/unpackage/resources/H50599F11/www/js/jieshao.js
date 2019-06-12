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
						jieshao(result);
						}else{
							layer.confirm('服务器请求超时，请稍后重试', {
							btn: ['确定','取消'] //按钮
							}, function(){
								  window.location.reload();
							}, function(){
							    window.history.back();
							});
						}
					},
					error:function(result){
						layer.confirm('服务器请求超时，请稍后重试', {
						btn: ['确定','取消'] //按钮
						}, function(){
							  window.location.reload();
						}, function(){
								window.history.back();
						});
					}
				});
				}
				
			});
function jieshao(result){
	
	var data=result["map"]["user"];
	var yjfx=data["researchDirect"];
	var grjj=data["ue_personalDesc"];
	var html='';
	html+='<a href="javascript:;">'
	+'<div class="me_center_center_main yjfx">'
	+'<div class="me_center_center_main_ming">'
	+'<span>研究方向</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
	if(yjfx!=null && yjfx!=''){
		html+='<span class="me_center_center_input_zhanghuming">'+yjfx+'</span>'
	}else{
		html+='<span class="me_center_center_input_zhanghuming">请输入您的研究方向</span>'
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="javascript:;">'
	+'<div class="me_center_center_main grjj">'
	+'<div class="me_center_center_main_ming">'
	+'<span>个人简介</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
	
	if(grjj!=null &&  grjj!=''){
		html+='<span class="me_center_center_input_name">'+grjj+'</span>';
	}else{
		html+='<span class="me_center_center_input_name">请输入您的个人简介</span>';
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
		//研究方向
		$('.yjfx').click(function(){
				var data=$('.me_center_center_input_zhanghuming').text();
				window.location.href='yanjiufangxiang.html?data='+data;
		});
		
		//个人简介
		$('.grjj').click(function(){
				var data=$('.me_center_center_input_name').text();
				window.location.href='gerenjianjie.html?data='+data;
		});
	})
//}
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