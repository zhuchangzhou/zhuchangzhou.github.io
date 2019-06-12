
var yemiantype=2;
//获取页面参数开始
var ctx;
function GetRequest() {

   var url = location.search; //获取url中"?"符后的字串

   var theRequest = new Object();

   if (url.indexOf("?") != -1) {

      var str = url.substr(1);

      strs = str.split("&");

      for(var i = 0; i < strs.length; i ++) {

         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);

      }

   }

   return theRequest;

}
//获取页面参数后
$(function() {
	  GetRequest();
	  var Request = new Object();

    Request = GetRequest();

    var courseTypeId;

    courseTypeId = Request['courseTypeId'];
		if(courseTypeId==null){
			$.ajax({
				type: "POST",
				url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
				dataType: "json",
				async: false,
				success: function(result) {
					if(result!=null && result!=''){
						nav_show(result);
						course_show(result);
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
		}else{
			selectByCourseTypeId(courseTypeId);
		}
});
 //页面加载   获取全部信息
$(function() {
	$.ajax({
		type: "POST",
		url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
		dataType: "json",
		async: false,
		success: function(result) {
			if(result!=null && result!=''){
				nav_show(result);
				course_show(result);
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
	//右上角搜索按钮
	$('.top_t_right_search').click(function(){
		loginId=getCookie("loginId");//获取loginId
		loginType=getCookie("loginType");//获取loginType
		if(loginId=='' || loginId==null){
         layer.confirm('您还没有登陆，请登陆？', {
         btn: ['确定','取消'] //按钮
         }, function(){
         	window.location.href='../yemian/loginsj.html';
         }, function(){
         });
	}else{
			window.location.href='../yemian/sousuo.html';
	}
	});
});

function selectCourseTypeAll(){
	  window.location.reload();
}

//可以滑动的nav样式开始
function nav_show(result) {
	console.log(result);
	var data = result["dataList"][1];
	var html = '';
	html += '<div class="top_banner_left">' +
		'<div class="nav top_banner_left_nav" id="nav">' +
		'<ul class="nav_ul">';
		html += '<li><a onclick="selectCourseTypeAll()" class="top_banner_left_a" href="#">全部'+
				'</a></li>';
	$.each(data, function(index, obj) {
		var item = data[index];
		html += '<li><a onclick="selectCourseType('+item["courseTypeId"]+')" class="top_banner_left_a" href="#">' + item["courseTypeName"] +
			'</a></li>';
	});

	html += '</ul>' +
		'</div>' +
		'</div>' +
		'<div class="top_banner_right">' +
		'<a href="fenlei.html"  class="top_banner_right_a"><span class="top_banner_right_span">+</span></a>' +
		'</div>';
		$(".top_banner").empty();
	var obj = $('.top_banner').append(html);
}
//可以滑动的nav样式结束
//首次展示底部分类开始
function course_show(result) {
	console.log(result);
	var data = result["dataList"][0];
	var html = '';
	$.each(data, function(index, obj) {
		var item = data[index];
		html += '<div  class="course_one_a" onclick="selectAboutCourse('+item["courseID"]+')">' +
			'<div class="course_one">' +
			'<div class="course_one_top">';
			//if(courseJacket!=null && courseJacket!=''){
				//html+='<img class="course_one_top_img"  src="'+ctx+''+courseJacket+'" alt="First slide">';
			//}else{
			//	html+='<img class="course_one_top_img"  src="img/u=1284873713,649755516&fm=26&gp=0.jpg" alt="First slide">';
			//}

			var ctx1 = ctx.substring(0,ctx.length-1);

			var courseJacket= item["courseJacket"];
			if(courseJacket!=null && courseJacket!=''){
				html+='<img class="course_one_top_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+courseJacket+'" alt="First slide">';
			}else{
				html+='<img class="course_one_top_img"  src="img/2.jpg" alt="First slide">';
			}

			html+='</div>'+
			'<div class="course_one_center">' +
			'<span class="course_one_center_span">' + item["courseName"] + '</span>' +
			'</div>' +
			'<div class="course_one_bottom">' +
			'<span class="course_one_bottom_left_span">免费</span>' +
			'<span class="course_one_bottom_right_span">' + item["viewNum"] + '人参加</span>' +
			'</div>' +
			'</div>' +
			'</div>'
	});
	$(".kechen_course").empty();
	$(".kechen_course").append(html);
}
//首次展示底部分类结束
//点击查询分类开始//页面传输courseTypeId
function selectCourseType(obj) {
	  loginId=getCookie("loginId");//获取loginId
	  loginType=getCookie("loginType");//获取loginType
	  if(loginId=='' || loginId==null){
      layer.confirm('您还没有登陆，请登陆？', {
      btn: ['确定','取消'] //按钮
      }, function(){
      	window.location.href='../yemian/loginsj.html';
      }, function(){
				window.location.href='../yemian/kechen.html';
      });
	}else{
	 var courseTypeIds = obj;
	 var course_number=0;
	$.ajax({
		
		type: "POST",
		url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
		//data:{"courseName":courseName},
		dataType: "json",
		async: true,
		success: function(result) {
			if(result!=null && result!=''){
				var data = result["dataList"][0];
				var html = '';
				var ii=0;
				var ctx1 = ctx.substring(0,ctx.length-1);
				$.each(data, function(index, obj) {
					var fenlei = data[index];
					var courseJacket=fenlei["courseJacket"];
					var courseTypeId=fenlei["courseTypeId"];
					if (courseTypeId == courseTypeIds) {
						course_number++;
						html += '<div  class="course_one_a" onclick="selectAboutCourse('+fenlei["courseID"]+')">' +
							'<div class="course_one">'
								+'<div class="course_one_top">';
							if(courseJacket!=null && courseJacket!=''){
								html+='<img class="course_one_top_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+courseJacket+'" alt="First slide">';
							}else{
								html+='<img class="course_one_top_img"  src="img/2.jpg" alt="First slide">';
							}
							html+='</div>'+
							'<div class="course_one_center">' +
							'<span class="course_one_center_span">'+fenlei["courseName"]+'</span>' +
							'</div>' +
							'<div class="course_one_bottom">' +
							'<span class="course_one_bottom_left_span">免费</span>' +
							'<span class="course_one_bottom_right_span">'+fenlei["viewNum"]+'人参加</span>' +
							'</div>' +
							'</div>' +
							'</div>'
						}else{
						}
				});
				$(".kechen_course").empty();
				if(course_number==0){
					html='<span style="margin-top: 20px;text-align: center;display: block;">暂无课程</span>';
				}
				$(".kechen_course").append(html);
				course_number=0;
			}else{
				layer.confirm('服务器请求超时，请稍后重试', {
				btn: ['确定','取消'] //按钮
				}, function(){
					window.location.href='../yemian/kechen.html';
				}, function(){
				  window.location.href='../yemian/kechen.html';
				});
			}
		},
		error: function(result) {
			layer.confirm('服务器请求超时，请稍后重试', {
			btn: ['确定','取消'] //按钮
			}, function(){
				window.location.href='../yemian/kechen.html';
			}, function(){
			  window.location.href='../yemian/kechen.html';
			});
		}
	});
	}
}

function selectByCourseTypeId(obj) {
	var courseTypeIds = obj
	var course_number=0;
	$.ajax({
		
		type: "POST",
		url: ctx+"online_LearningCourse/tel_index_data.action", //地址，就是json文件的请求路径
		//data:{"courseName":courseName},
		dataType: "json",
		async: true,
		success: function(result) {
			if(result!=null && result!=''){
				var data = result["dataList"][0];
				var html = '';
				var ii=0;
				var ctx1 = ctx.substring(0,ctx.length-1);
				$.each(data, function(index, obj) {
					var fenlei = data[index];
					var courseJacket=fenlei["courseJacket"];
					var courseTypeId=fenlei["courseTypeId"];
					if (courseTypeId == courseTypeIds) {
						course_number++;
						html += '<div  class="course_one_a" onclick="selectAboutCourse('+fenlei["courseID"]+')">' +
							'<div class="course_one">'
								+'<div class="course_one_top">';
							if(courseJacket!=null && courseJacket!=''){
								html+='<img class="course_one_top_img" onerror="this.onerror=null;this.src=\'img/2.jpg\'"  src="'+ctx1+''+courseJacket+'" alt="First slide">';
							}else{
								html+='<img class="course_one_top_img"  src="img/2.jpg" alt="First slide">';
							}
							html+='</div>'+
							'<div class="course_one_center">' +
							'<span class="course_one_center_span">'+fenlei["courseName"]+'</span>' +
							'</div>' +
							'<div class="course_one_bottom">' +
							'<span class="course_one_bottom_left_span">免费</span>' +
							'<span class="course_one_bottom_right_span">'+fenlei["viewNum"]+'人参加</span>' +
							'</div>' +
							'</div>' +
							'</div>'
						}else{
						}
				});
				$(".kechen_course").empty();
				if(course_number==0){
					html='<span style="margin-top: 20px;text-align: center;display: block;">暂无课程</span>';
				}
				$(".kechen_course").append(html);
				course_number=0;
			}else{
				layer.confirm('服务器请求超时，请稍后重试', {
				btn: ['确定','取消'] //按钮
				}, function(){
					 window.location.href='../yemian/kechen.html';
				}, function(){
				   window.location.href='../yemian/kechen.html';
				});
			}
		},
		error: function(result) {
			layer.confirm('服务器请求超时，请稍后重试', {
			btn: ['确定','取消'] //按钮
			}, function(){
				 window.location.href='../yemian/kechen.html';
			}, function(){
			   window.location.href='../yemian/kechen.html';
			});
		}
	});
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
				window.location.href='../yemian/kechen.html';
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
  var list = cookies.split("; ");          // 解析出名/值对列表
      
  for(var i = 0; i < list.length; i++) {
    var arr = list[i].split("=");          // 解析出名和值
    if(arr[0] == name)
      return decodeURIComponent(arr[1]);   // 对cookie值解码
  } 
  return "";
}
//查询全部课程



$(function() {
	window.Swipe = function(b, a) {
		if (!b) {
			return null
		}
		this.options = a || {};
		this.index = this.options.startSlide || 0; //开始的导航页的第几屏
		this.speed = this.options.speed || 300; //速度
		this.lwidth = this.options.width || 80; //导航li宽度
		this.delay = this.options.auto || 0; //自动滚动菜单速度0为不自动滚动
		this.container = b; //在那个容器内
		this.element = this.container.children[0]; //

		this.setup();

		if (this.delay != 0) {
			this.begin();
		}
		if (this.element.addEventListener) {
			this.element.addEventListener("touchstart", this, false);
			this.element.addEventListener("touchmove", this, false);
			this.element.addEventListener("touchend", this, false);
			this.element.addEventListener("touchcancel", this, false);
			this.element.addEventListener("webkitTransitionEnd", this, false);
			this.element.addEventListener("msTransitionEnd", this, false);
			this.element.addEventListener("oTransitionEnd", this, false);
			this.element.addEventListener("transitionend", this, true); //监听过度动画是否结束
			window.addEventListener("resize", this, false)
		}
	};
	Swipe.prototype = {
		//设置其基本样式
		setup: function() {
			this.slides = this.element.children;
			this.width = Math.ceil(("getBoundingClientRect" in this.container) ? this.container.getBoundingClientRect().width :
				this.container.offsetWidth);
			if (!this.width || this.slides.length < 1) { //没有子节点，获取不到屏幕宽度均返回
				return null
			}
			this.element.style.width = Math.ceil(this.slides.length * this.lwidth) + "px";
			var a = this.slides.length;
			while (a--) {
				var b = this.slides[a];
				b.style.width = this.lwidth + "px";
			}
			this.slide(this.index, 0);
		},
		slide: function(a, c) {
			var b = this.element.style;
			if (c == undefined) {
				c = this.speed
			}
			//过度效果需要花费时间
			b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration =
				c + "ms";
			this.index = a
			//console.log(a * this.width,Math.ceil((this.slides.length*this.lwidth)/this.width));
			if (a * this.width > (Math.ceil((this.slides.length * this.lwidth) / this.width) - 1) * this.width) {
				         b.MozTransform = b.webkitTransform = "translate3d(" + -((Math.ceil((this.slides.length*this.lwidth)/this.width)-1) * this.width) + "px,0,0)";
				       b.msTransform = b.OTransform = "translateX(" + -((Math.ceil((this.slides.length*this.lwidth)/this.width)-1) * this.width) + "px)";
				return false;
			} else {
				b.MozTransform = b.webkitTransform = "translate3d(" + -(a * this.width) + "px,0,0)";
				b.msTransform = b.OTransform = "translateX(" + -(a * this.width) + "px)";
			}

		},
		getPos: function() {
			return this.index
		},
		//前一个，
		prev: function(a) {
			this.delay = a || 0;
			clearTimeout(this.interval);
			// console.log(this.index);
			if (this.index) {
				this.slide(this.index - 1, this.speed)
				//console.log( this.index);
			} else {
				this.slide(this.length - 1, this.speed)
			}
		},
		//后一个
		next: function(a) {
			this.delay = a || 0;
			clearTimeout(this.interval);
			if (this.index < this.length - 1) {
				this.slide(this.index + 1, this.speed)
			} else {
				this.slide(0, this.speed)
			}
		},
		begin: function() {
			var a = this;
			console.log(a);
			this.interval = (this.delay) ? setTimeout(function() {
					a.next(a.delay)
				},
				this.delay) : 0
		},
		stop: function() {
			this.delay = 0;
			clearTimeout(this.interval)
		},
		resume: function() {
			this.delay = this.options.auto || 0;
			this.begin()
		},
		handleEvent: function(a) {
			switch (a.type) {
				case "touchstart":
					this.onTouchStart(a);
					break;
				case "touchmove":
					this.onTouchMove(a);
					break;
				case "touchcancel":
				case "touchend":
					this.onTouchEnd(a);
					break;
				case "webkitTransitionEnd":
				case "msTransitionEnd":
				case "oTransitionEnd":
				case "transitionend":
					this.transitionEnd(a);
					break;
				case "resize":
					this.setup();
					break
			}
		},
		transitionEnd: function(a) {
			if (this.delay) {
				this.begin()
			}

		},
		onTouchStart: function(a) {
			this.start = {
				pageX: a.touches[0].pageX,
				pageY: a.touches[0].pageY,
				time: Number(new Date())

			};
			// console.log(this.start)
			this.isScrolling = undefined;
			this.deltaX = 0;
			this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0;
			a.stopPropagation()
		},
		onTouchMove: function(a) {
			if (a.touches.length > 1 || a.scale && a.scale !== 1) {
				return
			}
			this.deltaX = a.touches[0].pageX - this.start.pageX;
			if (typeof this.isScrolling == "undefined") {
				//判断是横向还是树向滑动
				this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(a.touches[0].pageY - this.start.pageY))
			}
			if (!this.isScrolling) {
				a.preventDefault();
				clearTimeout(this.interval);
				this.deltaX = this.deltaX / ((!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX <
					0) ? (Math.abs(this.deltaX) / this.width + 1) : 1);
				this.element.style.MozTransform = this.element.style.webkitTransform = "translate3d(" + (this.deltaX - this.index *
					this.width) + "px,0,0)";
				a.stopPropagation()
			}
		},
		onTouchEnd: function(c) {
			var b = Number(new Date()) - this.start.time < 250 && Math.abs(this.deltaX) > 20 || Math.abs(this.deltaX) > this
				.width / 2,
				a = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
			if (!this.isScrolling) {
				this.slide(this.index + (b && !a ? (this.deltaX < 0 ? 1 : -1) : 0), this.speed)
			}
			c.stopPropagation()
		}
	};
	//开始调用插件
	var slider = new Swipe(document.getElementById('nav'), {
		speed: 500,
		auto: 0,
		width: 100,
		col: 4,
	});
});
//可以滑动的navjs结束
