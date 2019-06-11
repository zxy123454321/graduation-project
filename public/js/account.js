window.addEventListener("load",function(){
    var mubu = document.getElementsByClassName("mubu")[0];
    function change(){
        // 获取所有点击按钮的父亲元素节点
         var outbtn = document.getElementsByClassName("main_mid_left")[0];
         var btns = document.getElementsByClassName("main_mid_left_item");
         // 获取要在右边显示的应该显示内容的集合
         var contents = document.getElementsByClassName("main_mid_right_content");
         for(var i=0,len=btns.length;i<len;i++){
             btns[i].index = i;
             btns[i].addEventListener("click",function(){
                 for(var j=0,len=btns.length;j<len;j++){
                     btns[j].className = "main_mid_left_item";
                     contents[j].className = "main_mid_right_content";
                 }
                 btns[this.index].className = "main_mid_left_color main_mid_left_item";
                 contents[this.index].className = "main_mid_right_content show";
                 if(this.innerHTML=="个人资料"){
                     console.log("wodianjilegerenziliao");
                     ajaxJSON({
                         type:"get",
                         url:"http://127.0.0.1:3000/account/getInfomation?uid="+sessionStorage.uid,
                         data:{},
                         success:function(response){
                             var info_content = document.getElementsByClassName("personal_info")[0];
                             //此处使用es6中的数据解构
                             let{img,nickname,user_name,gender,birthday,place,vocation}=response[0];
                             //此处使用es6中的模板引擎，用es5的+拼接实在是很麻烦
                             var html = `
                                 <div class="right_info">ID:wodegegeya</div>
                                 <div class="line"></div>
                                 <div class="nick">
                                     <span>昵称:${nickname}</span>
                                 </div>
                                 <ul class="self">
                                     <li class="comon">实名：${user_name}</li>
                                     <li class="comon">性别：${gender}</li>
                                     <li class="comon">生日：${birthday}</li>
                                     <li class="comon">地区：${place}</li>
                                     <li class="comon">行业：${vocation}</li>
                                 </ul>
                             `
                             info_content.innerHTML = html;
                         }
                     });
                 }else if(this.innerHTML=="撰写文章"){
                     mubu.style.display = "none"
                     console.log("wodianjilezhuanxiewenzhang");
                     var art_title = document.getElementsByTagName("textarea")[0];
                     var art_content = document.getElementsByTagName("textarea")[1];
                     var send_art = document.getElementsByClassName("sendbtn")[0];
                     var del_art = document.getElementsByClassName("sendbtn")[1];
                     send_art.addEventListener("click",function(){
                         console.log("发送按钮已经点击");
                         art_title = art_title.value;
                         art_content = art_content.value;
                         if(art_title!==''&&art_content!==''){
                            ajaxJSON({
                                type:"get",
                                url:"http://127.0.0.1:3000/account/getInfomation?uid="+sessionStorage.uid,
                                data:{},
                                success:function(response){
                                    var user_name = response[0].user_name;
                                    ajaxJSON({
                                        type:"post",
                                        url:"http://127.0.0.1:3000/account/sendMyArticle",
                                        data:{
                                            art_title:art_title,
                                            art_content:art_content,
                                            uid:sessionStorage.uid,
                                            user_name:user_name
                                        },
                                        success:function(response){
                                           var art_title = document.getElementsByTagName("textarea")[0];
                                           var art_content = document.getElementsByTagName("textarea")[1];
                                           var jump = document.getElementsByClassName("jump")[0];
                                           jump.style.display="block";
                                           setTimeout(() => {
                                            jump.style.display="none";
                                            console.log(art_content);
                                            art_title.value = '请输入标题 ';
                                            art_content.value = '请输入文章内容';
                                           },2000);
                                        }
                                    });
                                }
                            });
                         }else{
                             alert("标题或者文章内容不能为空");
                             return;
                         }
                         
                     },false);
                     del_art.addEventListener("click",function(){
                         art_title.value = "";
                         art_content.value = "";
                     },false);
                 }else if(this.innerHTML=="我的收藏"){
                     mubu.style.display = "none"
                     console.log("wodianjilewodeshoucang");
                     //获取我的收藏下面的ul标签
                     var collect_html = document.getElementsByClassName("collect")[0];
                     //找到ul下面所有的li
                     var collect_items = document.getElementsByClassName("collect_item");
                     collect_html.innerHTML = "";
                     //此异步是寻找当前用户所有的点赞信息
                     ajaxJSON({
                         type:'get',
                         url:"http://127.0.0.1:3000/account/getAllCollect?uid="+sessionStorage.uid,
                         data:{},
                         success:function(response){
                             console.log(response,"wo jiehsou daole shuju");
                             var aid=[];
                             for(var i=0,len=response.length;i<len;i++){
                                 aid[i] = response[i].aid;
                                 //此异步是找到点赞信息的编号后找到相应的文章，然后进行数据渲染
                                (function(i){
                                     ajaxJSON({
                                         type:"get",
                                         url:"http://127.0.0.1:3000/index/getInfomation?aid="+aid[i],
                                         data:{},
                                         success:function(response){
                                             if(response[0]){
                                                collect_html.innerHTML += `
                                                <li class="collect_item">
                                                    <div class="collect_item_title" onclick="function C(){
                                                        window.location.href = './article_content.html?flag=true&&aid='+${aid[i]}+'&&module_name=';
                                                    }; C();">${response[0].title}</div>
                                                    <div class="collect_item_del" onclick="function A(){
                                                        ajaxJSON({
                                                            type:'post',
                                                            url:'/account/deleteCollect',
                                                            data:{aid:${aid[i]},uid:${sessionStorage.uid}},
                                                            success:function(response){
                                                                var collect_htm = document.getElementsByClassName('collect')[0];
                                                                if(collect_htm.children[0]){
                                                                    collect_htm.children[${i}].style.display='none'
                                                                }   
                                                            }
                                                        });
                                                    }; A();">取消收藏</div>
                                                </li>
                                                `
                                             }
                                         }
                                     });
                                })(i)
                             }
                         }
                     });
                 }else if(this.innerHTML=="我的点赞"){
                     mubu.style.display = "none"
                     console.log("wodianjilewodedianzan");
                     //获取我的点赞下面的ul标签
                     var zan_html = document.getElementsByClassName("zan")[0];
                     //找到ul下面所有的li
                     var zan_items = document.getElementsByClassName("zan_item");
                     zan_html.innerHTML = "";
                     //此异步是寻找当前用户所有的点赞信息
                     ajaxJSON({
                         type:'get',
                         url:"http://127.0.0.1:3000/account/getAllZan?uid="+sessionStorage.uid,
                         data:{},
                         success:function(response){
                             var aid=[];
                             console.log(response,"wo jiehsou daole shuju");
                             for(var i=0,len=response.length;i<len;i++){
                                 aid[i] = response[i].aid;
                                 //此异步是找到点赞信息的编号后找到相应的文章，然后进行数据渲染
                                (function(i){
                                     ajaxJSON({
                                         type:"get",
                                         url:"http://127.0.0.1:3000/index/getInfomation?aid="+aid[i],
                                         data:{},
                                         success:function(response){
                                             if(response[0]){
                                                zan_html.innerHTML += `
                                                <li class="zan_item">
                                                    <div class="zan_item_title" onclick="function C(){
                                                       window.location.href = './article_content.html?flag=true&&aid='+${aid[i]}+'&&module_name=';
                                                    }; C();">${response[0].title}</div>
                                                    <div class="zan_item_del" onclick="function A(){
                                                        ajaxJSON({
                                                            type:'post',
                                                            url:'http://127.0.0.1:3000/account/deleteZan',
                                                            data:{aid:${aid[i]},uid:${sessionStorage.uid}},
                                                            success:function(response){
                                                                console.log('删除成功');
                                                                var zan_htm = document.getElementsByClassName('zan')[0];
                                                                console.log(${i},'99999');
                                                                console.log(zan_htm.children,'fan');
                                                                if(zan_htm.children[0]){
                                                                    zan_htm.children[${i}].style.display='none'
                                                                }
                                                            }
                                                        });
                                                    }; A();">取消点赞</div>
                                                </li>
                                                `
                                             }
                                         }
                                     });
                                })(i)
                             }
                         }
                     });
                 }else if(this.innerHTML=="我的评论"){
                     mubu.style.display = "none"
                     console.log("wodianjilewodepinglun");
                     //获取我的评论下面的ul标签
                     var comment_html = document.getElementsByClassName("comment")[0];
                     //找到ul下面所有的li
                     var comment_items = comment_html.children;
                     //此异步是寻找当前用户所有的进行评论过的文章
                     comment_html.innerHTML = "";
                     ajaxJSON({
                         type:'get',
                         url:"http://127.0.0.1:3000/account/getAllComment?uid="+sessionStorage.uid,
                         data:{},
                         success:function(response){
                             //console.log(response,"评论过的文章");
                             for(var i=0,len=response.length;i<len;i++){
                                 (function(i){
                                     var aid = response[i].aid;
                                     //列举出比如说第一个篇文章的所有评论
                                     // var comments = response[i];
                                     // console.log(comments,i,"woshipinglun");
                                     ajaxJSON({
                                         type:"get",
                                         url:"http://127.0.0.1:3000/index/getInfomation?aid="+aid,
                                         data:{},
                                         success:function(response){
                                             if(response[0]){
                                                var title = response[0].title;
                                                ajaxJSON({
                                                    type:"get",
                                                    url:"http://127.0.0.1:3000/account/getAllCommentItem?aid="+aid+"&uid="+sessionStorage.uid,
                                                    data:{},
                                                    success:function(response){
                                                        respon = response;
                                                        if(respon[0]){
                                                            comment_html.innerHTML +=`
                                                            <li>
                                                                <div class="comment_title" onclick="function C(){
                                                                window.location.href = './article_content.html?flag=true&&aid='+${aid}+'&&module_name=';
                                                                };C();">${title}</div>
                                                                ${response.map((item,index)=>{
                                                                    return `<div class="comment_item">
                                                                        <div class="comment_content">${item.article_comment}</div>
                                                                        <div class="comment_item_del"onclick="function B(){
                                                                            var box = document.getElementsByClassName('comment')[0].children[${i}];
                                                                            var content = box.children[1+${index}].children[0].innerHTML;
                                                                            ajaxJSON({
                                                                                type:'post',
                                                                                url:'http://127.0.0.1:3000/account/deleteComment',
                                                                                data:{aid:${aid},uid:${sessionStorage.uid},article_comment:content},
                                                                                success:function(response){
                                                                                    console.log('删除成功');
                                                                                    var comment_htm = document.getElementsByClassName('comment')[0];
                                                                                    if(comment_htm.children[0]){
                                                                                        console.log('hahhahha');
                                                                                        comment_htm.children[${i}].children[1+${index}].style.display='none';
                                                                                    }
                                                                                }
                                                                            });
                                                                            
                                                                        };B();">删除评论</div>
                                                                    </div>`
                                                                }).join('')}
                                                            </li>
                                                            `
                                                        }
                                                    }
                                                });
                                             }
                                         }
                                     });
                                 })(i);
                             }
                         }
                     });
                 }else if(this.innerHTML=="我的文章"){
                     mubu.style.display = "none"
                     console.log("wodianjilewodewenzhang");
                     var myArticle = document.getElementsByClassName("article")[0];
                     myArticle.innerHTML = "";
                     var myArticle_item = myArticle.children;
                     ajaxJSON({
                         type:"get",
                         url:"http://127.0.0.1:3000/account/getAllMyArticles?uid="+sessionStorage.uid,
                         data:{},
                         success:function(response){
                             console.log(response,"0000000000");
                             myArticle.innerHTML +=` ${response.map((item,index)=>{
                                  return `
                                  <li class="article_item">
                                     <div class="article_item_title" onclick="function A(){
                                        window.location.href = './article_content.html?flag=true&&aid='+${response[index].cid}+'&&module_name=';
                                     };A();">${item.title}</div>
                                  </li>
                                  `
                              }).join('')}`
                         }
                     });
                 }
             },false)
         } 
     }
     
     change();
});

