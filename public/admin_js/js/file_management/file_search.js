define(["jquery"], function($) {
    return function(search_content){
        console.log(search_content,"我市search");
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:3000/admin/searchArticle?search_content="+search_content,
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
                $("#content").html(html);
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
    }   
});