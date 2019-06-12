var yemiantype;
//通用底部样式开始
$(function(){
var html='';
html+='<div class="bottom_left_left">'
     +'<a href="index.html"><span class="bottom_span" ><img class="bottom_img1" src="img/home.png"></span></a>'
	 +'<a href="index.html"><span class="bottom_text" >首页</span></a>'
	 +'</div>'
	 +'<div class="bottom_left_left">'
	 +'<a href="kechen.html"><span class="bottom_span"><img style="height: 20px;" class="bottom_img2" src="img/shiping.png"></</span></a>'
	 +'<a href="kechen.html"><span class="bottom_text">课程</span></a>'
	 +'</div>'
	 +'<div class="bottom_left_left">'
	 +'<a href="wode.html"><span class="bottom_span"><img class="bottom_img3" src="img/wode.png"></span></a>'
	 +'<a href="wode.html"><span class="bottom_text">我的</span></a>'
	 +'</div>'
$(".bottom").append(html);
})
//通用底部样式结束
//底部切换样式开始
$(function() {
		 if(yemiantype==1){
			$('.bottom_img1').attr("src","img/videoSrc.png");
			$('.bottom_img2').attr("src","img/shiping.png");
			$('.bottom_img3').attr("src","img/wode.png");
		  }
		  if(yemiantype==2){
			$('.bottom_img1').attr("src","img/home.png"); 
			$('.bottom_img2').attr("src","img/videoSrc.png");
			$('.bottom_img3').attr("src","img/wode.png");  
		  }
		  if(yemiantype==3){
			$('.bottom_img1').attr("src","img/home.png"); 
			$('.bottom_img2').attr("src","img/shiping.png");
			$('.bottom_img3').attr("src","img/videoSrc.png"); 
		  }
});