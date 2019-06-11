
const express=require("express")
const router=express.Router()
const pool=require("../pool")


router.post("/getSearchContent",(req,res)=>{
    console.log(req.body);
    var $inputValue = req.body.inputValue;
    //console.log($inputValue);
    var sql = " SELECT * FROM ls_article ";
    //以下sql语句http://www.cnblogs.com/li--xin/p/6135283.html。借鉴网上的写法，具体还不是很懂
    sql += " where title like '%"+$inputValue+"%'";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //console.log(result,"result");
    res.send(result);
  });
});

//接口地址: http://127.0.0.1:3000/search/getSearchContent
module.exports=router;