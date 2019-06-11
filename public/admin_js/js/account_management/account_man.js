define(['jquery','account_methods'],($,methods)=>{
    return function(){
        $(document).ready(function(){
            var content = document.getElementById("content");
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
        });
        //点击修改，调用change模块，实现表格的修改
        $("#content").on("click",".changeAccount",function(){
            var firstTd = $(this).parent().parent().children().first();
            var lastTd = $(this).parent().parent().children().last();
            let nickname = firstTd.html();
            let phone = firstTd.next().html();
            let upwd = firstTd.next().next().html();
            let email = firstTd.next().next().next().html();
            let gender = firstTd.next().next().next().next().html();
            let user_name = firstTd.next().next().next().next().next().html();
            let uid = lastTd.prev().prev().prev().html();
            let place = lastTd.prev().prev().html();
            let vocation = lastTd.prev().html();
            var arr = [nickname,phone,upwd,email,gender,user_name,uid,place,vocation];
            methods.change(arr);
            $(".bugger").css("display","block");
            var firstInput =  $("#mid_form").children().first().next();
            var lastInput = $("#mid_form").children().last().prev();
            firstInput.children().first().val(nickname);
            firstInput.next().children().first().val(phone);
            firstInput.next().next().children().first().val(upwd);
            firstInput.next().next().next().children().first().val(email);
            firstInput.next().next().next().next().children().first().val(gender);
            lastInput.children().first().val(vocation);
            lastInput.prev().children().first().val(place);
            lastInput.prev().prev().children().first().val(uid);
            lastInput.prev().prev().prev().children().first().val(user_name);
        });

        //点击删除，调用delete模块，实现帐户的删除
        $("#content").on("click",".deleteAccount",function(){
            alert("确认要删除帐号吗");
            var uid = $(this).parent().parent().children().last().prev().prev().prev().html();
            methods.delete(uid);
        })
        //点击添加，调用add模块，实现帐户的添加
        $("#content").on("click","#addAccount",function(){
            methods.add();
        });
    }
});