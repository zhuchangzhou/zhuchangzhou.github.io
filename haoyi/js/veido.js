var loginId; //登陆id
var loginType; //登陆类型
var courseNamejs; //课程名称
var idjs; //回复的人的id
var askID; //提问者ID
var kechengnum; //课程编号
var courseID;
var shipinnum; //视频编号
var courseNum;
var docId;
var ctx;
var path;
var i;
var j;
var k;
var c;
var chapId;
var selId;
var videoPoint;
//得到lgoniid和logintype;
var start;
var end;
var duration = 0;

$(function() {

	loginId = localStorage.getItem("loginId");
	loginType = localStorage.getItem("loginType");
	GetRequest();
	var Request = new Object();

	Request = GetRequest();

	courseID = Request['courseID'];
	//
	/*ctx + '/online_LearningCourse/tel_course_data.action?courseId=' + courseID*/
	$.get(ctx + 'online_LearningCourse/tel_course_data.action?courseId=' + courseID, function(obj) {
		//

		console.log(obj);
		courseNamejs = obj.courseName;
		authorIdjs = obj.authorId;
		kechengnum = obj.courseNum;
		courseNum = obj.courseNum
		//var obj = JSON.parse(r);
		//简介部分数据绑定
		document.getElementById("name").innerHTML = obj.courseName;
		document.getElementById('tName').innerHTML = obj.teacherName;
		if (obj.ue_personalDesc != null && obj.ue_personalDesc != '') {
			document.getElementById('jobTitle').innerHTML = obj.ue_personalDesc;
		} else {
			document.getElementById('jobTitle').innerHTML = "教师";
		}

		if (obj.teacherJacket != null && obj.teacherJacket != '') {
			document.getElementById('teacherJacket').src = obj.teacherJacket;
		} else {
			document.getElementById('teacherJacket').src = 'img/a1.jpg';
		}

		document.getElementById('contentSummary').innerHTML = obj.contentSummary;
		document.getElementById('learning_num').innerHTML = obj.learning_num + "人参加";
		//document.getElementById('jobTitle').innerHTML = obj.ue_personalDesc;

		//目录部分数据绑定
		var str =
			'<ul class="fu">' +
			'<li class="zi"><span><img src="img/chapter.png"/ style="width:16px;height:16px"></span><strong>序言</strong>' +
			'</li>' +
			'</ul>'
		if (obj.chapters != null) {
			for (i = 0; i < obj.chapters.length; i++) {
				//console.log(r)
				str += '<ul>' +
					'<li class="dropdown" data-toggle="collapse" data-target="#demo' + i + '">' +
					'<span><img src="img/chapter.png"/ style="width:16px;height:16px"></span><b zhangId(' + obj.chapters[i].chapterId +
					'); data-toggle="collapse" data-target="#demo' + i + '">' +
					obj.chapters[i].chapterName + '</b>' +
					'</li>' +
					'</ul>' +
					'<ul id="demo' + i + '" class="collapse  fuu" style="background-color: #F9F9F9;">'

				if (obj.chapters[i].son_Chapters != null) {
					if (obj.chapters[i].son_Chapters.length >= 0) {
						for (j = 0; j < obj.chapters[i].son_Chapters.length; j++) {
							str += '<li data-toggle="collapse" data-target="#demo' + i + 'dem' + j +
								'"><span><img src="img/topic.png"/ style="width:16px;height:16px"></span>' +
								'<text href="#" data-toggle="collapse" jieId(' + obj.chapters[i].son_Chapters[j].chapterId +
								'); data-target="#demo' + i + 'dem' + j + '">' +
								obj.chapters[i].son_Chapters[j].chapterName + '：' + obj.chapters[i].son_Chapters[j].courseName +
								'</text>' +
								'</li>'

							if (obj.chapters[i].son_Chapters[j].docList != null) {
								str += '<div id="demo' + i + 'dem' + j + '" class="collapse  zi">'
								for (k = 0; k < obj.chapters[i].son_Chapters[j].docList.length; k++) {
									Path = obj.chapters[i].son_Chapters[j].docList[k].docPath;
									console.log(Path);
									//+','+shipinnum+','+chechennum

									str += '<li class="video_li" id="video_li" onclick="jieId(' + obj.chapters[i].son_Chapters[j].chapterId +
										');zhangId(' + obj.chapters[i].chapterId + ');spnum(\' ' + obj.chapters[i].son_Chapters[j].docList[k].docNum +
										' \' );docid(' + obj.chapters[i].son_Chapters[j].docList[k].docId + ');change_video_src(this)">' +
										'<span><img src="img/vedio_logo.png"/ style="width:16px;height:16px"></span><text class="video_span">' +
										obj.chapters[i].son_Chapters[j].docList[k].docName +
										'</text>' +
										'<input type="hidden" class="video_input" value="' + Path + '">' +
										'</li>'

								}
								str += '</div>'
							}

						}
					}
				}
				str += '</ul>'
			}

		} else {
			str = '<ul class="fu">' +
				'<li class="zi"><span>○</span><strong>对不起，此课程暂无内容！！！</strong>' +
				'</li>' +
				'</ul>' +
				'</div>';
		}
		$('.zhangjie').html(str)
		//讨论部分数据绑定
		var stt = '';
		if (obj.fceList != null) {
			var ctx1 = ctx.substring(0, ctx.length - 1);

			for (c = 0; c < obj.fceList.length; c++) {
				stt += '<div class="taolunzuo">';
				if (obj.fceList[c].ask_src != null && obj.fceList[c].ask_src != '') {
					stt += '<img class="top" onerror="this.onerror=null;this.src=\'img/a1.jpg\'"  src="' + ctxImg + '' + obj.fceList[
						c].ask_src + '" alt="First slide"/>';
				} else {
					stt += '<img class="top" src="img/a1.jpg" alt="First slide"/>';
				}
				stt += '</div>' +
					'<div class="taolunyou">' +
					'<div>' +
					'<div class="name">' + obj.fceList[c].ask_name + '</div>' +
					'<div class="star">' +
					'<div class="target-demo">'
				for (u = 0; u < 3; u++) {
					stt += '<img src="img/star-on.png"/>'
				}
				stt += '</div>' +
					'</div>' +
					'<div class="shijian">' + getDateTime(ConvertJSONDateToJSDate(obj.fceList[c].createDate)) + '</div>' +
					'<div style="clear: both;"></div>' +
					'</div>' +
					'</div>' +
					'<div class="taolunyouxia">' +
					'<div id="">';
				if (obj.fceList[c].exChangeText != null && obj.fceList[c].exChangeText != '') {
					stt += '<span style="word-break: break-word;">' + obj.fceList[c].exChangeText + '</span>'
				} else {
					stt += '<span style="word-break: break-word;">...</span>'
				}
				stt += '</div>'
				if (loginId == authorIdjs) {
					stt += '<div class="anniu shanchu"onclick="todelete(\' ' + obj.fceList[c].id + '\')"><span>删除</span></div>'
				} else if (loginId == obj.fceList[c].ask_uId) {
					stt += '<div class="anniu shanchu"onclick="todelete(\' ' + obj.fceList[c].id + '\')"><span>删除</span></div>'
				}

				stt += '<div class="anniu huifu" onclick="shuodiansha(' + obj.fceList[c].ask_uId + ',' + obj.fceList[c].id +
					')"><span><img src="img/xiaoxiqipao.png"/>回复' +
					'</span></div>' +
					'<div style="clear: both;"></div>'

				if (obj.fceList[c].ceList != null) {
					for (var b = 0; b < obj.fceList[c].ceList.length; b++) {
						stt += '<div id="pinlunfu">' +
							'<div class="pinlun">';
						if (obj.fceList[c].ceList[b].backMan_Name != null && obj.fceList[c].ceList[b].backMan_Name != '') {
							stt += '<div class="zhangsan"><span>' + obj.fceList[c].ceList[b].backMan_Name + '</span></div>';
						} else {
							stt += '<div class="zhangsan"><span>陌生人</span></div>';
						}
						stt += '<div class="timetime">' + getDateTime(ConvertJSONDateToJSDate(obj.fceList[c].ceList[b].createDate)) +
							'</div>' +
							'<div style="clear: both;"></div>' +
							'<div class="wenzi"><span>' + obj.fceList[c].ceList[b].exChangeText + '</span> </div>' +
							'</div>'
						if (loginId == authorIdjs) {
							stt += '<div class="anniu shanchu"onclick="todelete(' + obj.fceList[c].id + ')"><span>删除</span></div>'
						} else if (loginId == obj.fceList[c].ceList[b].ask_uId) {
							stt += '<div class="anniu shanchu"onclick="todelete(' + obj.fceList[c].id + ')"><span>删除</span></div>'
						}
						stt += '</div>'
					}
				}
				stt += '</div>' +
					'<div style="clear: both;"></div>'
			}
		} else {
			stt =
				'<div style="textAlign:centet;width:100%;padding:70px;padding-top:20px"> <img class="emoji_icon" src="img/qq/10.gif">对不起，暂无讨论内容！！！ </div>'
		}
		$('.taolun').html(stt)
	}, 'json');
	
});
//讨论区刷新
function taolunSX() {
	$.get(ctx + '/online_LearningCourse/tel_course_data.action?courseId=' + courseID, function(obj) {
		var stt = '';
		for (c = 0; c < obj.fceList.length; c++) {
			var ctx1 = ctx.substring(0, ctx.length - 1);
			stt += '<div class="taolunzuo">';
			if (obj.fceList[c].ask_src != null && obj.fceList[c].ask_src != '') {
				stt += '<img class="top" onerror="this.onerror=null;this.src=\'img/a1.jpg\'"  src="' + ctx1 + '' + obj.fceList[c]
					.ask_src + '" alt="First slide"/>';
			} else {
				stt += '<img class="top" src="img/a1.jpg" alt="First slide"/>';
			}
			stt += '</div>' +
				'<div class="taolunyou">' +
				'<div>' +
				'<div class="name">' + obj.fceList[c].ask_name + '</div>' +
				'<div class="star">' +
				'<div class="target-demo">'
			for (u = 0; u < 3; u++) {
				stt += '<img src="img/star-on.png"/>'
			}
			stt += '</div>' +
				'</div>' +
				'<div class="shijian">' + getDateTime(ConvertJSONDateToJSDate(obj.fceList[c].createDate)) + '</div>' +
				'<div style="clear: both;"></div>' +
				'</div>' +
				'</div>' +
				'<div class="taolunyouxia">' +
				'<div id="">';
			if (obj.fceList[c].exChangeText != null && obj.fceList[c].exChangeText != '') {
				stt += '<span style="word-break: break-word;">' + obj.fceList[c].exChangeText + '</span>'
			} else {
				stt += '<span style="word-break: break-word;">...</span>'
			}
			stt += '</div>'
			if (loginId == authorIdjs) {
				stt += '<div class="anniu shanchu"onclick="todelete(\' ' + obj.fceList[c].id + '\')"><span>删除</span></div>'
			} else if (loginId == obj.fceList[c].ask_uId) {
				stt += '<div class="anniu shanchu"onclick="todelete(\' ' + obj.fceList[c].id + '\')"><span>删除</span></div>'
			}

			stt += '<div class="anniu huifu" onclick="shuodiansha(' + obj.fceList[c].ask_uId + ',' + obj.fceList[c].id +
				')"><span><img src="img/xiaoxiqipao.png"/>回复' +
				'</span></div>' +
				'<div style="clear: both;"></div>'

			if (obj.fceList[c].ceList != null) {
				for (var b = 0; b < obj.fceList[c].ceList.length; b++) {
					stt += '<div class="pinlun">';
					if (obj.fceList[c].ceList[b].backMan_Name != null && obj.fceList[c].ceList[b].backMan_Name != '') {
						stt += '<div class="zhangsan"><span>' + obj.fceList[c].ceList[b].backMan_Name + '</span></div>';
					} else {
						stt += '<div class="zhangsan"><span>陌生人</span></div>';
					}
					stt += '<div class="timetime">' + getDateTime(ConvertJSONDateToJSDate(obj.fceList[c].ceList[b].createDate)) +
						'</div>' +
						'<div style="clear: both;"></div>' +
						'<div class="wenzi"><span>' + obj.fceList[c].ceList[b].exChangeText + '</span> </div>'
					if (loginId == authorIdjs) {
						stt += '<div class="anniu shanchu"onclick="todelete(' + obj.fceList[c].id + ')"><span>删除</span></div>'
					} else if (loginId == obj.fceList[c].ceList[b].ask_uId) {
						stt += '<div class="anniu shanchu"onclick="todelete(' + obj.fceList[c].id + ')"><span>删除</span></div>'
					}
					stt += '</div>'
				}
			}
			stt += '<div style="clear: both;"></div>' +
				'</div>'
		}
		$('.taolun').html(stt)

	}, 'json');
}

