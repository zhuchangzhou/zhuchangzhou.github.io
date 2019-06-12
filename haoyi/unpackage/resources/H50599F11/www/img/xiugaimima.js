var loginId;//登陆id
var loginType;//登陆类型
var login_name;
var yemiantype=1;
var ctx;
//页面加载   获取全部信息
		$(function() {
			
			loginId=getCookie("loginId");//获取loginId
			loginType=getCookie(" loginType");//获取loginType//需要加空格，cookie在分割字符时会将一个空格分割到第一个元素之后的每个元素
			login_name=getCookie(" login_name");//获取loginType
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
function lianxifangshi(result){
	 var data=result["map"]["user"];
	 var u_cellphone=data["u_cellphone"];
	 var ue_email=data["ue_email"];
	 var ue_wxNum=data["ue_wxNum"];
	 var ue_qq=data["ue_qq"];
   var html='';
   html+='<div class="me_center_center_main">'
	 +'<div class="me_center_center_main_ming">'
	 +'<span>用&nbsp;&nbsp;户&nbsp;&nbsp;名</span>'
	 +'</div>'
	 +'<div class="me_center_center_input">'
	 +'<input class="zhanghu_input" type="text" name="gai_zhanghumingcheng" id="username" readonly="readonly" value="'+login_name+'" placeholder="'+login_name+'"/>'
	 +'</div>'
	 +'</div>'
	 +'<div class="me_center_center_main">'
	 +'<div class="me_center_center_main_ming">'
	 +'<span>当前密码</span>'
	 +'</div>'
	 +'<div class="me_center_center_input">'
	 +'<input class="zhanghu_input" type="password" name="gai_zhanghumingcheng" id="u_password" value="" placeholder="请输入当前密码"/>'
	 +'</div>'
	 +'</div>'
	 +'<div class="me_center_center_main">'
	 +'<div class="me_center_center_main_ming">'
	 +'<span>新&nbsp;&nbsp;密&nbsp;&nbsp;码</span>'
	 +'</div>'
	 +'<div class="me_center_center_input">'
	 +'<input class="zhanghu_input" type="password" name="gai_zhanghumingcheng" id="re_u_password" value="" placeholder="请输入新密码"/>'
	 +'</div>'
	 +'</div>'
	 +'<div class="me_center_center_main">'
	 +'<div class="me_center_center_main_ming">'
	 +'<span>确认密码</span>'
	 +'</div>'
	 +'<div class="me_center_center_input">'
	 +'<input class="zhanghu_input" type="password" name="gai_zhanghumingcheng" id="sava_password" value="" placeholder="请再次输入新密码"/>'
	 +'</div>'
	 +'</div>'
   $('.me_center_center').append(html);
}
    $(function(){
			//密码验证
    	 $('#u_password').blur(function(){
							var login_name = document.getElementById("username").value;
							var password = document.getElementById("u_password").value;
							if(password!='' && password!=null){
													$.ajax({
														type: "post",
														url: ctx+"loginAdmin/tel_login.action", //地址，就是json文件的请求路径
														data: {
															"u_loginname": login_name,
															"u_password": password
														},
														async: false,
														success: function(result) {
															if(result != null) {
																if(result.code == 1) {
																	$('#u_password').attr('placeholder','请输入当前密码');
																} else {
																	 $('#u_password').val("");
                                   $('#u_password').attr('placeholder','密码输入错误，请重新输入');
																}
															} else {
																alert("服务器响应超时，稍后再试！");
															}
														},
														error: function(result) {
															alert("服务器响应超时，稍后再试！");
														}
													});	
							}else{
								 $('#u_password').attr('placeholder','密码不能为空');
							}
			 });
			 //密码非空验证+特殊字符验证+不为数字验证+长度验证
			 $('#re_u_password').blur(function(){
			 			var re_u_password = document.getElementById("re_u_password").value;
						var pwd=re_u_password.length;
						if(re_u_password!='' && re_u_password!=null){
							//判断是否为长度
							if(pwd<6 || pwd>12){
								  $('#re_u_password').val("");
								  $('#re_u_password').attr('placeholder','请输入长度为6~12位的字符');
							}else{
								//清空提示
								$('#re_u_password').attr('placeholder','请输入新密码');
								//判断是否为数字
								if(isNaN(re_u_password)){
								//判断是否包含空格和单引号
									if(re_u_password.indexOf("'")==-1 && re_u_password.indexOf(" ")==-1){
										$('#re_u_password').attr('placeholder','请输入新密码');
										}else{
										$('#re_u_password').val("");
										$('#re_u_password').attr('placeholder','密码不能包含特殊字符，请重新输入');
									}
								}else{
								$('#re_u_password').val("");
								$('#re_u_password').attr('placeholder','密码必须包含字母和数字');	
							}
						}
						}else{
							$('#re_u_password').attr('placeholder','密码不能为空');
						}
			 });
			 $('#sava_password').blur(function(){
				 
				  var re_u_password = document.getElementById("re_u_password").value;
			 		var sava_password = document.getElementById("sava_password").value;
					if(sava_password!=null && sava_password!=''){
						if(re_u_password!=sava_password){
							$('#sava_password').val("");
							$('#sava_password').attr('placeholder','两次密码不一致，请重新输入');
						}else{
							//$('#sava_password').val("");
							$('#sava_password').attr('placeholder','请再次输入新密码');
						}
					}else{
						 $('#sava_password').attr('placeholder','密码不能为空');
					}
			 });
			 
			 $('.me_bottom').click(function(){
				 var sava_password = document.getElementById("sava_password").value;
				 
				   if(pwd()){
						 $.ajax({
						 	type:"POST",
						 	url:ctx+"online_LearningCourse/update_user.action",
						 	data:{"u_password":sava_password,"u_id":loginId,"state":1},
							async:false,
						 	success: function(result) {
						 		if(result!=null && result!=''){
									layer.confirm('密码修改成功', {
									btn: ['确定','取消'] //按钮
									}, function(){
										window.location.href='../yemian/wode.html';
									}, function(){
									  window.location.reload();
									});
						 			//window.location.href='../yemian/.html';
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
					 }else{
						 
					 }
					
			 })
    })
		
function pwd(){
	
	var re_u_password = document.getElementById("re_u_password").value;
	var sava_password = document.getElementById("sava_password").value; 
	var pwd=re_u_password.length;
	if(re_u_password!='' && re_u_password!=null){
		//判断是否为长度
		if(pwd<6 || pwd>12){
				$('#re_u_password').val("");
				$('#re_u_password').attr('placeholder','请输入长度为6~12位的字符');
				return false;
		}else{
			//清空提示
			$('#re_u_password').attr('placeholder','请输入新密码');
			//判断是否为数字
			if(isNaN(re_u_password)){
			//判断是否包含空格和单引号
				if(re_u_password.indexOf("'")==-1 && re_u_password.indexOf(" ")==-1){
					$('#re_u_password').attr('placeholder','请输入新密码');
					    	if(re_u_password!=sava_password){
					    		$('#sava_password').val("");
					    		$('#sava_password').attr('placeholder','两次密码不一致，请重新输入');
									return false;
					    	}else{
					    		$('#sava_password').attr('placeholder','请再次输入新密码');
									return true;
					    	}
					}else{
					$('#re_u_password').val("");
					$('#re_u_password').attr('placeholder','密码不能包含特殊字符，请重新输入');
					return false;
				}
			}else{
			$('#re_u_password').val("");
			$('#re_u_password').attr('placeholder','密码必须包含字母和数字');	
			return false;
		}
	}
	}else{
		$('#re_u_password').attr('placeholder','密码不能为空');
	}
	
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