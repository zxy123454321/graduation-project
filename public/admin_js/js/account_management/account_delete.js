define(["jquery"], function($) {
    return function(uid){
        $.ajax({
            type:"post",
            url:"http://127.0.0.1:3000/admin/deleteUser",
            data:{
                uid:uid
            },
            dataType:"json",
            success:function(response){
                //nothing
            }
        });

        //重新加载页面
        $.ajax({
            type:"GET",
            url:"http://127.0.0.1:3000/admin/getAllUsers",
            data:{},
            dataType:"json",
            success:function(data){
                //重新加载页面
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
                            // console.log(item);
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
    }
});