// for(var j=0,len=response.length;j<len;j++){
//     ajaxJSON({
//         type:'post',
//         url:'http://127.0.0.1:3000/account/deleteComment',
//         data:{aid:${aid},uid:${sessionStorage.uid},article_comment:${response[j].article_comment}},
//         success:function(response){
//             console.log('删除成功');
//             console.log(${i});
//             var comment_htm = document.getElementsByClassName('comment')[0].children[${i}];
//             comment_htm.style.display='none'
            
//         }
//     });
// }


//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
 hasSkip();


 //通过地址栏的true&&false信息来决定登录还是已登录
window.addEventListener("load",function(){
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var headinfoAccount = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("zhanghu");
    var info = window.location.search.substring(1).split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
    }
    //当加载页面时，将个人信息上的数据率先加载到页面，否则只有当点击才会出现个人资料页面
    ajaxJSON({
        type:"get",
        url:"http://127.0.0.1:3000/account/getInfomation?uid="+sessionStorage.uid,
        data:{},
        success:function(response){
            var info_content = document.getElementsByClassName("personal_info")[0];
            //此处使用es6中的数据解构
            let{img,nickname,user_name,gender,birthday,place,vocation}=response[0];
            //此处使用es6中的模板引擎，用es5的+拼接实在是很麻烦
            var html = `
                <div class="right_info">ID:wodegegeya</div>
                <div class="line"></div>
                <div class="nick">
                    <span>昵称:${nickname}</span>
                </div>
                <ul class="self">
                    <li class="comon">实名：${user_name}</li>
                    <li class="comon">性别：${gender}</li>
                    <li class="comon">生日：${birthday}</li>
                    <li class="comon">地区：${place}</li>
                    <li class="comon">行业：${vocation}</li>
                </ul>
            `
            info_content.innerHTML = html;
        }
    });
},false)


