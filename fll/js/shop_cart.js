// 点击checkbox
// function aa(){
//     $("label").on("tap",function(){
//         if(!$(this).children()[0].checked){
//             $(this).css({"background":"url('img/shop_cart_01.png')","background-size":"100% 100%"});
//         }
//         else{
//             $(this).css({"background":"url('img/shop_cart_03.png')","background-size":"100% 100%"});
//         }
//     })
// }
// aa()
//本地存储设置和获取数据
function getShop(){
    var arr=[];
    if(localStorage.shoplist==undefined){
        arr=[];

    }
    else{
        arr=JSON.parse( localStorage.shoplist)
    }
    return arr;
}

function setShop(data){
    localStorage.shoplist=JSON.stringify( data)
}
// 点击结算跳到确认订单页
$(".account").on("tap",function(){
    location.href="confirm_order.html";
})
//动态生成标签
function addList(){
    // 清空pro_list里的ul  empty()函数将会移除每个匹配元素的所有子节点
    $(".pro_list").empty();
    let data=getShop();
    $.each(data,function(v,i){
        $(".pro_list").append("<ul><li><label class='gener'><input type='checkbox' checked></label></li>"
        +"<li><a href='###'><img src='img/shop_cart_02.png' alt=''></a></li>"
        +"<li><h3>"+i.name+"</h3><h4>"+i.type+"</h4><p><i>"+i.price+"</i></p><span class='number-reduce'>-</span><input type='text' class='number' value='"+i.num+"'><span class='number-increase'>+</span><h5>共￥<b class='zongjia'></b></h5><a href='###' class='delete'><img src='img/delete.png' alt=''></a></li></ul>"
        );
    })
}
addList()
// 结算的数据函数
count();
function count(){
    let all=0;
    let num=0;
    //console.log($(".pro_list ul").find("input"));
    $(".pro_list ul li .gener").find("input").each(function(v,i){
        //console.log(i.checked);
        //console.log($(this).parent().parent().parent().find("li").find(".number").val());
        //console.log($(this).parent().parent().parent().find("li").find("p").find("i").text());
        if(i.checked==true){
            num+=Number($(i).parent().parent().parent().find("li").find(".number").val());
            all+=num*parseFloat($(i).parent().parent().parent().find("p").find("i").text()).toFixed(2);
            //console.log(num,all);
            $(i).parent().parent().parent().find("li").find("h5").find(".zongjia").text(all);
        }
    })
    $(".total span b").text(num);
    $(".total p i").text(all);
}
// 数量发生改变的时候，价钱也发生改变   keyup?
$(".pro_list").on("keyup",".number",function(){
    //alert(1);
    // isNaN 函数用来确定一个值是否为NaN? 去掉零的情况x是数字返回false，返回true表示非数字
    //console.log(isNaN($(this).val()));
    //用两种方法来实现
    //用reg.test()来实现
    // var reg=/^([1-9][0-9]*)$/;
    // console.log(reg.test($(this).val()))
    // if(reg.test($(this).val())==false){
    //     $(this).val($(this).val().slice(0,-1));
    // }
    // $(this).val().replace(reg,"");
    let reg=/\D/;
    let data1=$(this).val().replace(reg,"");
    $(this).val(data1); 
});
$(".pro_list").on("change",".number",function(){
    let num=$(this).val();
    // console.log($(this).parent().find("p").find("i").text());
    //字符串——数字
    let num_total=parseInt(num)*$(this).parent().find("p").find("i").text();
    $(this).parent().find("h5").find("b").text(num_total);
    count();
})

// 点击加的时候
$(".pro_list").on("tap",".number-increase",function(){
    //alert(1);
    // console.log($(this).prev().val());
    // console.log($(this).parent().parent().index());
    //找到当前的ul对应的索引值和购买数量
    let num=$(this).prev().val();
    let index=$(this).parent().parent().index();
    //console.log(nownum,nowindex);
    $(this).prev().val(parseInt(num)+1);
    let data=getShop();
    data[index].num=parseInt(num)+1;
    setShop(data);
    count();
})
// 减得时候   判断条件大于1
$(".pro_list").on("tap",".number-reduce",function(){
    let num=$(this).next().val();
    let index=$(this).parent().parent().index();
    //console.log(nownum,nowindex);
    if(num>1){
        num--;
    }
    $(this).next().val(parseInt(num));
    let data=getShop();
    data[index].num=parseInt(num)+1;
    setShop(data);
    count();
})
// 做一个删除的按钮
$(".pro_list").on("tap",".delete",function(){
    let index=$(this).parent().parent().index();
    let data=getShop();
    if(confirm("是否删除")){
        data.splice(index,1);
    }
    setShop(data);
    addList();
    count();
})
// 复选框的判断选中与否 (选中全部的时候，其他的各个ul的复选框也全部选中)
$(".content").on("tap",".gener",function(){

    var i=0;
    var f= $(this).find("input").prop("checked")
 // console.log(f)
 if(!f){
     f=!f
     $(this).css({"background":"url('img/shop_cart_03.png')","background-size":"100% 100%"});
     
 }
 else{
     f=!f
     $(this).css({"background":"url('img/shop_cart_01.png')","background-size":"100% 100%"});
    
 }


 if($(this).find("input").attr("class")=="checkAll"){
    //  alert(1)
    if(!f){
        console.log($(".pro_list ul .gener").find("span"))
        $(".pro_list .gener").find("input").prop("checked",true)
        $(".pro_list .gener").css({"background":"url('img/shop_cart_01.png')","background-size":"100% 100%"});
    }
    else{
     $(".pro_list .gener").find("input").prop("checked",false);
     $(".pro_list .gener").css({"background":"url('img/shop_cart_03.png')","background-size":"100% 100%"});
    }
 }
 //else{
//     $(".shop ul .gener").find("input").each(function(){
//         if($(this).prop("checked")){
//             i++;
//         }
//     })
//     if(i== $(".shop ul .gener").find("input").length){
//         $(".total .gener").find("input").prop("checked",true);
//         $(".total .gener").find("span").addClass("on")
//     }else{
//      $(".total .gener").find("input").prop("checked",false);
//      $(".total .gener").find("span").removeClass("on")
//     }
//  }








    // var  f=$(this).find("input").prop("checked");
    // if(!f){
    //     $(this).css({"background":"url('img/shop_cart_03.png')","background-size":"100% 100%"});
    // }
    // else{
    //     $(this).css({"background":"url('img/shop_cart_01.png')","background-size":"100% 100%"});
    // }
    // //alert(1);
    // // console.log($(this));
    // // console.log($(".total").find("input").attr("class")=="checkAll");
    // // console.log($(this).find("input"))
    
    // console.log(f);
    // if($(this).find("input").attr("class")=="checkAll"){
    //     // alert(1)
    //     //这时候将所有的ul中的复选框设置为选中状态
    //     if(!f){
    //         $(".pro_list").find("input").prop("checked",true);
    //         $(".pro_list .gener").css({"background":"url('img/shop_cart_01.png')","background-size":"100% 100%"});
    //     }
    // }else{
        // $(".pro_list").find("input").each(function(){
        //     if($(this).prop("checked")){
        //         i++;
        //     }
        // })
        // if(i== $(".pro_list").find("input").length){
        //     $(".total .gener").find("input").prop("checked",true);
        //     aa();
        // }else{
        //  $(".total .gener").find("input").prop("checked",false);
        //  aa();
        // }
    // }
    // count();
})
