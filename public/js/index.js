
// 轮播代码
function carousel(){
    var leftClick = document.getElementsByClassName("main_mid_carousel_leftclick")[0];
    var rightClick = document.getElementsByClassName("main_mid_carousel_rightclick")[0];
    var carouselImgs = document.getElementsByClassName("main_mid_carousel")[0].getElementsByTagName("a");
    var midCarousel = document.getElementsByClassName("main_mid_top")[0];
    var num = 0;
    leftClick.addEventListener("click",function(){
        for(var i=0,len=carouselImgs.length;i<len;i++){
            if(carouselImgs[i].className === "show"){
                for(var j=0,len=carouselImgs.length;j<len;j++){
                    carouselImgs[i].className = "hidden"
                }
                num--;
            }
        }
        if(num===-1){
            num = carouselImgs.length-1;
        }
        carouselImgs[num].className = "show";
    },false);

    rightClick.addEventListener("click",function(){
        for(var i=0,len=carouselImgs.length;i<len;i++){
            if(carouselImgs[i].className === "show"){
                for(var j=0,len=carouselImgs.length;j<len;j++){
                    carouselImgs[i].className = "hidden"
                }
                num++;
            }
        }
        if(num===carouselImgs.length){
            num = 0;
        }
        carouselImgs[num].className = "show";
    },false);

    // midCarousel.addEventListener("mouseover",function(){
    //    leftClick.className = "main_mid_carousel_leftclick";
    //    rightClick.className = "main_mid_carousel_rightclick";
    // },false);

    // midCarousel.addEventListener("mouseout",function(){
    //     leftClick.className = "hidden";
    //     rightClick.className = "hidden";
    // },false);
}
carousel();

// 楼层的变换
function floorChange(){
    var floors = document.getElementsByClassName("main_mid_outer");
    var contentClick = document.getElementsByClassName("main_left_body")[0];
    var lists = document.getElementsByClassName("main_left_body")[0].children;
    var boxHeight = document.getElementsByClassName("main_mid_outer")[0].offsetHeight;
    contentClick.addEventListener("click",function(e){
        e.preventDefault();
        if(e.srcElement.nodeName == "A"){
            if(e.srcElement.innerHTML == "明朝文化"){
                // ？？用document.documentElement.scrollTop无法实现效果
                document.body.scrollTop = 500;
                for(var i=0,len =lists.length;i<len;i++ ){
                    lists[i].style.color = "black";
                }
                e.srcElement.style.color = "red";
            }else if(e.srcElement.innerHTML == "明朝军事"){
                document.body.scrollTop = 500 + boxHeight*1;
                for(var i=0,len =lists.length;i<len;i++ ){
                    lists[i].style.color = "black";
                }
                e.srcElement.style.color = "red";
            }else if(e.srcElement.innerHTML == "明朝政治"){
                document.body.scrollTop = 500 + boxHeight*2;
                for(var i=0,len =lists.length;i<len;i++ ){
                    lists[i].style.color = "black";
                }
                e.srcElement.style.color = "red";
            }else if(e.srcElement.innerHTML == "明朝经济"){
                document.body.scrollTop = 500 + boxHeight*3;
                for(var i=0,len =lists.length;i<len;i++ ){
                    lists[i].style.color = "black";
                }
                e.srcElement.style.color = "red";
            }else if(e.srcElement.innerHTML == "明朝外交"){
                document.body.scrollTop = 500 + boxHeight*4;
                for(var i=0,len =lists.length;i<len;i++ ){
                    lists[i].style.color = "black";
                }
                e.srcElement.style.color = "red";
            }
        }
    },false)

    document.addEventListener("scroll",function(e){
        var tHeight = document.body.scrollTop;
        if(tHeight<500){
            for(var i=0,len =lists.length;i<len;i++ ){
                lists[i].style.color = "black";
            }
        }else if(tHeight<500+boxHeight){
            for(var i=0,len =lists.length;i<len;i++ ){
                lists[i].style.color = "black";
            }
            lists[0].style.color = "red";
        }else if(tHeight<500+boxHeight*2){
            for(var i=0,len =lists.length;i<len;i++ ){
                lists[i].style.color = "black";
            }
            lists[1].style.color = "red";
        }else if(tHeight<500+boxHeight*3){
            for(var i=0,len =lists.length;i<len;i++ ){
                lists[i].style.color = "black";
            }
            lists[2].style.color = "red";
        }else if(tHeight<500+boxHeight*4){
            for(var i=0,len =lists.length;i<len;i++ ){
                lists[i].style.color = "black";
            }
            lists[3].style.color = "red";
        }else if(tHeight<500+boxHeight*5){
            for(var i=0,len =lists.length;i<len;i++ ){
                lists[i].style.color = "black";
            }
            lists[4].style.color = "red";
        }
    },false);
}
floorChange();

