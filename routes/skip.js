const express=require("express");
const router=express.Router();
const pool=require("../pool");
//index页面点击任意文章跳转到对应文章，对应文章从数据库读取数据，加载到article_content.html页面
router.post("/getArticle",(req,res)=>{
  var obj = req.body;
  var $aid = obj.aid;
  //console.log($aid,"nishizhuma");
  //var $name = obj.name;
  //console.log(obj,"hahhahahha");
  var sql="SELECT * FROM ls_article WHERE aid=?";
  pool.query(sql,[$aid],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})
//接口地址: http://127.0.0.1:3000/skip/getArticle

router.post("/getMyArticle",(req,res)=>{
  var obj = req.body;
  var $cid = obj.cid;
  var sql="SELECT * FROM ls_addarticle WHERE cid=?";
  pool.query(sql,[$cid],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})
//接口地址: http://127.0.0.1:3000/skip/getMyArticle

//点击＞＞＞标签，跳转到包含相应文章的more.html页面，more.html页面加载数据
router.get("/getMore",(req,res)=>{
  var obj = req.query;
  var $family_id = obj.family_id;
  sql = "SELECT * FROM ls_article WHERE family_id = ?";
  pool.query(sql,[$family_id],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});
//接口地址：http://127.0.0.1:3000/skip/getMore


//点击搜索标签，跳转到相应文章的search_content_404或者search_content页面
//search_content_404无需变化，search_content根据要求加载数据库中的数据
router.get("/getSearch",(req,res)=>{
  var obj = req.query;
  var $searchContent = obj.searchContent.slice(0,obj.searchContent.length-1);
  sql =' SELECT * FROM ls_article WHERE title LIKE "%'+ $searchContent +'%" OR article_content LIKE "%'+$searchContent+'%"';
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});
//接口地址：http://127.0.0.1:3000/skip/getSearch


module.exports=router;