var files = [];
var filePath = [];
var index = 1;
var server = 'http://47.92.104.238:8080/general/pic/uploadAttachement.action';
var serverStu = 'http://47.92.104.238:8080/general/pic/uploadUserHWAttachement.action';

/*
 *判断设备是手机还是pc客户端
 * navigator.userAgent
 *return false 移动端， true  PC端
 * 
 */
function isPc_Mobile(){
	var userAgent = navigator.userAgent;
	var Agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
	var flag = true;
	for(var i = 0;i<Agents.length;i++){
		//indexOf 如果要检索的字符串值没有出现，则该方法返回 -1。
		if(userAgent.indexOf(Agents[i]) > 0){
			flag = false;
			//break是跳出循环 
			break;
		}
		
	}
	return flag
}

/*
 *
 * 获取作业对应的作业信息
 *
 * 
 */
function getHomWorkInfo() {
	bui.ajax({
		url: ctxLocal + 'homeWork/getHomWorkInfo.action',
		data: {
			id: getUrlParamValue("hwId")
		},
	}).then(function(res) {
		if (res.code == 1) {
			$("#jobname").val(res.data.hwName);
			$("#hwDescJob").val(res.data.hwDesc);
			$("#sumScoreJob").val(res.data.sumScore);
			$("#select").text(res.data.classId);
			$("#deadline_input").val(format(res.data.closingDate));
			$("#canOpen").val(res.data.overdueState);
		}
	}, function(res, status) {
		console.log(status);
	})
}

/*
 *
 * 获取作业对应的附件信息
 *
 * 
 */
// function getAttachPublish() {
// 	bui.ajax({
// 		url: ctxLocal + 'homeWork/getHomeWorkAttData.action',
// 		data: {
// 			hwId: getUrlParamValue("hwId")
// 		},
// 	}).then(function(res) {
// 		$("#history").empty();
// 		if (res.code == 0) {
// 			var html = '';
// 			if (res.data.length > 0) {
// 				// $(".aname").text(res.data[i].attSrc);
// 				for (var i = 0; i < res.data.length; i++) {
// 					var fe = document.getElementById("history");
// 					var le = document.getElementById("empty")
// 					var li = document.createElement("li");
// 					var filename = res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf('/') + 1);
// 					li.className = 'ditem';
// 					li.innerHTML = '<span class="iplay"><font class="aname"></font><br/><font class="ainf"></font></span>';
// 					// fe.insertBefore(li, le.nextSibling);
// 					li.querySelector('.aname').innerText = filename;
// 					//appendChild() 方法向节点添加最后一个子节点。
// 					fe.appendChild(li);
// 				}
// 			}
// 		}
// 	}, function(res, status) {
// 
// 		console.log(status);
// 	})
// }
function getAttachPublish() {
	bui.ajax({
		url: ctxLocal + 'homeWork/getHomeWorkAttData.action',
		data: {
			hwId: getUrlParamValue("hwId")
		},
	}).then(function(res) {
		$("#history").empty();
		if (res.code == 0) {
			var html = '';
			if (res.data.length > 0) {
				// $(".aname").text(res.data[i].attSrc);
				for (var i = 0; i < res.data.length; i++) {
						if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "doc") {
								html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
								html +='<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-3" style="font-size:16px;color:#2ED6D2"></i></div>'
								html += '<div class="span1">' + res.data[i].attSrc + '</div>'
								html += '</li>'
							} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp4" || res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
								//视频
								html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
								html += '<video  src="' + ctxImgLocalTea + res.data[i].attSrc +'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'
								html += '<div class="span1">' + res.data[i].attSrc + '</div>'
								html += '</li>';
							} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "amr" || res.data[
									i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp3" || res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
								//语音
								html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
								html += '<video  src="' + ctxImgLocalTea + res.data[i].attSrc +'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'
								html += '<div class="span1">' + res.data[i].attSrc + '</div>'
								html += '</li>';
							} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "jpg" || res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "png") {
								//图片
								html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
								html += '<img  class="img3 imgCheck"  data-attSrc="' + res.data[i].attSrc + '" src="' + ctxImgLocalTea + res.data[i].attSrc +'" style="width:1.75rem;height:1.75rem;margin-right:0.40rem;"/>'
								html += '<div class="span1 scanImg"  data-attSrc="' + res.data[i].attSrc + '">' + res.data[i].attSrc +
									'</div>'
								html += '</li>'
							} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "xls") {
								html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
								html +='<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-2" style="font-size:16px;color:#45AF58"></i></div>'
								html += '<div class="span1">' + res.data[i].attSrc + '</div>'
								html += '</li>'
							}
						}
						$("#history").append(html);
							$(".img3").css({
							"width": "2.00rem",
							"height": "2.00rem",
							"display": "block"
						})
						$(".imgCheck").click(function() {
							var result = ctxImgLocalTea + $(this).attr("data-attSrc");
							// $(this).find(".img3").attr("src", result);
							// $(this).find(".img3").css("display", "block");
							document.addEventListener("plusready", onPlusReady, false);
							var r = null; 
							// 扩展API加载完毕，现在可以正常调用扩展API 
							function onPlusReady() {						
							
							}
							//图片的预览
							plus.nativeUI.previewImage([result]);
						})
				}
			}
	}, function(res, status) {

		console.log(status);
	})
}
/*
 *
 * 获取学生对应的附件信息
 *
 * 
 */
