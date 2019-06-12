var fontSize=100;
var designWidth=750;
function font(){
    var windowWidth = document.documentElement.clientWidth;
    var realFontsize = fontSize * windowWidth / designWidth;
    document.getElementsByTagName("html")[0].style.fontSize = realFontsize + "px";;
}
font();
window.onresize=font;
