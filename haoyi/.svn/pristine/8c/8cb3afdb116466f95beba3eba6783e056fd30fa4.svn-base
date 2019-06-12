var loginId;
var loginType;
$(function(){
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
	  }
})

var ctx;
$(function() {
	//顶部拼接
	var sousuo_banner = '';
	sousuo_banner += '<div class="top_t_left_s">' +
		'<div class="top_t_left_a_s">' +
		'<span class=""><img src="img/sousuo.png" style="width: 22px;" ></span>' +
		'</div>' +
		'</div>' +
		'<div class="top_t_center_s">' +
		'<div class="top_t_center_span_s"><form name="loginForm"><input class="kechensousuo" name="user" id="kechensousuo" type="text" placeholder="请输入课程名称" value="" style="outline:none;"/></form></div>' +
		'</div>' +
		'<div class="top_t_right_s">' +
		'<div  class="top_t_right_search_s">' +
		'<span class="top_t_left_a_span_zou_s">取消</span>' +
		'<span class="top_t_left_a_span_zou_quxiaotiaozhuan" >取消</span>' +
		'<span class="top_t_left_a_span_zou_sousuo">搜索</span>' +
		'</div>' +
		'</div>'
	$(".top_t_s").empty();
	$(".top_t_s").append(sousuo_banner);
	//输入框获得焦点
	$("#kechensousuo").focus(function() {//input输入框获得焦点事件
		$("#kechensousuo").bind("input propertychang", function(event) {//输入框改变
			var viewName = this.value;//获得value
			viewName = $.trim(viewName);//去除空格
			this.value = viewName;
			if (viewName.length == 0) {//输入框长度
				$(".kechen_course").css("display", "block");//课程页面显示
				$(".sou_xiangqing").css("display", "None");//详情页面隐藏
				$(".top_t_left_a_span_zou_s").css("display", "None");//取消按钮隐藏，点击返回之前页面
				$(".top_t_left_a_span_zou_quxiaotiaozhuan").css("display", "block");//取消按钮显示
				$(".top_t_left_a_span_zou_sousuo").css("display", "None");//搜索按钮隐藏
			} else {
				$(".kechen_course").css("display", "None");//课程页面隐藏
				$(".sou_xiangqing").css("display", "block");//详情页面显示
				$(".top_t_left_a_span_zou_s").css("display", "None");//隐藏取消
				$(".top_t_left_a_span_zou_quxiaotiaozhuan").css("display", "None");//取消跳转隐藏
				$(".top_t_left_a_span_zou_sousuo").css("display", "block");//搜索显示
				
			}
		});
	});
	//动态获取input输入框的值
	var loginForm=document.forms['loginForm'],
		user=loginForm.elements['user'];
		user.oninput=function(){
		var courseName=user.value;
		chaxunxourseName(courseName);//执行模糊查询的方法
		}
		//历史搜索开始
		var kechen_course = '';
		kechen_course += '<div class="lisi">' +
			'<div class="lisi_left"><span class="lisi_left_span">历史搜索<span></div>' +
			'<div class="lisi_right"><span class="lisi_right_span"><img class="lisi_right_span_img" src="img/shanchu.png"/><span></div>' +
			'</div>' +
			'<div class="lisi_sousuo">'+
		  '</div>' +
			'<div class="resousuo">' +
			'<div class="resousuo_top">' +
			'<div class="resousuo_p">热门搜索</div>' +
			'</div>' +
			'<div class="resousuo_bottom">'; +
		'</div>' +
		'</div>' +
		'</div>';
		$(".kechen_course").empty();
		$(".kechen_course").append(kechen_course);
		
		
		
		//热门搜索
		var remen = '';
			$.ajax({
				type: "Post",
				url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
				dataType: "json",
				async:false,
				success: function(result) {
					var data = result["dataList"][0];
					$.each(data, function(index, obj) {
						if(index>7){
							return false;
						}
						var itemList = data[index];
						console.log(data[index]);
						if(itemList!=null){
							var courseNames = itemList["courseName"];
							console.log(courseNames);
							remen += '<div class="resousuo_b" onclick="allsousuo(&quot'+courseNames+'&quot)">' + courseNames + '</div>';
						}
						
					});
					$(".resousuo_bottom").append(remen);
				},
				error: function(result) {
					layer.confirm('服务器请求超时，请稍后重试', {
					btn: ['确定','取消'] //按钮
					}, function(){
						  window.history.back();
					}, function(){
					    window.history.back();
					});
				}
		});
		
		var lishi='';
		$.ajax({
						type: "Post",
						url: ctx+"online_LearningCourse/select_onlineSearch.action", //地址，就是json文件的请求路径
						data:{"loginId":loginId},
						dataType: "json",
						async:false,
						success: function(result) {
							var strrr=result["map"]["course_List"]
							if(strrr.length>0){
								for(var i=0;i<strrr.length;i++){
												lishi+='<div class="sousuo_center_one">' +strrr[i].searchContent+ '</div>';
										}
							}
							$(".lisi_sousuo").append(lishi);
						},
						error: function(result) {
							layer.confirm('服务器请求超时，请稍后重试', {
							btn: ['确定','取消'] //按钮
							}, function(){
									window.history.back();
							}, function(){
									window.history.back();
							});
						},
				});
		
		//搜索点击按钮
			$(".top_t_left_a_span_zou_sousuo").click(function() {
				//debugger
				//写入cookie
				var course = document.getElementById("kechensousuo");
				var courseName = course.value;
				sousuoinput(courseName);
			});
			//删除按钮、清除历史记录
			$(".lisi_right_span_img").click(function() {
				$.ajax({
								type: "Post",
								url: ctx+"online_LearningCourse/del_onlineSearch.action", //地址，就是json文件的请求路径
								data:{"loginId":loginId},
								dataType: "json",
								async:false,
								success: function(result) {
								}
						});
				
				//clearCookie();
				
				window.location.reload();
			});
			//历史搜索跳转课程页面
			$(".sousuo_center_one").click(function() {
				var courseNames = $(this).text();
				//debugger
				var courseName=courseNames.replace(/\s*/g,"");
				allsousuo(courseName);
			});
			//取消按钮刷新
			$(".top_t_left_a_span_zou_s").click(function() {
				window.location.reload();//刷新页面
			});
			//取消按钮并跳回之前页面
			$(".top_t_left_a_span_zou_quxiaotiaozhuan").click(function() {
				window.history.back(); //返回跳转之前的页面
			});
		
});
//动态搜索courseName显示在搜索详情页
function chaxunxourseName(courseName){
	console.log(courseName);
	$.ajax({
		type: "Post",
		url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
		data:{"keywords":courseName},
		dataType: "json",
		async:false,
		success: function(result) {
			var sou_xiangqing = '';
			var data = result["map"]['course_List'];
			if(data!=null){
				$.each(data, function(index, obj) {
					var item = data[index];
					if(item!=null){
							var courseNames = item["courseName"];
							sou_xiangqing += '<div class="sou_xiangqing_one" onclick="allsousuo(&quot'+courseNames+'&quot)">' + courseNames + '</div>'
					}
					
				});
				//可能需要清除页面元素
				$(".sou_xiangqing").empty();
				$(".sou_xiangqing").append(sou_xiangqing);
			}else{
			}
		},
		error: function(result) {
			layer.confirm('服务器请求超时，请稍后重试', {
			btn: ['确定','取消'] //按钮
			}, function(){
				 window.location.reload();
			}, function(){
			   window.location.reload();
			});
		}
	});
};
//获取输入框内容并且搜索跳转详情页面
function sousuoinput(courseName) {
       allsousuo(courseName);
}
//all搜索
//debugger
function allsousuo(courseName){
	//debugger
	//setCookie(courseName,courseName);
	$.ajax({
					type: "Post",
					url: ctx+"online_LearningCourse/add_onlineSearch.action", //地址，就是json文件的请求路径
					data:{"loginId":loginId,"searchContent":courseName},
					dataType: "json",
					success: function(result) {
						
					}
			});
	
	
	$.ajax({
		type: "Post",
		url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
		dataType: "json",
		async:false,
		data:{"keywords":courseName},
		success: function(result) {
			var data = result["map"]['course_List'];
			if(data!=null){
				$.each(data, function(index, obj) {
				var itemList = data[index];
				if(itemList!=null){
						var courseNames = itemList["courseName"];
						var courseTypeId = itemList["courseTypeId"];
						window.location.href = 'kechen.html?courseTypeId=' + courseTypeId;
				}else{
					$(".top_t_left_a_span_zou_s").css("display", "block");
					$(".top_t_left_a_span_zou_quxiaotiaozhuan").css("display", "None");
					$(".top_t_left_a_span_zou_sousuo").css("display", "None");
					$(".sou_wu").css("display", "block");
					$(".kechen_course").css("display", "None");
					$(".sou_xiangqing").css("display", "None");
				}
				});
			}else{
					$(".top_t_left_a_span_zou_s").css("display", "block");
					$(".top_t_left_a_span_zou_quxiaotiaozhuan").css("display", "None");
					$(".top_t_left_a_span_zou_sousuo").css("display", "None");
					$(".sou_wu").css("display", "block");
					$(".kechen_course").css("display", "None");
					$(".sou_xiangqing").css("display", "None");
			}
		},
		error: function(result) {
			debugger
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

/* //cookie开始
//设置cookie
function setCookie(name, value) {
	if (value) {
		var Days = 365
		var exp = new Date()
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
		document.cookie =escape(name)+ '=' + escape(value) + ';expires=' + exp.toGMTString()
	}
}
//获取cookie
function getCookie() {
	if (document.cookie.length > 0) {
		var cookie = document.cookie;
		console.log(cookie);
		return cookie;
	}
	return null
}
//清除某个cookie
function delCookie(name) {
	//debugger
　　var date= new Date();
　　date.setTime(date.getTime() - 1);
　　var cval = name;
　　if(cval != null)
　　document.cookie = name + "=" + cval + ";expires=" + date.toGMTString();
}

//清除全部cookie
function clearCookie() {
	var cookies =  getCookie();
	var  str = cookies.split(";");
	//判断是否存在下列参数
	for(var i = 0;i<str.length;i++){
		if (str[i].indexOf("loginId")>-1) {
			continue;
		}
		if (str[i].indexOf("loginType")>-1) {
			continue;
		}
		if (str[i].indexOf("login_name")>-1) {
			continue;
		}
		if (str[i].indexOf("password")>-1) {
			continue;
		}
		
		delCookie(str[i].split("=")[0]);

	}
	console.log(getCookie());
}
 */

//cookie结束