function getStuAttachPublish(hwId, uId) {
	bui.ajax({
		url: ctxLocal + 'homeWork/getUserHomeWorkAttData.action',
		data: {
			hwId: hwId,
			uId: uId
		},
	}).then(function(res) {
		$("#history").empty();
		if (res.code == 0) {
			var html = '';
			if (res.data.length > 0) {
				// $(".aname").text(res.data[i].attSrc);
				for (var i = 0; i < res.data.length; i++) {
					if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "doc") {
							html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
							html +='<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-3" style="font-size:16px;color:#2ED6D2"></i></div>'
							html += '<div class="span1">' + res.data[i].attSrc + '</div>'
							html += '</li>'
						} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp4" || res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
							//视频
							html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
							html += '<video  src="' + ctxImgLocalStu + res.data[i].attSrc +'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'
							html += '<div class="span1">' + res.data[i].attSrc + '</div>'
							html += '</li>';
						} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "amr" || res.data[
								i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp3" || res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
							//语音
							html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
							html += '<video  src="' + ctxImgLocalTea + res.data[i].attSrc +'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'
							html += '<div class="span1">' + res.data[i].attSrc + '</div>'
							html += '</li>';
						} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "jpg" || res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "png") {
							//图片
							html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
							html += '<img  class="img3 imgCheck"  data-attSrc="' + res.data[i].attSrc + '" src="' + ctxImgLocalStu + res.data[i].attSrc +'" style="width:1.75rem;height:1.75rem;margin-right:0.40rem;"/>'
							html += '<div class="span1 scanImg"  data-attSrc="' + res.data[i].attSrc + '">' + res.data[i].attSrc +
								'</div>'
							html += '</li>'
						} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "xls") {
							html +='<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
							html +='<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-2" style="font-size:16px;color:#45AF58"></i></div>'
							html += '<div class="span1">' + res.data[i].attSrc + '</div>'
							html += '</li>'
						}
				}
				$("#history").append(html);
					$(".img3").css({
					"width": "2.00rem",
					"height": "2.00rem",
					"display": "block"
				})
				$(".imgCheck").click(function() {
					var result = ctxImgLocalStu + $(this).attr("data-attSrc");
					// $(this).find(".img3").attr("src", result);
					// $(this).find(".img3").css("display", "block");
					document.addEventListener("plusready", onPlusReady, false);
					var r = null; 
					// 扩展API加载完毕，现在可以正常调用扩展API 
					function onPlusReady() {						
					
					}
					//图片的预览
					plus.nativeUI.previewImage([result]);
				})
			}
		}
	}, function(res, status) {

		console.log(status);
	})
}
/*
 *
 * 保存并提交的表单提交
 *
 * 
 */
function savePublishClick(hwState, url) {
	$(".save_publish").click(function() {
		$(".save_publish").attr("disabled", "disabled");
		if (jobnameFlag == true && hwDescJobFlag == true && sumScoreJobFlag == true) {
			var hwName = $("#jobname").val();
			var hwDesc = $("#hwDescJob").val();
			//满分值
			var sumScore = $("#sumScoreJob").val();
			//选择班级
			var className = $("#select").text();
			if (classDate[0].name = className) {
				var classId = classDate[0].value;
			}
			localStorage.setItem("classId", classId);
			//附件格式  目前没有这个字段
			var selectAttach = $("#selectAttach").text();
			//截止时间   并将时间转化为时间戳
			var closingDate = $("#deadline_input").val() + ":00";
			//逾期迟交是否可以
			var overdueState = $("#canOpen").val();
			filePathStr = arrToStr(filePath);
			filePathStr = filePathStr + ',' + audioSrc;
			bui.ajax({
				url: url,
				data: {

					pubId: loginId,
					courseId: courseId,
					hwName: hwName,
					hwDesc: hwDesc,
					sumScore: sumScore,
					classId: classId,
					closingDate: closingDate,
					overdueState: overdueState,
					hwState: hwState,
					attSrc: filePathStr,
					semesterId: termId,
				},
				method: "POST"
			}).then(function(res) {
				if (res.code == 1) {
					console.log("保存成功！");
					window.location.href = "./tea_course_job.html";
				} else {
					console.log("数据库异常，课程增加失败");
					$(".save_publish").removeAttr("disabled");
				}
			}, function(e) {
				console.log(e);
				$(".save_publish").removeAttr("disabled");
			})
		}
	})
}
/*
 *
 * 保存的表单提交
 *
 * 
 */
