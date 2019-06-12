var loginId;//登陆id
var loginType;//登陆类型
var yemiantype=1;
var ctx;

//获取页面参数
//获取页面参数(可识别中文)
function getUrlParam(key) {
	 // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
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
		
	  var xingbie=getUrlParam("data");
    var html='';
	    html+='<div class="me_center_center_main nan">'
		+'<div class="me_center_center_main_ming"><span>男</span></div>'
		+'<div class="me_center_center_main_ming_right">'
		+'<div class="me_center_center_main_ming_right_img">';
		if(xingbie!="null"){
			html+='<img class="me_center_center_main_ming_right_xuanze nan_img" style="display: None;" data-gender="0" src="img/xuanze_xuanzhong.png"/>'
		}else{
			html+='<img class="me_center_center_main_ming_right_xuanze nan_wei_img" style="display: None;" data-gender="0" src="img/xuanze_xuanzhong.png"/>'
		}
		html+='</div>'
		+'</div>'
		+'</div>'
		+'<div class="me_center_center_main nv">'
		+'<span class="me_center_center_main_ming">女</span>'
		+'<div class="me_center_center_main_ming_right">'
		+'<div class="me_center_center_main_ming_right_img">';
		if(xingbie!="null"){
			html+='<img class="me_center_center_main_ming_right_xuanze nv_img" style="display: None;" data-gender="1" src="img/xuanze_xuanzhong.png"/>'
		}else{
			html+='<img class="me_center_center_main_ming_right_xuanze nv_wei_img" style="display: None;" data-gender="1" src="img/xuanze_xuanzhong.png"/>'
		}
		html+='</div>'
		+'</div>'
		+'</div>'
		$('.me_center_center').append(html);
	}
	if(xingbie!="null" && xingbie!=''){
		if(xingbie==0){
			$('.nan_img').css("display","block");
			$('.nv_img').css("display","None");
		}else if(xingbie==1){
			$('.nan_img').css("display","None");
			$('.nv_img').css("display","block");
		}
	}else{
		$('.nan_wei_img').css("display","None");
		$('.nv_wei_img').css("display","None");
		$('.nan').addClass("me_center_center_main nan_wei");
		$('.nv').addClass("me_center_center_main nv_wei");
	}
	
	
	
	//性别选择开始
	$('.nan').click(function(){
		$('.nan_img').css("display","block");
		$('.nv_img').css("display","None");
		$('.nan_img').addClass("me_center_center_main_ming_right_xuanze nan xuanzhong");
		$('.nv_img').removeClass("xuanzhong");
	});
	$('.nv').click(function(){
		$('.nan_img').css("display","None");
		$('.nv_img').css("display","Block");
		$('.nv_img').addClass("me_center_center_main_ming_right_xuanze nv xuanzhong");
		$('.nan_img').removeClass("xuanzhong");
	});
	$('.nan_wei').click(function(){
		$('.nan_wei_img').css("display","block");
		$('.nv_wei_img').css("display","None");
		$('.nan_wei_img').addClass("me_center_center_main_ming_right_xuanze nan xuanzhong");
		$('.nv_wei_img').removeClass("xuanzhong");
	});
	$('.nv_wei').click(function(){
		$('.nan_wei_img').css("display","None");
		$('.nv_wei_img').css("display","block");
		$('.nv_wei_img').addClass("me_center_center_main_ming_right_xuanze nv xuanzhong");
		$('.nan_wei_img').removeClass("xuanzhong");
	});
	
	//保存开始
	$('.xinbie_save').click(function(){
		var gender = $(".xuanzhong").data("gender");//获取1或者2
		$.ajax({
			type:"POST",
			url:ctx+"online_LearningCourse/update_user.action",
			data:{"ue_sex":gender,"u_id":loginId,"state":2},
			success: function(result) {
				if(result!=null && result!=''){
					window.location.href='../yemian/jichuxinxi.html';
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
	});
	
});
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