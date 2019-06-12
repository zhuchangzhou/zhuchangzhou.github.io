var ctx;
var wodebianhao;
var loginId;
var loginType;
var courseState;
var shanchuresule;


$(function(){
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
	  }
})
//var courseList=new Array();
//获取当前账户id
//cookie开始
$(function(){
	loginId=getCookie("loginId");//获取loginId
	loginType=getCookie("loginType");//获取loginType
	//显示我的收藏和在学课程wodebianhao1=我的收藏2=在学课程
	if(wodebianhao==1){
			wodebianhao=1;
			$.ajax({
				type:"POST",
				url:ctx+"online_LearningCourse/tel_user_course.action", //地址，就是json文件的请求路径
				data:{"courseState":1,"loginId":loginId},//courseState 1我的收藏 2在学课程
			//dataType:"json",
				async:false,
				success:function(result){
					////
					if(result!=null && result!=''){
							console.log(result);
							var data = result["dataList"]["0"];
						if(data!=null){
							var html = '';
								courseState=1;
								var ctx1 = ctx.substring(0,ctx.length-1);
								$.each(data, function(index, obj) {
									var item = data[index];
									var courseJacket= item["courseJacket"];
									html += '<div  class="my_course_one_a">' +
										'<input class="courseID" type="hidden" value="'+item["courseID"]+'"></input>'+
										'<div class="my_course_one">' +
										'<div class="my_course_one_top" >';//背景开始
										if(courseJacket!=null && courseJacket!=''){
											html+='<img class="course_one_top_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+courseJacket+'" alt="First slide">';
										}else{
											html+='<img class="course_one_top_img"  src="img/2.jpg" alt="First slide">';
										}
										html+='<img class="my_course_one_top_top_img_weixuanzhong"  src="img/xuanze.png" alt="First slide">' +
										'<img class="my_course_one_top_top_img_xuanzhong"  src="img/xuanze_xuanzhong.png" alt="First slide">' +
										'</div>' +//背景结束
										'<div class="my_course_one_center">' +
										'<span class="my_course_one_center_span">' + item["courseName"] + '</span>' +
										'</div>' +
										'<div class="my_course_one_bottom">' +
										'<span class="my_course_one_bottom_left_span">免费</span>' +
										'<span class="my_course_one_bottom_right_span">' + item["viewNum"] + '人参加</span>' +
										'</div>' +
										'</div>' +
										'</div>'
								});
								$(".kechen_course").empty();
								$(".kechen_course").append(html);
						}
					}else{
              var html = '';
              html+='<span style="margin-top: 20px;text-align: center;display: block;">暂无收藏</span>';
              $(".kechen_course").append(html);
					}
				},
			 error: function(result) {
				//
					console.log(result);
					layer.confirm('服务器请求超时，请稍后重试', {
					btn: ['确定','取消'] //按钮
					}, function(){
						window.location.reload();
					}, function(){
					  window.location.reload();
					});
				}
		});
	}else if(wodebianhao==2){
		wodebianhao=2;
		$.ajax({
		type: "POST",
		url: ctx+"online_LearningCourse/tel_user_course.action", //地址，就是json文件的请求路径
		data:{"courseState":2,"loginId":loginId},
		//dataType: "json",
		async: false,
		success: function(result) {
			if(result!=null && result!=''){
				////
				console.log(result);
				var data = result["dataList"]["0"];
				var ctx1 = ctx.substring(0,ctx.length-1);
				if(data!=null){
						var html = '';
						courseState=2; 
						$.each(data, function(index, obj) {
							var item = data[index];
							var courseJacket=item["courseJacket"];
							html += '<div  class="my_course_one_a">' +
								'<input class="courseID" type="hidden" value="'+item["courseID"]+'"></input>'+
								'<div class="my_course_one">' +
								'<div class="my_course_one_top" >';//背景开始
								if(courseJacket!=null && courseJacket!=''){
									html+='<img class="course_one_top_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+courseJacket+'" alt="First slide">';
								}else{
									html+='<img class="course_one_top_img"  src="img/2.jpg" alt="First slide">';
								}
								html+='<img class="my_course_one_top_top_img_weixuanzhong"  src="img/xuanze.png" alt="First slide">' +
								'<img class="my_course_one_top_top_img_xuanzhong"  src="img/xuanze_xuanzhong.png" alt="First slide">' +
								'</div>' +//背景结束
								'<div class="my_course_one_center">' +
								'<span class="my_course_one_center_span">' + item["courseName"] + '</span>' +
								'</div>' +
								'<div class="my_course_one_bottom">' +
								'<span class="my_course_one_bottom_left_span">免费</span>' +
								'<span class="my_course_one_bottom_right_span">' + item["viewNum"] + '人参加</span>' +
								'</div>' +
								'</div>' +
								'</div>'
						});
						$(".kechen_course").empty();
						$(".kechen_course").append(html);					
				}else{
					var html = '';
					html+='<span style="margin-top: 20px;text-align: center;display: block;">暂无课程</span>';
					$(".kechen_course").append(html);
				};
			}else{
				var html = '';
				html+='<span style="margin-top: 20px;text-align: center;display: block;">暂无课程</span>';
				$(".kechen_course").append(html);
		}
		}
	});
	}
	//右上角返回按钮
	$(".top_t_left_a_span").click(function(){
		window.location.href="../yemian/wode.html"
	});
	//跳转课程详情页
	$('.my_course_one_a').click(function(){
			var courseId = $(this).find(".courseID").val();
			//var obj=courseId.text();
			////
			window.location.href='../yemian/vedio.html?courseID='+courseId;
	})
	
	//删除操作/取消收藏
	//点击选择时触发 
	$('.xuanze').click(function(){
		$('.quxiao').css("display","block");
		$('.shanchu').css("display","None");
		$('.xuanze').css("display","None");
		$('.my_course_one_top_top_img_weixuanzhong').css('display','block'); 
		$(".my_course_one_a").unbind();
	});
	//点击取消时触发
	$('.quxiao').click(function(){
		$('.quxiao').css("display","None");
		$('.shanchu').css("display","None");
		$('.xuanze').css("display","block");
		$('.my_course_one_top_top_img_weixuanzhong').css('display','None'); 
		window.location.reload();
	});
	//点击删除时触发
	$('.shanchu').click(function(){
		//删除确定
		//删除status=1在学
		    //status=2收藏
		  layer.confirm('确定删除吗？', {
		  btn: ['确定','取消'] //按钮
		  }, function(){
				//删除开始
				$('.shanchu').css("display","None");
				$('.xuanze').css("display","block");
				$('.my_course_one_top_top_img_weixuanzhong').css('display','None'); 
				//获取xuanzhongclass的所有courseID放到数组里
				var lis = document.getElementsByClassName('xuanzhong');//数组
				var lisLen=lis.length;
				
				for(var i = 0;i < lisLen;i++){//遍历lis数组
							var courseID=lis[i].value;//获取input输入框值
							//我的收藏
							if(wodebianhao==1){
								$.ajax({
									type: "POST",
									url: ctx+"online_LearningCourse/to_Collect_Course.action", //地址，就是json文件的请求路径
									data:{"state":1,"loginId":loginId,"courseId":courseID,"loginType":loginType,"status":2},
									async: false,
									success: function(result) {
										//
										if(result="del_success"){
											shanchuresule=1;
										}else{
											shanchuresule=2;
										}
									},
									error: function(result) {
										console.log(result);
										shanchuresule=2;
									},
								});
							}
							//在学课程
							if(wodebianhao==2){
							$.ajax({
								type: "POST",
								url: ctx+"online_LearningCourse/to_Collect_Course.action", //地址，就是json文件的请求路径
								data:{"state":1,"loginId":loginId,"courseId":courseID,"loginType":loginType,"status":1},
								async: false,
								success: function(result) {
									//
									if(result="del_success"){
										shanchuresule=1;
									}else{
										shanchuresule=2;
									}
								},
								error: function(result) {
									console.log(result);
									shanchuresule=2;
								},
							});
							}
				}
				//删除结束
				window.location.reload();
		  }, function(){
				window.location.reload();
		  });
			if(shanchuresule==1){
				window.location.reload();
				layer.msg('删除成功');
			}else if(shanchuresule==2){
				layer.msg('服务器响应超时，请稍后重试');
				window.location.reload();
			}
	});
	
	//点击未选中图片时触发
	$('.my_course_one_top_top_img_weixuanzhong').click(function(){
			var xuanzhong=$(this).parent().find('.my_course_one_top_top_img_xuanzhong');
			$(this).hide();
			xuanzhong.show();
			$('.quxiao').css("display","None");
			$('.shanchu').css("display","block");
			$('.xuanze').css("display","None");
			//将courseID添加到array中
			$(this).parent().parent().parent().find('.courseID').addClass("courseID xuanzhong");//添加选中class
			$(this).parent().parent().parent().find('.courseID').removeClass("weixuanzhong");//移除未选中class
	})
	//点击选中图片时触发
	$('.my_course_one_top_top_img_xuanzhong').click(function(){
			var weixuanzhong=$(this).parent().find('.my_course_one_top_top_img_weixuanzhong');
			$(this).hide();
			weixuanzhong.show();
			$('.quxiao').css("display","None");
			$('.shanchu').css("display","block");
			$('.xuanze').css("display","None");
			//将courseID从array中删除
			var courseid=$(this).parent().parent().parent().find('.courseID').addClass("courseID weixuanzhong");//添加未选中class
			$(this).parent().parent().parent().find('.courseID').removeClass("xuanzhong");//移除选中class
	})
});
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