function saveClick(hwState, url) {
	$(".save").click(function() {
		$(".save").attr("disabled", "disabled");
		if (jobnameFlag == true && hwDescJobFlag == true && sumScoreJobFlag == true) {
			//获取表单中对应的值   布置作业
			var hwName = $("#jobname").val();
			var hwDesc = $("#hwDescJob").val();
			//满分值
			var sumScore = $("#sumScoreJob").val();
			//选择班级
			var className = $("#select").text();
			if (classDate[0].name = className) {
				var classId = classDate[0].value;
			}
			localStorage.setItem("classId", classId);
			//截止时间   并将时间转化为时间戳
			var closingDate = $("#deadline_input").val() + ":00";
			filePathStr = arrToStr(filePath);
			filePathStr = filePathStr + ',' + audioSrc;
			//逾期迟交是否可以
			var overdueState = $("#canOpen").val();
			bui.ajax({
				url: url,
				data: {
					pubId: loginId,
					courseId: courseId,
					hwName: hwName,
					hwDesc: hwDesc,
					sumScore: sumScore,
					classId: classId,
					closingDate: closingDate,
					overdueState: overdueState,
					hwState: hwState,
					attSrc: filePathStr,
					semesterId: termId
				},
				method: "POST"
			}).then(function(res) {
				if (res.code == 1) {
					window.location.href = "./tea_course_job.html";
				} else {
					console.log("数据库异常，课程增加失败");
					$(".save").removeAttr("disabled");
				}
			}, function(e) {
				console.log(e);
				$(".save").removeAttr("disabled");
			})
		}


	})
}
/*
 *
 * 保存并提交的表单提交
 *
 * 
 */
function savePublishClickEdit(hwState, url, id) {
	$(".save_publish").click(function() {
		$(".save_publish").attr("disabled", "disabled");
		if (jobnameFlag == true && hwDescJobFlag == true && sumScoreJobFlag == true) {
			var hwName = $("#jobname").val();
			var hwDesc = $("#hwDescJob").val();
			//满分值
			var sumScore = $("#sumScoreJob").val();
			//选择班级
			var className = $("#select").text();
			if (classDate[0].name = className) {
				var classId = classDate[0].value;
			}
			localStorage.setItem("classId", classId);
			//附件格式  目前没有这个字段
			var selectAttach = $("#selectAttach").text();
			//截止时间   并将时间转化为时间戳
			var closingDate = $("#deadline_input").val() + ":00";
			//逾期迟交是否可以
			var overdueState = $("#canOpen").val();
			filePathStr = arrToStr(filePath);
			filePathStr = filePathStr + ',' + audioSrc;
			bui.ajax({
				url: url,
				data: {
					id: id,
					pubId: loginId,
					courseId: courseId,
					hwName: hwName,
					hwDesc: hwDesc,
					sumScore: sumScore,
					classId: classId,
					closingDate: closingDate,
					overdueState: overdueState,
					hwState: hwState,
					attSrc: filePathStr,
					semesterId: termId,
				},
				method: "POST"
			}).then(function(res) {
				if (res.code == 1) {
					console.log("保存成功！");
					window.location.href = "./tea_course_job.html";
				} else {
					console.log("数据库异常，课程增加失败");
					$(".save_publish").removeAttr("disabled");
				}
			}, function(e) {
				console.log(e);
				$(".save_publish").removeAttr("disabled");
			})
		}

	})
}
/*
 *
 * 保存的表单提交
 *
 * 
 */
function saveClickEdit(hwState, url, id) {
	$(".save").click(function() {
		$(".save").attr("disabled", "disabled");
		if (jobnameFlag == true && hwDescJobFlag == true && sumScoreJobFlag == true) {
			//获取表单中对应的值   布置作业
			var hwName = $("#jobname").val();
			var hwDesc = $("#hwDescJob").val();
			//满分值
			var sumScore = $("#sumScoreJob").val();
			//选择班级
			var className = $("#select").text();
			if (classDate[0].name = className) {
				var classId = classDate[0].value;
			}
			localStorage.setItem("classId", classId);
			//截止时间   并将时间转化为时间戳
			var closingDate = $("#deadline_input").val() + ":00";
			filePathStr = arrToStr(filePath);
			filePathStr = filePathStr + ',' + audioSrc;
			//逾期迟交是否可以
			var overdueState = $("#canOpen").val();
			bui.ajax({
				url: url,
				data: {
					id: id,
					pubId: loginId,
					courseId: courseId,
					hwName: hwName,
					hwDesc: hwDesc,
					sumScore: sumScore,
					classId: classId,
					closingDate: closingDate,
					overdueState: overdueState,
					hwState: hwState,
					attSrc: filePathStr,
					semesterId: termId
				},
				method: "POST"
			}).then(function(res) {
				if (res.code == 1) {
					window.location.href = "./tea_course_job.html";
				} else {
					console.log("数据库异常，课程增加失败");
					$(".save").removeAttr("disabled");
				}
			}, function(e) {
				console.log(e);
				$(".save").removeAttr("disabled");
			})
		}


	})
}
/*
 *
 * 获取用户时间的选择
 *
 * 
 */
