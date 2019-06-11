define(["jquery","file_methods"],($,methods)=>{
    return function(){
        $(document).ready(function(){
            console.log("woshiwenzhang");
            var content = document.getElementById("content");
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
                    //点击搜索，调用search模块，通过关键字实现文章的搜索
                    $(".search_btn").on("click",function(){
                        var search_content = $("#search_text").val();
                        console.log(search_content,"点击了");
                        methods.search(search_content);
                    });
                }
            });
        });

        //点击修改，调用change模块，实现表格的修改
        $("#content").on("click",".changeArticle",function(){
            var firstTd = $(this).parent().parent().children().first();
            var lastTd = $(this).parent().parent().children().last();
            let aid = firstTd.html();
            let title = firstTd.next().html();
            let article_author = firstTd.next().next().html();
            let article_content = firstTd.next().next().next().html();
            let write_time = lastTd.prev().prev().html();
            let article_from = lastTd.prev().html();
            var arr = [aid,title,article_author,article_content,write_time,article_from];
            methods.change(arr);
            $(".bugger").css("display","block");
            $("#mid_form_file input:first").val(title);
            $("#mid_form_file input").eq(-3).val(article_author);
            $("#mid_form_file textarea").val(article_content);
            $("#mid_form_file input").eq(-2).val(write_time);
            $("#mid_form_file input:last").val(article_from);
        });

        //点击删除，调用delete模块，实现帐户的删除
        $("#content").on("click",".deleteArticle",function(){
            var aid = $(this).parent().parent().children().first().html();
            alert("确认要删除编号为"+aid+"的文章吗");
            methods.delete(aid);
        })
       
    }
});