//通用顶部样式开始
$(function(){
var html='';
html+='<div class="top_t_left">'
    +'<a class="top_t_left_a" href="javascript:;">'
	+'<span style=""><img style="background-color:rgb(246,248,247)" width="25px" src="img/xiaoxi.png"></span>'
	+'</a>'
	+'</div>'
	+'<div class="top_t_center">'
	+'<span class="top_t_center_span">首页</span>'
	+'</div>'
	+'<div class="top_t_right">'
	+'<a href="javascript:;" class="top_t_right_search">'
	+'<span class=""><img src="img/sousuo.png" style="width: 25px;" ></span>'
	+'</a>'
	+'</div>'
$(".top_t").append(html);

	//跳转搜索
$('.top_t_right_search').click(function(){
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
	    window.location.href='sousuo.html';
	}
  
});

//喇叭跳转
$('.top_t_left_a').click(function(){
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
	    window.location.href='xiaoxigonggao.html';
	}  
});


 });


//通用顶部样式结束
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