//分享弹框
function fenxiang(id) {
	if (confirm("确定分享吗？")) {
		var test = window.location.href;
		$.post(ctx + 'online_LearningCourse/to_Share_Course.action?shareLocation=QQ&ClsHourNum=' + shipinnum + '&courseNum=' +
			kechengnum + '&shareLink=' + test,
			function(data) {
				if (data.data == 'success') {
					alert("分享成功");
					$('#table').bootstrapTable('refresh');
					//分享成功的时候积分增加改动
					$.ajax({
						type: "POST",
						// url:ctx+"integralRule/getUserRuleHistoryData.action",
						url: 'http://127.0.0.1:8080/general/integralRule/addUserRuleInfo.action',
						data: {
							uId: loginId,
							inteRuleId: 1,
							targetId: courseID
						},
						success: function(res) {
							console.log(res);
						}
					})
				} else {
					alert("分享失败!")
					alert(data.msg)
				}
			}, 'json');
	}
}

function shoucang3() {

};

function spnum(shipinnumaa) {
	shipinnum = shipinnumaa;
}

function docid(docid) {
	docId = docid;
}

function zhangId(zhangId) {
	chapId = zhangId;
}

function jieId(jieId) {
	selId = jieId;
}
//删除
function todelete(id) {
	if (confirm("确定删除吗？")) {
		$.ajax({
			type: "POST",
			url: ctx + "online_LearningCourse/delCexChange.action",
			data: {
				"id": id,
				"loginId": loginId
			},
			async: false,
			success: function(result) {
				alert("删除成功");
				taolunSX();
			},
			error: function(result) {
				alert("操作失败");
			}
		});
	}
}
//显示与隐藏回复栏      
function shuodiansha(askid, id) {

	idjs = id;
	askID = askid;
	$(".shudiansha").toggle();
}
//回复

