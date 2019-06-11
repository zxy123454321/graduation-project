const express=require("express")
const router=express.Router()
const pool=require("../pool")
//评论内容写入数据库
router.post("/myComment",(req,res)=>{
  var obj = req.body;
  $aid = obj.aid;
  $comment = obj.comment;
  $uid = obj.uid;
  $user_name = obj.user_name;
  var sql="INSERT INTO ls_comment VALUE(null,?,?,?,?)";
  pool.query(sql,[$aid,$comment,$uid,$user_name],(err,result)=>{
    if(err) console.log(err);
    //console.log("写入数据成功");
    res.send(result);
  })
})
//接口地址: http://127.0.0.1:3000/comment/myComment



//评论区域内容显示在页面
router.get("/showComment",(req,res)=>{
    var obj = req.query;
    var $cid = obj.cid;
    var sql="SELECT * FROM ls_comment WHERE cid=?"
    pool.query(sql,[$cid],(err,result)=>{
        if(err) console.log(err);
        //console.log("读取数据成功");
        res.send(result);
    })
})
//接口地址: http://127.0.0.1:3000/comment/showComment


//评论内容在页面加载时显示在页面
router.get("/getComment",(req,res)=>{
    var obj = req.query;
    var $aid = obj.aid;
    var sql = "SELECT * FROM ls_comment WHERE aid = ? order by cid desc";
    pool.query(sql,[$aid],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
})

//获取每个用户每篇文章的单独留言

module.exports=router;
//接口地址：http://127.0.0.1:3000/comment/getComment