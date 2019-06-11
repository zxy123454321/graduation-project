//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();


//通过地址栏的true&&false信息来决定登录还是已登录
window.addEventListener("load",function(){
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var info = window.location.search.substring(1).split("&")[0].split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
    }
},false)


//此函数用来说明，如果flag为true,就是用户已经登录，如果flag为false,就是游客，没有登录
function isCustom(){
    window.addEventListener("load",function(){
        var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
        var info = window.location.search.substring(1).split("&")[1].split("=")[1];
        if(info=="false"){
            alert("您没有登录，请登录");
            window.location.href="http://127.0.0.1:3000/login.html";
        }
        headinfoLogin.addEventListener("click",function(){
            if(info=="true"){
                if(headinfoLogin.children[0].innerHTML=="登录"){
                    window.location.href="http://127.0.0.1:3000/search_content_404.html";
                }
            }
        },false)
    },false);
}
isCustom();