$(function() {
	/* var h1=window.innerHeight; //页面最大height
	$('#editor').focus(function(){//获取焦点
	   $('.shudiansha').css("margin-bottom","40px");
	});
	$('#editor').blur(function(){
	   $('.shudiansha').css("margin-bottom","");
	}); */
})

function hui() {
	var fid;
	var sss = $('#editor').html();
	if (sss != null && sss != '') {
		if (idjs != null) {
			fid = idjs;
			$.ajax({
				type: "POST",
				url: ctx + "online_LearningCourse/addCexChange.action",
				data: {
					"courseId": courseID,
					"courseName": courseNamejs,
					"fId": fid,
					"u_id": loginId,
					"ask_uId": askID,
					"exChangeText": sss,
				},
				async: false,
				success: function(result) {
					taolunSX();
					$('#editor').html("");
				},
				error: function(result) {
					alert("错误");
					$('#editor').html("");
				}
			});
			idjs = 0;
		} else {
			$.ajax({
				type: "POST",
				url: ctx + "online_LearningCourse/addCexChange.action",
				data: {
					"courseId": courseID,
					"courseName": courseNamejs,
					"fId": fid,
					"u_id ": 0,
					"ask_uId": loginId,
					"exChangeText": sss,
				},
				success: function(result) {
					alert("评论成功");
					taolunSX();
					$('#editor').html("");
					//评论成功以后执行改变积分的操作
					$.ajax({
						type: "POST",
						// url:ctx+"integralRule/getUserRuleHistoryData.action",
						url: 'http://127.0.0.1:8080/general/integralRule/addUserRuleInfo.action',
						data: {
							uId: loginId,
							inteRuleId: 4,
							targetId: courseID
						},
						success: function(res) {
							console.log(res);
						}
					})

				},
				error: function(result) {
					alert("错误");
					$('#editor').html("");
				}
			});
		}
	} else {
		alert("内容不能为空");
	}

};



