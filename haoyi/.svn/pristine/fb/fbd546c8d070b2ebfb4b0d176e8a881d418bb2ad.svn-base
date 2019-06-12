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
						jichuxinxi(result);
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
function jichuxinxi(result){
	var data=result["map"]["user"];
	var ue_username=data["ue_username"];//登陆名
	var ue_nickname=data["ue_nickname"];//真实姓名
	var ue_sex=data["ue_sex"];//性别
	var educationId=data["educationId"];//学历
	var jobTitleId=data["jobTitleId"];//职称
	var school_Name=data["school_Name"];//学校名称
	var html='';
	html+='<a href="javascript:;">'
	+'<div class="me_center_center_main zhanghu">'
	+'<div class="me_center_center_main_ming">'
	+'<span>账户名称</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
	if(ue_username!=null && ue_username!=''){
		 html+='<span class="me_center_center_input_zhanghuming">'+ue_username+'</span>';
	}else{
		 html+='<span class="me_center_center_input_zhanghuming">请输入账户名称</span>';
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="javascript:;">'
	+'<div class="me_center_center_main xingming">'
	+'<div class="me_center_center_main_ming">'
	+'<span>姓名</span>'
  +'</div>'
	+'<div class="me_center_center_input">';
	if(ue_nickname!=null && ue_nickname!=''){
		html+='<span class="me_center_center_input_name">'+ue_nickname+'</span>';
	}else{
		html+='<span class="me_center_center_input_name">请输入您的真实姓名</span>';
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="javascript:;">'
	+'<div class="me_center_center_main gender">'
	+'<div class="me_center_center_main_ming">'
	+'<span>性别</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
	if(ue_sex==0){
		html+='<span class="me_center_center_input_gender" data-gender="0">男</span>';
	}else if(ue_sex==1){
		html+='<span class="me_center_center_input_gender" data-gender="1">女</span>';
	}else if(ue_sex==2){
		html+='<span class="me_center_center_input_gender">请选择</span>';
	}else if(ue_sex==null || ue_sex==''){
		html+='<span class="me_center_center_input_gender" data-gender="null">请选择</span>';
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="javascript:;">'
	+'<div class="me_center_center_main xueli">'
	+'<div class="me_center_center_main_ming">'
	+'<span>学历</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
  if(educationId!=null && educationId!=''){
		$.ajax({
			type:"POST",
			url:ctx+"online_LearningCourse/get_dictionarydata.action",
			dataType:"json",
			async:false,
			success: function(result) {
				var ed=result["map"]["education"];
				console.log(result);
				if(result!=null && result!=''){
						$.each(ed, function(index,obj) {
						var dName=ed[index]['dName'];
						var id=ed[index]['id'];
						if(id==educationId){
							html+='<span class="me_center_center_input_xueli">'+dName+'</span>';
						}
						});
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
	  html+='<span class="me_center_center_input_xueli">请选择您的学历</span>';
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="#">'
	+'<div class="me_center_center_main zhichen">'
	+'<div class="me_center_center_main_ming">'
	+'<span>职称</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
	if(jobTitleId!=null && jobTitleId!=''){
		$.ajax({
			type:"POST",
			url:ctx+"online_LearningCourse/get_dictionarydata.action",
			dataType:"json",
			async:false,
			success: function(result) {
				var ed=result["map"]["jobTitle"];
				console.log(result);
				if(result!=null && result!=''){
						$.each(ed, function(index,obj) {
						var dName=ed[index]['dName'];
						var id=ed[index]['id'];
						if(id==jobTitleId){
							html+='<span class="me_center_center_input_zhicheng">'+dName+'</span>';
						}
						});
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
		html+='<span class="me_center_center_input_zhicheng">请选择职称</span>';
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="#">'
	+'<div class="me_center_center_main xuexiaomingchen">'
	+'<div class="me_center_center_main_ming">'
	+'<span>学校名称</span>'
	+'</div>'
	+'<div class="me_center_center_input">';
	if(school_Name!=null && school_Name!=''){
		html+='<span class="me_center_center_input_xuexiaoming">'+school_Name+'</span>';
	}else{
		html+='<span class="me_center_center_input_xuexiaoming">请选择学校名称</span>';
	}
	html+='</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
	+'<a href="#">'
	+'<div class="me_center_center_main jiaokechen">'
	+'<div class="me_center_center_main_ming">'
	+'<span>所教课程</span>'
	+'</div>'
	+'<div class="me_center_center_input">'
	+'<span class="me_center_center_input_kechen">请选择</span>'
	+'</div>'
	+'<div class="me_center_center_main_you">'
	+'<img class="me_center_center_main_you_img" src="img/you.png"/>'
	+'</div>'
	+'</div>'
	+'</a>'
    $('.me_center_center').append(html);	
	}
	
	
	$(function(){
		//账户名称
		$('.zhanghu').click(function(){
				var data=$('.me_center_center_input_zhanghuming').text();
				window.location.href='../yemian/zhanghumingchen.html?data='+data;
		});
		
		//姓名
		$('.xingming').click(function(){
			   var data=$('.me_center_center_input_name').text();
				 window.location.href='../yemian/ziliao_name.html?data='+data;
		});
		//性别
		 $('.gender').click(function(){
			 
			  var data = $(".me_center_center_input_gender").data("gender");
				window.location.href='../yemian/gender.html?data='+data;
		});
		//学历
		 $('.xueli').click(function(){
				var data=$('.me_center_center_input_xueli').text();
				window.location.href='../yemian/xueli.html?data='+data;
		});
		//职称
		$('.zhichen').click(function(){
				var data=$('.me_center_center_input_zhicheng').text();
				window.location.href='../yemian/zhichen.html?data='+data;
		});
		/*$('.me_center_center_main').click(function(){
				var data=$('.me_center_center_input_name').text();
				window.location.href='../yemian/ziliao_name.html?data='+data;
		});
		$('.me_center_center_main').click(function(){
				var data=$('.me_center_center_input_name').text();
				window.location.href='../yemian/ziliao_name.html?data='+data;
		}); */
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