//异步向数据库请求数据
/**
 * 格式化数据
 * @param {Obj} data 需要格式化的数据
 * @param {boolean} isCache 是否加入随机参数
 * @return {String} 返回字符串
 */
function formatParams(data,isCache){
    var arr = [];
    for(var name in data){
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    if(isCache){
        arr.push("v=" + (new Date()).getTime());
    }
    return arr.join("&");
}

/**
 * 通过json的方式请求
 * @param {[type]} params [description]
 * @param {[type]} description
 * 
 */
function ajaxJSON(params){
    params.type = (params.type || "GET").toUpperCase();
    params.data = params.data || {};
    var formatedParams = this.formatParams(params.data,params.cache);
    var xhr;
    //创建XMLHttpRequest对象
    if(window.XMLHttpRequest){
        //非IE6
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //异步状态发生改变，接收响应数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            if(!!params.success){
                if(typeof xhr.responseText === "string"){
                    //console.log(JSON.parse(xhr.responseText));
                    //params.success(JSON.parse(xhr.responseText));
                    params.success(JSON.parse(xhr.responseText)||JSON.stringify(xhr.responseText));
                    //params.success(JSON.stringify(xhr.responseText));
                }else{
                    params.success(xhr.responseText);
                }
            }
        }else{
            params.error && params.error(status);
        }
    }
    if(params.type == "GET"){
        //连接服务器
        xhr.open("GET",(!!formatParams ? params.url + "?"+formatedParams:params.url),true);
        //发送请求
        xhr.send();
    }else{
        //连接服务器
        xhr.open("POST",params.url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //发送请求
        xhr.send(formatedParams);
    }
}


