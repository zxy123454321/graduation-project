define(["jquery"], function($) {
    return function(arr){
        let html = `
            <div id="mid_form_file">
            <h1>请添加信息</h1>
            <div>文章标题：</div>
            <input type="text"name="" id="">
            <div>文章作者:</div>
            <input type="text">
            <div>文章内容：</div>
            <textarea name="" id="text" cols="45" rows="12"></textarea>
            <div>发表日期：</div>
            <input type="text">
            <div>文章来源：</div>
            <input type="text">
            <button id="aditSubmit" type="submit">提交</button>
            </div>
        `;
        $(".bugger").html(html);

        $("#aditSubmit").on("click",function(e){
            e.preventDefault();
            var firstTd = $(this).parent().parent().children().first();
            var lastTd = $(this).parent().parent().children().last();
            let aid = arr[0];
            let title = $("#mid_form_file input:first").val();
            let article_author = $("#mid_form_file input").eq(-3).val();
            let article_content = $("#mid_form_file textarea").val();
            let write_time = $("#mid_form_file input").eq(-2).val();
            let article_from = $("#mid_form_file input:last").val();
            $(".bugger").css("display","none");
            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:3000/admin/changeArticle",
                data:{
                    aid:aid,
                    title:title,
                    article_author:article_author,
                    article_content:article_content,
                    write_time:write_time,
                    article_from:article_from
                },
                dataType:"json",
                success:function(response){
                    console.log(response);
                }
            });

            //重新加载页面
            $.ajax({
                type:"GET",
                url:"http://127.0.0.1:3000/admin/getAllArticles",
                data:{},
                dataType:"json",
                success:function(data){
                    let html =`
                        <div class="search">
                            <label for="search_text">相关文章搜索</label>
                            <input type="text" id="search_text">
                            <div class="search_btn">搜索</div>
                            <button class="add_btn">添加文章</button>
                        </div>
                        <table border="1" style="border-collapse:collapse;table-layout:fixed;width:100%;">
                            <tr class="border_head">
                                <td>文章编号</td>
                                <td>文章标题</td>
                                <td>文章作者</td>
                                <td>文章内容</td>
                                <td>发表日期</td>
                                <td>文章来源</td>
                                <td>执行操作</td>
                            </tr>
                            ${data.map(item=>{
                                return `
                                <tr>
                                    <td>${item.aid}</td>
                                    <td>${item.title}</td>
                                    <td>${item.article_author}</td>
                                    <td id="content_item">${item.article_content}</td>
                                    <td>${item.write_time}</td>
                                    <td>${item.article_from}</td>
                                    <td style="text-align:center;">
                                            <button class="changeArticle">修改</button>
                                            <button class="deleteArticle">删除</button>
                                    </td>
                                </tr>
                                `
                            }).join("")}
                        </table>
                        `;
                    content.innerHTML =html;
                     //点击添加，调用add模块，实现帐户的添加
                    $(".add_btn").on("click",function(){
                        console.log("addd");
                        methods.add();
                    });
                }
            });
        });
    }
});