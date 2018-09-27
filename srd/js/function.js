/**
 * Created by duodi on 2017/9/5.
 */

/*-----------------------------IE8类名兼容----------------------------*/
// function getEle(n){
//     if(document.getElementById(n)){
//         return document.getElementById(n);
//     }
//     else if(document.getElementsByTagName(n).length){
//         return document.getElementsByTagName(n);
//     }
//     else{
//         if(document.getElementsByClassName){                //判断游览器
//             return document.getElementsByClassName(n)
//         }
//         else{                                              //IE8以下处理
//             var all=document.getElementsByTagName("*");
//             var arr=[];
//             var j=0;
//             for(var i=0;i<all.length;i++){
//                 if(all[i].className==n){
//                     arr[j]=all[i];
//                     j++;
//                 }
//             }
//             return arr;
//         }
//     }
// }
// * 为IE6 IE7 IE8增加document.getElementsByClassName函数 */
// /MSIE\s*(\d+)/i.test(navigator.userAgent);
// var isIE=parseInt(RegExp.$1?RegExp.$1:0);
// if(isIE>0&&isIE<9){
//     document.getElementsByClassName=function(cls){
//         var els=this.getElementsByTagName('*');
//         var ell=els.length;
//         var elements=[];
//         for(var n=0;n<ell;n++){
//             var oCls=els[n].className||'';
//             if(oCls.indexOf(cls)<0)        continue;
//             oCls=oCls.split(/\s+/);
//             var oCll=oCls.length;
//             for(var j=0;j<oCll;j++){
//                 if(cls==oCls[j]){
//                     elements.push(els[n]);
//                     break;
//                 }
//             }
//         }
//         return elements;
//     }
// }
function $(select){
    if(select.indexOf(".")==-1&&select.indexOf("#")==-1){
        return document.getElementsByTagName(select);
    }
    if(select.indexOf("#")!=-1){
        return document.getElementById(select.slice(1));
    }
    if(select.indexOf(".")!=-1){
        var all=document.getElementsByTagName("*");
        var arr=[];
        var num=0;
        for(var i=0;i<all.length;i++){
            if(all[i].className==select.slice(1)){
                arr[num]=all[i];
                num++;
            }
        }
        return arr;
    }
}
    // var box= getEle("div");                             //调用
    // box[0].style.background="red";


/*-----------------------------选项卡----------------------------*/
function xuanxiangka(nav_btn,mune){                         //两参数：按钮li及对应的菜单li
    // var nav_btn=document.getElementsByClassName("nav_btn1");
    // var mune=document.getElementsByClassName("mune1");
    for(var i=0;i<nav_btn.length;i++){
        nav_btn[i].index=i;
        nav_btn[i].onmousemove=function(){
            for(var j=0; j<mune.length; j++){
                mune[j].style.display="none";
            }
            mune[this.index].style.display="block";
        }
    }
}

/*---------------------------获取游览器位置--------------------------*/
function getX(){
    return window.screenX|| window.screenLeft;             //现代游览器||IE chrome
}
function getY(){
    return window.screenY|| window.screenTop;
}
// console.log(getX(),getY());                                   //调用

/*---------------------------获取游览器大小--------------------------*/
function width(){
    return window.innerWidth||document.documentElement.clientWidth;
}
function height(){
    return window.innerHeight||document.documentElement.clientHeight;
}
// console.log(width(),height());                                //调用

/*---------------------------获取元素内容--------------------------*/
function getText(obj){
    return obj.textContent||obj.innerText;
}
// var obj=getEle("#bigbox");                                    //调用
// console.log(getText(obj));

/*---------------------------获取css样式集合--------------------------*/
function getStyle(ele,attr){
    return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr]; //FF,chrome,safari|| IE,Opera
}
// var obj1=getEle("#bigbox");                                   //调用获取其中一个样式的值
// console.log(getStyle(obj1).width);

/*---------------------------获取子元素--------------------------*/
function getChild(ele){
    var child=ele.childNodes;
    var arr=[];
    var j=0;
    for(var i=0;i<child.length; i++){
        if(child[i].nodeType==1){
            arr[j]=child[i];
            j++
        }
    }
    return arr;
}
function getFirst(ele){
    return getChild(ele)[0];
}
function getLast(ele){
    return getChild(ele)[getChild(ele).length-1];
}
// var btn=getEle(".nav_btn")[0];                                       //调用
// console.log(getLast(btn));