//此函数用来说明，如果flag为true,就是用户已经登录，如果flag为false,就是游客，没有登录
function isCustom(){
    window.addEventListener("load",function(){
        var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
        var info = window.location.search.substring(1).split("=")[1];
        if(info=="false"){
            alert("您没有登录，请登录");
            window.location.href="http://127.0.0.1:3000/login.html";
        }
        headinfoLogin.addEventListener("click",function(){
            if(info=="true"){
                if(headinfoLogin.children[0].innerHTML=="登录"){
                    window.location.href="http://127.0.0.1:3000/index.html";
                }
            }
        },false)
    },false);
}
isCustom();


//修改个人信息
function changeInfo(){
    var changeInfo = document.getElementById("changeInfo");
    var mubu = document.getElementsByClassName("mubu")[0];
    ajaxJSON({
        type:"get",
        url:"http://127.0.0.1:3000/account/searchInfo?uid="+sessionStorage.uid,
        data:{},
        success:function(response){
            console.log(response,"===============");
            changeInfo.addEventListener("click",function(){
                mubu.style.display = "block";
                var inputs= document.getElementsByClassName("boxSize");
                inputs[1].children[1].value = response[0].nickname;
                inputs[2].children[1].value= response[0].user_name;
                inputs[3].children[1].value = response[0].gender;
                inputs[4].children[1].value = response[0].birthday;
                inputs[5].children[1].value = response[0].place;
                inputs[6].children[1].value = response[0].vocation;
                var tijiao = document.getElementsByClassName("tijiao")[0];
                tijiao.addEventListener("click",function(){
                    var uid = sessionStorage.uid;
                    var nickname = inputs[1].children[1].value;
                    var user_name = inputs[2].children[1].value;
                    var gender = inputs[3].children[1].value;
                    var birthday = inputs[4].children[1].value;
                    var place = inputs[5].children[1].value;
                    var vocation = inputs[6].children[1].value;
                    ajaxJSON({
                        type:"post",
                        url:"http://127.0.0.1:3000/account/changeInfo",
                        data:{
                            nickname,user_name,gender,birthday,place,vocation,uid
                        },
                        success:function(response){
                           ajaxJSON({
                            type:"get",
                            url:"http://127.0.0.1:3000/account/searchInfo?uid="+sessionStorage.uid,
                            data:{},
                            success:function(response){
                                alert("修改成功");
                                location.reload();
                            }
                           });
                        }
                    });
                    mubu.style.display = "none";
                });
            });
        }
    });
}
changeInfo();
 