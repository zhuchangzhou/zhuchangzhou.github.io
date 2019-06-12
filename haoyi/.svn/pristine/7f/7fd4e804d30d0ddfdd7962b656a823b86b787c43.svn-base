var ctx;
 //页面加载   获取全部信息
			$(function() {
				$.ajax({
					type:"POST",
					url:ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
					dataType:"json",
					async:false,
					success: function(result) {
						if(result!=null && result!=''){
							fenlei_show(result);
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
						  window.location.reload();
						});
					}
				});
				
				//分类底部查看更多js开始
				$(".genduoxia").click(function() {
					var shang = $(this).parent().find(".genduoshang");
					$(this).parent().parent().find(".classify_center_one_bottom").css("height", "auto");
					$(this).hide();
					shang.show();
				});
				$(".genduoshang").click(function() {
					var xia = $(this).parent().find(".genduoxia");
					$(this).parent().parent().find(".classify_center_one_bottom").css("height", "44.5px");
					$(this).hide();
					xia.show();
				});
				//分类底部查看更多js结束
				//顶部返回按钮
				$('.top_t_left').click(function(){
					 window.history.back();	
				});
			});
//分类样式开始
function fenlei_show(result) {
	console.log(result);
	var data=result["dataList"][1];
    var html='';
	$.each(data, function(index,obj) {
		 var n=0;
		 var item = data[index];
	html+='<div class="classify_center_one">'
	    +'<div class="classify_center_one_top">'
		+'<span class="classify_center_one_img">'
		+'<img src="img/yanjuesheng.png">'
		+'</span>'
		+'<span class="classify_center_one_text">'+item["courseTypeName"]+'</span>'
		+'</div>'
		+'<div class="classify_center_one_bottom" id="classify_center_one_bottom">';
		var itemList=item["list"];
		if(itemList!=null){
	$.each(itemList,function(index,obj){
		n++;
		var initemList = itemList[index];
	html+='<a href="#" class="classify_center_one_bottom_a">'
		+'<div class="classify_center_one_bottom_main">'
		+'<span class="classify_center_one_bottom_dian">'
		+'<img class="classify_center_one_bottom_main_img" src="img/dian.png"alt="">'
		+'</span>'
		+'<span class="classify_center_one_bottom_text" onclick="selectAboutCourse('+initemList["courseTypeId"]+')">'+initemList["courseTypeName"]+'</span>'
		+'</div>'
		+'</a>';
	});
	}else{
		html+='<span style="margin-top: 10px;text-align: center;display: block;">暂无分类</span>';
	}
	html+='</div>';
	if(n>6){
	html+='<div class="classify_center_one_bottom_b">'
		+'<span style="display: block;" class="classify_center_one_bottom_b_span genduoxia"><img id="xia_img" src="img/xia.png"></span>'
		+'<span style="display: none;" class="classify_center_one_bottom_b_span genduoshang"><img id="xia_img" src="img/shang.png"></span>'
		+'</div>';
	};
	html+='</div>';
	});
	$('.classify_center').append(html);	
}
//分类样式结束
//根据courseTypeId查询相关课程开始
function selectAboutCourse(obj){
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
	    window.location.href='../yemian/kechen.html?courseTypeId='+obj;
	}
}
//根据courseTypeId查询相关课程结束
//获取当前账户id
//cookie开始
//获取cookie
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