/*---------------------------获取可视窗口--------------------------*/
function getWindow(){
    document.documentElement.scrollTop=1;
    if(document.documentElement.scrollTop==1){
        return document.documentElement;
    }
    else{
        return document.body;
    }
}

/*---------------------------添加事件监听--------------------------*/
function addEvent(obj,event,handler){
    if(obj.addEventListener){
        return obj.addEventListener(event,handler,false)
    }
    else{
        return obj.attachEvent("on"+event,handler);
    }
}
/*---------------------------删除事件监听--------------------------*/
function removeEvent(obj,event,handler){
    if(obj.removeEventListener()){
        return obj.removeEvent(event,handler,false)
    }
    else{
        return obj.detach("on"+event,handler)
    }
}


/*---------------------------淘宝的无缝轮播--------------------------*/
function lunbo2(banner,width){                      //参数（最外的banner盒子，banner的宽度）排版顺序：banner>(imgbox_ul>li)~(btnbox_ul>li)~prev~next
    var imgbox=banner.children[0];
    var btnbox=banner.children[1];
    var prev=banner.children[2];
    var next=banner.children[3];
    var t=setInterval(move,2000);
    var num=1;
    var flag=true;
    var flag1=true;
//自动轮播
    function move(){
        num++;
        if(num==btnbox.children.length+1){
            imgbox.style.left=0;
            num=1;
        }
        animate(imgbox,{left:-1*width*num},500,function(){
            for(var i=0;i<btnbox.children.length;i++){
                btnbox.children[i].style.background="white";
            }
            btnbox.children[num-1].style.background="red";
            flag=true;
        });
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
    }
//选项卡点击按钮
    for(var j=0;j<btnbox.children.length;j++){
        imgbox.children[j].index=j;
        btnbox.children[j].index=j;
        btnbox.children[j].onclick=function(){
            animate(imgbox,{left:-1*width*(this.index+1)},500)
            for(var i=0;i<btnbox.children.length;i++){
                btnbox.children[i].style.background="white";
            }
            btnbox.children[this.index].style.background="red";
        }
    }
//下一个按钮
    next.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
//上一个按钮
    prev.onclick=function(){
        if(flag1)
        {
            flag1=false;
            num--;
            if(num==0){
                imgbox.style.left=-2600+"px";
                num=4;
            }
            animate(imgbox,{left:-1*width*num},500,function(){
                flag1=true;
                for(var i=0;i<btnbox.children.length;i++){
                    btnbox.children[i].style.background="white";
                }
                btnbox.children[num-1].style.background="red";
            });
        }
    }
}

/*---------------------------中国移动的无缝轮播--------------------------*/
function lunbo(banner,imgWadd){                //参数（最外面的banner盒子，图片的宽度加上右边距）排版顺序：banner>(innerbox>imgbox_ul>li)~prev~next~(mask>mask_bg~video)
    var ul=banner.children[0].children[0];
    var prev=banner.children[1];
    var next=banner.children[2];
    var mask=banner.children[3];
    var mask_bg=getFirst(getChild(banner)[3]);
    var flag = true;
    var flag1= true;
    //    自动轮播
    var t=setInterval(move,2000);
    function move(){
        animate(ul,{marginLeft:-1*imgWadd},500,function(){
            var first=ul.children[0];
            ul.appendChild(first);
            ul.style.marginLeft=0;
            flag=true;
            flag1=true;
        })
    }
//    鼠标移上离开效果
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
    }

    //右箭头
    next.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    //左箭头
    prev.onclick=function(){
        if(flag1){
            flag1=false;
            animate(ul,{marginLeft:0},500,function(){
//            var first=ul.firstElementChild;
//            var last=ul.lastElementChild;
                var first=ul.children[0];
                var last=ul.lastChild;
                ul.insertBefore(last,first);
                ul.style.marginLeft=-210+"px";
                flag1=true;
            })
        }
    }
    //弹出遮罩
    mask.style.width=width()+"px";
    mask.style.height=height()+"px";
    for(var j=0;j<ul.children.length;j++){
        li[j].onclick=function(){
            mask.style.display="block";
        }
    }
    mask_bg.onclick=function(){
        mask.style.display="none";
    }
}

