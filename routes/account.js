//这是我的帐户的中的所有接口
const express=require("express")
const router=express.Router()
const pool=require("../pool")

//在aticle_content部分点击收藏，收藏成功变色
router.post("/getCollect",(req,res)=>{
  var obj = req.body;
  var $aid = obj.aid;
  var $uid = obj.uid;
  var sql = "INSERT INTO ls_collect VALUES(null,?,null,?)";
  pool.query(sql,[$aid,$uid],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});
//接口地址: http://127.0.0.1:3000/account/getCollect
//在article_content部分加载时，查找本文章是否收藏
router.get("/searchCollect",(req,res)=>{
    var obj = req.query;
    var $aid = obj.aid;
    var $uid = obj.uid;
    var sql = "SELECT * FROM ls_collect WHERE aid=? AND uid=?";
    pool.query(sql,[$aid,$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});

//在aticle_content部分点击收藏，收藏取消，取消颜色
router.post("/deleteCollect",(req,res)=>{
    var obj = req.body;
    var $aid = obj.aid;
    var $uid = obj.uid;

    console.log($uid,"232323323");
    var sql = " DELETE FROM ls_collect WHERE aid = ? AND uid = ?";
    pool.query(sql,[$aid,$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});
//接口地址:http://127.0.0.1:3000/account/deleteCollect


//在aticle_content部分点击赞，赞成功变色
router.post("/getZan",(req,res)=>{
    var obj = req.body;
    var $aid = obj.aid;
    var $uid = obj.uid;
    var sql = "INSERT INTO ls_zan VALUES(null,?,null,?)";
    pool.query(sql,[$aid,$uid],(err,result)=>{
      if(err) console.log(err);
      res.send(result);
    });
});
  //接口地址: http://127.0.0.1:3000/account/getZan
  //在article_content部分加载时，查找本文章是否收藏
router.get("/searchZan",(req,res)=>{
    var obj = req.query;
    var $aid = obj.aid;
    var $uid = obj.uid;
    var sql = "SELECT * FROM ls_zan WHERE aid=? AND uid=?";
    pool.query(sql,[$aid,$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});
  
//在aticle_content部分点击赞，赞取消，取消颜色
router.post("/deleteZan",(req,res)=>{
    var obj = req.body;
    var $aid = obj.aid;
    var $uid = obj.uid;
    var sql = " DELETE FROM ls_zan WHERE aid = ? AND uid = ?";
    pool.query(sql,[$aid,$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});
  //接口地址:http://127.0.0.1:3000/account/deleteZan


  //在我的帐户中获取个人资料
router.get("/getInfomation",(req,res)=>{
    var obj = req.query;
    var $uid = obj.uid.slice(0,1);
    var sql = "SELECT * FROM ls_user WHERE uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});
// 接口地址:http://127.0.0.1:3000/account/getInfomation


//将写的文章发送到数据库当中保存
router.post("/sendMyArticle",(req,res)=>{
    var obj = req.body;
    var $art_title = obj.art_title;
    var $art_content = obj.art_content;
    var $uid = obj.uid;
    var $user_name = obj.user_name;
    var sql = "INSERT INTO ls_addarticle (uid,title,article_content,user_name) VALUES (?,?,?,?)";
    pool.query(sql,[$uid,$art_title,$art_content,$user_name],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});


//将自己写的文章读取到account页面
router.get("/getAllMyArticles",(req,res)=>{
    var obj = req.query;
    $uid = obj.uid.slice(0,1);
    var sql = "SELECT * FROM ls_addarticle WHERE uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});
//account.html页面获取当前用户的收藏文章
router.get("/getAllCollect",(req,res)=>{
    var obj = req.query;
    var $uid = obj.uid.slice(0,1);
    var sql = "SELECT * FROM ls_collect WHERE uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});

//account.html页面获取当前用户的赞文章
router.get("/getAllZan",(req,res)=>{
    var obj = req.query;
    var $uid = obj.uid.slice(0,1);
    var sql = "SELECT * FROM ls_zan WHERE uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});


//account.html页面获取当前用户的评论文章
router.get("/getAllComment",(req,res)=>{
    var obj = req.query;
    var $uid = obj.uid.slice(0,1);
    var sql = "SELECT * FROM ls_comment WHERE uid=? group by aid";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});

//account.html页面获取当前用户的评论文章的所有评论
router.get("/getAllCommentItem",(req,res)=>{
    var obj = req.query;
    var $aid = obj.aid.slice(0,5);
    var $uid = obj.uid.slice(0,1);
    console.log($aid,"tamade");
    var sql = "SELECT article_comment FROM ls_comment WHERE aid=? AND uid=?";
    pool.query(sql,[$aid,$uid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});

//从account.html页删除当前用户的某一条评论
router.post("/deleteComment",(req,res)=>{
    var obj = req.body;
    var $aid = obj.aid;
    var $uid = obj.uid;
    var $article_comment = obj.article_comment;
    var sql = " DELETE FROM ls_comment WHERE aid = ? AND uid = ? AND article_comment = ?";
    pool.query(sql,[$aid,$uid,$article_comment],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
});
  //接口地址:http://127.0.0.1:3000/account/deleteComment


//从account.html页面修改一个用户的信息
router.post("/changeInfo",(req,res)=>{
    var obj = req.body;
    var $uid = obj.uid;
    var $nickname = obj.nickname;
    var $user_name = obj.user_name;
    var $gender = obj.gender;
    var $birthday = obj.birthday;
    var $place = obj.place;
    var $vocation = obj.vocation;
    console.log($uid,"hello");
    var sql = "UPDATE ls_user SET nickname=?,user_name=?,gender=?,birthday=?,place=?,vocation=? WHERE uid=? ";
    pool.query(sql,[$nickname,$user_name,$gender,$birthday,$place,$vocation,$uid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})

//从数据库中查找当前用户的信息
router.get("/searchInfo",(req,res)=>{
    var obj = req.query;
    var $uid = obj.uid;
    var sql = "SELECT * FROM ls_user WHERE uid = ?"
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
module.exports=router;