//调用异步方法,实现数据的动态加载
ajaxJSON({
    type: 'get',
    url: 'http://127.0.0.1:3000/index/getIndexArticles',
    data: {},
    success: function (response) {
        //console.log(response.length);
        for(var i=0,len=response.length;i<len;i++){
            //通过服务器返回的数据，创建li新的标签，添加到ul下面
            //一共10个family_id，所以要进行十次判断，以保证返回数据的准确（不知道有没有更好的方法）
            //此处代码相当重复，或许可以考虑封装成一个函数，但暂时不知道如何封装
            if(response[i].family_id == "1001"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[1].children[1].children[0].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "1002"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[1].children[1].children[1].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "2001"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[2].children[1].children[0].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "2002"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[2].children[1].children[1].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "3001"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[3].children[1].children[0].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "3002"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[3].children[1].children[1].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "4001"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[4].children[1].children[0].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "4002"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[4].children[1].children[1].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "5001"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[5].children[1].children[0].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }else if(response[i].family_id == "5002"){
                //得到ul元素
                var mainContent = document.getElementsByClassName("main_mid")[0].children[5].children[1].children[1].children[1];
                var lis = document.createElement("li");
                var pTitle = document.createElement("p");
                var pContent = document.createElement("p");
                var aContent = document.createElement("a");
                //将li标签添加到ul下面
                mainContent.appendChild(lis);
                lis.appendChild(pTitle);
                lis.appendChild(pContent);
                pContent.appendChild(aContent);
                pTitle.className = "article_title";
                aContent.className = "article_content"
                pTitle.innerHTML = response[i].title;
                aContent.innerHTML = response[i].article_content;
            }
        }

        // 当服务器端的数据全部加载到页面以后，就可以统计每个family_id分别对应多少篇文章，从而对从服务器端获取的文章进行操作
        // 因为数据是从服务器端获取，所以必须等加载完成才能获取ｄｏｍ树

        //第一层：实现点击文章，跳转到文章对应的网页
        //获取数据加载完成后，dom树上li的长度.不加载完，用ｄｏｍ树获取就为空
        var lioneLength = document.getElementsByClassName("main_mid")[0].children[1].children[1].children[0].children[1].children.length;
        //第一层内容：明朝文化，取得整个一层要展示的文章内容
        var modules = document.getElementsByClassName("main_mid_outer_info")[0];
        //提取当前页面的search，判断当前页面的url中是否含有false或true
        var search = window.location.search;
        if(search){
            var info = search.substring(1).split("=")[1];
        }else{
            info = false;
        }
        //用for循环遍历左右两边的文章  
        for( var j=0,len=modules.children.length;j<len;j++){
            //用闭包的原理，保持j的值不变 
            (function(j){
                var index = j;
                for(var i=0,len=lioneLength;i<len;i++){
                    (function(i){
                        modules.children[index].children[1].children[i].addEventListener("click",function(e){
                            //e.preventDefault();
                            console.log("wo dianji youxiao");
                            if(modules.children[index].children[0].innerText=="相关文章>>>")
                                window.location.href = "./article_content.html?flag="+info+"&&aid=1001"+i+"&&module_name="+modules.parentElement.children[0].innerHTML; 
                            else{
                                window.location.href = "./article_content.html?flag="+info+"&&aid=1002"+i+"&&module_name="+modules.parentElement.children[0].innerHTML;
                            }
                        },false);
                    })(i);
                }
            })(j);
        }

        //第二层：实现点击文章，跳转到文章对应的网页
        //获取数据加载完成后，dom树上li的长度.不加载完，用ｄｏｍ树获取就为空
        var litwoLength = document.getElementsByClassName("main_mid")[0].children[2].children[1].children[0].children[1].children.length;
        //第二层内容：明朝军事，取得整个一层要展示的文章内容
        var modules = document.getElementsByClassName("main_mid_outer_info")[1];
        //用for循环遍历左右两边的文章  
        for( var j=0,len=modules.children.length;j<len;j++){
            //用闭包的原理，保持j的值不变 
            (function(j){
                var index = j;
                for(var i=0,len=litwoLength;i<len;i++){
                    (function(i){
                        modules.children[index].children[1].children[i].addEventListener("click",function(e){
                            //e.preventDefault();
                            console.log("wo dianji youxiao");
                            if(modules.children[index].children[0].innerText=="相关文章>>>")
                                window.location.href = "./article_content.html?flag="+info+"&&aid=2001"+i+"&&module_name="+modules.parentElement.children[0].innerHTML; 
                            else{
                                window.location.href = "./article_content.html?flag="+info+"&&aid=2002"+i+"&&module_name="+modules.parentElement.children[0].innerHTML;
                            }
                        },false);
                    })(i);
                }
            })(j);
        }

        //第三层：实现点击文章，跳转到文章对应的网页
        //获取数据加载完成后，dom树上li的长度.不加载完，用ｄｏｍ树获取就为空
        var lithreeLength = document.getElementsByClassName("main_mid")[0].children[3].children[1].children[0].children[1].children.length;
        //第三层内容：明朝政治，取得整个一层要展示的文章内容
        var modules = document.getElementsByClassName("main_mid_outer_info")[2];
        //用for循环遍历左右两边的文章  
        for( var j=0,len=modules.children.length;j<len;j++){
            //用闭包的原理，保持j的值不变 
            (function(j){
                var index = j;
                for(var i=0,len=lithreeLength;i<len;i++){
                    (function(i){
                        modules.children[index].children[1].children[i].addEventListener("click",function(e){
                            //e.preventDefault();
                            console.log("wo dianji youxiao");
                            if(modules.children[index].children[0].innerText=="相关文章>>>")
                                window.location.href = "./article_content.html?flag="+info+"&&aid=3001"+i+"&&module_name="+modules.parentElement.children[0].innerHTML; 
                            else{
                                window.location.href = "./article_content.html?flag="+info+"&&aid=3002"+i+"&&module_name="+modules.parentElement.children[0].innerHTML;
                            }
                        },false);
                    })(i);
                }
            })(j);
        }

        //第四层：实现点击文章，跳转到文章对应的网页
        //获取数据加载完成后，dom树上li的长度.不加载完，用ｄｏｍ树获取就为空
        var lifourLength = document.getElementsByClassName("main_mid")[0].children[4].children[1].children[0].children[1].children.length;
        //第四层内容：明朝经济，取得整个一层要展示的文章内容
        var modules = document.getElementsByClassName("main_mid_outer_info")[3];
        //用for循环遍历左右两边的文章  
        for( var j=0,len=modules.children.length;j<len;j++){
            //用闭包的原理，保持j的值不变 
            (function(j){
                var index = j;
                for(var i=0,len=lifourLength;i<len;i++){
                    (function(i){
                        modules.children[index].children[1].children[i].addEventListener("click",function(e){
                            //e.preventDefault();
                            console.log("wo dianji youxiao");
                            if(modules.children[index].children[0].innerText=="相关文章>>>")
                                window.location.href = "./article_content.html?flag="+info+"&&aid=4001"+i+"&&module_name="+modules.parentElement.children[0].innerHTML; 
                            else{
                                window.location.href = "./article_content.html?flag="+info+"&&aid=4002"+i+"&&module_name="+modules.parentElement.children[0].innerHTML;
                            }
                        },false);
                    })(i);
                }
            })(j);
        }

        //第五层：实现点击文章，跳转到文章对应的网页
        //获取数据加载完成后，dom树上li的长度.不加载完，用ｄｏｍ树获取就为空
        var lifiveLength = document.getElementsByClassName("main_mid")[0].children[5].children[1].children[0].children[1].children.length;
        //第五层内容：明朝外交，取得整个一层要展示的文章内容
        var modules = document.getElementsByClassName("main_mid_outer_info")[4];
        //用for循环遍历左右两边的文章  
        for( var j=0,len=modules.children.length;j<len;j++){
            //用闭包的原理，保持j的值不变 
            (function(j){
                var index = j;
                for(var i=0,len=lifiveLength;i<len;i++){
                    (function(i){
                        modules.children[index].children[1].children[i].addEventListener("click",function(e){
                            //e.preventDefault();
                            console.log("wo dianji youxiao");
                            if(modules.children[index].children[0].innerText=="相关文章>>>")
                                window.location.href = "./article_content.html?flag="+info+"&&aid=5001"+i+"&&module_name="+modules.parentElement.children[0].innerHTML; 
                            else{
                                window.location.href = "./article_content.html?flag="+info+"&&aid=5002"+i+"&&module_name="+modules.parentElement.children[0].innerHTML;
                            }
                        },false);
                    })(i);
                }
            })(j);
        }
    }
});