//隐藏
$('#mulu').click(function() {
	$(".shudiansha").hide();
});
//隐藏
$("#jianjie").click(function() {
	$(".shudiansha").hide();
});
$('#pinfen').click(function() {
	$(".shudiansha").toggle();
});

function yincang() {
	$(".shudiansha").hide();
}

function xianshiyincang() {
	$(".shudiansha").toggle();
}
//时间个格式转换
//yyyy-MM-dd HH:mm:SS
function getDateTime(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();
	return year + "年" + month + "月" + day + "日" + hh + ":" + mm + ":" + ss;
}
//调用的是这个方法
function ConvertJSONDateToJSDate(jsondate) {

	var date = new Date(parseInt(jsondate, 10));

	return date;
}
//获取当前账户id
//cookie开始
//获取cookie
function getCookie(name) {
	var cookies = document.cookie;
	var list = cookies.split("; "); // 解析出名/值对列表

	for (var i = 0; i < list.length; i++) {
		var arr = list[i].split("="); // 解析出名和值
		if (arr[0] == name)
			return decodeURIComponent(arr[1]); // 对cookie值解码
	}
	return "";
}
//获取当前页面参数
function GetRequest() {

	var url = location.search; //获取url中"?"符后的字串

	var theRequest = new Object();

	if (url.indexOf("?") != -1) {

		var str = url.substr(1);

		strs = str.split("&");

		for (var i = 0; i < strs.length; i++) {

			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

function change_video_src(obj) {

	console.log(obj);
	if (obj != null) {
		if (obj.children[2] != null) {
			var src;
			if (obj.children[2].value != null && obj.children[2].value != '' && obj.children[2].value != undefined) {
				var src = obj.children[2].value;
				$('#spspsp').attr("src", ctx + src);
			}

		}

	}

	$.ajax({
		type: "POST",
		url: ctx + "online_LearningCourse/learnIng_Courses.action",
		data: {
			"courseId": courseID,
			"courseNum": courseNum,
			"chapId": chapId,
			"selId": selId,
			"docId": docId,
			"docNum": shipinnum,
			"state": 3,
			"loginId": loginId,
			"loginType": loginType
		},
		dataType: "JSON",
		async: false,
		success: function(result) {
			// 视频ID   chapterId
			if (result["map"]["courseType_List"] != null) {
				var begin = result["map"]["courseType_List"]["beginTime"];
				myVid = document.getElementById("spspsp");
				myVid.currentTime = begin;
			} else {
				myVid = document.getElementById("spspsp");
				myVid.currentTime = 0;
			}
			videoPoint = result["map"].videoPoint;
			


			///////////////////////////////
			/* 视频弹题begin  */
			var timeDisplay1 = 0;//播放时间
			//var videoPoints = $("#videoPoint").val();//视频弹题点信息
			var videoPoints = videoPoint; //视频弹题点信息
			var videoPointss;
			var videoPointId; //视频弹题点ID
			var displayTime; //弹题时间
			var displayNum; //弹题次数
			var old_currentTime = 0; //记录历史播放位置
			var index = 0; //弹题次数标记（拆分弹题次数数组，开始弹题后记录每次弹题的下标）
			var timeDisplay; //用秒数来显示当前播放进度
			var displayState; //弹出状态 0未弹出过 1已弹出过
			//解析数据中弹题点数据ID与弹题时间
			if (videoPoints != null && videoPoints != '' && videoPoints != undefined) {
				videoPointss = videoPoints.split(",")
				displayNum = videoPointss.length;
			}

			var video = document.getElementById('spspsp');




			/* 	var endTime = $("#endTime").val(); */

			/* if(endTime!=null&&endTime!=''&&endTime!=undefined){
				//若历史观看记录存在，则从历史记录开始继续观看 若历史观看时间已到视频结尾，则从0开始播放
				if(endTime>0){
					if(parseInt(endTime)>=Math.floor(video.currentTime)){
						video.currentTime = 0;
					}else{
						video.currentTime = parseInt(endTime);
						timeDisplay = parseInt(endTime);
					}
					
				}
			} */
			//使用事件监听方式捕捉事件 监听播放时间
			video.addEventListener("timeupdate", function() {
				timeDisplay = Math.floor(video.currentTime); //当前视频播放时间
				old_currentTime = timeDisplay;
				/* console.log("timeDisplay=="+timeDisplay); */
				if (displayNum > 0) { //弹题次数
					//循环获取弹题节点数组下标
					for (var i = 0; i < displayNum; i++) {
						if (i == index) {
							//弹题点ID
							videoPointId = (videoPointss[i].split("&"))[0];
							//弹题时间
							displayTime = (videoPointss[i].split("&"))[1];
							//弹出状态  0未弹出过 1已弹出过
							displayState = (videoPointss[i].split("&"))[2];
							timeDisplay1 = displayTime;
						}
					}
					//当视频播放到 弹题时间的时候做处理
					if (timeDisplay == displayTime && displayTime == timeDisplay1) {

						if (displayState > 0) {
							return;
						}

						if (video.paused) {
							return;
						} else {
							video.pause();
						}
						console.log("第" + (index + 1) + "次弹题");
						var html = ''; //暂无用
						//获取弹题数据信息
						$.ajax({
							url: ctx + "online_LearningCourse/getVideoPointQuestion.action",
							type: "post",
							data: {
								"videoPointId": videoPointId,
								"displayTime": displayTime
							},
							success: function(data) {
								if (data != null) {
									if (data.vpq != null) {
										//弹出试题页面
										layer.open({
											type: 1,
											area: ['300px', '400'],
											offset: '280px',
											title: '在线学习',
											shadeClose: false,
											move: '.layui-layer-title',
											shade: 0.8,
											content: $("#question_div"), // '传入任意的文本或html' //这里content是一个普通的String
											success: function(layero, index) {


												console.log(layero, index);
												$(".layui-layer-content").css('height', 'auto');
												/* $(".layui-layer-shade").css('height','auto'); */

												$("input[name=que_ans]").change(function() {
													$(".submit_ans").css("background-color", '#49af4f');
												});

												//填充数据begin

												$(".que_type").html(data.vpq.type_Name);
												if (data.vpq.questionDescs != null && data.vpq.questionDescs.length > 0) {
													$(".que_ms").html(data.vpq.questionDescs[0]);
												}

												var strrr = "";
												if (data.vpq.questionDescs != null && data.vpq.questionDescs.length > 1) {
													for (var i = 1; i <= data.vpq.questionDescs.length; i++) {
														if (data.vpq.questionDescs[i] != null && data.vpq.questionDescs[i] != '' && data.vpq.questionDescs[
																i] != undefined) {
															strrr += '<label style="font-size:12px;"><input name="que_ans" type="radio" value="' + i +
																'"/>' + data.vpq.questionDescs[i] + '</label><br>';
														}
													}
												}
												$(".que_content_dd").html(strrr);
												$(".submit_ans").find(".t_Id").val(data.vpq.id);
												$(".submit_ans").find(".t_que_num").val(data.vpq.questionNum);
												$(".submit_ans").find(".rightSelect").val(data.vpq.rightSelect);
												$(".next_t_queId").val(data.vpq.nextVpq_Id); //下一题的主键ID
												$(".que_ansContent").html(data.vpq.rightSelect);
												$(".que_jx").html(data.vpq.questionContent);


												//填充数据end
												$(".ca_kx").click(function() {
													if (!$(".que_analysis").hasClass('in')) {
														$(this).parent().css("border-bottom", "1px solid");
													} else {
														$(this).parent().css("border-bottom", "none");
													}
												});

												//下一题
												$(".next_t").click(function() {
													var vpq_Id = $(this).find(".next_t_queId").val();
													$.ajax({
														url: ctx + "online_LearningCourse/getVideoPointQuestion.action",
														type: "post",
														data: {
															"videoPointId": videoPointId,
															"vpq_Id": vpq_Id
														},
														success: function(data11) {
															if ($('.que_analysis ').hasClass('in')) {
																$(".que_analysis ").removeClass('in');
																$('.submit_div').css("border-bottom", "none");
															}

															$(".ca_kx").attr("aria-expanded", "false");

															$(".que_Check").css('display', 'none');
															$(".submit_ans").attr({
																"disabled": false
															});
															$(".next_t").css('display', 'none');
															$(".ca_kx").css('display', 'none');
															$(".que_type").html(data11.vpq.type_Name);
															if (data11.vpq.questionDescs != null && data11.vpq.questionDescs.length > 0) {
																$(".que_ms").html(data11.vpq.questionDescs[0]);
															} else {
																$(".que_ms").html(data11.vpq.questionDesc);
															}

															var strrrr = "";
															if (data11.vpq.questionDescs != null && data11.vpq.questionDescs.length > 1) {
																for (var i = 1; i <= data11.vpq.questionDescs.length; i++) {
																	if (data11.vpq.questionDescs[i] != null && data11.vpq.questionDescs[i] != '' && data11
																		.vpq.questionDescs[i] != undefined) {
																		strrrr += '<label style="font-size:12px;"><input name="que_ans" type="radio" value="' +
																			i + '"/>' + data11.vpq.questionDescs[i] + '</label><br>';
																	}
																}
															} else {
																strrrr +=
																	'<label style="font-size:12px;"><input name="que_ans" type="radio" value="对"/>对</label><br>';
																strrrr +=
																	'<label style="font-size:12px;"><input name="que_ans" type="radio" value="错"/>错</label><br>';
															}
															$(".que_content_dd").html(strrrr);
															$(".submit_ans").find(".t_Id").val(data11.vpq.id);
															$(".submit_ans").find(".t_que_num").val(data11.vpq.questionNum);
															$(".submit_ans").find(".rightSelect").val(data11.vpq.rightSelect);
															$(".next_t_queId").val(data11.vpq.nextVpq_Id); //下一题的主键ID
															$(".que_ansContent").html(data11.vpq.rightSelect);
															$(".que_jx").html(data11.vpq.questionContent);
														}
													});

												});

												//提交
												$(".submit_ans").click(function() {
													var que_ans = $("input[name=que_ans]:checked").val();
													if (que_ans == null || que_ans == '' || que_ans == undefined) {
														layer.msg("未选择答案", {
															icon: 2
														});
														return;
													}

													var errorState = 0; //2错误-1正确

													var t_que_num = $(this).find(".t_que_num").val(); //试题编号
													var t_Id = $(this).find(".t_Id").val(); //弹题ID
													var rightSelect = $(this).find(".rightSelect").val();
													if ($(".que_type").text().indexOf("判断") > -1) {
														if (rightSelect.indexOf(que_ans) > -1) {
															$(".que_Check").css('display', 'inline-block');
															$(".que_Check").find('img').attr('src', 'img/right.png')
															errorState = 1;
														} else {
															$(".que_Check").css('display', 'inline-block');
															$(".que_Check").find('img').attr('src', 'img/wrong.png')
															errorState = 2;
														}
													} else {
														if (rightSelect.indexOf(String.fromCharCode(64 + parseInt(que_ans))) > -1) {
															$(".que_Check").css('display', 'inline-block');
															$(".que_Check").find('img').attr('src', 'img/right.png')
															errorState = 1;
														} else {
															$(".que_Check").css('display', 'inline-block');
															$(".que_Check").find('img').attr('src', 'img/wrong.png')
															errorState = 2;
														}
													}

													$(".ca_kx").css('display', 'block');

													$("input[name=que_ans]").attr({
														"disabled": "disabled"
													});
													$(this).attr({
														"disabled": "disabled"
													});

													//若包含下一步则显示下一题按钮
													var next_t_queId = $(".next_t_queId").val();
													if (next_t_queId != '' && next_t_queId != null && next_t_queId != undefined) {
														$(".next_t").css('display', 'inline-block');
													}
													//更新后台数据
													$.ajax({
														url: ctx + "online_LearningCourse/updateVideoPointInfo.action",
														type: "post",
														data: {
															"id": t_Id,
															"errorState": errorState
														},
														async: false,
														success: function(data) {}
													});

												});
											},
											end: function() { //销毁时回调
												if (video.paused) {
													video.play();
												}

												index++; //弹题次数标识自增
												timeDisplay1++; //暂无用


												if ($('.que_analysis ').hasClass('in')) {
													$(".que_analysis ").removeClass('in');
													$('.submit_div').css("border-bottom", "none");
												}

												$(".ca_kx").attr("aria-expanded", "false");
												$(".que_Check").css('display', 'none');
												$(".submit_ans").attr({
													"disabled": false
												});
												$(".next_t").css('display', 'none');
												$(".ca_kx").css('display', 'none');

											}
										});
									}
								}
							}
						});
					}
				}

			}, false);

			//位置移动完成
			video.onseeked = function() {
				$.ajax({
					url: ctx + "online_LearningCourse/getVideoPoint.action",
					type: "post",
					data: {
						"courseNum": courseNum,
						"docId": docId
					},
					async: false,
					success: function(data) {
						if (data != null) {
							if (data.videoPoint != null) {
								videoPointss = data.videoPoint.split(",")
								displayNum = videoPointss.length;
								for (var i = 0; i < displayNum; i++) {
									//弹题点ID
									videoPointId = (videoPointss[i].split("&"))[0];
									//弹题时间
									displayTime = (videoPointss[i].split("&"))[1];
									//弹出状态  0未弹出过 1已弹出过
									displayState = (videoPointss[i].split("&"))[2];

									if (video.currentTime > displayTime) {
										if (displayState == 0) {
											video.currentTime = parseInt(displayTime);
											return;
										}
									}

								}
							}
						}
					}
				});
			};

			//视频停止播放
			video.onended = function() {
				$.ajax({
					url: ctx + "online_LearningCourse/updateUserWatchVideoLog.action",
					type: "post",
					data: {
						"courseNum": courseNum,
						"docNum": docNum,
						"state": 1
					},
					async: false,
					success: function(data) {
						if (data != null) {

						}
					}
				});
			}

			video.addEventListener("seeking", function() {
				/*  alert("当前位置==="+video.currentTime);
		       alert("寻址操作开始!"); */
				/* console.log("上一次播放位置在"+old_currentTime+"秒处"); */
				/* video.currentTime = 2; */
			});

			/* 视频弹题end  */
			/////////////////////////////////////////// 


		}
	})
	//
	//设置播放时间

	//myVid.onclose=true;
}
$("#nav_ul").delegate("li", "click", function() {
	var curLi = $(this); //这个就是当前选中的li
	$(this).css('list-style-type', 'disc');
});
//已读
$("li").on('click', function() {
	$(this).children('span').html("●");
});
$(function() {
	$('#back').click(function() {
		if (shipinnum != null && shipinnum != '') {
			var totalTime = myVid.currentTime;
			var beginTime = Math.ceil(totalTime);
			$.ajax({
				type: "POST",
				url: ctx + "online_LearningCourse/online_learnIng_Course.action",
				data: {
					"courseId": courseID,
					"courseNum": courseNum,
					"chapId": chapId,
					"selId": selId,
					"docId": docId,
					"docNum": shipinnum,
					"state": 1,
					"loginId": loginId,
					"beginTime": beginTime,
					"loginType": loginType
				},
				success: function(result) {},
				error: function(result) {}
			})
			window.history.back();
		} else {
			window.history.back();
		}
	});

})

$(function() {
	$('#sangedian').click(function() {
		layer.confirm('请选择您的操作', {
			btn: ['收藏', '取消'] //按钮
		}, function() {
			$.ajax({
				type: "POST",
				url: ctx + "online_LearningCourse/to_Collect_Course.action",
				data: {
					"state": 0,
					"courseId": courseID,
					"loginId": loginId,
					"loginType": loginType
				},
				async: false,
				success: function(result) {
					layer.confirm('收藏成功，请在个人中心查看', {
						btn: ['确定', '取消收藏'] //按钮
					}, function() {
						layer.close(layer.index);
						//在确定收藏成功之后对积分增加改动
						$.ajax({
							type: "POST",
							// url:ctx+"integralRule/getUserRuleHistoryData.action",
							url: 'http://127.0.0.1:8080/general/integralRule/addUserRuleInfo.action',
							data: {
								uId: loginId,
								inteRuleId: 5,
								targetId: courseID
							},
							success: function(res) {
								console.log(res);
							}
						})
					}, function() {
						$.ajax({
							type: "POST",
							url: ctx + "online_LearningCourse/to_Collect_Course.action",
							data: {
								"state": 0,
								"courseId": courseID,
								"loginId": loginId,
								"loginType": loginType
							},
							success: function(result) {
								layer.confirm('取消收藏成功', {
									btn: ['确定', '返回'] //按钮
								}, function() {
									layer.close(layer.index);
								}, function() {
									layer.close(layer.index);
								});
							},
							error: function(result) {

							}
						});
					});
				},
				error: function(result) {
					layer.close(layer.index);
				}
			});
		}, function() {
			layer.close(layer.index);
		});
	})
	//在页面刚进入的时候开始计时
	var start;
	var end;
	var duration = 0;
	start = new Date();
	console.log(start);
	$(window).unload(function(){
		end = new Date();
		duration = end -start;
		if(duration>=3){
			$.ajax({
				type: "POST",
				// url:ctx+"integralRule/getUserRuleHistoryData.action",
				url: 'http://127.0.0.1:8080/general/integralRule/addUserRuleInfo.action',
				data:{
					uId:loginId,
					inteRuleId: 1,
					targetId:docId
				},
				success:function(res){
				},
				error:function(e){
					console.log(e);
				}
			})
		}
	})
})