/*---------------------------滚轮事件--------------------------*/
function mouseWheel(obj,upfun,downfun){
    if(obj.addEventListener){                                  //判断游览器
        obj.addEventListener("mousewheel",scrollfun,false);    //谷歌（可以这样:window.onmousewheel=function(e){var ev=e||window.event})
        obj.addEventListener("DOMMouseScroll",scrollfun,false);//火狐（只识别DOMMouseScroll需绑定事件监听）
    }
    else{
        obj.attachEvent("onmousewheel",scrollfun);        //IE
    }
    function scrollfun(e){
        var ev=e||window.event;
        var dir=ev.derail||ev.wheelDelta;
        if(dir==120||dir==3){                                //IE,谷歌||火狐
            upfun.call(obj);
        }
        else{
            downfun.call(obj);
        }
    }
}
/*---------------------------淡出的轮播--------------------------*/
function lunbo3(banner){                          //参数（最外面的banner盒子）排版顺序：banner>(innerbox>imgbox_ul>li)~prev~next
    var banner_img=banner.children[0];
    var ba_im_li=banner_img.children;
    var btn=banner.children[1];
    var btn_li=btn.children;
    var prev=banner.children[2];
    var next=banner.children[3];
    var num=0;
    var t = setInterval(move,2000);
    function move(){
        num++
        if(num==ba_im_li.length){
            num=0;
        }
        for(var i=0;i<ba_im_li.length;i++){
            ba_im_li[i].style.display="none";
            btn_li[i].setAttribute("class","")
        }
        ba_im_li[num].style.display="block";
        btn_li[num].setAttribute("class","current");
    }
    hover(banner,function () {
        clearInterval(t)
    },
    function () {
        t=setInterval(move,2000)
    }
    )
    for(var j=0;j<btn_li.length; j++){
        btn_li[j].index=j;
        btn_li[j].onmouseover=function(){
            num=this.index;
            for(var i=0;i<ba_im_li.length;i++){
                ba_im_li[i].style.display="none";
                btn_li[i].setAttribute("class","")
            }
            ba_im_li[num].style.display="block";
            btn_li[num].setAttribute("class","current");
        }
    }
    prev.onclick=function(){
        num--;
        if(num<=-1){
            num=2;
        }
        for(var i=0;i<ba_im_li.length;i++){
            ba_im_li[i].style.display="none";
            btn_li[i].setAttribute("class","")
        }
        ba_im_li[num].style.display="block";
        btn_li[num].setAttribute("class","current");
    }
    next.onclick=function(){
        move();
    }
}

/*---------------------------消除事件流的函数hover--------------------------*/
//判断某个元素是否包含有另外一个元素
function contains(parent,child){
    if(parent.contains){                        //都支持
        return parent.contains(child)&&parent!=child;
    }else{
        return (parent.compareDocumentPosition(child)===20)     //IE不识别，二在一内16 + 一在二前4
    }
}
//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover(e,target){
    var ev=e||window.event;
    if(ev.type=="mouseover"){
        return !contains(target,ev.relatedTarget || ev.fromElement)&&   //relatedTarget:IE不支持|| from/toElement:FF不支持
            !((ev.relatedTarget || ev.fromElement)===target)
    }else{
        return !contains(target,ev.relatedTarget|| ev.toElement)&& 
            !((ev.relatedTarget|| ev.toElement)===target)
    }
}
//鼠标移入移出事件
/*obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数*/
function hover(obj,overfun,outfun){
    if(overfun){
        obj.onmouseover=function(e){
            if(checkHover(e,obj)){
                overfun.call(obj,[e]);
            }
        }
    }
    if(outfun){
        obj.onmouseout=function(e){
            if(checkHover(e,obj)){
                outfun.call(obj,[e]);
            }
        }
    }
}