function getPickerDate() {
	var input = $("#deadline_input");
	var uiPickerdate = bui.pickerdate({
		handle: "#deadline_input",
		// input 显示的日期格式
		formatValue: "yyyy-MM-dd hh:mm",
		cols: {
			second: 'none'
		},
		onChange: function(value) {
			input.val(value);
		},
		callback: function(e) {},
	});
}
/*
 *
 * 获取用户下附件的类型列表
 *
 * 
 */
function getAttachStyle() {
	var uiSelect = bui.select({
		trigger: "#selectAttach",
		title: "请选择附件格式",
		type: "checkbox",
		direction: "right",
		data: [{
			"name": ".amr",
			"value": "11"
		}, {
			"name": "jpg",
			"value": "12"
		}, {
			"name": "mp4",
			"value": "13"
		}, {
			"name": "mp3",
			"value": "14"
		}]
	});
}
/*
 *
 * 获取用户下的所有班级列表
 *
 * 
 */
function getClassRoom() {
	//获取班级信息
	bui.ajax({
		url: ctxLocal + 'classRoom/getClassRoomData.action',
		data: {
			uId: loginId,
			semesterId: termId,
			state: 1
		},
		method: "POST"
	}).then(function(res) {
		if (res.code == 0) {
			var dataObj = {
				"name": '',
				"value": ''
			};
			for (var i = 0; i < res.data.length; i++) {
				var dataObj = {
					"name": res.data[i].cRomName,
					"value": res.data[i].id.toString()
				};
				classDate.push(dataObj);
			}
			var uiSelect = bui.select({
				trigger: "#select",
				title: "请选择班级",
				type: "radio",
				direction: "right",
				data: classDate,
			});
		}
	}, function(e) {
		classDate = [{
			"name": "9501",
			"value": "11"
		}, {
			"name": "9502",
			"value": "12"
		}, {
			"name": "9503",
			"value": "13"
		}, {
			"name": "9504",
			"value": "14"
		}]
		var uiSelect = bui.select({
			trigger: "#select",
			title: "请选择班级",
			type: "radio",
			direction: "right",
			data: classDate

		});
	})
}
/*
 *
 * 获取用户的资源索引数据集
 *userId   用户的id
 * 
 */
function getResourceIndexData(loginId) {
	bui.ajax({
		url: ctxLocal + 'resourceInfo/getResourceIndexData.action',
		data: {
			userId: loginId
		},
		async: false
	}).then(function(res) {
		if (res.code == 0) {
			if (res.data != '' && res.data != null) {
				for (var i = 0; i < res.data.length; i++) {
					res.data[i].createTime = format(res.data[i].createTime);
				}
				resourceData = res.data;
				resourceLength = res.count;
			}
		}
	}, function(res, status) {
		console.log(status);
	})
}
/*
 *
 * 获取用户的资源索引下面的文件
 *userId   用户的id   文件夹对应的ID
 * 
 */
function getResourceFileData(loginId, courseId, folderId) {
	bui.ajax({
		url: ctxLocal + 'resourceInfo/getCourseResourceData.action',
		data: {
			uId: loginId,
			courseId: courseId,
			resourceIndex: folderId
		},
		async: false
	}).then(function(res) {
		if (res.code == 0) {
			if (res.data != '' && res.data != null) {
				alert(folderId)
				for (var i = 0; i < res.data.length; i++) {
					res.data[i].createTime = format(res.data[i].createTime);
				}
				resourceFileData = res.data;
				resourceFileLength = res.count;
			}
		}
	}, function(res, status) {
		console.log(status);
	})
}
/*
 *
 * 获取对应课程的课程信息
 *courseId课程对应的id
 * 
 */
function getCourseInfoById() {
	bui.ajax({
		url: ctxLocal + 'courseInfoMgr/selectCourseInfo.action',
		data: {
			courseID: courseId
		},
		async: false
	}).then(function(res) {
		if (res.code == 1) {
			if (res.data != '' && res.data != null) {
				courseNameVal = res.data.courseName;
				courseInfoVal = res.data.contentSummary;
				courseInfoVal = cutString(courseInfoVal, 12, "...")
			}
		}
	}, function(res, status) {
		console.log(status);
	})
}

/*
 *正则判断   只针对bui
 * url地址
 * String courseIds  课程ID    xx,xx,xx,xx
 * Integer semesterId  学期Id  "课程最长不得超过7个汉字，或14个字节(数字，字母和下划线)"
 */
function checkInputDom(elInput, el, inputReg, tips, inputFlag) {
	bui.input({
		id: "#" + elInput,
		onBlur: function(e) {

			if (e.target.value == '') {
				bui.hint("不能为空");
				inputFlag = false;
				$("#" + el).focus();
				return false;
			}
			//^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$   最长不得超过7个汉字，或14个字节(数字，字母和下划线)正则表达式
			if (!inputReg.test(e.target.value)) {
				bui.hint(tips);
				inputFlag = false
				$("#" + el).focus();
				return false;
			}
			inputFlag = true;
			return true
		}
	})
}

