//添加可编辑地址
$(".container h2").click(function () {
    $(".add").show()
})
//本地存储
function getData() {
    var add=[];
    if(localStorage.address==undefined){
        add=[];
    }else{
        add=JSON.parse(localStorage.address)
    }
    return add;
}
function saveData(data) {
    localStorage.address=JSON.stringify(data);
}
//重新编辑
function reWrite() {
    var data=getData();
    $("tr:not(tr:first,tr:last)").remove();
    $.each(data,function (index,value) {
        $("<tr class='table_add' align='center'>").attr("index",index).html(
            '<td data-role="name" onchange="checkUser(this.innerHTML)" contenteditable="false">'+value.name+'</td>\n'+
            '<td data-role="addr" onchange="checkAddr(this.innerHTML)" contenteditable="false">'+value.addr+'</td>\n'+
            '<td data-role="aress" onchange="checkAress(this.innerHTML)" contenteditable="false">'+value.aress+'</td>\n'+
            '<td data-role="phone" onblur="checkPhone(this.innerHTML)" contenteditable="false">'+value.phone+'</td>\n'+
            '<td data-role="email" onblur="checkEmail(this.innerHTML)" contenteditable="false">'+value.email+'</td>\n'+
            '<td class="current">\n'+
            '<input type="button" value="编辑" class="redact" >\n'+
            '<input type="button" value="删除" class="del">\n'+
            '<input type="button" value="设为默认" class="default">\n'+
            '</td>\n'
        ).insertBefore("table tr:last-child")
    });
    saveData(data)
}
reWrite();
$(".add").click(function(){
    var data=getData();
    data.push({name:"",addr:"",aress:"",phone:"",email:""});
    saveData(data);
    reWrite();
});
var flag1=true,flag2=true,flag3=true,flag4=true,flag5=true;
$("table").on("click",".del", function() {
    var data=getData();
    var index=$(this).parent().attr("index");
    data.splice(index,1);
    saveData(data);
    reWrite();
});
//编辑
$("table").on("click",".redact",function () {
    $(this).parents("tr").find("td").attr("contentEditable",true)
});
$("table").on("blur","[contentEditable='true']",function () {
    var data=getData();
    var index=$(this).parent().attr("index");
    var val=$(this).html();
    var attr=$(this).attr("data-role");
    data[index][attr]=val;
    saveData(data);
    // reWrite()
});
function checkUser(v) {
    var reg= /^[\u4E00-\u9FA5A-Za-z]+$/;
    var nameTip=v;
    if(reg.test(nameTip)==true){
        $(".table_add td:first-child").css({
            color:"#8D2628"
        })
        flag1=true
        return;
    }else if(reg.test(nameTip)==false){
        alert("您输入的姓名格式不正确");
        flag1=false;
        return;
    }
}
function checkAddr(v) {
    var addrTip=v;
    if(addrTip==""){
        alert("请输入所在地区，不能为空");
        flag2=false;
        return;
    }else{
        $(".table_add td:first-child+td").css({
            color:"#8D2628"
        })
        flag2=true;
        return;
    }
}
function checkAress(v) {
    var aressTip=v;
    if(aressTip==""){
        alert("请输入所在地区，不能为空");
        flag3=false;
        return;
    }else{
        $(".table_add td:first-child+td+td").css({
            color:"#8D2628"
        })
        flag3=true;
        return;
    }
}
function checkPhone(v) {
    var p_reg=/^1[3|4|5|7|8]\d{9}$/;
    var phoneTip=v;
    if(phoneTip==""){
        alert("请填写您的联系电话");
        flag4=false;
        return;
    }else if(p_reg.test(phoneTip)==true){
        $(".table_add td:nth-child(4)").css({
            color:"#8D2628"
        })
        flag4=true;
        return;
    }else if(p_reg.test(phoneTip)==false){
        alert("请输入真实的联系方式");
        flag4=false;
        $(".table_add td:nth-child(4)").html("");
        return;
    }
}
function checkEmail(v) {
    var e_reg=/[1-9]\d{5}(?!\d)/;
    var emailTip=v;
    if(emailTip==""){
        flag5=false;
        alert("请填写您的邮编");
    }else if(e_reg.test(emailTip)==true){
        $(".table_add td:nth-child(5)").css({
            color:"#8D2628"
        })
        flag5=true;
        return;
    }else if(e_reg.test(emailTip)==false){
        alert("您填写的邮编格式不正确");
        flag5=false;
        $(".table_add td:nth-child(5)").html("");
        return;
    }
}
function checkForm() {
    return checkUser() && checkAress() && checkAddr() && checkPhone() && checkEmail()
}
//登录
function getLogin() {
    var cart=[];
    if(localStorage.hhd==undefined){
        cart=[];
    }else{
        cart=JSON.parse(localStorage.hhd)
    }
    return cart;
}
var item=getLogin();
var userId=item[0].zh;
if(!userId){
    alert("请先登录！");
    location.href="login.html";
}else {
    $(".top .container .left a:nth-child(2)").html("<a href='user.html'>" + userId + "</a>");
    $(".top .container .left span").html("");
    $(".top .container .left a:nth-child(4)").html("<a href='login.html'>[退出]</a>");
    $(".top .container .left a:nth-child(2)").click(function () {
        location.href="user.html"
    })
}