//点击轮播图，取消轮播图的点击事件
function carouselChange(){
    var carouselBtn = document.getElementsByClassName("main_mid_carousel")[0];
    carouselBtn.addEventListener("click",function(e){
        if(e.srcElement.nodeName.toLowerCase() == "img"){
            e.preventDefault();
            // window.parent.location.href = "http://127.0.0.1:3000/introduce.html?flag=true&&id="+e.srcElement.alt;
        }
    },false)
}
carouselChange();

//加载数据库中浏览次数最多的前六条文章
function loadArticle(){
    ajaxJSON({
        type:'get',
        url:'http://127.0.0.1:3000/admin/getHeadArticles',
        data:{},
        success:function(response){
            var lis = document.getElementsByClassName("main_mid_list")[0].children[1].children;
            for(var i=0,len=lis.length;i<len;i++){
                lis[i].children[0].innerHTML = response[i].title;
                (function(i){
                    lis[i].addEventListener("click",function(){
                        //console.log(location.search.search("true"),"222222222");
                        if(location.search.search("true") == -1 || location.search.search("flag")==-1){
                            window.parent.location.href = "http://127.0.0.1:3000/article_content.html?flag=false&&aid="+response[i].aid+"&&module_name=";
                        }else if(location.search.search("false") == -1){
                            window.parent.location.href = "http://127.0.0.1:3000/article_content.html?flag=true&&aid="+response[i].aid+"&&module_name=";
                        }
                    },false);
                })(i)
            }
        }
    });
}
loadArticle();
//点击轮播右边滚动栏内容实现跳转
function scrollChange(){
    var scrollBtn = document.getElementsByClassName("main_mid_list")[0];
    scrollBtn.addEventListener("click",function(e){
        if(e.srcElement.nodeName.toLowerCase() == "span"){
            e.preventDefault();
            console.log("909090909090");
            window.parent.location.href = "http://127.0.0.1:3000/article_content.html?flag=true&&aid=";
        }
    },false);
}
// scrollChange();