/*
 *批量选择课程并提交
 * url地址
 * String courseIds  课程ID    xx,xx,xx,xx
 * Integer semesterId  学期Id
 */
function bacthChooseCourseToSem(courseIds, semesterId, url) {
	$("#btnOpen").on("click", function() {
		$("#btnOpen").attr("disabled", "disabled");
		bui.ajax({
			url: url,
			async: false,
			data: {
				courseIds: courseIds,
				semesterId: semesterId
			},
		}).then(function(res) {
			if (res.code == 1) {
				console.log("新增成功");
				bui.load({
					url: "./tea_course_makeTwo.html",
				})
			} else {
				console.log("数据库异常，课程增加失败");
				$("#btnOpen").removeAttr("disabled");
			}
		}, function(res, status) {
			console.log(status);
			$("#btnOpen").removeAttr("disabled");
		})
	})

}
/*
 *教师下面课程的获取
 * url地址
 * loginId 登陆者Id   这里指老师
 * termId 学期  Id
 * 
 */
function getCoursePageInfoData(loginId, termId, url) {
	//接受老师下面对应的课程数组 getCoursePageInfoData
	//根据登录loginId来获取本用户下所有的课程
	bui.ajax({
		url: url,
		async: false,
		data: {
			authorId: loginId,
			semesterId: termId,
			state: 2
		},
		method: "POST"
	}).then(function(res) {

		if (res.code == 0) { // 为空也要判断是否有值  
			console.log(res.data);

			if (res.data.length > 0) {
				for (var i = 0; i < res.data.length; i++) {
					//组装个对象,将对象push到数组中
					teaCourseArr.push({
						"name": res.data[i].courseName,
						"image": res.data[i].courseJacket == null ? '../img/zc01.png' : ctxLocal + res.data[i].courseJacket,
						"value": res.data[i].courseId
					});
				}
			}
		} else {
			console.log(res.msg);
		}

	}, function(res, status) {
		console.log(status);
	})
}

/*
 *教师附件信息的获取
 * url地址
 * hwId 作业Id
 * 
 */

