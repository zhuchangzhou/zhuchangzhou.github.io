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
				
				var qq=getUrlParam("data");
    var html='';
	html+='<div class="me_center_center_main">';
	if(qq!=null && qq!=''){
		html+='<input class="zhanghu_input" type="text" name="gai_zhanghumingcheng" id="gai_zhanghumingcheng" placeholder="'+qq+'"/>'
	}else{
		html+='<input class="zhanghu_input" type="text" name="gai_zhanghumingcheng" id="gai_zhanghumingcheng" placeholder="请输入您的手机号码"/>'
	}
	html+='</div>'
	$('.me_center_center').append(html);
	}
//保存开始
	$('.qq_save').click(function(){
		//
		var qq=document.getElementById('gai_zhanghumingcheng').value;
		$.ajax({
			type:"POST",
			url:ctx+"online_LearningCourse/update_user.action",
			data:{"ue_qq":qq,"u_id":loginId,"state":2},
			success: function(result) {
				if(result!=null && result!=''){
					window.location.href='../yemian/lianxifangshi.html';
				}else{
					layer.confirm('服务器请求超时，请稍后重试', {
					btn: ['确定','取消'] //按钮
					}, function(){
							window.location.href='../yemian/lianxifangshi.html';
					}, function(){
					   window.location.href='../yemian/lianxifangshi.html';
					});
				}
			},
			error:function(result){
				layer.confirm('服务器请求超时，请稍后重试', {
				btn: ['确定','取消'] //按钮
				}, function(){
					 window.location.href='../yemian/lianxifangshi.html';
				}, function(){
				   window.location.href='../yemian/lianxifangshi.html';
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