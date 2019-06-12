var ctx;
var loginId;
var loginType;
var ke;

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

//页面加载   获取全部信息
			$(function() {
				//获取当前账户id
				//cookie开始
				loginId = localStorage.getItem("loginId");
				loginType = localStorage.getItem("loginType");
				$.ajax({
					type:"POST",
					url:ctx+"online_LearningCourse/tel_notice.action", //地址，就是json文件的请求路径
					data:{"loginId":loginId},
					dataType:"json",
					async:false,
					success: function(result) {
						//debugger
						if(result!=null && result!=''){
							xiaoxi_show(result);
						}else{
							layer.confirm('服务器请求超时，请稍后重试', {
							btn: ['确定','取消'] //按钮
							}, function(){
								window.location.reload();
							}, function(){
								window.history.back();
							});
						}
					}
				});
				 $(".top_t_left_a_span").click(function(){
					  window.history.back(); 
				 });
				//banner消息公告切换开始
		$(".xiaoxi_span").click(function() {
			$(".xiaoxi").css("display", "block");
			$(".xiaoxi_span").css({
				"font-size": "22px",
				"color": "black"
			});
			$(".xiaoxi_span").css({
				"border-bottom": "2px solid rgb(50,146,234)",
				"border-bottom-width": "2px"
			});
			$(".gonggao_span").css("border-bottom", "0px solid red");
			$(".gonggao_span").css({
				"font-size": "21px",
				"color": "rgb(161,161,161)"
			});
			$(".gonggao").css("display", "None");
		});
		$(".gonggao_span").click(function() {
			$(".xiaoxi").css("display", "None");
			$(".xiaoxi_span").css({
				"font-size": "21px",
				"color": "rgb(161,161,161)"
			});
			$(".gonggao_span").css("border-bottom", "2px solid rgb(50,146,234)");
			$(".xiaoxi_span").css("border-bottom", "0px solid red");
			$(".gonggao_span").css({
				"font-size": "22px",
				"color": "black"
			});
			$(".gonggao").css("display", "block");
		});

			});
//格式化时间
function dateFtt(fmt,date){ //author: meizz   
	var o = {   
		"M+" : date.getMonth()+1,                 //月份   
		"d+" : date.getDate(),                    //日   
		"h+" : date.getHours(),                   //小时   
		"m+" : date.getMinutes(),                 //分   
		"s+" : date.getSeconds(),                 //秒   
		"q+" : Math.floor((date.getMonth()+3)/3), //季度   
		"S"  : date.getMilliseconds()             //毫秒   
	};   
	if(/(y+)/.test(fmt))   
	fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
	for(var k in o)   
	if(new RegExp("("+ k +")").test(fmt))   
	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	return fmt;   
}

//消息内容开始
function xiaoxi_show(result){
	console.log(result);
	var dataxiaoxi=result["map"]["list_notice"];
	var datagonggao=result["map"]["list_newInfo"];
	var xiaoxihtml = '';
	var gonggaohtml = '';
			if(dataxiaoxi!=null && dataxiaoxi!=''){
				var ctx1 = ctx.substring(0,ctx.length-1);
				$.each(dataxiaoxi, function(index,obj) {
					var item = dataxiaoxi[index];
					var kechen=item["courseName"];
					if(kechen!=null && kechen!=''){
						ke=kechen;
					}else{
						ke="...";
					}
					
					var backMan_Src=item["backMan_Src"];
										var createDate=dateFtt("MM月dd日 hh:mm",new Date(item["createDate"]));
										var neirong=item["new_Content"];
										var xinming=item["backMan_Name"];
									xiaoxihtml+='<a href="#" onclick="selectAboutCourse('+item["courseId"]+')" class="me_center_top_a">'
											+'<div class="me_center_top">' 
											+'<div class="me_center_top_touxiang">' 
											+'<div class="me_center_top_touxiang_main">';
											if(backMan_Src!=null && backMan_Src!=''){
											xiaoxihtml+='<img class="me_center_top_touxiang_main_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+backMan_Src+'" alt="First slide"/>';
											}else{
											xiaoxihtml+='<img class="me_center_top_touxiang_main_img" src="img/u=3566723562,1494900636&fm=26&gp=0.jpg" />';
											}
											xiaoxihtml+='</div>'
											+'</div>' 
											+'<div class="me_center_top_xinxi">';
											if(xinming!=null && xinming!=''){
												xiaoxihtml+='<span class="me_center_top_xinxi_ming">'+item["backMan_Name"]+'</span>';
											}else{
												xiaoxihtml+='<span class="me_center_top_xinxi_ming">陌生人</span>';
											}
											if(xinming!=null && xinming!=''){
												xiaoxihtml+='<span class="me_center_top_xinxi_xinming"><font style="color:blue">'+item["backMan_Name"]+'</font>';
											}else{
												xiaoxihtml+='<span class="me_center_top_xinxi_xinming"><font style="color:blue">陌生人</font>';
											}
											if(neirong!=null && neirong!=''){
												xiaoxihtml+='在'+ke+'回复了你的评论：<font style="color:blue">'+item["new_Content"]+'</font></span>'; 
											}else{
												xiaoxihtml+='在'+ke+'回复了你的评论：<font style="color:blue">...</font></span>';
											}
											xiaoxihtml+='<span class="me_center_top_xinxi_time">'+createDate+'</span>'
											+'</div>' 
											+'</div>'
											+'</a>'  
											$(".xiaoxi").empty();
											$(".xiaoxi").append(xiaoxihtml);
					});
			}else{
				xiaoxihtml+='<span style="margin-top: 20px;text-align: center;display: block;">暂无消息</span>';
				$(".xiaoxi").append(xiaoxihtml);
			}
			 if(datagonggao!=null && datagonggao!=''){
				 $.each(datagonggao, function(index,obj) {
				 	var item = datagonggao[index];
				 	var backMan_Src=item["backMan_Src"];
				 				var inforDate=dateFtt("MM月dd日 hh:mm",new Date(item["inforDate"]));
				 			gonggaohtml+='<a href="#" class="me_center_top_a_gonggao">'
				 					+'<div class="me_center_top">' 
				 					+'<div class="me_center_top_xinxi" style="width:90%">'
				 					+'<span class="me_center_top_xinxi_ming" style="margin-left:15px;">'+item["inforTitle"]+'</span>' 
				 					+'<span class="me_center_top_xinxi_xinming" style="margin-left: 15px;"><font style="color:blue;"><font style="color:blue;text-indent:2em;">'+item["inforContent"]+'</font></span>' 
				 					+'<span class="me_center_top_xinxi_time" style="float:right;margin-bottom:20px;margin-right: 20px;">'+item["operater"]+''+inforDate+'</span>'
				 					+'</div>' 
				 					+'</div>'
				 					+'</a>'  
				 					$(".gonggao").empty();
				 					$(".gonggao").append(gonggaohtml);
				 	});
			 }else{
				 gonggaohtml+='<span style="margin-top: 20px;text-align: center;display: block;">暂无公告</span>';
				 $(".gonggao").append(gonggaohtml);
			 }
			 
}
//跳转课程详情页面
function selectAboutCourse(obj){
	   if(obj!=null && obj!='' && obj!="underfind"){
			 window.location.href='vedio.html?courseID='+obj;
		 }else{
			 layer.confirm('该消息已删除', {
			 btn: ['确定','取消'] //按钮
			 }, function(){
			 	window.location.reload();
			 }, function(){
			 	window.location.reload();
			 });
		 }
	    
}


