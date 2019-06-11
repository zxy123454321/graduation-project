
//登录部分跳转
// function login(){
//     var loginBtn = document.getElementsByClassName("inline")[0];
//     //var search = window.location.search;
//     //var flag = window.location.search.substring(1).split("=")[1];
//     loginBtn.addEventListener("click",function(){
//         console.log("gegegegegegeg");
//         //loginBtn.children[0].innerHTML="已登录";
//         parent.location.href = "http://127.0.0.1:3000/login.html";
//     },false);
// }
// login();


// //点击历史图片，跳转到首页
// function indexPage(){
//     var indexPageBtn = document.getElementsByClassName("nav_mid_body_left")[0].children[0];
//     indexPageBtn.addEventListener("click",function(){
//         parent.location.href = "http://127.0.0.1:3000/index.html"
//     });
// }
// indexPage();

//我的帐号跳转
// function myAccount(){
//     var myAccountBtn = document.getElementsByClassName("inline")[1];
//     myAccountBtn.addEventListener("click",function(){
//         parent.location.href = "http://127.0.0.1:3000/account.html";
//     },false);
// }
// myAccount();

// //联系我们跳转
// function contactus(){
//     var contactusBtn = document.getElementsByClassName("inline")[2];
//     contactusBtn.addEventListener("click",function(){
//         parent.location.href = "http://127.0.0.1:3000/contact.html"
//     },false);
// }
// contactus()


//点击搜索跳转到对应的搜索页面
// function search(){
//     var searchBtn = document.getElementsByClassName("search_btn")[0];
//     searchBtn.addEventListener("click",function(){
//         var inputValue = document.getElementById("textContent").value;
//         ajaxJSON({
//             type:"post",
//             url:"http://127.0.0.1:3000/search/getSearchContent",
//             data:{inputValue:inputValue},
//             success:function(response){
//                 if(response.length>0){
//                     parent.location.href = "http://127.0.0.1:3000/search_content.html?searchContent="+inputValue;
//                 }else{
//                     parent.location.href = "http://127.0.0.1:3000/search_content_404.html?searchContent="+inputValue;
//                 }
//             }
//         });
//     },false);
// }
// search();

//导航条点击切换
function navChange(){
    // var navBtn = document.getElementsByClassName("nav_foot_body")[0];
    // navBtn.addEventListener("click",function(e){
    //     if(e.srcElement.nodeName.toLowerCase() === "a"){
    //         if(e.srcElement.innerHTML == "首页"){
    //             parent.location.href = "http://127.0.0.1:3000/index.html";
    //         }else if(e.srcElement.innerHTML == "奇闻轶事"){
    //             parent.location.href = "http://127.0.0.1:3000/1.html?family_id=6001";
    //         }
    //         else if(e.srcElement.innerHTML == "文化风俗"){
    //             parent.location.href = "http://127.0.0.1:3000/1.html?family_id=6002";
    //         }
    //         else if(e.srcElement.innerHTML == "历史故事"){
    //             parent.location.href = "http://127.0.0.1:3000/1.html?family_id=6003";
    //         }
    //         else if(e.srcElement.innerHTML == "哲学发展"){
    //             parent.location.href = "http://127.0.0.1:3000/1.html?family_id=6004";
    //         }
    //         else if(e.srcElement.innerHTML == "历史评价"){
    //             parent.location.href = "http://127.0.0.1:3000/1.html?family_id=6005";
    //         }
    //     }
    // },false);

    //用于改变导航条颜色　　需要navColor  不成功
    // function changeColor(){
    //     for(var i=0,len=navBtn.children.length;i<len;i++){
    //         navBtn.children[i].className = " ";
    //     }
    //     if(window.location.href == "http://127.0.0.1:3000/index.html"){
    //         navBtn.children[0].className = "navColor";
    //     }
    //     if(window.location.href == "http://127.0.0.1:3000/1.html"){
    //         navBtn.children[1].className = "navColor";
    //     }
    //     if(window.location.href == "http://127.0.0.1:3000/2.html"){
    //         navBtn.children[2].className = "navColor";
    //     }
    //     if(window.location.href == "http://127.0.0.1:3000/3.html"){
    //         navBtn.children[3].className = "navColor";
    //     }
    //     if(window.location.href == "http://127.0.0.1:3000/4.html"){
    //         navBtn.children[4].className = "navColor";
    //     }
    //     if(window.location.href == "http://127.0.0.1:3000/5.html"){
    //         navBtn.children[5].className = "navColor";
    //     }
    // }
    // changeColor();

}
//navChange();