//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
function hasSkip(){
    window.addEventListener("load",function(){
        // 参考资料：https://blog.csdn.net/sinat_29384657/article/details/54585142
        // 获取index.html页面的id为top_iframe的子窗口中的登录按钮，就是在父元素操作子元素中的数据。
        // index.html为父，两个iframe为子
        //登录
        var headinfoLogin = document.getElementById('top_iframe') 
            .contentWindow.document.getElementById("denglu");

        //我的帐户
        var headinfoAccount = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("zhanghu");

        //联系我们
        var headinfoContact = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("lianxi");

        //历史图片
        var lishiPic = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("lishiPic");

        //导航栏之间切换
        var navChange = document.getElementById('top_iframe')
        .contentWindow.document.getElementsByClassName("nav_foot_body")[0];

        //搜索
        var headinfoSearch = document.getElementById('top_iframe')
        .contentWindow.document.getElementById("sousuo");

        //搜索框
        var headinfoContent = document.getElementById('top_iframe')
        .contentWindow.document.getElementById("textContent");

        var info = window.location.search;
        var reg = /[true]/g;
        var bool = reg.test(info);
        console.log(bool);
        if(bool==true){
            console.log("yijingdenglu");
            headinfoLogin.children[0].innerHTML="退出登录";
        }else{
            headinfoLogin.children[0].innerHTML="登录";
        }

        //登录跳转
        headinfoLogin.addEventListener("click",function(){
            if(headinfoLogin.children[0].innerHTML=="退出登录"){
                headinfoLogin.children[0].innerHTML="登录";
            }else{
                if(headinfoLogin.children[0].innerHTML=="退出登录"){
                    window.location.href="http://127.0.0.1:3000/login.html?flag=true";
                }else if(headinfoLogin.children[0].innerHTML=="登录"){
                    window.location.href="http://127.0.0.1:3000/login.html";
                }
            }
        },false)
        //我的帐户跳转
        headinfoAccount.addEventListener("click",function(){
            console.log(headinfoLogin.children[0].innerHTML);
            if(headinfoLogin.children[0].innerHTML=="退出登录"){
                window.location.href="http://127.0.0.1:3000/account.html?flag=true";
            }else if(headinfoLogin.children[0].innerHTML=="登录"){
                window.location.href="http://127.0.0.1:3000/account.html?flag=false";
            }
        },false)
        //联系我们跳转
        headinfoContact.addEventListener("click",function(){
            //isLogin();
            if(headinfoLogin.children[0].innerHTML=="退出登录"){
                window.location.href="http://127.0.0.1:3000/contact.html?flag=true";
            }else if(headinfoLogin.children[0].innerHTML=="登录"){
                window.location.href="http://127.0.0.1:3000/contact.html?flag=false";
            }
        },false)
        //点击历史图片，回到首页的跳转
        lishiPic.addEventListener("click",function(){
            //isLogin();
            if(headinfoLogin.children[0].innerHTML=="退出登录"){
                window.location.href="http://127.0.0.1:3000/index.html?flag=true";
            }else if(headinfoLogin.children[0].innerHTML=="登录"){
                window.location.href="http://127.0.0.1:3000/index.html?flag=false";
            }
        },false)
        //点击导航栏之中的内容进行切换
        navChange.addEventListener("click",function(e){
            //isLogin();
            // if(headinfoLogin.children[0].innerHTML=="退出登录"){
                var headinfoLogin = document.getElementById('top_iframe') 
                    .contentWindow.document.getElementById("denglu");
                if(e.srcElement.innerHTML == "首页"){
                    console.log(headinfoLogin.children[0].innerHTML,'shouye');
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        parent.location.href = "http://127.0.0.1:3000/index.html";
                    }else if(headinfoLogin.children[0].innerHTML=="退出登录"){
                        console.log("hahhahahah");
                        //parent.location.href = "http://127.0.0.1:3000/index.html?flag=true";
                    }  
                }else if(e.srcElement.innerHTML == "文化博览"){
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        
                        parent.location.href = "http://127.0.0.1:3000/1_culture.html";
                    }else if(headinfoLogin.children[0].innerHTML=="退出登录"){
                        parent.location.href = "http://127.0.0.1:3000/1_culture.html?flag=true";
                    }  
                }
                else if(e.srcElement.innerHTML == "军事图解"){
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        parent.location.href = "http://127.0.0.1:3000/2_army.html";
                    }else if(headinfoLogin.children[0].innerHTML=="退出登录"){
                        parent.location.href = "http://127.0.0.1:3000/2_army.html?flag=true";
                    }  
                    
                }
                else if(e.srcElement.innerHTML == "经济建设"){
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        parent.location.href = "http://127.0.0.1:3000/3_economic.html";
                    }else if(headinfoLogin.children[0].innerHTML=="退出登录"){
                        parent.location.href = "http://127.0.0.1:3000/3_economic.html?flag=true";
                    }
                }
                else if(e.srcElement.innerHTML == "外交风范"){
                    if(headinfoLogin.children[0].innerHTML=="登录"){
                        parent.location.href = "http://127.0.0.1:3000/4_diplomacy.html";
                    }else if(headinfoLogin.children[0].innerHTML=="退出登录"){
                        parent.location.href = "http://127.0.0.1:3000/4_diplomacy.html?flag=true";
                    }  
                }
            // }else if(headinfoLogin.children[0].innerHTML=="登录"){
            //     if(e.srcElement.innerHTML == "首页"){
            //         parent.location.href = "http://127.0.0.1:3000/index.html";
            //     }else if(e.srcElement.innerHTML == "文化博览"){
            //         parent.location.href = "http://127.0.0.1:3000/1_culture.html?flag=false";
            //     }
            //     else if(e.srcElement.innerHTML == "军事图解"){
            //         parent.location.href = "http://127.0.0.1:3000/2_army.html?flag=false";
            //     }
            //     else if(e.srcElement.innerHTML == "经济建设"){
            //         parent.location.href = "http://127.0.0.1:3000/3_economic.html?flag=false";
            //     }
            //     else if(e.srcElement.innerHTML == "外交风范"){
            //         parent.location.href = "http://127.0.0.1:3000/4_diplomacy.html?flag=false";
            //     }
            // }
        });
        //点击搜索跳转到对应的搜索页面
        headinfoSearch.addEventListener("click",function(){
            var inputValue = headinfoContent.value;
            if(inputValue!==""){
                ajaxJSON({
                    type:"post",
                    url:"http://127.0.0.1:3000/search/getSearchContent",
                    data:{inputValue:inputValue},
                    success:function(response){
                        if(response.length>0){
                            if(headinfoLogin.children[0].innerHTML=="退出登录"){
                                parent.location.href = "http://127.0.0.1:3000/search_content.html?flag=true&searchContent="+inputValue;
                            }else if(headinfoLogin.children[0].innerHTML=="登录"){
                                parent.location.href = "http://127.0.0.1:3000/search_content.html?flag=false&searchContent="+inputValue;
                            }
                        }else{
                            if(headinfoLogin.children[0].innerHTML=="退出登录"){
                                parent.location.href = "http://127.0.0.1:3000/search_content_404.html?flag=true&searchContent="+inputValue;
                            }else if(headinfoLogin.children[0].innerHTML=="登录"){
                                parent.location.href = "http://127.0.0.1:3000/search_content_404.html?flag=false&searchContent="+inputValue;
                            }
                        }
                    }
                });
            }
        },false);
    })
}


//确认前一个页面的url地址
function confireLogin(){
    window.addEventListener("load",function(){
        var info = window.location.search;
        var re = /[true]/g;
        var bool = re.test(info);
        console.log(info,"gesagadga111111");
        if(bool==true){
            headinfoLogin.children[0].innerHTML="退出登录"
        }
        //取得前一个页面的url地址
        var lastinfo = document.referrer;
        console.log(lastinfo,"sibiiijis333333");
    },false)
}