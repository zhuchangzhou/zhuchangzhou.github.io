/**
 * Created by duodi on 2017/12/7.
 */
// 商品添加或减少
$(function () {
    $(document).ready(function(){
        var add,reduce,num,num_txt;
        add=$(".jia");
        reduce=$(".jian");
        num="";
        num_txt=$(".text");
        add.click(function(){
            num = $(".text").val();
            num++;
            num_txt.val(num);
            if(num>=303){
                num_txt.val(303);
            }
        });
        reduce.click(function(){
            num = $(".text").val();
            if(num >0){
                if(num==1){
                    num--;
                    num_txt.val(1);
                }else{
                    num--;
                    num_txt.val(num);
                }
            }
        });
    });
})
//选项卡
$(".pro_banner_btn").on("click","li",function () {
    $(this).addClass("on");
    $(".pro_banner_btn").children('li').not(this).removeClass("on");
})
function lunbo() {
    var ul=$(".pro_banner_btn")[0];
    var pro_img=$(".mod")[0].children[0];
    var pro_img_big=$(".mZoom")[0].children[0];
    var li=ul.children;
    for(var i=0;i<li.length;i++){
        li.index=i;
        li[i].onclick=function(){
            var src=this.children[0].src;
            pro_img.setAttribute("src",src);
            pro_img_big.setAttribute("src",src);
        }
    }
    function move() {
        animate(ul,{marginLeft:-178},function () {
            var first=ul.firstElementChild;
            ul.appendChild(first);
            ul.style.marginLeft=0;
            flag=true;
        })
    }
    //    左右箭头
    var next=$(".pro_next")[0];
    var prev=$(".pro_prev")[0];
    var flag=true;
    var flag1=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            move()
        }
    }
    prev.onclick=function () {
        if(flag1){
            flag1=false;
            animate(ul,{marginLeft:178},function () {
                var last=ul.lastElementChild;
                var first=ul.firstElementChild;
                ul.insertBefore(last,first);
                ul.style.marginLeft=0;
                flag1=true;
            })
        }
    }
}
lunbo();
//全选/单选
$(function () {
    $(".com_xz ul").on("click", "li", function () {
        if ($(this).find("input").is(":checked")) {
            $(this).find("input").prop("checked", true);
            $(this).find("div").addClass("on");
        } else {
            $(".com_xz ul li").not($(this)).find("input").prop("checked", false);
            $(".com_xz ul li").not($(this)).find("div").removeClass("on");
        }
    })
})
//点赞/回复
$(function(){
    var f=true;
    $(".comment").on("click",".upvote",function(){
        var num=$(this).children("p").children("span").html();
        if(f){
            num++;
            $(this).children("p").children("span").html(num);
            $(this).children("p").css({
                color:"#F71D1D"
            })
        }
        if(f=!f){
            num--;
            $(this).children("p").children("span").html(num);
            $(this).children("p").css({
                color:"#707070"
            })
        }
    });
    $(".comment").on("click",".reply",function(){
        $(this).parent().parent().children("textarea").show();
        var text=$(this).parent().parent().children("textarea")[0];
        var liuyan=$(this).parent().parent().children(".liuyan")[0];
        var num=$(this).children("p").children("span").html();
        var span=$(this).children("p").children("span");
        window.onkeydown=function(e){
            var ev=e||window.event;
            var val=text.value;
            liuyan.innerHTML="";
            if(ev.keyCode==13){
                liuyan.innerHTML=val;
                text.style.display="none";
                num++;
                span.html(num);
                text.value="";
            }
        }
    })
})
// 点击切换
$(function () {
    $(".proDetail .detail li:first-child+li").click(function(){
        $(".proDetail").css({
            display:"none"
        });
        $(".comDetail").css({
            display:"block"
        });
        $(".parameter").css({
            display:"none"
        })
    });
    $(".proDetail .detail li:first-child+li+li").click(function(){
        $(".proDetail").css({
            display:"none"
        });
        $(".comDetail").css({
            display:"none"
        });
        $(".parameter").css({
            display:"block"
        })
    });
    $(".comDetail .detail li:first-child").click(function(){
        $(".comDetail").css({
            display:"none"
        });
        $(".proDetail").css({
            display:"block"
        });
        $(".parameter").css({
            display:"none"
        })
    });
    $(".comDetail .detail li:first-child+li+li").click(function(){
        $(".comDetail").css({
            display:"none"
        });
        $(".proDetail").css({
            display:"none"
        });
        $(".parameter").css({
            display:"block"
        })
    });
    $(".parameter .detail li:first-child").click(function(){
        $(".comDetail").css({
            display:"none"
        });
        $(".proDetail").css({
            display:"block"
        });
        $(".parameter").css({
            display:"none"
        })
    });
    $(".parameter .detail li:first-child+li").click(function(){
        $(".comDetail").css({
            display:"block"
        });
        $(".proDetail").css({
            display:"none"
        });
        $(".parameter").css({
            display:"none"
        })
    });
})
//立即购买信息
$(function () {
    function get() {
        var arr=[];
        if(localStorage.orlist==undefined){
            arr=[];
        }else{
            arr=JSON.parse(localStorage.orlist)
        }
        return arr;
    }
    function save(order){
        localStorage.orlist=JSON.stringify(order);
    };
// 跳转|立即购买
    $(".shop-now").click(function () {
        var order=get();
        var num=$(".text").val();
        $(".gwc div").html(order.length+1);
        var pr=$(".info ul li:first-child").html();
        var jg=pr.slice(4,8);
        var t="("+order.length+")";
        var comBuy={
            order_title:$(".info h1").html()+t,
            order_price:"￥"+jg+".00",
            order_number:num,
            order_money:"￥"+jg*num+".00"
        };
        order.push(comBuy);
        save(order);
        location.href="confirm_order.html";
    });
})
// 购物车数据
$(function () {
    function getData() {
        var cart=[];
        if(localStorage.tdlist==undefined){
            cart=[];
        }else{
            cart=JSON.parse(localStorage.tdlist)
        }
        return cart;
    }
    function saveData(data){
        localStorage.tdlist=JSON.stringify(data);
    };
// 添加商品至购物车
    $(".add-cart").click(function () {
        var data=getData();
        var num=$(".text").val();
        $(".gwc div").html(data.length+1);
        var pr=$(".info ul li:first-child").html();
        var jg=pr.slice(4,8);
        var t="("+data.length+")";
        var shop={
            shop_title:$(".info h1").html()+t,
            number:num,
            price:jg,
            lg:data.length+1
        };
        data.push(shop);
        saveData(data);
        alert("已成功加入购物车")
    });
})
//放大镜
function PhotoZoomer(elements){
    this.mask = elements.mask; //蒙版
    this.container = elements.container //原图容器
    this.originimg = elements.originimg; //原图
    this.eventproxy = elements.eventproxy;
    this.bigContainer = elements.bigContainer; //大图容器
    this.bigimg = elements.bigimg; //大图
    this.visible = false;
    this._bind();
}
var win_scroll_top=0;   //滚动条滚动的高度
$(window).scroll(function(){
    win_scroll_top=$(window).scrollTop();
})
PhotoZoomer.prototype = {
    display: function(style){
        var self = this;
        self.mask.style.display = style;
        self.bigContainer.style.display = style;
    },
    //计算放大蒙版位置
    zoom: function(clientX, clientY){
        var self = this,
        //位置比例
            rate = {},
        //放大蒙版最大活动范围
            maxrange = {
                offsetLeft: self.container.offsetWidth - self.mask.offsetWidth,
                offsetTop: self.container.offsetHeight - self.mask.offsetHeight
            },
        //mask left
            left = clientX - self.container.offsetLeft - self.mask.offsetWidth/2,
        //mask top
            top =clientY + win_scroll_top - self.container.offsetTop - self.mask.offsetHeight/2;

        if(left < 0) {
            left = 0;
        }else if(left> maxrange.offsetLeft) {
            left = maxrange.offsetLeft;
        }

        if(top < 0) {
            top = 0;
        }else if(top > maxrange.offsetTop){
            top = maxrange.offsetTop;
        }
        //alert(maxrange.offsetTop);
        rate.left = left / maxrange.offsetLeft;
        rate.top = top / maxrange.offsetTop;
        self.mask.style.left = left + 'px';
        self.mask.style.top = top + 'px';

        self.bigimg.style.left = -rate.left * (self.bigimg.offsetWidth - self.bigContainer.offsetWidth) + "px";
        self.bigimg.style.top = -rate.top * (self.bigimg.offsetHeight - self.bigContainer.offsetHeight) + "px";
    },
    _bind: function(){
        var self = this;
        self.container.onmouseover = function(e){
            e = e || window.event;
            var target = e.targe || e.srcElement;
            self.display("block");
            this.visible = true;
        };
        self.container.onmouseout = function(e){
            e = e || window.event;
            var target = e.targe || e.srcElement;
            self.display("none");
            this.visible = false;
        };
        self.container.onmousemove = function(e){
            e = e || window.event;
            if(!this.visible )return;//防止元素大小计算错误
            self.zoom(e.clientX, e.clientY);
        };
    }
};
function get(id){
    return document.getElementById(id)
}
var elements = {
    mask: get("m"),
    container: get("p1"),
    originimg: get("z1"),
    bigContainer: get("p2"),
    bigimg: get("z2"),
    eventproxy: get("eventproxy")
};
var zoomer = new PhotoZoomer(elements);
// alert(elements.container.offsetParent.tagName)
var head=document.querySelector(".head");
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
