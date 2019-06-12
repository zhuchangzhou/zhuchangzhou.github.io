$(function() {
	var w=window.innerWidth;//页面最大width
	var h=window.innerHeight; //页面最大height
	var hh=h*0.15555;//计算浏览器大小
	var m=h-hh;//浏览器可用高度
	var lineh=m*0.025;
	var linehh=lineh*0.4;
	//个人中心头像自适应
	$('.main_back').css({"width":w,"height":h});//给页面赋值
	var me_center_top_touxiang_h=$('.me_center_top_touxiang').css('height');
	$('.me_center_top_touxiang').css("width",me_center_top_touxiang_h);
	//全部课程鼠标按下显示阴影效果
	//自适应banner样式
    var lineHeight=$('.top_t').css('height');
	$('.top_t_left_a_span').css("line-height",lineHeight);
	$('.top_t_left_a_span_zou').css("line-height",lineHeight);
	$('.top_t_center_span').css("line-height",lineHeight);
	$('.top_t_right').css("line-height",lineHeight);
	$('.top_t_left_a').css("line-height",lineHeight);
	//个人中心自适应
	var meCenter=$('.me_center_center_main').css('height');
	$('.me_center_center_main_img').css("line-height",meCenter);
	$('.me_center_center_main_ming').css("line-height",meCenter);
	$('.me_center_footer_b').css("line-height",meCenter);
	$('.me_center_center_main_you').css("line-height",meCenter);
	var metop=$('.me_center_top').css('height');
	$('.me_top_left_ming').css("line-height",metop);
	//首页推荐课程样式自适应
	var tuijianheight=$('.center_a_span_left').css("height");
	$('.center_a_span_left').css("line-height",tuijianheight);
	$('.center_a_span_right_span').css("line-height",tuijianheight);
	//课程滑动nav+号自适应
	var jiahao_height=$('.top_banner').css("height");
	$('.top_banner_right_span').css("line-height",jiahao_height);
	//个人资料自适应
	$('.me_center_center_input_zhanghuming').css("line-height",meCenter);
	$('.me_center_center_input_name').css("line-height",meCenter);
	$('.me_center_center_input_gender').css("line-height",meCenter);
	$('.me_center_center_input_xueli').css("line-height",meCenter);
	$('.me_center_center_input_zhicheng').css("line-height",meCenter);
	$('.me_center_center_input_xuexiaoming').css("line-height",meCenter);
	$('.me_center_center_input_kechen').css("line-height",meCenter);
	$('.me_center_center_input_shouji').css("line-height",meCenter);
	$('.me_center_center_input_email').css("line-height",meCenter);
	$('.me_center_center_input_weixin').css("line-height",meCenter);
	$('.me_center_center_input_qq').css("line-height",meCenter);
	//个人资料头像自适应
	var px = (parseInt(metop)-parseInt('55px'));//计算减去头像后的height
	var px1=px/2+'px';//求上下各占距离
	$('.me_center_top_touxiang_main_div_img').css("margin-top",px1);
	//修改密码完成button自适应
	var xiugaimima=$('.me_bottom').css("height");
	$('.me_bottom_div').css("line-height",xiugaimima);
	var px2 = (parseInt(xiugaimima)/2);
	var px3=px2+'px';
	$('.me_bottom_div').css("border-radius-top-left",px3);
	$('.backsize').css("height",h);
	//video标签宽和高
	/* var myvObj = document.getElementById("spspsp");
    myvObj.addEventListener("loadedmetadata", function () {
       console.log(this.videoHeight+" "+this.videoWidth);
       var height = $(this).height();
       console.log(height);
       $("#spspsp").css('height',height);
    }); */
 });
