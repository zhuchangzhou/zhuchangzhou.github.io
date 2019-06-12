var loginId;//登陆id
var loginType;//登陆类型
var yemiantype=1;
var ctx;
//页面加载   获取全部信息
			$(function() {
				$.ajax({
					type:"POST",
					url:ctx+"online_LearningCourse/tel_index_data.action",
					dataType:"JSON",
					success: function(result) {
						if(result!=null && result!=''){
						course_show(result);
						}else{
							layer.confirm('服务器请求超时，请稍后重试', {
							btn: ['确定','取消'] //按钮
							}, function(){
								  window.history.back();
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
			});
//通用课程样式开始
			function course_show(result) {
				console.log(result);
				var data=result["dataList"][0];
				var html='';
				var ii=0;
				var ctx1 = ctx.substring(0,ctx.length-1);
				$.each(data, function(index,obj) {
					//index++;
					if(ii>7){
						return false;
					}
					ii++;
					var item = data[index];
					var courseJacket= item["courseJacket"];
					html+='<div class="course_one_a" onclick="selectAboutCourse('+item["courseId"]+')">'
					   +'<div class="course_one">'
					   +'<div class="course_one_top">';
					if(courseJacket!=null && courseJacket!=''){
						html+='<img class="course_one_top_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+courseJacket+'" alt="First slide">';
					}else{
						html+='<img class="course_one_top_img"  src="img/2.jpg" alt="First slide">';
					}
					html+='</div>'
						 +'<div class="course_one_center">'
						 +'<span class="course_one_center_span">'+item["courseName"]+'</span>'
						 +'</div>'
						 +'<div class="course_one_bottom">'
						 +'<span class="course_one_bottom_left_span">免费</span>'
						 +'<span class="course_one_bottom_right_span">'+item["viewNum"]+'人参加</span>'
						 +'</div>'
						 +'</div>'
						 +'</div>'
				});
				$(".course").append(html);
			}

//跳转课程详情页面
function selectAboutCourse(obj){
	loginId=getCookie("loginId");//获取loginId
	loginType=getCookie("loginType");//获取loginType
	if(loginId=='' || loginId==null){
		   layer.confirm('您还没有登陆，请登陆？', {
        btn: ['确定','取消'] //按钮
        }, function(){
					window.location.href='../yemian/loginsj.html';
        }, function(){
					window.location.href='../yemian/index.html';
       });
	}else{
	    window.location.href='../yemian/vedio.html?courseID='+obj;
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




