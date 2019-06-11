window.addEventListener("load",function(){
    //选中立即注册标签
    var regisetr = document.getElementsByClassName("login_item_btn")[0];
    regisetr.addEventListener("click",function(){
        //以下代码是获取注册帐号时候的信息
        var phone = document.getElementsByClassName("login_item_input")[0].value;
        var upwd = document.getElementsByClassName("login_item_input")[1].value;
        var reupwd = document.getElementsByClassName("login_item_input")[2].value;
        var　err = document.getElementsByClassName("login_item_text")[0];
        if(!phone){
            err.innerHTML = "手机号码不能为空"
        }else if(!upwd||!reupwd||upwd!=reupwd){
            err.innerHTML = "请确认密码无误"
        }else{
            ajaxJSON({
                type:'post',
                url:"http://127.0.0.1:3000/login/myRegister",
                data:{
                    phone:phone,
                    upwd:upwd
                },
                success:function(response){
                    if(response.affectedRows==1){
                        err.innerHTML = ""
                        regisetr.innerHTML = "注册成功"
                        setTimeout(() => {
                            window.location.href="http://127.0.0.1:3000/login.html"
                        },3000);
                    }else{
                        
                    }
                }
            });
        }
    });
});