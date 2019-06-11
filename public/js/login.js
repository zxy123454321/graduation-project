var admin = document.getElementsByClassName("classify")[0].children[1];
var custom = document.getElementsByClassName("classify")[0].children[0];
// 管理员登录模块
var admin_form = document.getElementsByClassName("login_form_admin")[0];
// 用户登录模块
var custom_form = document.getElementsByClassName("login_form_custom")[0];
//以下是俩个不同的登录按钮
var customLoginbtn = document.getElementById("customLogin");
var adminLoginbtn = document.getElementById("adminLogin");
//以下是用户登录输入的帐号和密码框以及提示框
var phoneCustom = document.getElementsByClassName("login_item_input")[0];
var upwdCustom = document.getElementsByClassName("login_item_input")[1];
var errCustom = document.getElementsByClassName("login_item")[2];
//以下是管理员登录输入的帐号和密码框以及提示框
var accountAdmin = document.getElementsByClassName("login_item_input")[2];
var upwdAdmin = document.getElementsByClassName("login_item_input")[3];
var errAdmin = document.getElementsByClassName("login_item")[6];
//查找到注册帐户按钮
var regAccount = document.getElementsByClassName("login_text")[0].children[0];
//当点击用户登录时出现的效果
custom.addEventListener("click",function(){
    errCustom.innerHTML = "";
    custom_form.style.display="block";
    admin_form.style.display="none";
    admin.style.background = "#fff";
    custom.style.background = "green";
},false);


//当点击管理员登录时出现的效果
admin.addEventListener("click",function(){
    errAdmin.innerHTML = "";
    custom_form.style.display="none";
    admin_form.style.display="block";
    custom.style.background = "#fff";
    admin.style.background = "green";
},false);


//点击登录按钮，登录到用户浏览界面
customLoginbtn.addEventListener("click",function(){
    ajaxJSON({
        type: "post",
        url: 'http://127.0.0.1:3000/login/myLogin',
        data: {phone:phoneCustom.value,upwd:upwdCustom.value},
        success: function (response) {
            //console.log(response.split("&")[0],"我市放回的数据");
            window.sessionStorage.setItem("uid",response.split("&")[1]);
            if(response.split("&")[0] == "1"){
                customLoginbtn.innerHTML="登录成功,页面即将跳转";
                errCustom = "";
                setTimeout(function(){
                    window.location.href = "http://127.0.0.1:3000/index.html?flag=true";
                },1500);
            }
            if(response.split("&")[0] == "0"){
                errCustom = "帐号或密码错误,请重新输入";
                phoneCustom.value = "";
                upwdCustom.value = "";
            } 
            if(response.split("&")[0] == "3"){
                errCustom.innerHTML = "帐号不能为空";
            } 
            if(response.split("&")[0] == "4"){
                errCustom.innerHTML = "密码不能为空";
            } 
            if(response.split("&")[0] == "5"){
                errCustom.innerHTML = "帐号和密码不能为空";
            }          
        }
    });
},false);


//点击登录按钮，登录到管理员帐户界面
adminLoginbtn.addEventListener("click",function(){
    ajaxJSON({
        type: "post",
        url: 'http://127.0.0.1:3000/login/myAdminLogin',
        data: {account:accountAdmin.value,upwd:upwdAdmin.value},
        success: function (response) {
            var texts = document.getElementsByClassName("login_item");
            var inputs = document.getElementsByClassName("login_item_input");
            if(response == "1"){
                adminLoginbtn.innerHTML="登录成功,页面即将跳转";
                errAdmin.innerHTML = "";
                setTimeout(function(){
                    window.location.href = "http://127.0.0.1:3000/admin_js/admin.html";
                },1500);
            }
            if(response == "0"){
                errAdmin.innerHTML = "帐号或密码错误,请重新输入";
                accountAdmin.value = "";
                upwdAdmin.value = "";
            } 
            if(response == "3"){
                errAdmin.innerHTML = "帐号不能为空";
            } 
            if(response == "4"){
                errAdmin.innerHTML = "密码不能为空";
            } 
            if(response == "5"){
                errAdmin.innerHTML = "帐号和密码不能为空";
            }          
        }
    });
},false);

//点击注册帐户弹出注册页面
regAccount.addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:3000/register.html"
})