//点击加载更多的箭头，实现数据的传输以及页面的跳转
function moreInfo(){
    var moreBtns = document.getElementsByClassName("more");
    for(var i=0,len=moreBtns.length;i<len;i++){
       (function(i){
            moreBtns[i].addEventListener("click",function(){
                //此处数据的传输用的是数据的拼接，即把family_id的值传给要跳转的页面
                //console.log(Math.ceil((i+1)/2));
                //console.log(Math.ceil(i%2+1));
                //登录
                var headinfoLogin = document.getElementById('top_iframe') 
                .contentWindow.document.getElementById("denglu");
                if(headinfoLogin.children[0].innerHTML=="退出登录"){
                    window.parent.location.href = "http://127.0.0.1:3000/more.html?flag=true&&family_id="+Math.ceil((i+1)/2)+"00"+Math.ceil(i%2+1);
                }else if(headinfoLogin.children[0].innerHTML=="登录"){
                    window.parent.location.href = "http://127.0.0.1:3000/more.html?flag=false&&family_id="+Math.ceil((i+1)/2)+"00"+Math.ceil(i%2+1);
                }
               
            },false)
       })(i);
    }
}
moreInfo();


//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();

//通过地址栏的true&&false信息来决定登录还是已登录
window.addEventListener("load",function(){
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var headinfoAccount = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("lishiPic");
    var info = window.location.search.substring(1).split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
    }
},false)


 