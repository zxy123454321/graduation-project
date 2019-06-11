const express=require("express")
const router=express.Router()
const pool=require("../pool")


//index.html页面从服务器端查找到数据并且加载
router.get("/getIndexArticles",(req,res)=>{
  var sql="SELECT * FROM ls_article";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    // res.writeHead(200,{
    //  "Content-Type":"application/json;charset=utf-8",
    //  "Access-Control-Allow-Origin":"*"
    // })
    res.send(result);
    //res.write(JSON.stringify(result));
  })
})

//接口地址: http://127.0.0.1:3000/index/getIndexArticles


//1.html页面从服务器端查找到第一层的数据并且加载到页面
router.get("/getNavArticles",(req,res)=>{
  var obj = req.query;
  var $family_id = obj.family_id.toString().slice(0,obj.family_id.length-1);
  var $nav_id = $family_id+0;
  var sql = "SELECT * FROM ls_article WHERE nav_id = ?"
  pool.query(sql,[$nav_id],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});


//加载1.html页面的分类列内容
router.get("/getNavTitles",(req,res)=>{ 
  var obj = req.query;
  var $family_id = obj.family_id.toString().slice(0,obj.family_id.length-1);
  var sql = "SELECT * FROM ls_nav WHERE family_id = ?"
  pool.query(sql,[$family_id],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});


//加载1.html页面，点击左边栏，右边返回相关内容
router.get("/getNavRightContent",(req,res)=>{
  var obj = req.query;
  var $nav_id = obj.nav_id;
  var sql = "SELECT * FROM ls_article WHERE nav_id=?";
  pool.query(sql,[$nav_id],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});


//account.html页面从ls_article获取有收藏标记的文章,有赞标记的文章,当前用户的评论文章的相关标题
router.get("/getInfomation",(req,res)=>{
  var obj = req.query;
  var $aid = obj.aid;
  var sql = "SELECT * FROM ls_article WHERE aid = ?";
  pool.query(sql,[$aid],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
});



module.exports=router;