//日期
function DateSelector(selYear, selMonth, selDay) {//定义函数
    this.selYear = selYear;
    this.selMonth = selMonth;
    this.selDay = selDay;
    this.selYear.Group = this;
    this.selMonth.Group = this;
// 给年份、月份下拉菜单添加处理onchange事件的函数
    if (window.document.all != null) // IE
    {
        this.selYear.attachEvent("onchange", DateSelector.Onchange);
        this.selMonth.attachEvent("onchange", DateSelector.Onchange);
    }
    else // Firefox
    {
        this.selYear.addEventListener("change", DateSelector.Onchange, false);
        this.selMonth.addEventListener("change", DateSelector.Onchange, false);
    }
    if (arguments.length == 4) // 如果传入参数个数为4，最后一个参数必须为Date对象
        this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate());
    else if (arguments.length == 6) // 如果传入参数个数为6，最后三个参数必须为初始的年月日数值
        this.InitSelector(arguments[3], arguments[4], arguments[5]);
    else // 默认使用当前日期
    {
        var dt = new Date();
        this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
}
// 增加一个最小年份的属性--最老年份
DateSelector.prototype.MinYear = 1960;
// 增加一个最大年份的属性--最新年份，即当前时期getFullYear()
DateSelector.prototype.MaxYear = (new Date()).getFullYear();
// 初始化年份
DateSelector.prototype.InitYearSelect = function () {
// 循环添加OPION元素到年份select对象中
    for (var i = this.MaxYear; i >= this.MinYear; i--) {
// 新建一个OPTION对象
        var op = window.document.createElement("OPTION");
// 设置OPTION对象的值
        op.value = i;
// 设置OPTION对象的内容
        op.innerHTML = i;
// 添加到年份select对象
        this.selYear.appendChild(op);
    }
}
// 初始化月份
DateSelector.prototype.InitMonthSelect = function () {
// 循环添加OPION元素到月份select对象中
    for (var i = 1; i < 13; i++) {
// 新建一个OPTION对象
        var op = window.document.createElement("OPTION");
// 设置OPTION对象的值
        op.value = i;
// 设置OPTION对象的内容
        op.innerHTML = i;
// 添加到月份select对象
        this.selMonth.appendChild(op);
    }
}
// 根据年份与月份获取当月的天数
DateSelector.DaysInMonth = function (year, month) {
    var date = new Date(year, month, 0);
    return date.getDate();
}
// 初始化天数
DateSelector.prototype.InitDaySelect = function () {
// 使用parseInt函数获取当前的年份和月份
    var year = parseInt(this.selYear.value);
    var month = parseInt(this.selMonth.value);
// 获取当月的天数
    var daysInMonth = DateSelector.DaysInMonth(year, month);
// 清空原有的选项
    this.selDay.options.length = 0;
// 循环添加OPION元素到天数select对象中
    for (var i = 1; i <= daysInMonth; i++) {
// 新建一个OPTION对象
        var op = window.document.createElement("OPTION");
// 设置OPTION对象的值
        op.value = i;
// 设置OPTION对象的内容
        op.innerHTML = i;
// 添加到天数select对象
        this.selDay.appendChild(op);
    }
}
// 处理年份和月份onchange事件的方法，它获取事件来源对象（即selYear或selMonth）
// 并调用它的Group对象（即DateSelector实例，请见构造函数）提供的InitDaySelect方法重新初始化天数
// 参数e为event对象
DateSelector.Onchange = function (e) {
    var selector = window.document.all != null ? e.srcElement : e.target;
    selector.Group.InitDaySelect();
}
// 根据参数初始化下拉菜单选项
DateSelector.prototype.InitSelector = function (year, month, day) {
// 由于外部是可以调用这个方法，因此我们在这里也要将selYear和selMonth的选项清空掉
// 另外因为InitDaySelect方法已经有清空天数下拉菜单，因此这里就不用重复工作了
    this.selYear.options.length = 0;
    this.selMonth.options.length = 0;
// 初始化年、月
    this.InitYearSelect();
    this.InitMonthSelect();
// 设置年、月初始值
    this.selYear.selectedIndex = this.MaxYear - year;
    this.selMonth.selectedIndex = month - 1;
// 初始化天数
    this.InitDaySelect();
// 设置天数初始值
    this.selDay.selectedIndex = day - 1;
}












