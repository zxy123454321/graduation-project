//网页加载，从后台获取数据
window.addEventListener("load",function(){
    //从其它页面传过来的地址
    var url = window.location.href;
    var search = window.location.search;
    var aid = url.slice(1).split("&&")[1].split("=")[1];
    console.log(aid.length,"999999999");
    var module_name = url.slice(1).split("&&")[2].split("=")[1];
    //找到收藏按钮
    var collectBtn = document.getElementsByClassName("collect")[0];
    //找到赞的按钮
    var zanBtn = document.getElementsByClassName("zan")[0];
    //输入内容的评论框
    var commentText = document.getElementsByTagName("textarea")[0];
    //找到发送按钮
    var sendBtn = document.getElementsByClassName("send")[0];
    //找到清除按钮
    var clearBtn = document.getElementsByClassName("remove")[0];
    //找到评论内容的显示区域
    var showcomment = document.getElementsByClassName("reader_comment_item")[0];
    //评论的标题
    var commenttitle =showcomment.children[0];
    //var flag = url.slice(1).split("&&")[1].split("=")[1];
    var index = url.indexOf("flag");
    //找到子窗口的登录按钮
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var info = window.location.search.substring(1).split("&&")[0].split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
        //当页面加载时，如果文章已经被收藏，则显示为红色，否则颜色为空白
        ajaxJSON({
            type:'get',
            url:'http://127.0.0.1:3000/account/searchCollect?aid='+aid+'&uid='+sessionStorage.uid,
            data:{},
            success:function(response){
                if(response.length>0){
                    collectBtn.className="collect backColor"
                }
            }
        });
        //当页面加载时，如果文章已经被点赞，则显示为红色，否则颜色为空白
        ajaxJSON({
            type:'get',
            url:'http://127.0.0.1:3000/account/searchZan?aid='+aid+'&uid='+sessionStorage.uid,
            data:{},
            success:function(response){
                if(response.length>0){
                    zanBtn.className="zan backColor"
                }
            }
        });
    }
    //如果找到flag字符串，则说明是从其它页面跳转而来
    if(index !== -1){
        if(aid.length>=5){
             //通过从前面页传来的数据，从数据库读取数据，动态更新内容区域
            ajaxJSON({
                type: 'post',
                url: 'http://127.0.0.1:3000/skip/getArticle',
                data: {aid:aid,name:name},
                success: function (response) {
                    //从服务器传过来的数据
                    var article_content = response[0].article_content;
                    var title = response[0].title;
                    var write_time = response[0].write_time;
                    var article_from = response[0].article_from;
                    var article_author = response[0].article_author;
                    var article_comment = response[0].article_comment;
                    var article_views_count = response[0].article_views_count;
                    //数据要插入到网页的位置
                    //文章内容
                    var $article_content = document.getElementsByClassName("main_body_mid_content_pbody")[0];
                    $article_content.innerHTML = article_content;
                    //文章标题
                    var $title = document.getElementsByClassName("main_body_mid_content_title")[0];
                    $title.innerHTML = title;
                    //文章发表时间
                    var $write_time = document.getElementsByClassName("main_body_mid_content_tip")[0].children[0];
                    $write_time.innerHTML = write_time;
                    //文章来源
                    var $article_from = document.getElementsByClassName("main_body_mid_content_tip")[0].children[1];
                    $article_from.innerHTML = article_from;
                    //文章作者
                    var $article_author = document.getElementsByClassName("main_body_mid_content_tip")[0].children[2];
                    $article_author.innerHTML = article_author;
                    //文章评论
                    //待添加
                    //文章评论数目
                    var $article_views_count = document.getElementsByClassName("main_body_mid_content_tip")[0].children[3];
                    $article_views_count.innerHTML = article_views_count;
                }
            });
        }else{
            ajaxJSON({
                type: 'post',
                url: 'http://127.0.0.1:3000/skip/getMyArticle',
                data: {cid:aid,name:name},
                success: function (response) {
                    console.log(response,"我的文章");
                    //从服务器传过来的数据
                    var article_content = response[0].article_content;
                    var title = response[0].title;
                    // var write_time = response[0].write_time;
                    // var article_from = response[0].article_from;
                    var article_author = response[0].user_name;
                    // var article_comment = response[0].article_comment;
                    // var article_views_count = response[0].article_views_count;
                    //数据要插入到网页的位置
                    //文章内容
                    var $article_content = document.getElementsByClassName("main_body_mid_content_pbody")[0];
                    $article_content.innerHTML = article_content;
                    //文章标题
                    var $title = document.getElementsByClassName("main_body_mid_content_title")[0];
                    $title.innerHTML = title;
                    //文章发表时间
                    var $write_time = document.getElementsByClassName("main_body_mid_content_tip")[0].children[0];
                    $write_time.innerHTML = "201905";
                    //文章来源
                    var $article_from = document.getElementsByClassName("main_body_mid_content_tip")[0].children[1];
                    $article_from.innerHTML = "我的文章";
                    //文章作者
                    var $article_author = document.getElementsByClassName("main_body_mid_content_tip")[0].children[2];
                    $article_author.innerHTML = article_author;
                    //文章评论
                    //待添加
                    //文章评论数目
                    var $article_views_count = document.getElementsByClassName("main_body_mid_content_tip")[0].children[3];
                    $article_views_count.innerHTML = 0;
                }
            });
        }

        //通过上一页传来的数据，从数据库读取数据，动态更新评论区域
        ajaxJSON({
            type:"get",
            url:"http://127.0.0.1:3000/comment/getComment?aid="+aid,
            data:{},
            success:function(response){
                for(var i=0;i<response.length;i++){
                    var div = document.createElement("div");
                    var label = document.createElement("label");
                    var label1 = document.createElement("label");
                    var span = document.createElement("span");
                    div.className = "reader_comment_item_content";
                    label.className = "reader_comment_item_name";
                    label.innerHTML = response[i].user_name;
                    label1.innerHTML = "：";
                    span.innerHTML = response[i].article_comment;
                    showcomment.appendChild(div);
                    div.appendChild(label);
                    div.appendChild(label1);
                    div.appendChild(span);
                }
            }
        });

        //点击发送，将写的评论写入数据库，并且将写的评论展示在客户端列表之中
        sendBtn.addEventListener("click",function(){
            ajaxJSON({
                type:'get',
                url:'http://127.0.0.1:3000/account/getInfomation?uid='+sessionStorage.uid,
                data:{},
                success:function(response){
                    console.log(response[0].user_name,"hehehhehehe");
                    var comment = document.getElementsByTagName("textarea")[0].value;
                    //当点击发送按钮的时候，如果用户登录则可以参与评论，如果用户未登录，弹出对话框提醒没有登录。
                    //如果用户登录时，突然退出登录，在当前页面应该阻止用户进行评论。
                    var flag = url.slice(1).split("&&")[0].split("=")[1];
                    if(flag=="false"){
                        alert("未登录，无法参加评论");
                    }else if(flag=="true"){
                        if(headinfoLogin.children[0].innerHTML=="登录"){
                            //nothing
                        }else{
                            ajaxJSON({
                                type: 'post',
                                url: 'http://127.0.0.1:3000/comment/myComment',
                                data: {aid:aid,comment:comment,uid:sessionStorage.uid,user_name:response[0].user_name},
                                success:function(response){
                                    ajaxJSON({
                                        type:'get',
                                        url:'http://127.0.0.1:3000/comment/showComment?cid='+response.insertId,
                                        data:{},
                                        success:function(response){
                                                var div = document.createElement("div");
                                                var label = document.createElement("label");
                                                var label1 = document.createElement("label");
                                                var span = document.createElement("span");
                                                if(response[0].article_comment!==""){
                                                    div.className = "reader_comment_item_content";
                                                    label.className = "reader_comment_item_name";
                                                    label.innerHTML = response[0].user_name;
                                                    label1.innerHTML = "：";
                                                    span.innerHTML = response[0].article_comment; 
                                                }else{
                                                    div.className = " ";
                                                }
                                                if(showcomment.children.length==1){
                                                    div.appendChild(label);
                                                    div.appendChild(label1);
                                                    div.appendChild(span);
                                                    showcomment.appendChild(div);
                                                }else{
                                                    div.appendChild(label);
                                                    div.appendChild(label1);
                                                    div.appendChild(span);
                                                    showcomment.insertBefore(div,showcomment.children[1]);
                                                }
                                                
                                        }
                                    });
                                }
                            });
                        }
                    }
                }
            });
        },false)

       
        //点击取消，消除文本框中的内容
        clearBtn.addEventListener("click",function(){
            commentText.value = "";
        },false);

        //点击收藏，收藏变色，并且向ls_collect写入文章的编号
        function collect(){
            var num = 1;
            var flag = url.slice(1).split("&&")[0].split("=")[1];
            collectBtn.addEventListener("click",function(){
                if(flag=="false"){
                    //nothing
                    if(collectBtn.className=="collect backColor"){
                        collectBtn.className = "collect";
                    }else{
                        collectBtn.className = "collect backColor"
                    }
                }else if(flag=="true"){
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        //nothing
                    }else{
                        if(num%2==1){
                            if(collectBtn.className=="collect"){
                                collectBtn.className = "collect backColor";
                                ajaxJSON({
                                    type:"post",
                                    url:"http://127.0.0.1:3000/account/getCollect",
                                    data:{aid:aid,uid:sessionStorage.uid},
                                    success:function(response){
                                        console.log("collectshujucharule");
                                    }
                                });
                            }
                            num++;
                        }else if(num%2==0){
                            if(collectBtn.className=="collect backColor"){
                                collectBtn.className = "collect";
                                ajaxJSON({
                                    type:"post",
                                    url:"http://127.0.0.1:3000/account/deleteCollect",
                                    data:{aid:aid,uid:sessionStorage.uid},
                                    success:function(response){
                                        console.log("collectshujushanchule");
                                    }
                                });
                            }
                            num++;
                        }
                    }
                }
            },false);
        }
        collect();

        //点击赞按钮，赞按钮变色，并且向ls_zan写入文章的编号
        function Zan(){
            var num = 1;
            var flag = url.slice(1).split("&&")[0].split("=")[1];
            zanBtn.addEventListener("click",function(){
                if(flag=="false"){
                    //nothing
                    if(zanBtn.className=="zan backColor"){
                        zanBtn.className = "zan";
                    }else{
                        zanBtn.className = "zan backColor";
                    }
                }else if(flag=="true"){
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        //nothing
                    }else{
                        if(num%2==1){
                            if(zanBtn.className=="zan"){
                                zanBtn.className = "zan backColor";
                                ajaxJSON({
                                    type:"post",
                                    url:"http://127.0.0.1:3000/account/getZan",
                                    data:{aid:aid,uid:sessionStorage.uid},
                                    success:function(response){
                                        console.log("zanshujucharule");
                                    }
                                });
                            }
                            num++;
                        }else if(num%2==0){
                            if(zanBtn.className=="zan backColor"){
                                zanBtn.className = "zan";
                                ajaxJSON({
                                    type:"post",
                                    url:"http://127.0.0.1:3000/account/deleteZan",
                                    data:{aid:aid,uid:sessionStorage.uid},
                                    success:function(response){
                                        console.log("zanshujushanchule");
                                    }
                                });
                            }
                            num++;
                        } 
                    }
                }
            },false);
        }
        Zan();

    }

    ajaxJSON({
        type:'get',
        url:'http://127.0.0.1:3000/admin/getArticleViews?aid='+aid,
        data:{},
        success:function(response){
            if(response!=''){
                var nums = response[0].article_views_count;
                console.log(nums,"caolaoban");
                ajaxJSON({
                    type:'post',
                    url:'http://127.0.0.1:3000/admin/updateArticleViews',
                    data:{article_views_count:nums,aid:aid},
                    success:function(response){
    
                    }
                })
            }
        }
    })
},false);




//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();


//通过地址栏的true&&false信息来决定登录还是退出登录
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



