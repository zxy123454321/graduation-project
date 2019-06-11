define(["jquery"], function($) {
    // console.log("i am add");
    return function(){
        let html = `
        <div id="mid_form">
            <h1>请添加信息</h1>
            <div>昵&nbsp;&nbsp;称：<input type="text"name="" id=""></div>
            <div>手机号码：<input type="text"></div>
            <div>密&nbsp;&nbsp;码：<input type="text"></div>
            <div>邮&nbsp;&nbsp;箱：<input type="text"></div>
            <div>性&nbsp;&nbsp;别：<input type="text"></div>
            <div>真实姓名：<input type="text"></div>
            <div>出生日期：<input type="text"></div>
            <div>所在&nbsp;地：<input type="text"></div>
            <div>所处行业：<input type="text"></div>
            <button id="aditSubmit" type="submit">提交</button>
        </div>
        `;

        $(".bugger").html(html);
        $(".bugger").css("display","block");

        $("#aditSubmit").on("click",function(e){
            e.preventDefault();
            //console.log("woshi button");
            let firstInput = $("#mid_form").children().first().next();
            let lastInput = $("#mid_form").children().last().prev();
            let nickname = firstInput.children().first().val();
            let phone = firstInput.next().children().first().val();
            let upwd = firstInput.next().next().children().first().val();
            let email = firstInput.next().next().next().children().first().val();
            let gender = lastInput.prev().prev().prev().prev().children().first().val();
            let user_name = lastInput.prev().prev().prev().children().first().val();
            let uid = lastInput.prev().prev().children().first().val();
            let place = lastInput.prev().children().first().val();
            let vocation = lastInput.children().first().val();
            $(".bugger").css("display","none");
            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:3000/admin/addUser",
                data:{
                    nickname:nickname,
                    phone:phone,
                    upwd:upwd,
                    email:email,
                    gender:gender,
                    user_name:user_name,
                    uid:uid,
                    place:place,
                    vocation:vocation
                },
                dataType:"json",
                success:function(response){
                    console.log(response);
                }
            });

            //重新加载页面
            $.ajax({
                type:"GET",
                url:"http://127.0.0.1:3000/admin/getAllUsers",
                data:{},
                dataType:"json",
                success:function(data){
                    //console.log(data.length,"woshidamowang");
                    let html =`
                        <div id="allAccount">所有用户帐户</div>
                        <table border="1" style="border-collapse:collapse;table-layout:fixed;width:100%;">
                            <tr class="border_head">
                                <td>昵称</td>
                                <td>手机号码</td>
                                <td>密码</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>真实姓名</td>
                                <td>编号</td>
                                <td>所在地</td>
                                <td>所处行业</td>
                                <td>执行操作</td>
                            </tr>
                            ${data.map(item=>{
                                console.log(item);
                                return `
                                <tr style="text-align:center;">
                                    <td>${item.nickname}</td>
                                    <td>${item.phone}</td>
                                    <td>${item.upwd}</td>
                                    <td>${item.email}</td>
                                    <td>${item.gender}</td>
                                    <td>${item.user_name}</td>
                                    <td>${item.uid}</td>
                                    <td>${item.place}</td>
                                    <td>${item.vocation}</td>
                                    <td>
                                        <button class="changeAccount">修改</button>
                                        <button class="deleteAccount">删除</button>
                                    </td>
                                </tr>
                                `
                            }).join("")}
                        </table>
                        <div id="addAccount">添加帐户</div>
                    `;
                    content.innerHTML =html;
                }
            });
        });
    }
});