function getHomeWorkAttData(hwId) {
	bui.ajax({
		url: ctxLocal + 'homeWork/getHomeWorkAttData.action',
		data: {
			hwId: hwId,
		},
	}).then(function(res) {
		if (res.code == 0) {
			var html = '';
			$(".attNum").text(res.count);

			//data是一个list   对象数组
			if (res.data.length > 0) {
				for (var i = 0; i < res.data.length; i++) {
					//文档
					if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "doc") {
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html +=
							'<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-3" style="font-size:16px;color:#2ED6D2"></i></div>'
						html += '<div class="span1">' + res.data[i].attSrc + '</div>'
						html += '</li>'
					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp4" || res.data[
							i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
						//视频
						html +=
						'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
					html += '<video  src="' + ctxImgLocalTea + res.data[i].attSrc +
						'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'
					
					html += '<div class="span1">' + res.data[i].attSrc + '</div>'
					html += '</li>';
					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "amr" || res.data[
							i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp3" || res.data[i].attSrc.substr(
							res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
						//语音
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html += '<video  src="' + ctxImgLocalTea + res.data[i].attSrc +
							'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'

						html += '<div class="span1">' + res.data[i].attSrc + '</div>'
						html += '</li>';

					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "jpg" || res.data[
							i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "png") {
						//图片
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html += '<img  class="img3 imgCheck"  data-attSrc="' + res.data[i].attSrc + '" src="' + ctxImgLocalTea + res.data[i].attSrc +
							'" style="width:1.75rem;height:1.75rem;margin-right:0.40rem;"/>'
						html += '<div class="span1 scanImg"  data-attSrc="' + res.data[i].attSrc + '">' + res.data[i].attSrc +
							'</div>'
						html += '</li>'
					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "xls") {
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html +=
							'<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-2" style="font-size:16px;color:#45AF58"></i></div>'
						html += '<div class="span1">' + res.data[i].attSrc + '</div>'
						html += '</li>'
					}
				}
				$(".teaAttList").append(html);
				$(".img3").css({
					"width": "2.00rem",
					"height": "2.00rem",
					"display": "block"
				})
				$(".imgCheck").click(function() {
					var result = ctxImgLocalTea + $(this).attr("data-attSrc");
					// $(this).find(".img3").attr("src", result);
					// $(this).find(".img3").css("display", "block");
					
					document.addEventListener("plusready", onPlusReady, false);
					var r = null; 
					// 扩展API加载完毕，现在可以正常调用扩展API 
					function onPlusReady() {						
					
					}
					//图片的预览
					plus.nativeUI.previewImage([result]);
				
					
				})
			}
		} else {
			console.log("暂无数据");
		}
	}, function(res, status) {

		console.log(status);
	})
}
/*
 *学生附件信息的获取
 * url地址
 * hwId 作业Id
 * 
 */
function getUserHomeWorkAttData(hwId, uId) {
	bui.ajax({
		url: ctxLocal + 'homeWork/getUserHomeWorkAttData.action',
		data: {
			hwId: hwId,
			uId: uId
		},
	}).then(function(res) {
		if (res.code == 0) {
			var html = '';
			if (res.data.length > 0) {
				for (var i = 0; i < res.data.length; i++) {
					//文档
					if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "doc") {
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html +=
							'<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-3" style="font-size:16px;color:#2ED6D2"></i></div>'
						html += '<div class="span1">' + res.data[i].attSrc + '</div>'
						html += '</li>'
					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp4" || res.data[
							i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
						//视频
							html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html += '<video  src="' + ctxImgLocalStu + res.data[i].attSrc +
							'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'
						
						html += '<div class="span1">'+ res.data[i].attSrc + '</div>'
						html += '</li>';
					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "amr" || res.data[
							i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "mp3" || res.data[i].attSrc.substr(
							res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "ogg") {
						//语音
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html += '<video  src="' + ctxImgLocalTea + res.data[i].attSrc +
							'"  controls="" style="width:2.00rem;height:2.10rem;margin-right:0.40rem;"></video>'

						html += '<div class="span1">'+ res.data[i].attSrc + '</div>'
						html += '</li>';

					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "jpg" || res.data[
							i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "png") {
						//图片
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html += '<img data-attSrc="' + res.data[i].attSrc + '" src="' + ctxImgLocalStu + res.data[i].attSrc +
							'" class="img3 imgCheck1" style="width:1.75rem;height:1.75rem;margin-right:0.40rem;"/>'
						html += '<div class="span1 scanImg"  data-attSrc="' + res.data[i].attSrc + '">' + res.data[i].attSrc +
							'</div>'
						html += '</li>'
					} else if (res.data[i].attSrc.substr(res.data[i].attSrc.lastIndexOf(".") + 1).toLowerCase() == "xls") {
						html +=
							'<li class="bui-btn bui-box" style="width:100%;margin:0 auto;padding:0.24rem 0.50rem; border-bottom:0.01rem solid #F1F1F1">'
						html +=
							'<div class="icon"><i class="iconfont icon-zaixianxuexi-shoujiduan-2" style="font-size:16px;color:#45AF58"></i></div>'
						html += '<div class="span1">' + res.data[i].attSrc + '</div>'
						html += '</li>'
					}
				}
				$(".stuAttList").append(html);
					$(".imgCheck1").click(function() {
					var result = ctxImgLocalStu + $(this).attr("data-attSrc");
					// $(this).find(".img3").attr("src", result);
					// $(this).find(".img3").css("display", "block");
					
					document.addEventListener("plusready", onPlusReady, false);
					var r = null; 
					// 扩展API加载完毕，现在可以正常调用扩展API 
					function onPlusReady() {	
					}
					plus.nativeUI.previewImage([result]);
					// 创建下载任务
					
				})
			}
		} else {
			console.log("暂无数据");
		}
	}, function(res, status) {

		console.log(status);
	})
}
/*
 *图片的预览","
 * 
 */
/*
 *取出数组中的元素，拼接成字符串","
 * 
 */
function arrToStr(arr) {
	var str = '';
	if (arr.length > 0) {
		for (var i = 0; i < arr.length; i++) {
			str += arr[i] + ",";
		}
		//去掉最后一个逗号(如果不需要去掉，就不用写)
		if (str.length > 0) {
			str = str.substr(0, str.length - 1);
		}
		return str;
	}
}

/*
 *判断API是否准备好，如果没有准备好，则监听plusReady
 */
function addListenPlusReady() {

	if (window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}
	function plusReady(){
		
	}
}
/*
 *老师文件的上传
 */
function upload(files, server, path) {
	if (files.length <= 0) {
		plus.nativeUI.alert('没有需要上传的文件！');
		return;
	} else {
		for (let i = 0; i < files.length; i++) {
			//plus.nativeUI.showWaiting("加载中");
			var task = plus.uploader.createUpload(server, {
					method: 'POST'
				},
				function(t, status) { //上传完成

					if (status == 200) {
						var data = JSON.parse(t.responseText);
						//获取到对应的地址
						filePath.push(data.data.src);
						plus.nativeUI.closeWaiting();
					} else {
						alert("上传失败：" + status);
						plus.nativeUI.closeWaiting();
					}
				}
			);
			task.addFile(path, {
				key: "file"
			});
			task.start();
		}
	}
}

/*
 *附件的实现
 */
function getAttachList() {
	//点击附件弹出下拉列表
	var uiActionsheet = bui.actionsheet({
		trigger: "#btnOpen",
		buttons: [{
			name: "视频",
			value: "video"
		}, {
			name: "拍照",
			value: "photograph"
		}, {
			name: "从相册选择照片",
			value: "album"
		}],
		callback: function(e) {
			var val = $(e.target).attr("value");
			if (val == "cancel") {
				this.hide();
			} else if (val == "album") {
				plus.gallery.pick(function(path) {
					var fe = document.getElementById("history");
					var le = document.getElementById("empty")
					var li = document.createElement("li");
					var filename = path.substr(path.lastIndexOf("/") + 1, path.length - 1);
					li.className = 'ditem';
					li.innerHTML =
						'<span class="iplay" onClick="scan()"><font class="aname"></font><font class="ainf"><img src="' + path +
						'" style="width:1.00rem;height:1.20rem;display:None;"></font></span>';

					fe.insertBefore(li, le.nextSibling);
					li.querySelector('.aname').innerText = filename;
					//appendChild() 方法向节点添加最后一个子节点。
					fe.appendChild(li);
					files.push({
						path: path
					});
					upload(files, server, path);
					index++;
				})
				this.hide();
			} else if (val == "photograph") {
				plus.camera.getCamera().captureImage(function(path) {
					var fe = document.getElementById("history");
					var le = document.getElementById("empty")
					var li = document.createElement("li");
					var filename = path.substr(path.lastIndexOf("/") + 1, path.length - 1);
					li.className = 'ditem';
					li.innerHTML =
						'<span class="iplay" onClick="scan()"><font class="aname"></font><font class="ainf"><img src="' + path +
						'" style="width:1.00rem;height:1.20rem;display:None;"></font></span>';

					fe.insertBefore(li, le.nextSibling);
					li.querySelector('.aname').innerText = filename;
					//appendChild() 方法向节点添加最后一个子节点。
					fe.appendChild(li);
					files.push({
						path: path
					});
					upload(files, server, path);
					index++;
				});
				this.hide();
			} else if (val == "video") {
				plus.gallery.pick(function(path) {
					var fe = document.getElementById("history");
					var le = document.getElementById("empty")
					var li = document.createElement("li");
					var filename = path.substr(path.lastIndexOf("/") + 1, path.length - 1);
					li.className = 'ditem';
					li.innerHTML =
						'<span class="iplay" onClick="scan()"><font class="aname"></font><font class="ainf"><img src="' + path +
						'" style="width:1.00rem;height:1.20rem;display:None;"></font></span>';

					fe.insertBefore(li, le.nextSibling);
					li.querySelector('.aname').innerText = filename;
					//appendChild() 方法向节点添加最后一个子节点。
					fe.appendChild(li);
					files.push({
						path: path
					});
					upload(files, server, path);
					index++;
				})
			}

		}


	})
}

function scan() {

	var result = $(".iplay").find("img").attr("src");
	document.addEventListener("plusready", onPlusReady, false);
	var r = null; 
	// 扩展API加载完毕，现在可以正常调用扩展API 
	function onPlusReady() {						
	
	}
	//图片的预览
	plus.nativeUI.previewImage([result]);
}
/*
 *附件的实现
 */
function getAttachListStu() {
	//点击附件弹出下拉列表
	var uiActionsheet = bui.actionsheet({
		trigger: "#btnOpen",
		buttons: [{
			name: "视频",
			value: "video"
		}, {
			name: "拍照",
			value: "photograph"
		}, {
			name: "从相册选择照片",
			value: "album"
		}],
		callback: function(e) {
			var val = $(e.target).attr("value");
			if (val == "cancel") {
				this.hide();
			} else if (val == "album") {
				plus.gallery.pick(function(path) {
					var fe = document.getElementById("history");
					var le = document.getElementById("empty")
					var li = document.createElement("li");
					var filename = path.substr(path.lastIndexOf("/") + 1, path.length - 1);
					li.className = 'ditem';
					li.innerHTML =
						'<span class="iplay" onClick="scan()"><font class="aname"></font><font class="ainf"><img src="' + path +
						'" style="width:1.00rem;height:1.50rem;display:None;"></font></span>';

					fe.insertBefore(li, le.nextSibling);
					li.querySelector('.aname').innerText = filename;
					//appendChild() 方法向节点添加最后一个子节点。
					fe.appendChild(li);
					files.push({
						path: path
					});
					upload(files, serverStu, path);
					index++;
				})
				this.hide();
			} else if (val == "photograph") {
				plus.camera.getCamera().captureImage(function(path) {
					var fe = document.getElementById("history");
					var le = document.getElementById("empty")
					var li = document.createElement("li");
					var filename = path.substr(path.lastIndexOf("/") + 1, path.length - 1);
					li.className = 'ditem';
					li.innerHTML =
						'<span class="iplay" onClick="scan()"><font class="aname"></font><font class="ainf"><img src="' + path +
						'" style="width:1.00rem;height:1.50rem;display:None;"></font></span>';

					fe.insertBefore(li, le.nextSibling);
					li.querySelector('.aname').innerText = filename;
					//appendChild() 方法向节点添加最后一个子节点。
					fe.appendChild(li);
					files.push({
						path: path
					});
					upload(files, serverStu, path);
					index++;
				});
				this.hide();
			} else if (val == "video") {
				plus.gallery.pick(function(path) {
					var fe = document.getElementById("history");
					var le = document.getElementById("empty")
					var li = document.createElement("li");
					var filename = path.substr(path.lastIndexOf("/") + 1, path.length - 1);
					li.className = 'ditem';
					li.innerHTML =
						'<span class="iplay" onClick="scan()"><font class="aname"></font><font class="ainf"><img src="' + path +
						'" style="width:1.00rem;height:1.50rem;display:None;"></font></span>';

					fe.insertBefore(li, le.nextSibling);
					li.querySelector('.aname').innerText = filename;
					//appendChild() 方法向节点添加最后一个子节点。
					fe.appendChild(li);
					files.push({
						path: path
					});
					upload(files, serverStu, path);
					index++;
				})
			}
		}
	})
}
/*
 * @name: getRootPath函数，获取项目路径
 * @Date: 在每次页面加载的时候优先执行该函数。
 * @params: getPara()获取url多个参数的函数
 * @return 对应参数的值
 */
function getRootPath() {
	var pathName = window.location.pathname.substring(1);
	var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
	return window.location.protocol + '//' + window.location.host + '/' + webName + '/';
}

/**
 * @param instr 文本内容
 * @param num 截取字符长度
 * @param c 后缀,默然"..."
 */
function cutString(instr, num, c) {
	if (instr != null) {
		if (instr.length < num) {
			return instr.substring(0, num + 1);
		} else {
			return instr.substring(0, num + 1) + c;
		}

	}
}
/*
 * @name: 获取到传过来的id
 * @Date: 2019-03-06 09:10:52 
 * @params: dataJson
 * @return
 */
function getUrlId() {
	var sear = location.search
	return sear.substring(sear.indexOf("=") + 1);
}
/*
 * @name: 获取想要的url传过来的参数的值
 * @Date: 2019-03-14 09:10:52 
 * @params: getPara()获取url多个参数的函数
 * @return 对应参数的值
 */
function getUrlParamValue(paramName) {
	var checked;
	var search = window.location.search;
	if (search.indexOf("?") > -1) {
		var result = [];
		var paraStr = search.split("?")[1];
		var paraItems = paraStr.split("&");
		for (var i = 0; i < paraItems.length; i++) {
			var paraKey = paraItems[i].split("=")[0];
			var paraValue = paraItems[i].split("=")[1];
			result.push({
				key: paraKey,
				value: paraValue
			})
		}
	} else {
		console.log("该URL中不含参数")
	}
	if (result != null && result != '') {
		result.forEach(function(item, index) {
			if (item.key == paramName) {
				checked = item.value;
			}

		})
		return checked;
	}


}
/*
 * @name: 时间转换函数
 * @Date: 2019-03-14 09:10:52 
 * @params: 
 * @return list
 */
function add0(m) {
	return m < 10 ? '0' + m : m
}

function format(shijianchuo) {
	var time = new Date(shijianchuo);
	var y = time.getFullYear();
	var m = time.getMonth() + 1;
	var d = time.getDate();
	return y + '.' + add0(m) + '.' + add0(d);
}
/*
 * @name: 附件
 * @Date: 2019-03-14 09:10:52 
 * @params: 
 * @return id
 */
function createAttachment(buildId) {
	$.ajax({
		url: getRootPath() + "backboneindex/getBuildAttchmentData.action",
		async: true,
		type: "post",
		dataType: "json",
		data: {
			buildId: buildId
		},
		error: function(e) {
			console.log(e);
		},
		success: function(res) {
			var html = "";
			html += "<ul class='attachmentList'>";
			if (res.code == 1) {
				for (var i = 0; i < res.data.length; i++) {
					html += "<li data-title='" + res.data[i].attchTitle + "'><img src='" + getRootPath() +
						"backBone/images/fujian.png' class='arrowTip'>" + res.data[i].attchTitle;
					html += "<a style='display:none' href='/schoolLog/" + res.data[i].attchPath + "'></a>";
					html += "</li>";
				}
				html += "</ul>"
				$(".common-detail-list").append(html);
				$(".attachmentList").on("click", "li", function(e) {
					var fileName = $(this).data("title");
					$.ajax({
						url: getRootPath() + "backboneindex/judeFileExists.action",
						async: true,
						type: "post",
						dataType: "json",
						data: {
							fileName: fileName
						},
						error: function(e) {
							console.log(e);
						},
						success: function(res) {
							if (res.code == 0) {
								alert(res.msg)

							} else if (res.code == 1) {
								location.href = "/schoolLog/" + fileName;
							}
						}
					})
				});

			}
		}
	})
}

/*
 * @name: 获取给每个详情页设置中间内容的大小
 * @Date: 2019-03-14 09:10:52 
 * @params: 
 * @return id
 */
function wHeight() {
	return document.documentElement.clientHeight;
}
/*
 * @name: 对每个页面中对应的lj-left进行页面返回操作
 * @Date: 2019-03-14 09:10:52 
 * @params: 
 * @return id
 */
function getBackHistory() {
	$(".lj-left").click(function() {
		//返回上个页面
		window.history.back(-1);
	})
}

/*
 * @name: 获取可视窗口的宽度
 * @Date: 2019-03-14 09:10:52 
 * @params: 
 * @return id
 */
function wWidth() {
	return document.documentElement.clientWidth;
}
