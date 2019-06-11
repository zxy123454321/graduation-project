window.addEventListener("load",function(){
    //通过地址栏的true&&false信息来决定登录还是已登录
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var info = window.location.search.substring(1).split("&")[0].split("=")[1];
    //查找的内容,不知道为什么传过来的中文被编码了，所以用decodeURI进行解码
    var searchContent = decodeURI(window.location.search.slice(1).split("&")[1].split("=")[1]);
    ajaxJSON({
        type:"get",
        url:"http://127.0.0.1:3000/skip/getSearch?searchContent="+searchContent,
        data:{},
        success:function(response){
            var num = document.getElementsByClassName("search_main")[0].children[0].children[0];
            var box = document.getElementsByClassName("search_main")[0];
            num.innerHTML = response.length;
            for(var i=0,len=response.length;i<len;i++){
                var titlediv = document.createElement("div");
                var contentdiv = document.createElement("div");
                var bigdiv = document.createElement("div");
                titlediv.innerHTML = response[i].title;
                titlediv.className = "title";
                contentdiv.innerHTML = response[i].article_content;
                contentdiv.className = "content";
                box.appendChild(bigdiv);
                bigdiv.appendChild(titlediv);
                bigdiv.appendChild(contentdiv);
                (function(i){
                    contentdiv.addEventListener("click",function(){
                        var article_aid =response[i].aid;
                        if(info=="false"){
                            window.parent.location.href = 
                            "http://127.0.0.1:3000/article_content.html?flag=false&&aid="+article_aid+"&&module_name="+response[i].module_name;
                        }else if(info=="true"){
                            window.parent.location.href = 
                            "http://127.0.0.1:3000/article_content.html?flag=true&&aid="+article_aid+"&&module_name="+response[i].module_name;
                        }
                    },false);
                })(i);
            }
        }
    });
},false);



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
                    window.location.href="http://127.0.0.1:3000/search_content.html";
                }
            }
        },false)
    },false);
}
isCustom();

