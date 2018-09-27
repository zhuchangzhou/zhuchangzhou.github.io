/**
 * Created by duodi on 2017/12/1.
 */
var anmo={
    template:'<ul><li><a href="###"><img src="img/pro_categories_img1.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img2.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img3.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img4.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img5.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img6.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img7.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img8.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img9.png" alt=""></a> <p><a href="###">动力椅</a></p> </li> </ul>'
};
var bangong={
    template:'<ul> <li> <a href="###"><img src="img/pro_categories_img1.png" alt=""></a><p>办公椅</p> </li><li> <a href="###"><img src="img/pro_categories_img2.png" alt=""></a> <p><a href="###">办公椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img3.png" alt=""></a> <p><a href="###">办公椅</a></p> </li>  </ul>'
};
var zhumian={
    template:'<ul> <li>  <a href="###"><img src="img/pro_categories_img1.png" alt=""></a><p>助眠椅</p> </li><li> <a href="###"><img src="img/pro_categories_img2.png" alt=""></a> <p><a href="###">助眠椅</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img3.png" alt=""></a> <p><a href="###">助眠椅</a></p> </li>  </ul>'
};
var anmoqi={
    template:'<ul> <li> <a href="###"> <img src="img/pro_categories_img1.png" alt=""></a><p>按摩器</p> </li><li> <a href="###"><img src="img/pro_categories_img2.png" alt=""></a> <p><a href="###">按摩器</a></p> </li> <li> <a href="###"><img src="img/pro_categories_img3.png" alt=""></a> <p><a href="###">按摩器</a></p> </li>  </ul>'
};
var router=new VueRouter({
    routes:[
        {path:'/',component:anmo},
        {path:'/app/bangong',component:bangong},
        {path:'/app/zhumian',component:zhumian},
        {path:'/app/anmoqi',component:anmoqi},
    ]
})
var app=new Vue({router}).$mount('#app');