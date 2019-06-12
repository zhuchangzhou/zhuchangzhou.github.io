var ss = '';
document.addEventListener("plusready", function(){

plus.share.getServices(function(s) {  
shares = ss;  
	for (var i in ss ) {  
		var s = ss[i];  
		var item = document.createElement("li");  
		item.setAttribute("class", "ditem");  
		item.setAttribute("onclick", (s.id == "weixin") ? "shareWeiXin(this.plusShare)" : "shareAction(this.plusShare)");  
		item.innerText = s.description;  
		item.plusShare = s;  
		list.appendChild(item);  
	}  
}, function(e) {  
alert("获取分享服务列表失败：" + e.message);  
});  
}, false );


function shareAction(s, ex) {  
outSet("分享操作：");  
if (!s) {  
    outLine("无效的分享服务！");  
    return;  
}  
if (s.authenticated) {  
    outLine("---已授权---");  
    shareMessage(s, ex);  
} else {  
    outLine("---未授权---");  
    s.authorize(function() {  
        shareMessage(s, ex);  
    }, function(e) {  
        outLine("认证授权失败：" + e.code + " - " + e.message);  
    });  
}  
}  

function shareMessage(s,ex){  
var msg={content:sharecontent.value,extra:{scene:ex}};  
if(pic&&pic.realUrl){  
    msg.pictures=[pic.realUrl];  
}  

s.send( msg, function(){  
    alert( "分享到\""+s.description+"\"成功！ " );  
}, function(e){  
    alert( "分享到\""+s.description+"\"失败: "+e.code+" - "+e.message );  
} );  
}  
function cancelAuth(){try{  

for ( var i in shares ) {  
    var s = shares[i];  
    if ( s.authenticated ) {  
        outLine( "取消\""+s.description+"\"");  
    }  
    s.forbid();  
}  
// 取消授权后需要更新服务列表  
updateServices();  
outLine( "操作成功！" );}catch(e){alert(e);}  
}  