window.addEventListener("load",function(){
    var family_id = window.location.search.slice(1).split("&&")[1].split("=")[1];
    ajaxJSON({
        type:"get",
        url:"http://127.0.0.1:3000/skip/getMore?family_id="+family_id,
        data:{},
        success:function(response){
            var ul = document.getElementsByClassName("main_content")[0];
            for(var i=0,len=response.length;i<len;i++){
                //more.html最上方的标题
                var toptitle = document.getElementsByClassName("main_title")[0];
                toptitle.innerHTML = response[i].module_name;
                //more.html最上方的副标题
                var topsubtitle = document.getElementsByClassName("subtitle")[0];
                //console.log(typeof response[i].aid.toString(),"nihaoyea");
                if(response[i].aid.toString().slice(3,4)==1){
                    topsubtitle.innerHTML = "相关文章";
                }else{
                    topsubtitle.innerHTML = "历史百科";
                }
                //more.html主要内容中的各个模块标题
                var mainhead = response[i].title;
                //more.html主要内容中的各个模块内容
                var maincontent = response[i].article_content;
                //动态添加数据
                var li = document.createElement("li");
                var maindiv = document.createElement("div");
                var subdiv = document.createElement("div");
                maindiv.className = "main_head";
                subdiv.className = "sub_head"
                maindiv.innerHTML = mainhead;
                subdiv.innerHTML = maincontent;
                ul.appendChild(li);
                li.appendChild(maindiv);
                li.appendChild(subdiv);
                (function(i){
                   li.addEventListener("click",function(){
                       window.location.href ="http://127.0.0.1:3000/article_content.html?flag=true&&aid="+response[i].aid+"&&module_name=''";
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
    var info = window.location.search.substring(1).split("&&")[0].split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
    }
},false)
