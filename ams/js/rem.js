var fontSize=100;
var designWidth=720;
function font(){
    var windowWidth = document.documentElement.clientWidth;
    var realFontsize = fontSize * windowWidth / designWidth;
    document.getElementsByTagName("html")[0].style.fontSize = realFontsize + "px";
    Vue.windowWidth = document.body.offsetWidth;
}
font();
window.onresize=font;
