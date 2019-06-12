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
			loginId = localStorage.getItem("loginId");
			loginType = localStorage.getItem("loginType");
			if(loginId=='' || loginId==null){
					layer.confirm('您还没有登陆，请登陆？', {
						btn: ['确定','取消'] //按钮
						}, function(){
							window.location.href='loginsj.html';
						}, function(){
					});
			}else{
		//获取字典信息
		$.ajax({
			//
			type:"post",
			url:ctx+"online_LearningCourse/get_dictionarydata.action",
			dataType:"json",
			async:false,
			success: function(result) {
				console.log(result);
				if(result!=null && result!=''){
					 xuelixianshi(result);
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
function xuelixianshi(result){
	
	var xueli=getUrlParam("data");
	var ed=result["map"]["jobTitle"];
	var html='';
	 $.each(ed, function(index,obj) {
		var dName=ed[index]['dName'];
		var id=ed[index]['id'];
		html+='<div class="me_center_center_main">';
		html+='<div class="me_center_center_main_ming" data-xueli="'+id+'"><span>'+dName+'</span></div>';
		html+='<div class="me_center_center_main_ming_right">'
		+'<div class="me_center_center_main_ming_right_img">';
		if(xueli=="null"){
			html+='<img class="me_center_center_main_ming_right_xuanze" style="display: None;"  src="img/xuanze_xuanzhong.png"/>'
		}else if(xueli==dName){
			html+='<img class="me_center_center_main_ming_right_xuanze" style="display: block;"  src="img/xuanze_xuanzhong.png"/>'
		}else if(xueli!=dName){
			html+='<img class="me_center_center_main_ming_right_xuanze" style="display: None;" src="img/xuanze_xuanzhong.png"/>'
		}
		html+='</div>'
		+'</div>'
		+'</div>'
		});
		$('.me_center_center').append(html);
}		

$(function(){
	$('.me_center_center_main').click(function(){
		//
		$('.me_center_center_main').removeClass("xuanzhong");
		var img=$(this).find('.me_center_center_main_ming_right_xuanze');
		img.show();
		$(this).removeClass("me_center_center_main");
		$(this).addClass("me_center_center_main_xuanzhong");
		//
		var wei_img=$('.me_center_center_main').find(".me_center_center_main_ming_right_xuanze");
		wei_img.hide();
		$('.me_center_center_main_xuanzhong').addClass("me_center_center_main");
		$('.me_center_center_main').removeClass("me_center_center_main_xuanzhong");
		$(this).addClass("xuanzhong");
	});
	
	//保存开始
	$('.xueli_save').click(function(){
		
		var id = $(".xuanzhong").find('.me_center_center_main_ming').data("xueli");//获取1或者2
		$.ajax({
			type:"POST",
			url:ctx+"online_LearningCourse/update_user.action",
			data:{"jobTitleId":id,"u_id":loginId,"state":3},
			async:false,
			success: function(result) {
				if(result!=null && result!=''){
					window.location.href='jichuxinxi.html';
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