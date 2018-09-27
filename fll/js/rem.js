var designWidth=750;
var fontSize=100;
function font(){
    //获取可视窗口的大小
    var windowWidth=document.documentElement.clientWidth;
    //比例换算
    var realFontsize=fontSize*windowWidth/designWidth;
    document.getElementsByTagName("html")[0].style.fontSize=realFontsize+"px";
}
font();
window.onresize=font;
