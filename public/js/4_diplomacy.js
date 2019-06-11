//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();

//通过地址栏的true&&false信息来决定登录还是已登录
window.addEventListener("load",function(){
    console.log("wo shi yi zhang gong");
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var info = window.location.search.substring(1).split("&&")[0].split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
    }

    
},false)
