define(["jquery"], function($) {
    return function(aid){
        $.ajax({
            type:"post",
            url:"http://127.0.0.1:3000/admin/deleteArticle",
            data:{
                aid:aid
            },
            dataType:"json",
            success:function(response){
                //nothing
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
    }
});