require.config({
    baseUrl:"./js",
    paths:{
        jquery:"lib/jquery-3.3.1",
        account_man:"account_management/account_man",
        account_methods:"account_management/account_methods",
        account_add:"account_management/account_add",
        account_change:"account_management/account_change",
        account_delete:"account_management/account_delete",
        account_search:"account_management/account_search",
        file_man:"file_management/file_man",
        file_methods:"file_management/file_methods",
        file_add:"file_management/file_add",
        file_change:"file_management/file_change",
        file_delete:"file_management/file_delete",
        file_search:"file_management/file_search",
        quit_man:"quit/quit_man"
    }
});

require(["jquery","account_man","file_man","quit_man"],($,account_man,file_man,quit_man)=>{
    var asideAcc=document.getElementsByClassName("asideAccount")[0];
    var asideArt=document.getElementsByClassName("asideArticle")[0];
    var asideQuit=document.getElementsByClassName("asideQuit")[0];
    asideAcc.style.background="rgb(50, 204, 158)";
    account_man();
    $("#aside").on("click",".aside-item",function(){
        // 按需加载模块 
        if($(this).hasClass('asideAccount')){
            asideAcc.style.background="rgb(50, 204, 158)";
            asideArt.style.background="";
            asideQuit.style.background="";
            account_man();
        }else if($(this).hasClass('asideArticle')){
            asideAcc.style.background="";
            asideArt.style.background="rgb(50, 204, 158)";
            asideQuit.style.background="";
            file_man();
        }else if($(this).hasClass('asideQuit')){
            console.log("hahhaha");
            asideAcc.style.background="";
            asideArt.style.background=""
            asideQuit.style.background="rgb(50, 204, 158)";
            quit_man();
        }
    });
});