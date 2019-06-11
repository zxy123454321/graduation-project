const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/getAllUsers",(req,res)=>{
    var sql="SELECT * FROM ls_user"
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //console.log("读取数据成功");
        res.send(result);
    })
})
//接口地址: http://127.0.0.1:3000/admin/getAllUser

router.get("/getAllArticles",(req,res)=>{
    var sql="SELECT * FROM ls_article";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
});
//接口地址:http://127.0.0.1:3000/admin/getAllArticles

router.post("/changeUser",(req,res)=>{
    var obj = req.body;
    var $nickname = obj.nickname;
    var $phone = obj.phone;
    var $upwd = obj.upwd;
    var $email = obj.email;
    var $gender = obj.gender;
    var $user_name = obj.user_name;
    var $uid = obj.uid;
    var $place = obj.place;
    var $vocation = obj.vocation;
    var sql = "UPDATE ls_user SET nickname= ?,phone = ?,upwd=?,email=?,gender = ?,user_name = ?,place = ?,vocation = ? WHERE uid = ? "
    pool.query(sql,[$nickname,$phone,$upwd,$email,$gender,$user_name,$place,$vocation,$uid],(err,result)=>{
        if(err) console.log(err);
        res.send();
    });
})
//接口地址: http://127.0.0.1:3000/admin/changeUser

router.post("/changeArticle",(req,res)=>{
    var obj = req.body;
    var $aid = obj.aid;
    var $title = obj.title;
    var $article_author = obj.article_author;
    var $article_content = obj.article_content;
    var $write_time = obj.write_time;
    var $article_from = obj.article_from;
    var sql = "UPDATE ls_article SET title = ?,article_author = ?,article_content = ?,write_time = ?,article_from = ? WHERE aid = ? "
    pool.query(sql,[$title,$article_author,$article_content,$write_time,$article_from,$aid],(err,result)=>{
        if(err) console.log(err);
        res.send("修改成功");
    });
});
//接口地址：http://127.0.0.1:3000/admin/changeArticle

router.post("/deleteUser",(req,res)=>{
    var obj = req.body;
    $uid = obj.uid;
    var sql = "DELETE FROM ls_user WHERE uid = ?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) console.log(err);
        res.send();
    });
});
//接口地址: http://127.0.0.1:3000/admin/deleteUser

router.post("/deleteArticle",(req,res)=>{
    var obj = req.body;
    $aid = obj.aid;
    var sql = "DELETE FROM ls_article WHERE aid = ?"
    pool.query(sql,[$aid],(err,result)=>{
        if(err) console.log(err);
        res.send();
    });
});

router.post("/addUser",(req,res)=>{
    var obj = req.body;
    var $nickname = obj.nickname;
    var $phone = obj.phone;
    var $upwd = obj.upwd;
    var $email = obj.email;
    var $gender = obj.gender;
    var $user_name = obj.user_name;
    var $uid = obj.uid;
    var $place = obj.place;
    var $vocation = obj.vocation;
    var sql = "INSERT INTO ls_user(uname,upwd,email,phone,avatar,user_name,gender,birthday,place,nickname,vocation)";
    sql += " VALUES(null,?,?,?,null,?,?,1997,?,?,?)"
    pool.query(sql,[$upwd,$email,$phone,$user_name,$gender,$place,$nickname,$vocation],(err,result)=>{
        if(err) console.log(err);
        res.send();
    });
});
//接口地址：http://127.0.0.1:3000/admin/addUser

router.post("/addArticle",(req,res)=>{
    var obj = req.body;
    var $title = obj.title;
    var $article_author = obj.article_author;
    var $article_content = obj.article_content;
    var $write_time = obj.write_time;
    var $article_from = obj.article_from;
    var sql = "INSERT INTO ls_article(aid,family_id,title,article_content,write_time,article_from,article_author,module_name,article_views_count)";
    sql += " VALUES(null,null,?,?,?,?,?,null,null)";
    pool.query(sql,[$title,$article_content,$write_time,$article_from,$article_author],(err,result)=>{
        if(err) console.log(err);
        res.send();
    });
});

router.get("/searchArticle",(req,res)=>{
    var obj = req.query;
    $search_content = obj.search_content;
    var sql = " SELECT * FROM ls_article ";
    //以下sql语句http://www.cnblogs.com/li--xin/p/6135283.html。借鉴网上的写法，具体还不是很懂
    sql += " where title like '%"+$search_content+"%'";
    // sql += " OR article_content like '%"+$search_content+"'";
    pool.query(sql,(err,result)=>{
        console.log("success");
        console.log(result.length);
        if(err) console.log(err);
        res.send(result);
    });

});

//获取文章的阅读数
router.get("/getArticleViews",(req,res)=>{
    var obj = req.query;
    var $aid = obj.aid;
    console.log($aid,"88888888");
    var sql = "SELECT article_views_count FROM ls_article WHERE aid = ?";
    pool.query(sql,[$aid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
//修改文章的阅读数
router.post("/updateArticleViews",(req,res)=>{
    var obj = req.body;
    var $aid = obj.aid;
    var $nums = obj.article_views_count;
    $nums++;
    console.log($nums,"heheheheh");
    var sql = "UPDATE ls_article SET article_views_count = ? WHERE aid = ?"
    pool.query(sql,[$nums,$aid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
    
});

//获取浏览数目前六的文章
router.get("/getHeadArticles",(req,res)=>{
    var sql = "SELECT * FROM ls_article LIMIT 6";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

module.exports=router;
